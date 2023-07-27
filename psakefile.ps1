FormatTaskName "------- Executing Task: {0} -------"

properties {
    $SourceDir = Join-Path $PSScriptRoot "source"
    $Solution = ((Get-ChildItem -Path $SourceDir -Filter *.sln -File)[0].FullName)
    $ArtifactsDir = Join-Path $PSScriptRoot "Artifacts"
    $LogsDir = Join-Path $ArtifactsDir "Logs"
    $LogFilePath = Join-Path $LogsDir "buildsummary.log"
    $ErrorLogFilePath = Join-Path $LogsDir "builderrors.log"
    $CustomPageDir = Join-Path $SourceDir "BillingCalculator.CustomPage"
    $CypressScreenshotDir = Join-Path $LogsDir "CypressScreenshot"
}

Task default -Depends Compile, Package -Description "Build and run unit tests. All the steps for a local build.";

Task NpmInstall -Description "Resolve client dependencies" -Depends SetNodePath, EnsureNpmrcConfig {
    Invoke-NpmCommand {
        npm @('install')
    } -workingDirectory $CustomPageDir
}

Task EnsureNpmrcConfig {
    if (($env:NPM_CONFIG_USERCONFIG) -and (Test-Path $env:NPM_CONFIG_USERCONFIG)) {
        # Trident build puts .npmrc file in Root
        Write-Verbose -Message "$env:NPM_CONFIG_USERCONFIG was found"
        if (-not (Join-Path $SourceDir .npmrc | Test-Path)) {
            Write-Verbose -Message "Copying $env:NPM_CONFIG_USERCONFIG to $SourceDir"
            Copy-Item -Path $env:NPM_CONFIG_USERCONFIG -Destination $SourceDir -Force
            Get-Content (Join-Path $SourceDir .npmrc)
        }
    }
    else {
        $homePath = Join-Path $env:HOMEDRIVE $env:HOMEPATH

        # Check for local development env
        if ( Join-Path $homePath .npmrc | Test-Path) {
            Write-Verbose -Message ".npmrc file found in $homePath"
        }
        elseif ( Join-Path $SourceDir .npmrc | Test-Path) { 
            Write-Verbose -Message ".npmrc file found in $SourceDir"
        }
        else {
            throw "The .npmrc file was not found in environment variable NPM_CONFIG_USERCONFIG - cannot copy to $SourceDir and .npmrc file was not found in $homePath"
        }
    }
}

Task SetNodePath -Description "Sets path to portable NodeJS and NPM" {
    $env:HUSKY_SKIP_INSTALL = 1
    $pathToNode = [System.IO.Path]::Combine($BuildToolsDir, 'Portable.NodeJS.*', 'tools', 'win-x64')
    $resolvedPathToNode = Resolve-Path "$pathToNode" | Select-Object -ExpandProperty Path
    if (-Not ($env:Path -like "*$resolvedPathToNode*")) {
        Write-Verbose -Message "Append PATH with $resolvedPathToNode"
        exec {
            $env:Path += ';' + $resolvedPathToNode
        }
    }
}

Task SetChromePath -Description "Sets path to portable Chromium" {
    $pathToPortableChrome = [System.IO.Path]::Combine($BuildToolsDir, 'Relativity.Chromium.Portable.*', 'tools', 'chrome.exe')
    $resolvedChromePath = Resolve-Path "$pathToPortableChrome" | Select-Object -ExpandProperty Path

    Write-Verbose -Message "Set unit test to use chrome $resolvedChromePath"

    $env:CHROME_BIN = $resolvedChromePath
}

Task BuildCustomPage -Description "Bundle front-end application" -Depends NpmInstall {
    Invoke-NpmCommand {
        npm @("run", "build")
    } -workingDirectory $CustomPageDir
}

Task NugetRestore -Description "Restore the packages needed for this build" {
    exec { & $NugetExe @('restore', $Solution) }
}

Task Compile -Depends NugetRestore, BuildCustomPage -Description "Compile code for this repo" {
    Initialize-Folder $ArtifactsDir -Safe
    Initialize-Folder $LogsDir -Safe

    $buildCommand = @($Solution,
        ("/property:Configuration=$BuildConfig"),
        ("/consoleloggerparameters:Summary"),
        ("/property:PublishWebProjects=True"),
        ("/nodeReuse:False"),
        ("/maxcpucount"),
        ("/nologo"),
        ("/fileloggerparameters1:LogFile=`"$LogFilePath`""),
        ("/fileloggerparameters2:errorsonly;LogFile=`"$ErrorLogFilePath`""))

    if ($RAPVersion) {
        $buildCommand += ("/property:RAPVersion=$RAPVersion")
    }

    exec { msbuild $buildCommand }
}

Task Sign -Description "Sign all files" {
    Get-ChildItem $SourceDir -recurse | Where-Object { $_.Directory.Name -eq "bin" -and @(".dll", ".msi", ".exe") -contains $_.Extension } | Select-Object -expand FullName | Set-DigitalSignature -ErrorAction Stop
}

Task Package -Description "Package up the build artifacts" {
    $buildTools = Join-Path $PSScriptRoot "buildtools"
    $developmentScripts = Join-Path $PSScriptRoot "DevelopmentScripts"
    $RAPBuilder = Join-Path $buildTools "Relativity.RAPBuilder\tools\Relativity.RAPBuilder.exe"
    $BuildXML = Join-Path $developmentScripts "build.xml"

    exec { & $NuGetEXE install "Relativity.RAPBuilder" "-ExcludeVersion" -o $buildTools }

    exec { & $RAPBuilder `
            "--source" "$PSScriptRoot" `
            "--input" "$BuildXML" `
            "--version" "$RAPVersion"
    }

    Get-ChildItem -Path $ArtifactsDir -Filter *.nuspec |
    ForEach-Object {
        exec { & $NugetExe pack $_.FullName -OutputDirectory (Join-Path $ArtifactsDir "NuGet") -Version $PackageVersion }
    }

    Save-PDBs -SourceDir $SourceDir -ArtifactsDir $ArtifactsDir
}

Task Clean -Description "Delete build artifacts" {
    Initialize-Folder $ArtifactsDir

    Write-Verbose "Running Clean target on $Solution"
    exec { msbuild @($Solution,
        ("/target:Clean"),
        ("/property:Configuration=$BuildConfig"),
        ("/consoleloggerparameters:Summary"),
        ("/nodeReuse:False"),
        ("/maxcpucount"),
        ("/nologo"))
    }
}

Task Rebuild -Description "Do a rebuild" {
    Initialize-Folder $ArtifactsDir

    Write-Verbose "Running Rebuild target on $Solution"
    exec { msbuild @($Solution,
        ("/target:Rebuild"),
        ("/property:Configuration=$BuildConfig"),
        ("/consoleloggerparameters:Summary"),
        ("/property:PublishWebProjects=True"),
        ("/nodeReuse:False"),
        ("/maxcpucount"),
        ("/nologo"),
        ("/fileloggerparameters1:LogFile=`"$LogFilePath`""),
        ("/fileloggerparameters2:errorsonly;LogFile=`"$ErrorLogFilePath`""))
    }
}

Task Help -Alias ? -Description "Display task information" {
    WriteDocumentation
}

function Invoke-Tests {
    param (
        [Parameter(Mandatory = $true, Position = 0)]
        [String] $WhereClause,
        [Parameter()]
        [String] $OutputFile,
        [Parameter()]
        [String] $TestSettings,
        [Parameter()]
        [Switch]$WithCoverage
    )

    $NUnit = Resolve-Path (Join-Path $BuildToolsDir "NUnit.ConsoleRunner.*\tools\nunit3-console.exe")
    $settings = if ($TestSettings) { "@$TestSettings" }
    Initialize-Folder $ArtifactsDir -Safe
    Initialize-Folder $LogsDir -Safe
    if ($WithCoverage) {
        $OpenCover = Join-Path $BuildToolsDir "opencover.*\tools\OpenCover.Console.exe"
        $ReportGenerator = Join-Path $BuildToolsDir "reportgenerator.*\tools\net47\ReportGenerator.exe"
        $CoveragePath = Join-Path $LogsDir "Coverage.xml"

        exec { & $OpenCover -target:$NUnit -targetargs:"$Solution --where=\`"$WhereClause\`" --noheader --labels=OnOutputOnly --skipnontestassemblies --result=$OutputFile $settings" -register:user -filter:"+[BillingCalculator*]* -[*Tests*]* -[*NUnit*]*" -hideskipped:All -output:"$LogsDir\OpenCover.xml" -returntargetcode }
        exec { & $ReportGenerator -reports:"$LogsDir\OpenCover.xml" -targetdir:$LogsDir -reporttypes:Cobertura }
        Move-Item (Join-Path $LogsDir Cobertura.xml) $CoveragePath -Force
    }
    else {
        exec { & $NUnit $Solution `
                "--where=`"$WhereClause`"" `
                "--noheader" `
                "--labels=OnOutputOnly" `
                "--skipnontestassemblies" `
                "--result=$OutputFile" `
                "--result=Artifacts\Logs\testexecutionparser.log;format=testexecutionparser" `
                $settings
        }
    }
}