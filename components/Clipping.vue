<template>
  <section class="bg-azul" id="noticias">
    <div class="container-fluid wrap">
      <h3>Notícias</h3>
      <div class="card-post">
        <a v-for="post in posts" :key="post.id" :href="post.link" class="card" target="blank">
          <figure>
            <img v-if="post.ACF.imagem.url && post.ACF.imagem.url" :src="post.ACF.imagem.url" />
          </figure>
          <div>
            <p class="date"> {{ formatDate(post.date) }}</p>
            <p class="title">{{ post.title.rendered }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        posts: []
      };
    },
    async created() {
      try {
        const response = await fetch('https://ok.org.br/wp-json/wp/v2/noticia?tags[]=892&per_page=4');
        const data = await response.json();
        this.posts = data; 
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
    methods: {
      formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = date.toLocaleDateString('pt-BR',  {month: 'short' }).replace('.', '');
        const year = date.getFullYear();

        return `${day} ${month} de ${year}`;
      }
    }
  };
</script>

