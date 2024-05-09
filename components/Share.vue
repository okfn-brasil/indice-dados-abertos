<template>
	<div class="share">
	  <span>Compartilhe</span>
	  <a class="twitter" :href="getTwitterShareUrl()" target="_blank"></a>
	  <a class="facebook" :href="getFacebookShareUrl()" target="_blank"></a>
	</div>
  </template>
  
  <script>
  export default {
	methods: {
	  getTwitterShareUrl() {
		// return 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href);
	  },
	  getFacebookShareUrl() {
		// return 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href);
	  },
	},
  };
  </script>
  