import { Ref, inject, ref, toRaw } from "vue";
import { IS2Provider, S2ProviderKey } from "../libs";

export function useS2<
  Response extends Record<string, any>,
  Params extends any[] = []
>(
  query: (...args: Params) => (kepler: IS2Provider) => Promise<Response>
): {
  loading: Ref<boolean>;
  error: Ref<false | string>;
  data: Ref<Response | undefined>;
  execute: (...args: Params) => Promise<Response | undefined>;
  reset: () => void;
} {
  const s2 = inject(S2ProviderKey);
  const loading = ref(false);
  const error = ref<false | string>(false);
  const data = ref<Response>();

  async function execute(...args: any[]): Promise<Response | undefined> {
    reset();

    try {
      loading.value = true;
      data.value = await query(...(args as Params))(s2!);
    } catch (e) {
      const errorCode = (e as { status?: number }).status || 500;

      switch (errorCode) {
        case 401:
          error.value = "You don't have access to view this resource.";
          break;
        case 403:
          error.value = "You don't have access to view this resource.";
          break;
        default:
          error.value = "An error occurred. Please refresh the page.";
      }
    } finally {
      loading.value = false;

      return toRaw(data.value);
    }
  }

  function reset() {
    error.value = false;
    loading.value = false;
    data.value = undefined;
  }

  return {
    loading,
    error,
    data,
    execute,
    reset,
  };
}
