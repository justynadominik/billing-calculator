import { config } from "relativity-web-components";
import { createApp } from "vue";
import App from "./App.vue";
import "./global.css";
import {
  KeplerProvider,
  KeplerProviderKey,
  S2ProviderKey,
  S2Provider,
} from "./libs";

const start = async () => {
  config.iconSource = (
    await import("relativity-web-components/dist/images/symbol-defs.svg")
  ).default;

  createApp(App)
    .provide(KeplerProviderKey, new KeplerProvider(""))
    .provide(
      S2ProviderKey,
      new S2Provider(
        "https://services.ctus.dev.k8s.r1.kcura.com/TBD-billing-service"
      )
    )
    .mount("#app");
};

start();
