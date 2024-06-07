// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  modules: ["nuxt-gtag"],
  gtag: {
    id: 'G-MF4V58C2KM'
  },
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    baseURL: "/",
    head:{
      title: "Índice de Dados Abertos para Cidades ODI 2023",
      meta: [
        {
          name: "description",
          content:
            "Uma avaliação sobre a disponibilidade e a qualidades dos dados abertos nas capitais brasileiras a partir de uma perspectiva cívica.",
        },
        {
          property: "og:image",
          content: "/assets/images/share-img.png",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "favicon.ico"
        },
      ],
    }
  },
  nitro: {
    output: {
      publicDir: "~/build",
    },
  },
  plugins: ["~/plugins/splide.js"],
});