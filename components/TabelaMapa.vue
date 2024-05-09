<script setup>
  const active = ref(false);
  const valores = ref(Object.values(capitais).map(c=>{ return {key: c.key,nota: c.geral, nome:c.nome}; }));
  
  let activeCapital = ref(null);

  const handleHover = (key, isHover) => {
    activeCapital.value = isHover ? key : null;

    let capitalItem = document.querySelectorAll(`[data-capital="${key}"]`);
    capitalItem.forEach(item => {
      item.classList.toggle('hovered', isHover);
    });

  };

  onMounted(() => {

    const listaCapitais = document.getElementById('tabelamapa');
    const mapaCapitais = document.getElementById('mapatabela');
    const capitalItems = document.querySelectorAll('[data-capital]');

    capitalItems.forEach(item => {
      item.addEventListener('mouseenter', () => handleHover(item.dataset.capital, true));
      item.addEventListener('mouseleave', () => handleHover(item.dataset.capital, false));
    });

// Add event listeners to the tbody for hover events
    let tbodyElement = document.querySelector('#tabelamapa tbody');
    let mapElement = document.querySelectorAll('#mapatabela path, #mapatabela circle');

    if (tbodyElement) {
      tbodyElement.addEventListener('mouseenter', () => {
          tbodyElement.classList.add('active');
          mapElement.forEach(item => {
            item.classList.add('active');
          });
      });
      tbodyElement.addEventListener('mouseleave', () => {
          tbodyElement.classList.remove('active');
          mapElement.forEach(item => {
            item.classList.remove('active');
          });
      });
    }

    // Add event listeners to the map for hover events
    if (mapElement) {
      mapElement.forEach(el => {
        el.addEventListener('mouseenter', () => {
          tbodyElement.classList.add('active');
          mapElement.forEach(item => {
            item.classList.add('active');
          });
        });
        el.addEventListener('mouseleave', () => {
          tbodyElement.classList.remove('active');
          mapElement.forEach(item => {
            item.classList.remove('active');
          });
        });
      });

    }

  });

</script>
<template>
  <section id="ranking">
    <div class="container-fluid wrap">
      <div class="flex justify-between items-center">
        <div class="tag">ODI cidades 2023</div>
        <Share/>
      </div>
      <h2>Avaliação por capital da federação</h2>
      <p class="mt-2">
        Veja a situação geral da abertura de dados nas capitais
      </p>
      <div class="flex flex-wrap mt-12">
        <div class="w-full md:w-6/12 md:pr-12">
          <!-- Mapa -->
          <Mapa :valores="valores" :active="active"/>
        </div>
        <div class="w-full md:w-6/12 md:pl-12">

          <table class="tabela tabela-mapa" id="tabelamapa">
            <thead>
              <tr>
                <th class="capital">Município</th>
                <th>Pontuação</th>
                <th>Nível</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(c, index) in Object.values(capitais).sort((a,b)=>{return b.geral-a.geral})"
              v-on="{click:()=>{navigateTo('/capital/'+c.slug)}}" :data-capital="c.key" class="hoverable">
                <td class="capital"><b>{{index+1}}º</b> {{c.nome}}</td>
                <td class="pontuacao">{{c.geral}}</td>
                <td class="nivel"><span class="label" :class="escalaGlobal(c.geral)">{{escalaGlobal(c.geral)}}</span></td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  </section>
</template>