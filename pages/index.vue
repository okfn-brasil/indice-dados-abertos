<template>
  <Header/>

  <!-- Filtro -->
  <Filtro/>

  <main>

    <!-- Hero -->
    <section class="hero">
      <div class="container-fluid wrap">
        <div class="w-full md:w-5/12">
          <p class="font-extralight text-branco t70 leading-tight">
            Índice de Dados Abertos para Cidades
            <span class="font-bold text-verde block">ODI 2023</span>
          </p>
          <p class="text-branco font-extralight mt-1">
            Uma avaliação sobre a disponibilidade e a qualidade dos dados
            abertos nas capitais brasileiras a partir de uma perspectiva cívica.
          </p>
          <a @click="scrollto('tabelamapa')" class="btn-arrow mt-8">Explore os resultados</a>
          <div id="tabelamapa"></div>

        </div>
        <div class="w-full md:w-7/12 md:pl-8 pb-8 flex flex-col items-center">
          <div class="image-wrapper">
            <img class="buildings" src="~/assets/images/hero.svg" />
            <img class="gradient gradient-1" src="~/assets/images/circle_green_small.png" />
            <img class="gradient gradient-2" src="~/assets/images/circle_pink_small.png" />
            <img class="gradient gradient-3" src="~/assets/images/circle_pink_big.png" />
            <img class="gradient gradient-4" src="~/assets/images/rectangle_green.png" />
            <img class="gradient gradient-5" src="~/assets/images/circle_pink_small.png" />
            <img class="gradient gradient-6" src="~/assets/images/circle_green_small.png" />
          </div>
          <a href="" class="btn download mt-8">Baixe a publicação</a>
        </div>
      </div>

    </section>

    <!-- Tabela Mapa -->
    <TabelaMapa/>

    <!-- Tabela geral -->
    <TabelaGeral/>

    <ComoFunciona />

    <!-- Clipping -->
    <Clipping/>

    <!-- Participe -->
    <ParticipeCall/>

  </main>

  <Footer/>
</template>