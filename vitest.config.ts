import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  test: {
    clearMocks: true, // clear mock after each test
    setupFiles: "./vitest.setup.ts",
    globals: true, // autoimport globals like describe, it, beforeEach...
    environment: "nuxt", // setup nuxt as main env. To opt out on a specfic file // @vitest-environment node
    server: {
      deps: {
        inline: ["vuetify"],
      },
    },
  }
});