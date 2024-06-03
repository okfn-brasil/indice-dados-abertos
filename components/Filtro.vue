<script setup>
  const route = useRoute()
  const { classes } = defineProps(["classes"])

  let dimensao = ref(route.params.dimensao);
  let dimensaoObj = ref(false);
  let categoria = ref(route.params.categoria);
  let categoriaObj = ref(false);
  let conjunto_de_dados = ref(route.params.conjunto_de_dados);
  let conjunto_de_dadosObj = ref(false);

  let categorias = ref(false);
  let conjuntos_de_dados = ref(false);
  let lastScrollPosition = "";


  onMounted(()=>{

    if(dimensao.value){
      
      let cs = filterByValue(conjuntos,'slug',dimensao.value);
      categorias.value = cs&&cs.children ? cs.children : false;
      dimensaoObj.value = cs;
      if(categoria.value && categorias.value){
        let cs = filterByValue(categorias.value,'slug',categoria.value);
        conjuntos_de_dados.value = cs&&cs.children ? cs.children : false;
        categoriaObj.value = cs;
        
        if(conjunto_de_dados.value && conjuntos_de_dados.value){
          let cs = filterByValue(conjuntos_de_dados.value,'slug',conjunto_de_dados.value);
          conjunto_de_dadosObj.value = cs;
        }
      }
    }

    window.addEventListener('scroll', handleScroll);

  });

  let active = ref(null);
  const toggleFilter = (f)=>{
    active.value = f&&f!=active.value ? f : false;
  }

  let hiddenFiltro = ref(true);
  const isHomepage = route.name === '' || route.name === 'index';

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    hiddenFiltro.value = scrollPosition < 0.8 * window.innerHeight;
  };
  
</script>
<template>
  <div class="filtro" id="filtro" :class="[classes, { 'hidden-filtro': isHomepage && hiddenFiltro }]" tabindex="0">
    <div class="container-fluid wrap">
      <div class="filtro-inner">
        <div class="filtro-content" :class="{active:active === 'dimensoes'}" id="dimensoes">
          <div class="drop" @click="toggleFilter('dimensoes')">
            <template v-if="dimensaoObj" :data-dimensao="dimensaoObj.label">
              <p class="full">{{dimensaoObj.label}}</p> 
              <p class="short">{{dimensaoObj.label}}</p> 
            </template>
            <template v-else>
              <p class="full">Todas as dimensões</p> 
              <p class="short">Dimensão</p> 
            </template>
            <span class="line"></span>
          </div>
          <div class="content">
            <div v-if="dimensaoObj">
              <NuxtLink :to="{ path: '/',hash:'#avaliacao'}" class="btn icon selected" :data-dimensao="dimensaoObj.label">{{dimensaoObj.label}}</NuxtLink>
              <NuxtLink :to="`/dimensao/${dimensaoObj.slug}`" class="btn-next mb-1 mt-4" @click="toggleFilter()">analisar dimensão</NuxtLink>
              <button @click="toggleFilter('categorias')" class="btn-next">ou explorar categorias</button>
            </div>
            <div v-else class="flex flex-wrap justify-start">
              <NuxtLink class="btn icon" v-for="(c,index) in conjuntos" 
              :class="{'active':dimensao==c.slug }" 
              :data-dimensao="c.label"
              :to="`/dimensao/${c.slug}`">{{index}}. {{c.label}}</NuxtLink>
            </div>
          </div>
        </div>

        <div class="filtro-content" :class="{disabled: !dimensaoObj||dimensaoObj.key==15,active:active === 'categorias'}" id="categorias">
          <div class="drop" @click="toggleFilter('categorias')">
            <template v-if="categoriaObj" :data-dimensao="categoriaObj.label">
              <p class="full">{{categoriaObj.label}}</p> 
              <p class="short">{{categoriaObj.label}}</p> 
            </template>
            <template v-else>
              <p class="full">Todas as categorias</p> 
              <p class="short">Categorias</p> 
            </template>
            <span class="line"></span>
          </div>
          <div class="content">
            <div v-if="categoriaObj">
              <NuxtLink :to="`/dimensao/${dimensao}/`" class="btn selected" :data-dimensao="categoriaObj.label">{{categoriaObj.label}}</NuxtLink>
              <NuxtLink :to="`/dimensao/${dimensao}/${categoriaObj.slug}`" class="btn-next mb-1 mt-4" @click="toggleFilter()">analisar categoria</NuxtLink>
              <button @click="toggleFilter('conjuntos_de_dados')" class="btn-next">ou explorar conjunto de dados</button>
            </div>
            <div v-else class="flex flex-wrap justify-start">
              <NuxtLink class="btn" v-for="(c,index) in categorias" 
              :class="{'active':dimensao==c.slug }" 
              :data-dimensao="c.label"
              :to="`/dimensao/${dimensao}/${c.slug}`">{{index}}. {{c.label}}</NuxtLink>
            </div>
          </div>
        </div>

        <div class="filtro-content" :class="{disabled: !categoriaObj||dimensaoObj.key==15,active:active === 'conjuntos_de_dados'}" id="conjuntos_de_dados">
          <div class="drop" @click="toggleFilter('conjuntos_de_dados')">
            <template v-if="conjunto_de_dadosObj" :data-dimensao="conjunto_de_dadosObj.label">
              <p class="full">{{conjunto_de_dadosObj.label}}</p> 
              <p class="short">{{conjunto_de_dadosObj.label}}</p> 
            </template>
            <template v-else>
              <p class="full">Todas os conjuntos de dados</p> 
              <p class="short">Conjuntos de dados</p> 
            </template>
            <span class="line"></span>
          </div>
          <div class="content">
            <div v-if="conjunto_de_dadosObj">
              <NuxtLink :to="`/dimensao/${dimensao}/${categoria}/`" class="btn selected" :data-dimensao="conjunto_de_dadosObj.label">{{conjunto_de_dadosObj.label}}</NuxtLink>
              <NuxtLink :to="`/dimensao/${dimensao}/${categoria}/${conjunto_de_dadosObj.slug}`" class="btn-next mb-1 mt-4" @click="toggleFilter()">analisar conjunto de dados</NuxtLink>
            </div>
            <div v-else class="flex flex-wrap justify-start">
              <NuxtLink class="btn" v-for="(c,index) in conjuntos_de_dados" 
              :class="{'active':dimensao==c.slug }" 
              :data-dimensao="c.label"
              :to="`/dimensao/${dimensao}/${categoria}/${c.slug}`">{{index}}. {{c.label}}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- categorias -->
    <!-- :to="`/dimensao/${dimensao}/${c.slug}`" -->
    <!-- conjuntos_de_dados -->
    <!-- :to="`/dimensao/${dimensao}/${categoria}/${c.slug}`" -->
    
  </div>
</template>