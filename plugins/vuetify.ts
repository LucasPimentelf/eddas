import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    display: {
      thresholds: {
        lg: 1026
      }
    }
  });
  app.vueApp.use(vuetify);
});