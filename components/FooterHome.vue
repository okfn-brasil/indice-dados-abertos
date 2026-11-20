<!-- Rodapé da nova home, seguindo o Figma: 4 colunas (Realização, Nossas redes, Design original, licenças). -->
<template>
  <footer class="bg-cinzaClaro pt-16 pb-16">
    <div class="container-fluid wrap md:flex">
      <div class="w-full md:w-3/12 mb-12 md:mb-0">
        <p class="font-necto t16 mb-2 uppercase">Realização</p>
        <img src="~/assets/images/logo-footer.svg" alt="Open Knowledge Brasil">
      </div>

      <div class="w-full md:w-3/12 mb-12 md:mb-0 pr-4">
        <p class="font-necto t16 mb-2 uppercase">Nossas redes</p>
        <div class="social flex">
          <a href="https://github.com/okfn-brasil" target="_blank" rel="noopener" class="mr-4" aria-label="GitHub"><img src="~/assets/images/icons/github.svg" alt="GitHub"></a>
          <a href="https://www.instagram.com/openknowledgebrasil/" target="_blank" rel="noopener" class="mr-4" aria-label="Instagram"><img src="~/assets/images/icons/instagram.svg" alt="Instagram"></a>
          <a href="https://www.linkedin.com/company/open-knowledge-brasil" target="_blank" rel="noopener" class="mr-4" aria-label="LinkedIn"><img src="~/assets/images/icons/linkedin.svg" alt="LinkedIn"></a>
          <a href="https://bsky.app/profile/ok.org.br" target="_blank" rel="noopener" class="mr-4" aria-label="Bluesky"><img src="~/assets/images/icons/bluesky.svg" alt="Bluesky"></a>
          <a href="https://mastodon.social/@okbr" target="_blank" rel="noopener" class="mr-4" aria-label="Mastodon"><img src="~/assets/images/icons/mastodon.svg" alt="Mastodon"></a>
        </div>
      </div>

      <div class="w-full md:w-2/12 mb-12 md:mb-0">
        <p class="font-necto t16 uppercase">Design original</p>
        <a href="https://cafe.art.br/" target="_blank" rel="noopener" class="t18 font-medium">Café.art.br</a>
      </div>

      <div class="w-full md:w-4/12">
        <div class="flex items-start mb-2">
          <img class="mr-1" src="~/assets/images/icons/code.svg" alt="">
          <p class="t13 font-light">Source code available under the MIT license.</p>
        </div>
        <div class="flex items-start">
          <img class="mr-1" src="~/assets/images/icons/creative-commons.svg" alt="">
          <p class="t13 font-light">Todo o conteúdo do site do Índice de Dados Abertos - ODI está disponível sob a licença <a href="https://creativecommons.org/licenses/by/4.0/deed.pt-br" class="underline">Creative Commons Atribuição 4.0 Internacional</a>, o que significa que pode ser compartilhado e reutilizado para trabalhos derivados, desde que citada a fonte.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
