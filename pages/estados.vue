<!--
  Página ODI Estados
  Rota: /estados
  Índice de Dados Abertos para Estados — Open Knowledge Brasil
-->
<script setup>
// Configurações de recursos para download
const configArquivos = {
  downloadMetodologia: 'https://go.ok.org.br/odiestados-nota',
  downloadCriterios: 'https://go.ok.org.br/odiestados-base',
}

useHead({
  title: 'ODI Estados | Índice de Dados Abertos',
  meta: [
    {
      name: 'description',
      content:
        'A régua que faltava para avaliar a disponibilidade e a qualidade dos dados abertos nos estados brasileiros, criada a partir da reformulação da metodologia do ODI Cidades.',
    },
    {
      property: 'og:title',
      content: 'ODI Estados | Índice de Dados Abertos',
    },
    {
      property: 'og:description',
      content:
        'A régua que faltava para avaliar a disponibilidade e a qualidade dos dados abertos nos estados brasileiros, criada a partir da reformulação da metodologia do ODI Cidades.',
    },
  ],
})
</script>

<template>
  <div class="estados-page">
    <!-- 1. Cabeçalho branco reaproveitado com título da página -->
    <HeaderHome titulo="ODI Estados" />

    <main id="conteudo-principal">
      <!-- 2. Apresentação com fundo lilás -->
      <section class="secao-apresentacao" aria-labelledby="titulo-apresentacao">
        <div class="container-fluid wrap">
          <!-- Linha superior: Título + Texto à esquerda, Mapa à direita -->
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-12">
            
            <!-- Coluna da esquerda: títulos e descrição -->
            <div class="w-full md:w-6/12 xl:w-7/12">
              <h1 id="titulo-apresentacao" class="font-extralight text-branco t70 leading-tight">
                Índice de<br>
                Dados Abertos<br>
                para <strong class="font-bold">Estados</strong>
              </h1>

              <p class="text-branco font-light t24 mt-6 max-w-[36rem] leading-relaxed">
                A régua que faltava para avaliar a disponibilidade e a qualidade dos dados abertos nos estados brasileiros, criada a partir da reformulação da metodologia do ODI Cidades.
              </p>
            </div>

            <!-- Coluna da direita: Mapa pontilhado do Brasil -->
            <div class="w-full md:w-6/12 xl:w-5/12 flex justify-center items-center">
              <div class="mapa-wrapper w-full max-w-[480px]">
                <img
                  src="~/assets/images/mapa-brasil-pontilhado.png"
                  alt=""
                  aria-hidden="true"
                  class="w-full h-auto object-contain mx-auto"
                />
              </div>
            </div>

          </div>

          <!-- Linha inferior: Downloads e Redes Sociais conforme Figma -->
          <div class="hero-bottom-bar flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8 mt-12 md:mt-16">
            <!-- 1. Link Baixe a metodologia (com seta para baixo, sem retângulo, 24px Red Hat Mono) -->
            <div class="download-item">
              <a
                v-if="configArquivos.downloadMetodologia"
                :href="configArquivos.downloadMetodologia"
                target="_blank"
                rel="noopener noreferrer"
                class="link-metodologia flex items-center gap-3"
              >
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" class="shrink-0" aria-hidden="true">
                  <path d="M9 1V19M9 19L2 12M9 19L16 12" stroke="#596ad6" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>BAIXE A METODOLOGIA</span>
              </a>
              <button
                v-else
                type="button"
                disabled
                aria-disabled="true"
                class="link-metodologia disabled flex items-center gap-3 cursor-not-allowed"
                title="Arquivo da metodologia será disponibilizado em breve"
              >
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" class="shrink-0" aria-hidden="true">
                  <path d="M9 1V19M9 19L2 12M9 19L16 12" stroke="#596ad6" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>BAIXE A METODOLOGIA</span>
              </button>
            </div>

            <!-- 2. Link Critérios e conjuntos de dados (sem retângulo, 24px Red Hat Mono) -->
            <div class="download-item">
              <a
                v-if="configArquivos.downloadCriterios"
                :href="configArquivos.downloadCriterios"
                target="_blank"
                rel="noopener noreferrer"
                class="link-criterios"
              >
                CRITÉRIOS E CONJUNTOS DE DADOS
              </a>
              <span
                v-else
                class="link-criterios disabled cursor-not-allowed"
                title="Arquivo de critérios e conjuntos de dados será disponibilizado em breve"
              >
                CRITÉRIOS E CONJUNTOS DE DADOS
              </span>
            </div>

            <!-- 3. Redes Sociais em azul/roxo (#596AD6) conforme Figma Group 317 (210.5x29px) -->
            <div class="social-hero flex items-center gap-4">
              <!-- GitHub -->
              <a
                href="https://github.com/okfn-brasil"
                target="_blank"
                rel="noopener"
                class="social-link"
                aria-label="GitHub da Open Knowledge Brasil"
              >
                <img
                  src="~/assets/images/icons/social-estados-github.png"
                  alt=""
                  aria-hidden="true"
                  class="h-[29px] w-auto object-contain"
                />
              </a>

              <!-- Instagram -->
              <a
                href="https://www.instagram.com/openknowledgebrasil/"
                target="_blank"
                rel="noopener"
                class="social-link"
                aria-label="Instagram da Open Knowledge Brasil"
              >
                <img
                  src="~/assets/images/icons/social-estados-instagram.png"
                  alt=""
                  aria-hidden="true"
                  class="h-[29px] w-auto object-contain"
                />
              </a>

              <!-- LinkedIn -->
              <a
                href="https://www.linkedin.com/company/open-knowledge-brasil"
                target="_blank"
                rel="noopener"
                class="social-link"
                aria-label="LinkedIn da Open Knowledge Brasil"
              >
                <img
                  src="~/assets/images/icons/social-estados-linkedin.png"
                  alt=""
                  aria-hidden="true"
                  class="h-[29px] w-auto object-contain"
                />
              </a>

              <!-- Bluesky -->
              <a
                href="https://bsky.app/profile/ok.org.br"
                target="_blank"
                rel="noopener"
                class="social-link"
                aria-label="Bluesky da Open Knowledge Brasil"
              >
                <img
                  src="~/assets/images/icons/social-estados-bluesky.png"
                  alt=""
                  aria-hidden="true"
                  class="h-[29px] w-auto object-contain"
                />
              </a>

              <!-- Mastodon -->
              <a
                href="https://mastodon.social/@okbr"
                target="_blank"
                rel="noopener"
                class="social-link"
                aria-label="Mastodon da Open Knowledge Brasil"
              >
                <img
                  src="~/assets/images/icons/social-estados-mastodon.png"
                  alt=""
                  aria-hidden="true"
                  class="h-[29px] w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Sobre o ODI Estados -->
      <section class="secao-sobre bg-roxo py-16 md:py-24" aria-labelledby="titulo-sobre">
        <div class="container-fluid wrap">
          <h2 id="titulo-sobre" class="t60 font-semibold text-branco mb-10 md:mb-14">
            Sobre o ODI Estados
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20">
            <!-- Coluna 1 -->
            <div class="space-y-6">
              <p class="text-branco font-light t18 md:t24 leading-relaxed">
                O Índice de Dados Abertos para Estados (ODI Estados) é uma metodologia para avaliação da disponibilidade e da qualidade dos dados abertos nos estados brasileiros, criada pela Open Knowledge Brasil (OKBR), em parceria com FGV Cidades e Universidade Federal de São Paulo (Unifesp), e com apoio da Fundação de Amparo à Pesquisa do Estado de São Paulo (FAPESP).
              </p>
              <p class="text-branco font-light t18 md:t24 leading-relaxed">
                É uma adaptação da metodologia do ODI Cidades para o escopo estadual, considerando o desenho federativo do país, as atribuições constitucionais e as áreas de políticas e serviços públicos essenciais. A avaliação traz indicadores sobre a abertura e a qualidade de dados de 15 dimensões temáticas de políticas e serviços públicos com foco nas competências estaduais, como Educação, Saúde, Finanças Públicas, Meio Ambiente e Segurança Pública, abordando conjuntos de dados essenciais para acompanhamento da gestão pública e exercício da cidadania.
              </p>
              <p class="text-branco font-light t18 md:t24 leading-relaxed">
                A metodologia inclui indicadores específicos de Governança de Dados, para avaliar se os governos estaduais dispõem de ferramentas estruturais para publicação e gestão sustentável de dados abertos.
              </p>
            </div>

            <!-- Coluna 2 -->
            <div class="space-y-6">
              <p class="text-branco font-light t18 md:t24 leading-relaxed">
                É uma ferramenta para avaliar os níveis de abertura, qualidade e governança de dados nos estados brasileiros sob uma perspectiva cidadã.
              </p>
              <p class="text-branco font-light t18 md:t24 leading-relaxed">
                A metodologia está pronta para ser aplicada, com acesso aberto, parâmetros que proporcionam a comparabilidade de resultados e que levam em consideração padrões de abertura reconhecidos internacionalmente. Ela serve de base tanto para orientar a abertura de dados nos governos quanto como ferramenta de controle e pressão para aprimoramento das políticas de transparência e dados abertos, para facilitar o trabalho de jornalistas, pesquisadores e da sociedade civil no acompanhamento do poder público.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Parceria -->
      <section class="secao-parceria bg-verde py-16 md:py-24" aria-labelledby="titulo-parceria">
        <div class="container-fluid wrap">
          <h2 id="titulo-parceria" class="t60 font-semibold text-branco mb-10 md:mb-14">
            Parceria
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20">
            <!-- Coluna 1 -->
            <div class="space-y-6">
              <p class="text-branco font-light t18 md:t24 leading-relaxed">
                Entre setembro de 2025 e junho de 2026, o grupo de pesquisa formado por Open Knowledge Brasil (OKBR), em parceria com a Fundação Getúlio Vargas (FGV Cidades) e a Universidade Federal de São Paulo (Unifesp), e com apoio da Fundação de Amparo à Pesquisa do Estado de São Paulo (FAPESP), realizou uma série de estudos, levantamentos e consultas a especialistas de diversas áreas, partindo da metodologia do ODI Cidades, para definir temas de conjuntos de dados cuja abertura é prioritária para o exercício da cidadania no escopo estadual.
              </p>
              <p class="text-branco font-light t18 md:t24 leading-relaxed">
                A avaliação mantém as 15 dimensões temáticas de políticas e serviços públicos, mas com foco nas competências estaduais. Também foram mantidos os indicadores sobre disponibilidade, qualidade e governança consolidados pela metodologia municipal.
              </p>
            </div>

            <!-- Coluna 2 -->
            <div class="space-y-6">
              <p class="text-branco font-light t18 md:t24 leading-relaxed">
                A pesquisa foi conduzida por uma equipe multidisciplinar composta por Haydée Svab e Edilaine dos Santos e Souza (OKBR), pelos professores Ciro Biderman e Murillo Kay Bark Toda (FGV Cidades) e pela professora Gabriela de Brelàz (Unifesp). A metodologia atualizada do ODI Estados une o rigor acadêmico, dado pelo olhar da FGV Cidades e Unifesp, com o ativismo pela abertura de dados, dado pela perspectiva da OKBR.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- 5. Rodapé: Faixa de instituições + Licenças (conforme Figma) -->
    <footer class="secao-rodape bg-cinzaClaro py-12 md:py-16 lg:py-20" aria-label="Rodapé do site e informações institucionais">
      <div class="container-fluid wrap">
        <!-- Linha Superior: Parceria e Apoio -->
        <div class="flex flex-col md:flex-row md:items-start justify-between gap-10 md:gap-14">
          
          <!-- Grupo Parceria -->
          <div class="w-full md:w-8/12">
            <h3 class="instituicoes-titulo font-necto t16 uppercase text-preto mb-5 tracking-[0.5px]">
              Parceria
            </h3>
            <div class="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              <!-- Logo OKBR -->
              <div class="instituicao-item flex items-center">
                <img
                  src="~/assets/images/logo-footer.svg"
                  alt="Open Knowledge Brasil"
                  class="h-10 md:h-[60px] w-auto object-contain"
                />
              </div>

              <!-- Logo FGV Cidades -->
              <div class="instituicao-item flex items-center">
                <img
                  src="~/assets/images/logo-fgv-cidades.png"
                  alt="FGV Cidades"
                  class="h-4 md:h-[21px] w-auto object-contain"
                />
              </div>

              <!-- Logo Unifesp -->
              <div class="instituicao-item flex items-center">
                <img
                  src="~/assets/images/logo-unifesp.png"
                  alt="Universidade Federal de São Paulo (Unifesp)"
                  class="h-14 md:h-[78px] w-auto object-contain"
                />
              </div>
            </div>
          </div>

          <!-- Grupo Apoio -->
          <div class="w-full md:w-4/12 md:pl-4">
            <h3 class="instituicoes-titulo font-necto t16 uppercase text-preto mb-5 tracking-[0.5px]">
              Apoio
            </h3>
            <div class="flex items-center">
              <!-- Logo FAPESP -->
              <div class="instituicao-item flex items-center">
                <img
                  src="~/assets/images/logo-fapesp.png"
                  alt="FAPESP - Fundação de Amparo à Pesquisa do Estado de São Paulo"
                  class="h-14 md:h-[73px] w-auto object-contain"
                />
              </div>
            </div>
          </div>

        </div>

        <!-- Linha Inferior: Licenças (MIT e Creative Commons) -->
        <div class="mt-16 md:mt-20 lg:mt-24 max-w-[38rem]">
          <div class="flex items-start mb-2">
            <img class="mr-2 w-3.5 h-3.5 mt-1 shrink-0" src="~/assets/images/icons/code.svg" alt="" aria-hidden="true">
            <p class="t13 font-light text-cinzaEscuro leading-snug">Source code available under the MIT license.</p>
          </div>
          <div class="flex items-start">
            <img class="mr-2 w-3.5 h-3.5 mt-1 shrink-0" src="~/assets/images/icons/creative-commons.svg" alt="" aria-hidden="true">
            <p class="t13 font-light text-cinzaEscuro leading-relaxed">
              Todo o conteúdo do site do Índice de Dados Abertos - ODI está disponível sob a licença <a href="https://creativecommons.org/licenses/by/4.0/deed.pt-br" class="underline hover:text-verde transition-ease" target="_blank" rel="noopener">Creative Commons Atribuição 4.0 Internacional</a>, o que significa que pode ser compartilhado e reutilizado para trabalhos derivados, desde que citada a fonte.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@400;700&display=swap');

// Seção Lilás de Apresentação
.secao-apresentacao {
  background-color: #e3acf4;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;

  @media (min-width: 768px) {
    padding-top: 5.5rem;
    padding-bottom: 5.5rem;
  }
}

// Links de download no Hero Lilás conforme Figma (Red Hat Mono, 24px, 400 Regular, 1px letter-spacing, uppercase, #596AD6)
.link-metodologia,
.link-criterios {
  color: #596ad6 !important;
  background-color: transparent !important;
  border: none !important;
  padding: 0 !important;
  margin: 0 !important;
  font-family: 'Red Hat Mono', 'Necto', monospace !important;
  font-weight: 400 !important;
  text-transform: uppercase !important;
  font-size: 18px !important;
  letter-spacing: 1px !important;
  line-height: 1.2 !important;
  display: inline-flex !important;
  align-items: center !important;
  box-shadow: none !important;
  transition: opacity 0.2s ease, text-decoration 0.2s ease;

  @media (min-width: 1024px) {
    font-size: 24px !important;
    line-height: 32px !important;
  }

  svg {
    width: 18px !important;
    height: 20px !important;
    stroke: #596ad6 !important;
    path {
      stroke: #596ad6 !important;
    }
  }

  &:hover:not(.disabled):not(:disabled) {
    text-decoration: underline !important;
    opacity: 0.85;
  }

  &.disabled {
    opacity: 0.95;
  }
}

// Redes Sociais no Hero Lilás conforme Figma Group 317 (210.5 x 29px)
.social-hero {
  .social-link {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    transition: transform 0.2s ease, opacity 0.2s ease !important;

    img {
      height: 29px !important;
      width: auto !important;
      display: block !important;
      object-fit: contain !important;
    }

    &:hover {
      opacity: 0.75 !important;
      transform: translateY(-1px) !important;
    }
  }
}

// Título das seções Sobre e Parceria (sobrepondo text-verde padrão do main.scss)
.secao-sobre h2,
.secao-parceria h2 {
  color: #ffffff !important;
}

// Faixa institucional
.instituicoes-titulo {
  &:before {
    content: none !important;
    display: none !important;
  }
}

// Acessibilidade: foco visível para navegação por teclado
:deep(a:focus-visible),
:deep(button:focus-visible) {
  outline: 2px solid #00cfa3;
  outline-offset: 3px;
}

.secao-apresentacao :deep(a:focus-visible),
.secao-apresentacao :deep(button:focus-visible),
.secao-sobre :deep(a:focus-visible),
.secao-sobre :deep(button:focus-visible),
.secao-parceria :deep(a:focus-visible),
.secao-parceria :deep(button:focus-visible) {
  outline: 2px solid #ffffff;
  outline-offset: 3px;
}

// Marcação de link ativo no topo
:deep(.top-bar nav .links a.router-link-exact-active) {
  color: #00cfa3 !important;
}
</style>
