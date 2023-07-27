// NOT A COMPLETE DEFINITION
declare module "relativity-web-utilities" {
	namespace urls {
		export class HrefFactory {
			constructor(workspaceArtifactId: number);
			transformListUrlToRelativityInternal(url: string): string;
		}
	}
}
