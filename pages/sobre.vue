<template>
  <Header/>

  <main>
    <section class="bg-cinzaClaro internas">
      <div class="container-fluid wrap">
        <div class="header-internas">
          <h2><span class="text-preto font-light block">Sobre o Índice de Dados<br/> Abertos para Cidades</span> ODI Cidades 2023</h2>
          <p class="font-medium subtitulo">Um mapa inédito da disponibilidade e qualidade dos dados abertos nas capitais brasileiras</p>
        </div>
        <div class="conteudo top-margin right">
          <p><b>O Índice de Dados Abertos para Cidades 2023</b>, <b>ou ODI Cidades 2023</b> (em alusão à sigla em inglês para Open Data Index) é uma iniciativa da Open Knowledge Brasil (OKBR) para <b>avaliar a disponibilidade e a qualidade de dados abertos nas 26 capitais brasileiras a partir de uma perspectiva cívica.</b> </p>
          <p>Desenvolvida pela Open Knowledge Foundation e aplicada em diversos países, a metodologia foi inteiramente reformulada pela OKBR para <b>expandir a abrangência da avaliação e adequá-la ao contexto brasileiro</b>, considerando o desenho federativo de nosso país, as atribuições constitucionais dos municípios e as <b>áreas de políticas e serviços públicos essencialmente municipais</b>. São 111 conjuntos de dados avaliados em 15 dimensões temáticas, que incluem Saúde, Habitação, Mobilidade e Transporte Público e Infraestrutura Urbana.</p>
          <p>Além disso, o ODI Cidades 2023 também inova ao apresentar uma nova dimensão: em <b>governança de dados públicos</b>, as políticas de dados dos municípios são analisadas, atentando-se a aspectos relativos à proteção de dados.</p>
          <p>Por ser aplicado a todas as capitais, o Índice possibilita a formação de uma “linha de base” para as gestões municipais, e passará a ser monitorado periodicamente, para que seja possível captar a evolução na abertura de dados.</p>
          <p>Atualmente, não existe no Brasil uma política nacional de dados que estabeleça um conjunto mínimo de bases de dados importantes para o acompanhamento de políticas públicas nas cidades brasileiras — ausência que torna essa nova metodologia ainda mais necessária. Considerando sua abrangência nacional e temática, o novo ODI Cidades 2023 será um <b>estudo inédito</b>, capaz de pautar a abertura de dados em nível local, orientar os mandatos atuais e influenciar as discussões sobre o tema em programas de governo, principalmente nas eleições municipais de 2024. Esperamos que sirva de linha mestra para que as gestões desenvolvam políticas de abertura mais abrangentes, duradouras e conectadas ao direito fundamental à cidade.</p>
          <img src="~/assets/images/sobre.svg" />
        </div>
        <div class="header-internas pt-6">
          <h2><span class="text-preto font-light">Sobre a</span> Open Knowledge Brasil</h2>
        </div>
        <div class="conteudo right">
          <p class="mt-6">A OKBR, também conhecida como Rede pelo Conhecimento Livre, é uma organização da sociedade civil sem fins lucrativos e apartidária que atua no país desde 2013. Desenvolvemos e incentivamos o uso de tecnologias cívicas e de dados abertos, realizamos análises de políticas públicas e promovemos o conhecimento livre para tornar a relação entre governo e sociedade mais transparente e participativa. Saiba mais no site: <a href="https://ok.org.br/">ok.org.br</a>.</p>
          <h3>Entre em contato</h3>
          <p class="t18">O ODI Cidades 2023 reúne um conjunto de diretrizes de referência para avaliar e abrir dados em nível local, a partir de princípios e padrões reconhecidos internacionalmente. Além de guiar o trabalho das prefeituras que querem aprimorar a qualidade dos dados disponibilizados, sua metodologia pode ser replicada em outras cidades e regiões, ou mesmo aplicada com um recorte por temas.</p>
          <p class="t18">Tem interesse em aplicar o ODI Cidades? <br/>Entre em contato conosco em <a href="mailto:indicedadosabertos@ok.org.br">indicedadosabertos@ok.org.br</a> e podemos orientar como!</p>
        </div>
      </div>
    </section>

    <ComoFunciona />

    <!-- Clipping -->
    <Clipping/>

    <!-- Participe -->
    <ParticipeCall/>

  </main>

  <Footer/>
</template>