function Invoke-NpmCommand {
	<#
		.SYNOPSIS
		Helper function for executing NodeJS' NPM commands.

		.DESCRIPTION
		This is a helper function that runs a scriptblock and redirects the Error stream (STDERR) to STDOUT.
		This is because NPM writes warnings to STDERR, even if it finishes successfully.
		If Powershell is forced to read the STDERR and ErrorActionPreference is
		set to Stop (as is in PSake by default), Powershell will throw an exception and stop the script.
		The PS variable $lastexitcode is used to see if a real error occcured during NPM execution.

		.PARAMETER cmd
		The scriptblock to execute. This scriptblock should contain NPM task invocation.

		.PARAMETER workingDirectory
		A directory where to run the command.

		.EXAMPLE
		exec { npm run build } -workingDirectory ./source

		This example calls the "npm run build" command in "./source" directory.
	#>
	[CmdletBinding()]
	param(
		[Parameter(Mandatory = $true)]
		[scriptblock]$cmd,
		[string]$workingDirectory = $null
	)

	if ($workingDirectory) {
		Push-Location -Path $workingDirectory
	}

	$tempGlobalErrorActionPreference = $global:ErrorActionPreference
	$global:ErrorActionPreference = "Continue"
	try {
		& $cmd 2>&1 | ForEach-Object {
			$obj = $_
			if ( $obj -is [System.Management.Automation.ErrorRecord] ) {
				$s = $obj.Exception.Message
			}
			else {
				$s = $obj.ToString()
			}
			Write-Output $s
		}
		if ($LASTEXITCODE -ne 0) {
			$errorMessage = ("Failed command " -f $cmd)
			throw $errorMessage
		}
	}
	finally {
		$global:ErrorActionPreference = $tempGlobalErrorActionPreference
		if ($workingDirectory) {
			Pop-Location
		}
	}
}