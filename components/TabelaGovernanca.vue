<script setup>
  const { current,currentlabel } = defineProps(["current","currentlabel"])
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

  <div class="conjunto-banner" v-if="!current.score">
    <div class="container-fluid wrap text-center">
      <h4 class="text-branco font-semibold">Este conjunto de dados não integra a pontuação do Índice nesta edição.</h4>
      <div class="btn-tooltip big mt-0 cursor-pointer"><a :href="'https://go.ok.org.br/odi2023-nota'" target="blank">Saiba mais na nota metodológica</a></div>
    </div>
  </div>

  <section class="bg-cinzaClaro">
      <div class="tooltip" v-if="tooltip" :style="{left: tipPos.x+'px', top: tipPos.y+'px'}">
        <div v-if="tooltip.indicador">
          <p class="ranking">{{tooltipIndicador(tooltip.indicador)}}</p>
        </div>
        <template v-else-if="tooltip.dimensao">
          <p class="icon big" :data-dimensao="tooltip.dimensao.label">{{tooltip.dimensao.label}}</p>
          <button class="btn-tooltip">explorar dimensão</button>
        </template>
        <template v-else-if="tooltip.capital">
          <p class="capital">{{tooltip.capital.nome}}</p>
          <template v-if="tooltip.d">
            <p class="ranking icon block" :data-dimensao="tooltip.d.label">{{tooltip.d.label}}</p>
            <p class="label" :class="escalaGlobal(tooltip.capital.notas[tooltip.d.key])">{{Math.round(tooltip.capital.notas[tooltip.d.key])}}</p>
          </template>
          <template v-if="tooltip.ranking">
            <p class="ranking" v-if="tooltip.ranking">{{tooltip.ranking}}ª posição no ranking</p>
            <p class="label" :class="escalaGlobal(Math.round(tooltip.capital.notas[current.key]))">{{Math.round(tooltip.capital.notas[current.key])}}</p>
          </template>
          <button class="btn-tooltip">explorar capital</button>
        </template>
      </div>
      <div class="container-fluid wrap">
        <div class="flex justify-between items-center">
          <div class="tag">{{currentlabel}} {{current.key}}</div>
          <Share/>
        </div>
        <h2>{{current.label}}</h2>
        <div class="tag">Indicadores específicos</div>
        <p class="mt-2">A dimensão de Governança de Dados é avaliada a partir de indicadores específicos.<br>Veja como cada um deles foi atendido nas capitais</p>

        <div class="tabela-scroll">
          <table class="tabela tabela-conjunto-dados">
            <thead>
              <tr>
                <th class="capital" rowspan="2">Município</th>
                <th class="pontuacao" rowspan="2">Pontuação</th>
                <th class="nivel" rowspan="2">Nível</th>
                <th class="pre-heading" colspan="10">Instrumentos de gestão e planejamento</th>
              </tr>
              <tr>
                <th class="sub-heading" v-for="i in 10" v-on="{ mouseenter: (e)=>{tip(e,{indicador: 'g' + i })}, mousemove:tipM, mouseleave: ()=>{tip(false)} }">G{{ i }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(c, index) in Object.values(capitais).sort((a,b)=>{return b.notas[current.key]-a.notas[current.key]})">
                <td v-on="{ mouseenter: (e)=>{tip(e,{capital:c,ranking:index+1})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo('/capital/'+c.slug)} }" class="capital"><span><b>{{index+1}}º</b> {{c.nome}}</span></td>
                <td v-on="{ mouseenter: (e)=>{tip(e,{capital:c,ranking:index+1})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo('/capital/'+c.slug)} }" class="pontuacao"><span>{{Math.round(c.notas[current.key])}}</span></td>
                <td v-on="{ mouseenter: (e)=>{tip(e,{capital:c,ranking:index+1})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo('/capital/'+c.slug)} }" class="nivel"><span class="label" :class="escalaGlobal(Math.round(c.notas[current.key]))">{{escalaGlobal(Math.round(c.notas[current.key]))}}</span></td>
                <td class="indicador" :class="escalaForm(c.entradas[current.key]['g1'])" v-on="{ mouseenter: (e)=>{tip(e,{capital:c,ranking:index+1})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo('/capital/'+c.slug)} }">&nbsp;</td>
                <td class="indicador" :class="escalaForm(c.entradas[current.key]['g2'])" v-on="{ mouseenter: (e)=>{tip(e,{capital:c,ranking:index+1})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo('/capital/'+c.slug)} }">&nbsp;</td>
                <td class="indicador" :class="escalaForm(c.entradas[current.key]['g3'])" v-on="{ mouseenter: (e)=>{tip(e,{capital:c,ranking:index+1})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo('/capital/'+c.slug)} }">&nbsp;</td>
                <td class="indicador" :class="escalaForm(c.entradas[current.key]['g4'])" v-on="{ mouseenter: (e)=>{tip(e,{capital:c,ranking:index+1})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo('/capital/'+c.slug)} }">&nbsp;</td>
                <td class="indicador" :class="escalaForm(c.entradas[current.key]['g5'])" v-on="{ mouseenter: (e)=>{tip(e,{capital:c,ranking:index+1})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo('/capital/'+c.slug)} }">&nbsp;</td>
                <td class="indicador" :class="escalaForm(c.entradas[current.key]['g6'])" v-on="{ mouseenter: (e)=>{tip(e,{capital:c,ranking:index+1})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo('/capital/'+c.slug)} }">&nbsp;</td>
                <td class="indicador" :class="escalaForm(c.entradas[current.key]['g7'])" v-on="{ mouseenter: (e)=>{tip(e,{capital:c,ranking:index+1})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo('/capital/'+c.slug)} }">&nbsp;</td>
                <td class="indicador" :class="escalaForm(c.entradas[current.key]['g8'])" v-on="{ mouseenter: (e)=>{tip(e,{capital:c,ranking:index+1})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo('/capital/'+c.slug)} }">&nbsp;</td>
                <td class="indicador" :class="escalaForm(c.entradas[current.key]['g9'])" v-on="{ mouseenter: (e)=>{tip(e,{capital:c,ranking:index+1})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo('/capital/'+c.slug)} }">&nbsp;</td>
                <td class="indicador" :class="escalaForm(c.entradas[current.key]['g10'])" v-on="{ mouseenter: (e)=>{tip(e,{capital:c,ranking:index+1})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo('/capital/'+c.slug)} }">&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="legenda-tabela">
          <p class="titulo">Como ler a tabela:</p>
          <p class="sim">Sim</p>
          <p class="nao">Não</p>
          <p class="nao-aplicado">Não se aplica</p>
          <p class="nao-localizado">Não há/não foram localizados dados abertos ou os dados disponíveis não atendem à descrição mínima</p>
        </div>

      </div>
  </section>

</template>