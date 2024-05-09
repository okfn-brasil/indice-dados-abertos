<script setup>
	const TwitterShareUrl = computed(()=>'https://twitter.com/intent/tweet?url=' + encodeURIComponent(useRequestURL().href));
	const FacebookShareUrl = computed(()=>'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(useRequestURL().href));
</script>
<template>
	<div class="share">
	  <span>Compartilhe</span>
	  <a class="twitter" :href="TwitterShareUrl" target="_blank"></a>
	  <a class="facebook" :href="FacebookShareUrl" target="_blank"></a>
	</div>
</template>