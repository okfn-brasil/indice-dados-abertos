<!-- Cabeçalho da nova home (sem busca de capitais). Reaproveita os estilos .top-bar existentes. -->
<script setup>
defineProps({
  titulo: {
    type: String,
    default: 'Índice de Dados Abertos (ODI)'
  }
})

const links = [
  { texto: 'ODI Cidades', to: '/cidades' },
  { texto: 'ODI Estados', to: '/estados' },
  { texto: 'Participe!', to: '/participe' },
  { texto: 'Sobre', to: '/sobre' },
]
</script>

<template>
  <header class="top-bar" id="topBar">
    <nav class="container-fluid">
      <div class="logo-wrapper">
        <NuxtLink to="/" class="flex items-center gap-2" :aria-label="titulo">
          <img src="~/assets/images/logo-simbolo.svg" alt="" class="h-8 md:h-10 w-auto" />
          <span class="font-hkgrotesk font-medium leading-tight t18 text-preto sm:whitespace-nowrap">{{ titulo }}</span>
        </NuxtLink>
      </div>
      <!-- empurra o menu para a direita no mobile -->
      <div class="ml-auto"></div>
      <input type="checkbox" class="btn-menu" aria-label="Abrir menu">
      <ul class="links">
        <li v-for="l in links" :key="l.to">
          <NuxtLink :to="l.to">{{ l.texto }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* Deixa o logo ocupar a largura do próprio conteúdo (evita cortar "(ODI)") */
.logo-wrapper {
  width: auto;
  max-width: none;
  overflow: visible;
  flex: 0 0 auto;
}
</style>
