/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      sm: '768px',
      md: '992px',
      lg: '1024px',
      xl: '1200px',
    },
    colors: {
      cinza:"#BDBDBD",
      cinzaClaro: "#F1F1F1",
      cinzaEscuro: "#4B4B4B",
      roxo: "#596AD6",
      verde: "#00CFA3",
      verdeClaro: "#75D9BC",
      rosa: "#F77392",
      rosaClaro: "#F0ABB4",
      bege: "#EAE4D6",
      preto: "#000000",
      branco: "#fff",
      azul: "#E1F4FF",
    },
    fontFamily: {
      necto: ["'Necto', sans-serif"],
      hkgrotesk: ["'Hkgrotesk', sans-serif"],
    },
    fontSize: {
      '13': '',
      '16': '',
      '18': '',
      '24': '',
      '60': '',
      '70': '',
    },
    extend: {},
  },
  plugins: [],
};
