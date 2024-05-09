<script setup>
const route = useRoute()
let capital_slug = ref(route.params.capital);
let capital = computed(()=>{return capital_slug.value ? filterByValue(capitais,'slug',capital_slug.value):false;});
let active = ref(conjuntos[1])


</script>
<template>

  <section class="bg-cinzaClaro" id="avaliacao">
    <div class="container-fluid wrap">

      <ul class="icons-tab">
        <li class="icon" v-for="c in conjuntos" :class="{'active':c.key==active.key}" :data-dimensao="c.label" @click="active=c">{{c.label}}</li>
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
              <span class="label" :class="escalaGlobal(capital.notas[c.key])">{{escalaGlobal(capital.notas[c.key])}}</span>
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
                <th class="sub-heading">
                  <span>I1</span>
                  <div class="tooltip">
                    <p class="conjunto">I1</p>
                    <p class="descricao">Os registros dos conjuntos de dados estão geolocalizados?</p>
                  </div>
                </th>
                <th class="sub-heading">I2</th>
                <th class="sub-heading">I3</th>
                <th class="sub-heading">I4</th>
                <th class="sub-heading">I5</th>
                <th class="sub-heading">I6</th>
                <th class="sub-heading">I7</th>
                <th class="sub-heading">I8</th>
                <th class="sub-heading">I9</th>
                <th class="sub-heading">I10</th>
                <th class="sub-heading">I11</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="con in cat.children">
                
                <td class="item" :class="{'excluir':!con.score}">{{con.key}} {{con.label}}</td>

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
                <td class="nivel"><span class="label" :class="escalaGlobal(capital.notas[con.key])">{{escalaGlobal(capital.notas[con.key])}}</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="tabela-scroll" v-if="c.key==15">
          <div class="header-tabela">
            <h4>{{c.key}} {{c.label}}</h4>
            <div>
              <p class="pontuacao">{{Math.round(capital.notas[c.key])}}</p>
              <span class="label" :class="escalaGlobal(capital.notas[c.key])">{{escalaGlobal(capital.notas[c.key])}}</span>
            </div>
          </div>
          <table class="tabela tabela-capital" id="tabelamapa">
            <thead>
              <tr>
                <th class="pre-heading" colspan="10">Instrumentos de gestão e planejamento</th>
              </tr>
              <tr>
                <th class="sub-heading">G1</th>
                <th class="sub-heading">G2</th>
                <th class="sub-heading">G3</th>
                <th class="sub-heading">G4</th>
                <th class="sub-heading">G5</th>
                <th class="sub-heading">G6</th>
                <th class="sub-heading">G7</th>
                <th class="sub-heading">G8</th>
                <th class="sub-heading">G9</th>
                <th class="sub-heading">G10</th>
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