import{_ as l,o as s,c as r,y as h,a as o,F as u,x as g,v as m,t as i}from"./entry.45891b43.js";const p={},f={id:"metodologia"},b=h('<div class="container-fluid wrap"><h3>Como funciona o Índice de Dados Abertos para Cidades 2023</h3><div class="card-docs"><a href="https://go.ok.org.br/odi2023-nota" target="blank" class="card w-full md:3/12"><h4>Nota Metodológica</h4><button>baixar</button></a><a href="https://go.ok.org.br/odi2023-base" target="blank" class="card w-full md:3/12"><h4>Relação de critérios e conjuntos de dados avaliados</h4><button>baixar</button></a><a href="https://go.ok.org.br/odi2023-relatorio" target="blank" class="card w-full md:3/12"><h4>Relatório</h4><button>baixar</button></a><a href="https://go.ok.org.br/odi2023-resultados" target="blank" class="card w-full md:3/12"><h4>Dados da avaliação</h4><button>baixar</button></a></div></div>',1),k=[b];function v(e,t){return s(),r("section",f,k)}const j=l(p,[["render",v]]),w={data(){return{posts:[]}},async created(){try{const t=await(await fetch("https://ok.org.br/wp-json/wp/v2/noticia?tags[]=892&per_page=4")).json();this.posts=t}catch(e){console.error("Error fetching posts:",e)}},methods:{formatDate(e){const t=new Date(e),c=String(t.getDate()).padStart(2,"0"),d=t.toLocaleDateString("pt-BR",{month:"short"}).replace(".",""),n=t.getFullYear();return`${c} ${d} de ${n}`}}},x={class:"bg-azul",id:"noticias"},$={class:"container-fluid wrap"},y=o("h3",null,"Notícias",-1),D={class:"card-post"},C=["href"],F=["src"],N={class:"date"},S={class:"title"};function A(e,t,c,d,n,_){return s(),r("section",x,[o("div",$,[y,o("div",D,[(s(!0),r(u,null,g(n.posts,a=>(s(),r("a",{key:a.id,href:a.link,class:"card",target:"blank"},[o("figure",null,[a.ACF.imagem.url&&a.ACF.imagem.url?(s(),r("img",{key:0,src:a.ACF.imagem.url},null,8,F)):m("",!0)]),o("div",null,[o("p",N,i(_.formatDate(a.date)),1),o("p",S,i(a.title.rendered),1)])],8,C))),128))])])])}const R=l(w,[["render",A]]);export{j as _,R as a};
