export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("focus", {
    // eslint-disable-next-line
    getSSRProps (binding, vnode) {
      // you can provide SSR-specific props here
      return {};
    }
  });
});