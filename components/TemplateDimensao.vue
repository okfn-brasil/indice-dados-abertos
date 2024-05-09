<script setup>
  const route = useRoute();
  const { btnExplore } = defineProps(["btnExplore"]);

  let dimensao = ref(route.params.dimensao);
  let dimensaoObj = computed(()=>{ return dimensao.value ? filterByValue(conjuntos,'slug',dimensao.value) : false });
  let categoria = ref(route.params.categoria);
  let categorias = computed(()=>{return dimensaoObj.value ? dimensaoObj.value.children : false});
  let categoriaObj = computed(()=>{ return categorias.value&&categoria.value ? filterByValue(categorias.value,'slug',categoria.value) : false });
  let conjunto_de_dados = ref(route.params.conjunto_de_dados);
  let conjuntos_de_dados = computed(()=>{return categoriaObj.value ? categoriaObj.value.children : false});
  let conjunto_de_dadosObj = computed(()=>{ return conjuntos_de_dados.value&&conjunto_de_dados.value ? filterByValue(conjuntos_de_dados.value,'slug',conjunto_de_dados.value) : false });

  let current = computed(()=>{return conjunto_de_dados.value ? conjunto_de_dadosObj.value : categoria.value ? categoriaObj.value : dimensaoObj.value  });
  let currentlabel = computed(()=>{return conjunto_de_dados.value ? "Conjunto de Dados" : categoria.value ? "Categoria" : "Dimensão"  });
</script>
<template>
	<Header/>
	<main>
		<Filtro class="pt-11"/>
		<MapaDimensao :current="current" :currentlabel="currentlabel"/>
		
		<!-- Tabela Dimensão -->
		<TabelaDimensao :current="current" :currentlabel="currentlabel" :btnExplore="btnExplore" v-if="current&&current.children[1]&&dimensaoObj.key!=15"/>
		
    <!-- Tabela Conjunto Dados -->
		<TabelaConjuntoDados :current="current" :currentlabel="currentlabel" v-else-if="current&&dimensaoObj.key!=15"/>
    
    <!-- Tabela Governança -->
		<TabelaGovernanca :current="current" :currentlabel="currentlabel" v-else-if="current&&dimensaoObj.key==15"/>
		
    <ParticipeCall/>
	</main>
  	<Footer/>
</template>