// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  app:{
    head:{
      script: [{src:"/vlibras.js"}]
    },
  },
  devtools: { enabled: true },
  // // ssr: true,
  // routeRules: {
  //   "/": { prerender: true },
  // },
  build: {
    transpile: ["vuetify"],
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_API_URL,
      frontBase: process.env.NUXT_FRONTEND_URL,
    },
  },

  modules: [
    "@pinia/nuxt",
    "@nuxt/test-utils/module",
    "nuxt-icons",
    "@nuxt/icon",
    "vue3-carousel-nuxt",
    "@nuxtjs/i18n",
    "@zadigetvoltaire/nuxt-gtm",
    "nuxt-meta-pixel",
    async (options, nuxt) => {
      // @ts-expect-error
      nuxt.hooks.hook("vite:extendConfig", config => config.plugins.push(
        vuetify()
      ));
    },
  ],

  metapixel: {
    default: {
      id: 'UNDEFINED'
    },
  },

  gtm: {
    id: 'GTM-UNDEFINED',
    defer: false,
    compatibility: false,
    enabled: true,
    debug: false,
    loadScript: true,
    enableRouterSync: true,
    trackOnNextTick: false,
  },

  pinia: {
    storesDirs: ["./stores/**"],
  },

  css: ["~/assets/css/main.css"],

  components: [
    { path: "~/assets/icons" },
    "~/components"
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  i18n: {
    locales: ["pt", "en", "es"],
    strategy: "no_prefix",
    defaultLocale: "pt", // default locale fallback
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected", // change to application name and a suffix
    },
    vueI18n: "./i18n.config.ts",
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  compatibilityDate: "2024-07-23",
});