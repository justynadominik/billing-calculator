/// <reference types="vitest" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("rwc"),
        },
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: "relativity-web-components",
        replacement:
          "relativity-web-components/dist/relativity-web-components.es.js",
      },
    ],
  },
});
