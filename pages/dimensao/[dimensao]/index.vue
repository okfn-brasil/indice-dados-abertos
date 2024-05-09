<template>
	<TemplateDimensao :btnExplore="btnExplore"/>
</template>

<script setup>
  let btnExplore = computed(()=>{return "categoria"});
</script>