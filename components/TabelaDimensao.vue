<script setup>

  const { current,currentlabel,btnExplore } = defineProps(["current","currentlabel", "btnExplore"])
  const active = ref(false);
  const valores = computed(()=>{ return current ? Object.values(capitais).map(c=>{ return {key: c.key,nota: c.notas[current.key]}; }) : false });

  const tooltip = ref(false);
  const tipPos = ref({x:0,y:0});
  const tip = (e,d)=>{
   tooltip.value = d ? d : false;
   tipM(e);
  }
  const tipM = (e)=>{
   tipPos.value = {x:e.x, y:e.y}
  }

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

<section class="bg-cinzaClaro">
    <div class="tooltip" v-if="tooltip" :style="{left: tipPos.x+'px', top: tipPos.y+'px'}">
      
      <div class="conjunto-banner" v-if="!current.score">
        <div class="container-fluid wrap text-center">
          <h4 class="text-branco font-semibold">Este conjunto de dados não integra a pontuação do Índice nesta edição.</h4>
          <div class="btn-tooltip big mt-0 cursor-pointer"><a :href="'https://go.ok.org.br/odi2023-nota'" target="blank">Saiba mais na nota metodológica</a></div>
        </div>
      </div>

      <template v-if="tooltip.dimensao">
        <p class="icon big" :data-dimensao="tooltip.dimensao.label">{{tooltip.dimensao.label}}</p>
        <p v-if="!tooltip.dimensao.score" class="t13 mt-2">Este conjunto de dados não integra a pontuação do Índice nesta edição.</p>
        <button class="btn-tooltip">explorar {{btnExplore}}</button>
      </template>
      <template v-else-if="tooltip.capital">
        <p class="capital">{{tooltip.capital.nome}}</p>
        <template v-if="tooltip.d">
          <p class="ranking icon block" :data-dimensao="tooltip.d.label">{{tooltip.d.label}}</p>
          <p class="label" :class="escalaGlobal(Math.round(tooltip.capital.notas[tooltip.d.key]))">{{Math.round(tooltip.capital.notas[tooltip.d.key])}}</p>
        </template>
        <template v-if="tooltip.ranking">
          <p class="ranking" v-if="tooltip.ranking">{{tooltip.ranking+1}}ª posição no ranking</p>
          <p class="label" :class="escalaGlobal(Math.round(tooltip.capital.notas[current.key]))">{{Math.round(tooltip.capital.notas[current.key])}}</p>
        </template>
        <button class="btn-tooltip">explorar capital</button>
      </template>
    </div>
      <div class="container-fluid wrap">
        <div class="flex justify-between items-center">
          <div class="tag">{{currentlabel}} {{current.key}}</div>
        <Share />
        </div>
        <h2>{{current.label}}</h2>
        <p class="mt-2">Resultados por {{currentlabel=='Categoria'?'conjunto de dados':'categoria'}}</p>

        <div class="tabela-scroll">
          <table class="tabela tabela-dimensao" id="tabelamapa">
            <thead>
              <tr>
                <th class="capital">Municí­pio</th>
                <th class="pontuacao">Pontuação</th>
                <th class="nivel">Ní­vel</th>

                <th class="icon" v-for="d in current.children" :class="{'excluir':!d.score}" :data-dimensao="d.label" v-on="{ mouseenter: (e)=>{tip(e,{dimensao:d})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo($route.fullPath+'/'+d.slug)} }">{{d.label}}</th>
              </tr>
            </thead>
            <tbody v-if="current">
              <tr v-for="(c, index) in Object.values(capitais).sort((a,b)=>{return b.notas[current.key]-a.notas[current.key]})" :data-capital="c.key" class="hoverable">
                <td v-on="{ mouseenter: (e)=>{tip(e,{capital:c,ranking:index+1})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo('/capital/'+c.slug)} }" class="capital"><span><b>{{index+1}}º</b> {{c.nome}}</span></td>
                <td v-on="{ mouseenter: (e)=>{tip(e,{capital:c,ranking:index+1})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo('/capital/'+c.slug)} }" class="pontuacao"><span>{{Math.round(c.notas[current.key])}}</span></td>
                <td v-on="{ mouseenter: (e)=>{tip(e,{capital:c,ranking:index+1})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo('/capital/'+c.slug)} }" class="nivel"><span class="label" :class="escalaGlobal(Math.round(c.notas[current.key]))">{{escalaGlobal(Math.round(c.notas[current.key]))}}</span></td>
                
                <td class="dimensao" v-for="d in current.children" :class="{'excluir':!d.score}" v-on="{ mouseenter: (e)=>{tip(e,{capital:c,d:d})}, mousemove:tipM, mouseleave: ()=>{tip(false)} }"><span class="label" :class="escalaGlobal(Math.round(c.notas[d.key]))">{{Math.round(c.notas[d.key])}}</span></td>
              
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>

</template>