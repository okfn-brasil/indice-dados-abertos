<script setup>
const route = useRoute()
let capital_slug = ref(route.params.capital);
</script>
<template>
	<Header/>
	<main>
		<TabelaMapaCapital :capital="capital_slug" class="pt-11"/>
		<TabelaCapital/>
    	<ParticipeCall/>
	</main>
  	<Footer/>
</template>