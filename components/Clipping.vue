<template>
  <section class="bg-azul" id="clipping">
    <div class="container-fluid wrap">
      <h3>Notícias</h3>
      <div class="card-post">
        <a href="" class="card">
          <figure>
            <img src="~/assets/images/clipping.jpg" />
          </figure>
          <div>
            <p>
              Segunda edição do curso “Investigações Digitais: OSINT para
              jornalistas e ativistas brasileiros” chegou ao fim nesta
              quarta-feira (28)
            </p>
          </div>
        </a>
        <a href="" class="card">
          <figure>
            <img src="~/assets/images/clipping.jpg" />
          </figure>
          <div>
            <p>
              Segunda edição do curso “Investigações Digitais: OSINT para
              jornalistas e ativistas brasileiros” chegou ao fim nesta
              quarta-feira (28)
            </p>
          </div>
        </a>
        <a href="" class="card">
          <figure>
            <img src="~/assets/images/clipping.jpg" />
          </figure>
          <div>
            <p>
              Segunda edição do curso “Investigações Digitais: OSINT para
              jornalistas e ativistas brasileiros” chegou ao fim nesta
              quarta-feira (28)
            </p>
          </div>
        </a>
        <a href="" class="card">
          <figure>
            <img src="~/assets/images/clipping.jpg" />
          </figure>
          <div>
            <p>
              Segunda edição do curso “Investigações Digitais: OSINT para
              jornalistas e ativistas brasileiros” chegou ao fim nesta
              quarta-feira (28)
            </p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<!-- <template>
  <section class="bg-azul" id="clipping">
    <div class="container-fluid wrap">
      <h3>Notícias</h3>
      <div class="card-post">
        <a v-for="post in posts" :key="post.id" :href="post.link" class="card">
          <figure>
            <img v-if="post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].link" :src="post._embedded['wp:featuredmedia'][0].link" />
          </figure>
          <div>
            <p>{{ post.title.rendered }}</p>
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
        const response = await fetch('https://azmina.com.br/wp-json/wp/v2/az_reportagem?tags[]=1988&_embed&_fields=title,link,_links.wp:featuredmedia&per_page=4');
        const data = await response.json();
        this.posts = data; 
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
  };
</script> -->

