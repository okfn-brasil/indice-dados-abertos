<template>
	<TemplateDimensao :btnExplore="btnExplore"/>
</template>

<script setup>
  let btnExplore = computed(()=>{return "conjunto de dados"});
</script>