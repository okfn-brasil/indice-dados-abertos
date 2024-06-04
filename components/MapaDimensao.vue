<script setup>
  const { current,currentlabel } = defineProps(["current","currentlabel"])
  const active = ref(false);
  const valores = computed(()=>{ return current ? Object.values(capitais).map(c=>{ return {key: c.key,nota: c.notas[current.key], nome:c.nome}; }) : false});
</script>
<template>
  <section id="ranking">
    <div class="container-fluid wrap">
      <div class="flex justify-between items-center">
        <div class="tag">{{currentlabel}} {{current.key}}</div>
        <Share />
      </div>
      <h2>{{current.label}}</h2>
      <p class="mt-2">
        Veja a situação geral da abertura de dados {{currentlabel=='Conjunto de Dados'?'deste':'desta'}} {{currentlabel.toLowerCase()}} nas capitais
      </p>
      <div class="flex flex-wrap mt-12">
        <div class="w-full md:w-6/12 md:pr-12">
          <!-- Mapa -->
          <Mapa :current="current" :valores="valores" :active="active"/>
        </div>
        <div class="w-full md:w-6/12 md:pl-12">

          <table class="tabela tabela-mapa" id="tabelamapa">
            <thead>
              <tr>
                <th class="capital">Municí­pio</th>
                <th>Pontuação</th>
                <th>Ní­vel</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(c,index) in sortDim(Object.values(capitais),current.key)" v-on="{click:()=>{navigateTo('/capital/'+c.slug)}}" :data-capital="c.key" class="hoverable">
                <td class="capital"><b>{{index+1}}º</b> {{c.nome}}</td>
                <td class="pontuacao">{{c.notas[current.key]?.toFixed(0)}}</td>
                <td class="nivel"><span class="label" :class="escalaGlobal(Math.round(c.notas[current.key]))">{{escalaGlobal(Math.round(c.notas[current.key]))}}</span></td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  </section>
</template>