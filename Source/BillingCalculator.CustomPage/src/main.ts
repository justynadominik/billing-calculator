import { config } from "relativity-web-components";
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from './router';

import "./global.css";

const start = async () => {
  config.iconSource = (
    await import("relativity-web-components/dist/images/symbol-defs.svg")
  ).default;

  createApp(App)
    .use(createPinia())
    .mount("#app");
};

start();
