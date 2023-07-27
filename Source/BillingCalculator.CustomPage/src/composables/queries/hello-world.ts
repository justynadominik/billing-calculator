import { IS2Provider } from "../../libs";
import { API_PATHS } from "../../misc";

export function helloWorld() {
  return async (service: IS2Provider): Promise<{ message: string }> => {
    const data = await service!.get<string>(API_PATHS.HELLO_WORLD);

    return { message: data };
  };
}
