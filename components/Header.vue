<script setup>
  let busca = ref('');
  const typeBusca = (e)=>{
    let s = e.target.value;
    busca.value = s ? createSlug(s) : '';
  }

</script>
<template>
  <header class="top-bar" id="topBar">
      <nav class="container-fluid">
          <div class="logo-wrapper">
              <NuxtLink to="/" class="logo"></NuxtLink>
          </div>
          <div class="search mobile">
            <input type="text" placeholder="Procurar capital" @input="typeBusca">
            <ul class="results">
              <template v-for="c in capitais">
              <NuxtLink :to="`/capital/${c.slug}`" v-if="!busca||c.slug.includes(busca)"><li>{{c.nome}}</li></NuxtLink>
              </template>
            </ul>
          </div>
          <input type="checkbox" class="btn-menu">
          <ul class="links">
              <li><NuxtLink to="/#ranking">Ranking capitais</NuxtLink></li>
              <li><NuxtLink to="/#metodologia">Metodologia</NuxtLink></li>
              <li><NuxtLink to="/#publicacao">Publicação</NuxtLink></li>
              <li><NuxtLink to="/#clipping">Clipping</NuxtLink></li>
              <li><NuxtLink to="/participe">Participe!</NuxtLink></li>
              <li><NuxtLink to="/sobre">Sobre</NuxtLink></li>
              <li class="search">
                <input type="text" placeholder="Procurar capital" @input="typeBusca">
                <ul class="results">
                  <template v-for="c in capitais">
                    <NuxtLink :to="`/capital/${c.slug}`" v-if="!busca||c.slug.includes(busca)"><li>{{c.nome}}</li></NuxtLink>
                  </template>
                </ul>
              </li>
          </ul>
      </nav>
  </header>

</template>