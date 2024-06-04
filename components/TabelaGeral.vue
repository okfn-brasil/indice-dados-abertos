<script setup>
 const tooltip = ref(false);
 const tipPos = ref({x:0,y:0});
 const tip = (e,d)=>{
  tooltip.value = d ? d : false;
  tipM(e);
 }
 const tipM = (e)=>{
  tipPos.value = {x:e.x, y:e.y}
 }
</script>
<template>
  <section class="bg-cinzaClaro">
    <div class="tooltip" v-if="tooltip" :style="{left: tipPos.x+'px', top: tipPos.y+'px'}">
      <template v-if="tooltip.dimensao">
        <p class="icon big" :data-dimensao="tooltip.dimensao.label">{{tooltip.dimensao.label}}</p>
        <button class="btn-tooltip">explorar dimensão</button>
      </template>
      <template v-else-if="tooltip.capital">
        <p class="capital">{{tooltip.capital.nome}}</p>
        <template v-if="tooltip.d">
          <p class="ranking icon block" :data-dimensao="tooltip.d.label">{{tooltip.d.label}}</p>
          <p class="label" :class="escalaGlobal(Math.round(tooltip.capital.notas[tooltip.d.key]))">{{Math.round(tooltip.capital.notas[tooltip.d.key])}}</p>
        </template>
        <template v-if="tooltip.ranking">
          <p class="ranking" v-if="tooltip.ranking">{{tooltip.ranking}}ª posição no ranking</p>
          <p class="label" :class="escalaGlobal(Math.round(tooltip.capital.geral))">{{Math.round(tooltip.capital.geral)}}</p>
        </template>
        <button class="btn-tooltip">explorar capital</button>
      </template>
    </div>
      <div class="container-fluid wrap">
        <div class="flex justify-between items-center">
          <div class="tag">ODI cidades 2023</div>
          <Share/>
        </div>
        <h2>Visão Geral</h2>
        <p class="mt-2">Veja o resultado da avaliação por dimensão temática.</p>
        <p>Para saber mais, clique no nome da cidade ou no tema que deseja explorar</p>

        <div class="tabela-scroll">
          <table class="tabela tabela-geral">
            <thead>
              <tr>
                <th class="capital">Município</th>
                <th>Pontuação</th>
                <th>Nível</th>
                <th class="icon" v-for="d in conjuntos" :data-dimensao="d.label" v-on="{ mouseenter: (e)=>{tip(e,{dimensao:d})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo('/dimensao/'+d.slug)} }"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(c, index) in sortDim(Object.values(capitais),'geral')">
                <td v-on="{ mouseenter: (e)=>{tip(e,{capital:c,ranking:index+1})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo('/capital/'+c.slug)} }" class="capital"><span><b>{{index+1}}º</b> {{c.nome}}</span></td>
                <td v-on="{ mouseenter: (e)=>{tip(e,{capital:c,ranking:index+1})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo('/capital/'+c.slug)} }" class="pontuacao"><span>{{c.geral}}</span></td>
                <td v-on="{ mouseenter: (e)=>{tip(e,{capital:c,ranking:index+1})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo('/capital/'+c.slug)} }" class="nivel"><span class="label" :class="escalaGlobal(Math.round(c.geral))">{{escalaGlobal(Math.round(c.geral))}}</span></td>
                <td class="dimensao" v-for="d in conjuntos" v-on="{ mouseenter: (e)=>{tip(e,{capital:c,d:d})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{navigateTo('/capital/'+c.slug)} }"><span class="label" :class="escalaGlobal(Math.round(c.notas[d.key]))">{{Math.round(c.notas[d.key])}}</span></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>

</template>

<script>
  export default {
    name: 'TabelaGeralApp',
  }
</script>
  