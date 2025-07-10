import pt from "./locales/pt";
import en from "./locales/en";
import es from "./locales/es";

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    pt,
    en,
    es
  }
}));
