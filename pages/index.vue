<script setup>
useHead({
  title: 'Índice de Dados Abertos ODI',
  meta: [
    { name: 'description', content: 'Avaliação da disponibilidade e da qualidade dos dados abertos nas capitais e nos estados brasileiros, a partir de uma perspectiva cidadã.' },
  ],
})
</script>

<template>
  <HeaderHome/>

  <main>
    <!-- Hero -->
    <section class="hero">
      <div class="container-fluid wrap">
        <div class="w-full md:w-6/12 pb-14 md:pb-0">
          <h1 class="font-extralight text-branco t70 leading-tight">
            Índice de<br>Dados <span class="font-normal">Abertos</span><br>
            <strong class="font-bold">ODI</strong>
          </h1>
          <p class="text-branco font-extralight mt-2 max-w-[34rem]">
            A nossa avaliação mudou. Além de abranger as <strong class="font-semibold">capitais brasileiras</strong>
            em ranking realizado em 2023, a metodologia foi reformulada em 2026 e a avaliação também passou a
            abordar a disponibilidade e a qualidade dos dados abertos nos <strong class="font-semibold">estados brasileiros</strong>
            a partir de uma perspectiva cidadã.
          </p>

          <!-- Chamada: no mobile, rótulo numa linha e botões lado a lado (mesmo tamanho);
               a partir de sm, tudo na mesma linha, como no Figma -->
          <div class="flex flex-wrap items-center gap-x-3 gap-y-3 mt-8">
            <div class="flex items-center gap-3 w-full sm:w-auto">
              <svg class="text-verde shrink-0" width="32" height="12" viewBox="0 0 32 12" fill="none" aria-hidden="true">
                <path d="M0 6H31M26 1l5 5-5 5" stroke="currentColor" stroke-width="1.2"/>
              </svg>
              <p class="font-necto text-verde uppercase t16 font-light tracking-wide">Escolha o que acessar:</p>
            </div>
            <NuxtLink to="/cidades" class="btn uppercase whitespace-nowrap text-center flex-1 sm:flex-none !text-[13px] !px-3 !py-2 !leading-none">ODI Cidades</NuxtLink>
            <NuxtLink to="/estados" class="btn uppercase whitespace-nowrap text-center flex-1 sm:flex-none !text-[13px] !px-3 !py-2 !leading-none">ODI Estados</NuxtLink>
          </div>
        </div>

        <div class="w-full md:w-6/12 md:pl-8 pb-8 flex flex-col items-center">
          <!-- mesma ilustração/degradês da home atual; trocar quando houver a arte nova -->
          <div class="hero-img w-full">
            <div class="border-mobile"></div>
            <div class="image-wrapper">
              <img class="buildings" src="~/assets/images/hero.svg" alt="" />
              <img class="gradient gradient-1" src="~/assets/images/circle_green_small.png" alt="" />
              <img class="gradient gradient-2" src="~/assets/images/circle_pink_small.png" alt="" />
              <img class="gradient gradient-3" src="~/assets/images/circle_pink_big.png" alt="" />
              <img class="gradient gradient-4" src="~/assets/images/rectangle_green.png" alt="" />
              <img class="gradient gradient-5" src="~/assets/images/circle_pink_small.png" alt="" />
              <img class="gradient gradient-6" src="~/assets/images/circle_green_small.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <ParticipeHome/>
  </main>

  <FooterHome/>
</template>