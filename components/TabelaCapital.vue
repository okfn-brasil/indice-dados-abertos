<script setup>
const route = useRoute()
let capital_slug = ref(route.params.capital);
let capital = computed(()=>{return capital_slug.value ? filterByValue(capitais,'slug',capital_slug.value):false;});
let active = ref(conjuntos[1]);

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

  <section class="bg-cinzaClaro" id="avaliacao">

    <div class="tooltip" v-if="tooltip" :style="{left: tipPos.x+'px', top: tipPos.y+'px'}">

      <div v-if="tooltip.indicador">
          <p class="ranking">{{tooltipIndicador(tooltip.indicador)}}</p>
      </div>

      <div v-else-if="tooltip.dimensao">
        <p class="icon big" :data-dimensao="tooltip.dimensao.label">{{tooltip.dimensao.label}}</p>
        <p v-if="!tooltip.dimensao.score" class="t13 mt-2">Este conjunto de dados não integra a pontuação do Índice nesta edição.</p>
        <button class="btn-tooltip">explorar dimensão</button>
      </div>

      <div v-else-if="!tooltip.d.score" >
          <p class="ranking">Este conjunto de dados não integra a pontuação do Índice nesta edição.</p>
          <button class="btn-tooltip big">saiba mais na nota metodológica</button>
      </div>
    
    </div>

    <div class="container-fluid wrap">

      <ul class="icons-tab">
        <li class="icon" v-for="c in conjuntos" :class="{'active':c.key==active.key}" :data-dimensao="c.label" v-on="{ mouseenter: (e)=>{tip(e,{dimensao:c})}, mousemove:tipM, mouseleave: ()=>{tip(false)}, click:()=>{active=c} }">{{c.label}}</li>
      </ul>

      <div v-for="c in [active]">
        <div class="flex justify-between items-center">
          <div class="tag">Dimensão {{c.key}}</div>
          <Share/>
        </div>
        <h2>{{c.label}}</h2>
        <p class="mt-2">Resultados por indicadores</p>

        <div class="tabela-scroll" v-for="cat in c.children" v-if="c.key!=15">
          <div class="header-tabela">
            <h4>{{cat.key}} {{cat.label}}</h4>
            <div>
              <p class="pontuacao">{{Math.round(capital.notas[c.key])}}</p>
              <span class="label" :class="escalaGlobal(Math.round(capital.notas[c.key]))">{{escalaGlobal(Math.round(capital.notas[c.key]))}}</span>
            </div>
          </div>
          <table class="tabela tabela-capital" id="tabelamapa">
            <thead>
              <tr>
                <th></th>
                <th class="pre-heading" colspan="3">Acesso</th>
                <th class="pre-heading">Licenciamento</th>
                <th class="pre-heading" colspan="2">Documentação</th>
                <th class="pre-heading">Formato</th>
                <th class="pre-heading" colspan="2">Detalhamento</th>
                <th class="pre-heading" colspan="2">Temporalidade</th>
              </tr>
              <tr>
                <th></th>
                <th class="sub-heading" v-for="i in 11" v-on="{ mouseenter: (e)=>{tip(e,{indicador: 'i' + i })}, mousemove:tipM, mouseleave: ()=>{tip(false)} }">I{{ i }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="con in cat.children">
                
                <td class="item" v-on="!con.score ? { mouseenter: (e) => { tip(e, { d: con }) }, mousemove: tipM, mouseleave: () => { tip(false) }, } : {}">
                  <a class="w-full" :class="{'excluir':!con.score}" v-if="!con.score" :href="'https://go.ok.org.br/odi2023-nota'" target="blank">{{con.key}} {{con.label}}</a>
                  <span v-else>{{con.key}} {{con.label}}</span>
                </td>

                <td class="indicador" :class="escalaForm(capital.entradas[con.key]['i1'])"></td>
                <td class="indicador" :class="escalaForm(capital.entradas[con.key]['i2'])"></td>
                <td class="indicador" :class="escalaForm(capital.entradas[con.key]['i3'])"></td>
                <td class="indicador" :class="escalaForm(capital.entradas[con.key]['i4'])"></td>
                <td class="indicador" :class="escalaForm(capital.entradas[con.key]['i5'])"></td>
                <td class="indicador" :class="escalaForm(capital.entradas[con.key]['i6'])"></td>
                <td class="indicador" :class="escalaForm(capital.entradas[con.key]['i7'])"></td>
                <td class="indicador" :class="escalaForm(capital.entradas[con.key]['i8'])"></td>
                <td class="indicador" :class="escalaForm(capital.entradas[con.key]['i9'])"></td>
                <td class="indicador" :class="escalaForm(capital.entradas[con.key]['i10'])"></td>
                <td class="indicador" :class="escalaForm(capital.entradas[con.key]['i11'])"></td>
                <td class="pontuacao">{{Math.round(capital.notas[con.key])}}</td>
                <td class="nivel"><span class="label" :class="escalaGlobal(Math.round(capital.notas[con.key]))">{{escalaGlobal(Math.round(capital.notas[con.key]))}}</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="tabela-scroll" v-if="c.key==15">
          <div class="header-tabela">
            <h4>{{c.key}} {{c.label}}</h4>
            <div>
              <p class="pontuacao">{{Math.round(capital.notas[c.key])}}</p>
              <span class="label" :class="escalaGlobal(Math.round(capital.notas[c.key]))">{{escalaGlobal(Math.round(capital.notas[c.key]))}}</span>
            </div>
          </div>
          <table class="tabela tabela-capital" id="tabelamapa">
            <thead>
              <tr>
                <th class="pre-heading" colspan="10">Instrumentos de gestão e planejamento</th>
              </tr>
              <tr>
                <th class="sub-heading" v-for="i in 10" v-on="{ mouseenter: (e)=>{tip(e,{indicador: 'g' + i })}, mousemove:tipM, mouseleave: ()=>{tip(false)} }">G{{ i }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="indicador" :class="escalaForm(capital.entradas[15]['g1'])"></td>
                <td class="indicador" :class="escalaForm(capital.entradas[15]['g2'])"></td>
                <td class="indicador" :class="escalaForm(capital.entradas[15]['g3'])"></td>
                <td class="indicador" :class="escalaForm(capital.entradas[15]['g4'])"></td>
                <td class="indicador" :class="escalaForm(capital.entradas[15]['g5'])"></td>
                <td class="indicador" :class="escalaForm(capital.entradas[15]['g6'])"></td>
                <td class="indicador" :class="escalaForm(capital.entradas[15]['g7'])"></td>
                <td class="indicador" :class="escalaForm(capital.entradas[15]['g8'])"></td>
                <td class="indicador" :class="escalaForm(capital.entradas[15]['g9'])"></td>
                <td class="indicador" :class="escalaForm(capital.entradas[15]['g10'])"></td>
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

    </div>
  </section>

</template>