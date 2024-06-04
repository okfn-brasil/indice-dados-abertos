// plugins/splide.js
import { defineNuxtPlugin } from "#app";
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default defineNuxtPlugin((nuxtApp) => {
  // Registre o componente globalmente
  nuxtApp.vueApp.component("VueSplide", VueSplide);

  // Adicione o Splide ao contexto Vue
  return {
    provide: {
      splide: VueSplide,
    },
  };
});
