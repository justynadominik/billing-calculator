// https://git.kcura.com/projects/KEP/repos/keplerjs/browse/Source/src/kepler.js

declare module "keplerjs" {
  // This type has to remove original; Request.headers and replace it with regular object to satisfy KeplerJs
  export type RequestOptions = Partial<
    Omit<Request, "headers"> & {
      TrackingID: string;
      headers: Record<string, string>;
    }
  >;

  export class KeplerProxy {
    constructor(url: string) {}
  }

  export function callRPC<T>(
    client: KeplerProxy,
    path: string,
    method: Request["method"],
    data: any,
    requestOptions: RequestOptions
  ): T {}

  export function setHeaders(headers: Record<string, string>) {}
  export function resetHeaders() {}
}
