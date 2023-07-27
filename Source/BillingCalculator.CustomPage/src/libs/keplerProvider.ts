import { InjectionKey } from "vue";
import { KeplerProxy, RequestOptions, callRPC } from "keplerjs";

export const KeplerProviderKey = Symbol() as InjectionKey<IKeplerProvider>;

export interface IKeplerProvider {
  get<T>(url: string): Promise<T>;
  post<T, K>(url: string, data: K, options?: RequestOptions): Promise<T>;
}

export class KeplerProvider implements IKeplerProvider {
  private readonly _proxy: KeplerProxy;
  private readonly _api: typeof callRPC;

  constructor(
    baseUrl: string,
    Proxy: typeof KeplerProxy = KeplerProxy,
    api: typeof callRPC = callRPC
  ) {
    this._proxy = new Proxy(baseUrl);
    this._api = api;
  }

  public get<T>(url: string): T {
    return this._api<T>(this._proxy, url, "GET", {}, {});
  }

  public post<T, K>(url: string, data: K, options: RequestOptions = {}): T {
    return this._api<T>(this._proxy, url, "POST", data, options);
  }
}
