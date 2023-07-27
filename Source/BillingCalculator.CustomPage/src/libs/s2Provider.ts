import { InjectionKey } from "vue";

export const S2ProviderKey = Symbol() as InjectionKey<IS2Provider>;

export interface IS2Provider {
  get<T>(url: string): Promise<T>;
  post<T, K>(url: string, data: K): Promise<T>;
}

export class S2Provider implements IS2Provider {
  private readonly defaultHeaders: Headers = new Headers();

  constructor(private readonly baseUrl: string) {
    this.defaultHeaders.append("Access-Control-Allow-Origin", "*");
  }

  public get<T>(url: string): Promise<T> {
    return fetch(this.baseUrl + url, {
      method: "GET",
      headers: this.defaultHeaders,
    }).then((r) => r.json() as T);
  }

  public post<T, K>(url: string, payload: K): Promise<T> {
    return fetch(this.baseUrl + url, {
      method: "POST",
      headers: this.defaultHeaders,
      body: JSON.stringify(payload),
    }).then((r) => r.json() as T);
  }
}
