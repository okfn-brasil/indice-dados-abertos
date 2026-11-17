<!-- Seção "Participe!" da nova home. Reaproveita .participe (fundo degradê) e .btn-preto. -->
<script setup>
// Os três botões do Figma. Destinos provisórios ("#"): trocar pelas rotas/links definitivos.
const botoes = [
  { texto: 'Saiba como aplicar',              to: '/participe' },
  // (escondido até haver destino) { texto: 'Discuta os resultados',           to: '#' },  // TODO: destino
  // (escondido até haver destino) { texto: 'Conheça e compartilhe histórias', to: '#' },  // TODO: destino
]
</script>

<template>
  <section class="participe" id="participe">
    <div class="container-fluid wrap flex flex-wrap items-center">
      <div class="w-6/12 md:w-5/12 flex items-center justify-center md:justify-end">
        <h2 class="text-preto md:mr-16">Participe!</h2>
      </div>
      <div class="w-6/12 md:w-3/12">
        <img src="~/assets/images/participe.svg" alt="" />
      </div>
      <div class="w-full md:w-4/12 flex flex-col items-center md:items-stretch justify-center mt-4 md:mt-0">
        <NuxtLink v-for="b in botoes" :key="b.texto" :to="b.to" class="btn-preto my-2">{{ b.texto }}</NuxtLink>
      </div>
    </div>
  </section>
</template>
