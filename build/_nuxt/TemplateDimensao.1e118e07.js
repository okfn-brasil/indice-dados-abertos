import{c as q,a as W,_ as X,b as Y}from"./Footer.d9516461.js";import{_ as Z,a as x}from"./Mapa.1b235dfc.js";import{_ as F,a as A,f as P}from"./escalaGlobal.3fe5ce9d.js";import{r as G,n as M,o as m,c as v,a,t as r,b as j,q as e,F as L,x as D,C as b,D as h,E as k,d as N,s as S,G as O,H as V,w as _,v as E,P as aa,y as R,u as ea,B as z}from"./entry.6fdaa67a.js";import{_ as H}from"./nuxt-link.4e9b9154.js";import{_ as $}from"./escalaForm.3db8852e.js";import{_ as ta}from"./ParticipeCall.6fdd1e05.js";const sa={id:"ranking"},la={class:"container-fluid wrap"},na={class:"flex justify-between items-center"},oa={class:"tag"},ia={class:"mt-2"},ca={class:"flex flex-wrap mt-12"},ra={class:"w-full md:w-6/12 md:pr-12"},ua={class:"w-full md:w-6/12 md:pl-12"},da={class:"tabela tabela-mapa",id:"tabelamapa"},ma=a("thead",null,[a("tr",null,[a("th",{class:"capital"},"Municí­pio"),a("th",null,"Pontuação"),a("th",null,"Ní­vel")])],-1),va=["data-capital"],pa={class:"capital"},ga={class:"pontuacao"},ba={class:"nivel"},ha={__name:"MapaDimensao",props:["current","currentlabel"],setup(n){const{current:u,currentlabel:I}=n,i=G(!1),c=M(()=>u?Object.values(q).map(f=>({key:f.key,nota:f.notas[u.key],nome:f.nome})):!1);return(f,T)=>{const t=A,p=Z;return m(),v("section",sa,[a("div",la,[a("div",na,[a("div",oa,r(n.currentlabel)+" "+r(n.current.key),1),j(t)]),a("h2",null,r(n.current.label),1),a("p",ia," Veja a situação geral da abertura de dados "+r(n.currentlabel=="Conjunto de Dados"?"deste":"desta")+" "+r(n.currentlabel.toLowerCase())+" nas capitais ",1),a("div",ca,[a("div",ra,[j(p,{current:n.current,valores:e(c),active:e(i)},null,8,["current","valores","active"])]),a("div",ua,[a("table",da,[ma,a("tbody",null,[(m(!0),v(L,null,D(Object.values("capitais"in f?f.capitais:e(q)).sort((g,l)=>l.notas[n.current.key]-g.notas[n.current.key]),(g,l)=>{var s;return m(),v("tr",b(h({click:()=>{("navigateTo"in f?f.navigateTo:e(k))("/capital/"+g.slug)}},!0),{"data-capital":g.key,class:"hoverable"}),[a("td",pa,[a("b",null,r(l+1)+"º",1),N(" "+r(g.nome),1)]),a("td",ga,r((s=g.notas[n.current.key])==null?void 0:s.toFixed(0)),1),a("td",ba,[a("span",{class:S(["label",("escalaGlobal"in f?f.escalaGlobal:e(F))(g.notas[n.current.key])])},r(("escalaGlobal"in f?f.escalaGlobal:e(F))(g.notas[n.current.key])),3)])],16,va)}),256))])])])])])])}}},ka=ha,ya={class:"bg-cinzaClaro"},fa={key:0,class:"conjunto-banner"},Ta={class:"container-fluid wrap text-center"},$a=a("h4",{class:"text-branco font-semibold"},"Este conjunto de dados não integra a pontuação do Índice nesta edição.",-1),Ea={class:"btn-tooltip big mt-0 cursor-pointer"},La=["data-dimensao"],Fa={key:0,class:"t13 mt-2"},Ga={class:"btn-tooltip"},ja={class:"capital"},Ia=["data-dimensao"],wa={key:0,class:"ranking"},Sa=a("button",{class:"btn-tooltip"},"explorar capital",-1),Ca={class:"container-fluid wrap"},Ma={class:"flex justify-between items-center"},Na={class:"tag"},Da={class:"mt-2"},qa={class:"tabela-scroll"},Aa={class:"tabela tabela-dimensao",id:"tabelamapa"},Ba=a("th",{class:"capital"},"Municí­pio",-1),Pa=a("th",{class:"pontuacao"},"Pontuação",-1),za=a("th",{class:"nivel"},"Ní­vel",-1),Oa=["data-dimensao"],Va={key:0},_a=["data-capital"],Ha={__name:"TabelaDimensao",props:["current","currentlabel","btnExplore"],setup(n){const{current:u,currentlabel:I,btnExplore:i}=n;G(!1),M(()=>u?Object.values(q).map(l=>({key:l.key,nota:l.notas[u.key]})):!1);const c=G(!1),f=G({x:0,y:0}),T=(l,s)=>{c.value=s||!1,t(l)},t=l=>{f.value={x:l.x,y:l.y}};let p=G(null);const g=(l,s)=>{p.value=s?l:null,document.querySelectorAll(`[data-capital="${l}"]`).forEach(o=>{o.classList.toggle("hovered",s)})};return O(()=>{document.getElementById("tabelamapa"),document.getElementById("mapatabela"),document.querySelectorAll("[data-capital]").forEach(o=>{o.addEventListener("mouseenter",()=>g(o.dataset.capital,!0)),o.addEventListener("mouseleave",()=>g(o.dataset.capital,!1))});let s=document.querySelector("#tabelamapa tbody"),d=document.querySelectorAll("#mapatabela path, #mapatabela circle");s&&(s.addEventListener("mouseenter",()=>{s.classList.add("active"),d.forEach(o=>{o.classList.add("active")})}),s.addEventListener("mouseleave",()=>{s.classList.remove("active"),d.forEach(o=>{o.classList.remove("active")})})),d&&d.forEach(o=>{o.addEventListener("mouseenter",()=>{s.classList.add("active"),d.forEach(y=>{y.classList.add("active")})}),o.addEventListener("mouseleave",()=>{s.classList.remove("active"),d.forEach(y=>{y.classList.remove("active")})})})}),(l,s)=>{const d=H,o=A;return m(),v("section",ya,[e(c)?(m(),v("div",{key:0,class:"tooltip",style:V({left:e(f).x+"px",top:e(f).y+"px"})},[n.current.score?E("",!0):(m(),v("div",fa,[a("div",Ta,[$a,a("div",Ea,[j(d,{to:"/#metodologia"},{default:_(()=>[N("Saiba mais na nota metodológica")]),_:1})])])])),e(c).dimensao?(m(),v(L,{key:1},[a("p",{class:"icon big","data-dimensao":e(c).dimensao.label},r(e(c).dimensao.label),9,La),e(c).dimensao.score?E("",!0):(m(),v("p",Fa,"Este conjunto de dados não integra a pontuação do Índice nesta edição.")),a("button",Ga,"explorar "+r(n.btnExplore),1)],64)):e(c).capital?(m(),v(L,{key:2},[a("p",ja,r(e(c).capital.nome),1),e(c).d?(m(),v(L,{key:0},[a("p",{class:"ranking icon block","data-dimensao":e(c).d.label},r(e(c).d.label),9,Ia),a("p",{class:S(["label",("escalaGlobal"in l?l.escalaGlobal:e(F))(e(c).capital.notas[e(c).d.key])])},r(Math.round(e(c).capital.notas[e(c).d.key])),3)],64)):E("",!0),e(c).ranking?(m(),v(L,{key:1},[e(c).ranking?(m(),v("p",wa,r(e(c).ranking+1)+"ª posição no ranking",1)):E("",!0),a("p",{class:S(["label",("escalaGlobal"in l?l.escalaGlobal:e(F))(e(c).capital.notas[n.current.key])])},r(Math.round(e(c).capital.notas[n.current.key])),3)],64)):E("",!0),Sa],64)):E("",!0)],4)):E("",!0),a("div",Ca,[a("div",Ma,[a("div",Na,r(n.currentlabel)+" "+r(n.current.key),1),j(o)]),a("h2",null,r(n.current.label),1),a("p",Da,"Resultados por "+r(n.currentlabel=="Categoria"?"conjunto de dados":"categoria"),1),a("div",qa,[a("table",Aa,[a("thead",null,[a("tr",null,[Ba,Pa,za,(m(!0),v(L,null,D(n.current.children,y=>(m(),v("th",b({class:["icon",{excluir:!y.score}],"data-dimensao":y.label},h({mouseenter:C=>{T(C,{dimensao:y})},mousemove:t,mouseleave:()=>{T(!1)},click:()=>{("navigateTo"in l?l.navigateTo:e(k))((l._.provides[aa]||l.$route).fullPath+"/"+y.slug)}},!0)),r(y.label),17,Oa))),256))])]),n.current?(m(),v("tbody",Va,[(m(!0),v(L,null,D(Object.values("capitais"in l?l.capitais:e(q)).sort((y,C)=>C.notas[n.current.key]-y.notas[n.current.key]),(y,C)=>(m(),v("tr",{"data-capital":y.key,class:"hoverable"},[a("td",b(h({mouseenter:w=>{T(w,{capital:y,ranking:C})},mousemove:t,mouseleave:()=>{T(!1)},click:()=>{("navigateTo"in l?l.navigateTo:e(k))("/capital/"+y.slug)}},!0),{class:"capital"}),[a("span",null,[a("b",null,r(C+1)+"º",1),N(" "+r(y.nome),1)])],16),a("td",b(h({mouseenter:w=>{T(w,{capital:y,ranking:C})},mousemove:t,mouseleave:()=>{T(!1)},click:()=>{("navigateTo"in l?l.navigateTo:e(k))("/capital/"+y.slug)}},!0),{class:"pontuacao"}),[a("span",null,r(Math.round(y.notas[n.current.key])),1)],16),a("td",b(h({mouseenter:w=>{T(w,{capital:y,ranking:C})},mousemove:t,mouseleave:()=>{T(!1)},click:()=>{("navigateTo"in l?l.navigateTo:e(k))("/capital/"+y.slug)}},!0),{class:"nivel"}),[a("span",{class:S(["label",("escalaGlobal"in l?l.escalaGlobal:e(F))(y.notas[n.current.key])])},r(("escalaGlobal"in l?l.escalaGlobal:e(F))(y.notas[n.current.key])),3)],16),(m(!0),v(L,null,D(n.current.children,w=>(m(),v("td",b({class:["dimensao",{excluir:!w.score}]},h({mouseenter:B=>{T(B,{capital:y,d:w})},mousemove:t,mouseleave:()=>{T(!1)}},!0)),[a("span",{class:S(["label",("escalaGlobal"in l?l.escalaGlobal:e(F))(y.notas[w.key])])},r(Math.round(y.notas[w.key])),3)],16))),256))],8,_a))),256))])):E("",!0)])])])])}}},Ra=Ha,Ja={key:0,class:"conjunto-banner"},Ka={class:"container-fluid wrap text-center"},Qa=a("h4",{class:"text-branco font-semibold"},"Este conjunto de dados não integra a pontuação do Índice nesta edição.",-1),Ua={class:"btn-tooltip big mt-0 cursor-pointer"},Wa={class:"bg-cinzaClaro"},Xa=["data-dimensao"],Ya=a("button",{class:"btn-tooltip"},"explorar dimensão",-1),Za={class:"capital"},xa=["data-dimensao"],ae={key:0,class:"ranking"},ee=a("button",{class:"btn-tooltip"},"explorar capital",-1),te={class:"container-fluid wrap"},se={class:"flex justify-between items-center"},le={class:"tag"},ne=a("p",{class:"mt-2"},"Veja como cada critério foi atendido por este conjunto de dados nas capitais",-1),oe={class:"tabela-scroll"},ie={class:"tabela tabela-conjunto-dados"},ce=a("thead",null,[a("tr",null,[a("th",{class:"capital",rowspan:"2"},"Município"),a("th",{class:"pontuacao",rowspan:"2"},"Pontuação"),a("th",{class:"nivel",rowspan:"2"},"Nível"),a("th",{class:"pre-heading",colspan:"3"},"Acesso"),a("th",{class:"pre-heading"},"Licenciamento"),a("th",{class:"pre-heading",colspan:"2"},"Documentação"),a("th",{class:"pre-heading"},"Formato"),a("th",{class:"pre-heading",colspan:"2"},"Detalhamento"),a("th",{class:"pre-heading",colspan:"2"},"Temporalidade")]),a("tr",null,[a("th",{class:"sub-heading"},[a("span",null,"I1"),a("div",{class:"tooltip"},[a("p",{class:"conjunto"},"I1"),a("p",{class:"descricao"},"Os registros dos conjuntos de dados estão geolocalizados?")])]),a("th",{class:"sub-heading"},"I2"),a("th",{class:"sub-heading"},"I3"),a("th",{class:"sub-heading"},"I4"),a("th",{class:"sub-heading"},"I5"),a("th",{class:"sub-heading"},"I6"),a("th",{class:"sub-heading"},"I7"),a("th",{class:"sub-heading"},"I8"),a("th",{class:"sub-heading"},"I9"),a("th",{class:"sub-heading"},"I10"),a("th",{class:"sub-heading"},"I11")])],-1),re=R('<div class="legenda-tabela"><p class="titulo">Como ler a tabela:</p><p class="sim">Sim</p><p class="nao">Não</p><p class="nao-aplicado">Não se aplica</p><p class="nao-localizado">Não há/não foram localizados dados abertos ou os dados disponíveis não atendem à descrição mínima</p></div>',1),ue={__name:"TabelaConjuntoDados",props:["current","currentlabel"],setup(n){const u=G(!1),I=G({x:0,y:0}),i=(t,p)=>{u.value=p||!1,c(t)},c=t=>{I.value={x:t.x,y:t.y}};let f=G(null);const T=(t,p)=>{f.value=p?t:null,document.querySelectorAll(`[data-capital="${t}"]`).forEach(l=>{l.classList.toggle("hovered",p)})};return O(()=>{document.getElementById("tabelamapa"),document.getElementById("mapatabela"),document.querySelectorAll("[data-capital]").forEach(l=>{l.addEventListener("mouseenter",()=>T(l.dataset.capital,!0)),l.addEventListener("mouseleave",()=>T(l.dataset.capital,!1))});let p=document.querySelector("#tabelamapa tbody"),g=document.querySelectorAll("#mapatabela path, #mapatabela circle");p&&(p.addEventListener("mouseenter",()=>{p.classList.add("active"),g.forEach(l=>{l.classList.add("active")})}),p.addEventListener("mouseleave",()=>{p.classList.remove("active"),g.forEach(l=>{l.classList.remove("active")})})),g&&g.forEach(l=>{l.addEventListener("mouseenter",()=>{p.classList.add("active"),g.forEach(s=>{s.classList.add("active")})}),l.addEventListener("mouseleave",()=>{p.classList.remove("active"),g.forEach(s=>{s.classList.remove("active")})})})}),(t,p)=>{const g=H,l=A;return m(),v(L,null,[n.current.score?E("",!0):(m(),v("div",Ja,[a("div",Ka,[Qa,a("div",Ua,[j(g,{to:"/#metodologia"},{default:_(()=>[N("Saiba mais na nota metodológica")]),_:1})])])])),a("section",Wa,[e(u)?(m(),v("div",{key:0,class:"tooltip",style:V({left:e(I).x+"px",top:e(I).y+"px"})},[e(u).dimensao?(m(),v(L,{key:0},[a("p",{class:"icon big","data-dimensao":e(u).dimensao.label},r(e(u).dimensao.label),9,Xa),Ya],64)):e(u).capital?(m(),v(L,{key:1},[a("p",Za,r(e(u).capital.nome),1),e(u).d?(m(),v(L,{key:0},[a("p",{class:"ranking icon block","data-dimensao":e(u).d.label},r(e(u).d.label),9,xa),a("p",{class:S(["label",("escalaGlobal"in t?t.escalaGlobal:e(F))(e(u).capital.notas[e(u).d.key])])},r(Math.round(e(u).capital.notas[e(u).d.key])),3)],64)):E("",!0),e(u).ranking?(m(),v(L,{key:1},[e(u).ranking?(m(),v("p",ae,r(e(u).ranking)+"ª posição no ranking",1)):E("",!0),a("p",{class:S(["label",("escalaGlobal"in t?t.escalaGlobal:e(F))(e(u).capital[n.current.key])])},r(e(u).capital[n.current.key]),3)],64)):E("",!0),ee],64)):E("",!0)],4)):E("",!0),a("div",te,[a("div",se,[a("div",le,r(n.currentlabel)+" "+r(n.current.key),1),j(l)]),a("h2",null,r(n.current.label),1),ne,a("div",oe,[a("table",ie,[ce,a("tbody",null,[(m(!0),v(L,null,D(Object.values("capitais"in t?t.capitais:e(q)).sort((s,d)=>d.notas[n.current.key]-s.notas[n.current.key]),(s,d)=>(m(),v("tr",null,[a("td",b(h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0),{class:"capital"}),[a("span",null,[a("b",null,r(d+1)+"º",1),N(" "+r(s.nome),1)])],16),a("td",b(h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0),{class:"pontuacao"}),[a("span",null,r(Math.round(s.notas[n.current.key])),1)],16),a("td",b(h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0),{class:"nivel"}),[a("span",{class:S(["label",("escalaGlobal"in t?t.escalaGlobal:e(F))(s.notas[n.current.key])])},r(("escalaGlobal"in t?t.escalaGlobal:e(F))(s.notas[n.current.key])),3)],16),a("td",b({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(s.entradas[n.current.key].i1)]},h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0))," ",16),a("td",b({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(s.entradas[n.current.key].i2)]},h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0))," ",16),a("td",b({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(s.entradas[n.current.key].i3)]},h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0))," ",16),a("td",b({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(s.entradas[n.current.key].i4)]},h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0))," ",16),a("td",b({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(s.entradas[n.current.key].i5)]},h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0))," ",16),a("td",b({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(s.entradas[n.current.key].i6)]},h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0))," ",16),a("td",b({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(s.entradas[n.current.key].i7)]},h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0))," ",16),a("td",b({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(s.entradas[n.current.key].i8)]},h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0))," ",16),a("td",b({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(s.entradas[n.current.key].i9)]},h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0))," ",16),a("td",b({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(s.entradas[n.current.key].i10)]},h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0))," ",16),a("td",b({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(s.entradas[n.current.key].i11)]},h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0))," ",16)]))),256))])])]),re])])],64)}}},de=ue,me={key:0,class:"conjunto-banner"},ve={class:"container-fluid wrap text-center"},pe=a("h4",{class:"text-branco font-semibold"},"Este conjunto de dados não integra a pontuação do Índice nesta edição.",-1),ge={class:"btn-tooltip big mt-0 cursor-pointer"},be={class:"bg-cinzaClaro"},he=["data-dimensao"],ke=a("button",{class:"btn-tooltip"},"explorar dimensão",-1),ye={class:"capital"},fe=["data-dimensao"],Te={key:0,class:"ranking"},$e=a("button",{class:"btn-tooltip"},"explorar capital",-1),Ee={class:"container-fluid wrap"},Le={class:"flex justify-between items-center"},Fe={class:"tag"},Ge=a("div",{class:"tag"},"Indicadores específicos",-1),je=a("p",{class:"mt-2"},[N("A dimensão de Governança de Dados é avaliada a partir de indicadores específicos."),a("br"),N("Veja como cada um deles foi atendido nas capitais")],-1),Ie={class:"tabela-scroll"},we={class:"tabela tabela-conjunto-dados"},Se=a("thead",null,[a("tr",null,[a("th",{class:"capital",rowspan:"2"},"Município"),a("th",{class:"pontuacao",rowspan:"2"},"Pontuação"),a("th",{class:"nivel",rowspan:"2"},"Nível"),a("th",{class:"pre-heading",colspan:"10"},"Acesso")]),a("tr",null,[a("th",{class:"sub-heading"},"G1"),a("th",{class:"sub-heading"},"G2"),a("th",{class:"sub-heading"},"G3"),a("th",{class:"sub-heading"},"G4"),a("th",{class:"sub-heading"},"G5"),a("th",{class:"sub-heading"},"G6"),a("th",{class:"sub-heading"},"G7"),a("th",{class:"sub-heading"},"G8"),a("th",{class:"sub-heading"},"G9"),a("th",{class:"sub-heading"},"G10")])],-1),Ce=R('<div class="legenda-tabela"><p class="titulo">Como ler a tabela:</p><p class="sim">Sim</p><p class="nao">Não</p><p class="nao-aplicado">Não se aplica</p><p class="nao-localizado">Não há/não foram localizados dados abertos ou os dados disponíveis não atendem à descrição mínima</p></div>',1),Me={__name:"TabelaGovernanca",props:["current","currentlabel"],setup(n){const u=G(!1),I=G({x:0,y:0}),i=(t,p)=>{u.value=p||!1,c(t)},c=t=>{I.value={x:t.x,y:t.y}};let f=G(null);const T=(t,p)=>{f.value=p?t:null,document.querySelectorAll(`[data-capital="${t}"]`).forEach(l=>{l.classList.toggle("hovered",p)})};return O(()=>{document.getElementById("tabelamapa"),document.getElementById("mapatabela"),document.querySelectorAll("[data-capital]").forEach(l=>{l.addEventListener("mouseenter",()=>T(l.dataset.capital,!0)),l.addEventListener("mouseleave",()=>T(l.dataset.capital,!1))});let p=document.querySelector("#tabelamapa tbody"),g=document.querySelectorAll("#mapatabela path, #mapatabela circle");p&&(p.addEventListener("mouseenter",()=>{p.classList.add("active"),g.forEach(l=>{l.classList.add("active")})}),p.addEventListener("mouseleave",()=>{p.classList.remove("active"),g.forEach(l=>{l.classList.remove("active")})})),g&&g.forEach(l=>{l.addEventListener("mouseenter",()=>{p.classList.add("active"),g.forEach(s=>{s.classList.add("active")})}),l.addEventListener("mouseleave",()=>{p.classList.remove("active"),g.forEach(s=>{s.classList.remove("active")})})})}),(t,p)=>{const g=H,l=A;return m(),v(L,null,[n.current.score?E("",!0):(m(),v("div",me,[a("div",ve,[pe,a("div",ge,[j(g,{to:"/#metodologia"},{default:_(()=>[N("Saiba mais na nota metodológica")]),_:1})])])])),a("section",be,[e(u)?(m(),v("div",{key:0,class:"tooltip",style:V({left:e(I).x+"px",top:e(I).y+"px"})},[e(u).dimensao?(m(),v(L,{key:0},[a("p",{class:"icon big","data-dimensao":e(u).dimensao.label},r(e(u).dimensao.label),9,he),ke],64)):e(u).capital?(m(),v(L,{key:1},[a("p",ye,r(e(u).capital.nome),1),e(u).d?(m(),v(L,{key:0},[a("p",{class:"ranking icon block","data-dimensao":e(u).d.label},r(e(u).d.label),9,fe),a("p",{class:S(["label",("escalaGlobal"in t?t.escalaGlobal:e(F))(e(u).capital.notas[e(u).d.key])])},r(Math.round(e(u).capital.notas[e(u).d.key])),3)],64)):E("",!0),e(u).ranking?(m(),v(L,{key:1},[e(u).ranking?(m(),v("p",Te,r(e(u).ranking)+"ª posição no ranking",1)):E("",!0),a("p",{class:S(["label",("escalaGlobal"in t?t.escalaGlobal:e(F))(e(u).capital[n.current.key])])},r(e(u).capital[n.current.key]),3)],64)):E("",!0),$e],64)):E("",!0)],4)):E("",!0),a("div",Ee,[a("div",Le,[a("div",Fe,r(n.currentlabel)+" "+r(n.current.key),1),j(l)]),a("h2",null,r(n.current.label),1),Ge,je,a("div",Ie,[a("table",we,[Se,a("tbody",null,[(m(!0),v(L,null,D(Object.values("capitais"in t?t.capitais:e(q)).sort((s,d)=>d.notas[n.current.key]-s.notas[n.current.key]),(s,d)=>(m(),v("tr",null,[a("td",b(h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0),{class:"capital"}),[a("span",null,[a("b",null,r(d+1)+"º",1),N(" "+r(s.nome),1)])],16),a("td",b(h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0),{class:"pontuacao"}),[a("span",null,r(Math.round(s.notas[n.current.key])),1)],16),a("td",b(h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0),{class:"nivel"}),[a("span",{class:S(["label",("escalaGlobal"in t?t.escalaGlobal:e(F))(s.notas[n.current.key])])},r(("escalaGlobal"in t?t.escalaGlobal:e(F))(s.notas[n.current.key])),3)],16),a("td",b({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(s.entradas[n.current.key].g1)]},h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0))," ",16),a("td",b({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(s.entradas[n.current.key].g2)]},h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0))," ",16),a("td",b({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(s.entradas[n.current.key].g3)]},h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0))," ",16),a("td",b({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(s.entradas[n.current.key].g4)]},h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0))," ",16),a("td",b({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(s.entradas[n.current.key].g5)]},h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0))," ",16),a("td",b({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(s.entradas[n.current.key].g6)]},h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0))," ",16),a("td",b({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(s.entradas[n.current.key].g7)]},h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0))," ",16),a("td",b({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(s.entradas[n.current.key].g8)]},h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0))," ",16),a("td",b({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(s.entradas[n.current.key].g9)]},h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0))," ",16),a("td",b({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(s.entradas[n.current.key].g10)]},h({mouseenter:o=>{i(o,{capital:s,ranking:d})},mousemove:c,mouseleave:()=>{i(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+s.slug)}},!0))," ",16)]))),256))])])]),Ce])])],64)}}},Ne=Me,De={__name:"TemplateDimensao",props:["btnExplore"],setup(n){const u=ea();let I=G(u.params.dimensao),i=M(()=>I.value?P(W,"slug",I.value):!1),c=G(u.params.categoria),f=M(()=>i.value?i.value.children:!1),T=M(()=>f.value&&c.value?P(f.value,"slug",c.value):!1),t=G(u.params.conjunto_de_dados),p=M(()=>T.value?T.value.children:!1),g=M(()=>p.value&&t.value?P(p.value,"slug",t.value):!1),l=M(()=>t.value?g.value:c.value?T.value:i.value),s=M(()=>t.value?"Conjunto de Dados":c.value?"Categoria":"Dimensão");return(d,o)=>{const y=X,C=x,w=ka,B=Ra,J=de,K=Ne,Q=ta,U=Y;return m(),v(L,null,[j(y),a("main",null,[j(C,{class:"pt-11"}),j(w,{current:e(l),currentlabel:e(s)},null,8,["current","currentlabel"]),e(l)&&e(l).children[1]&&e(i).key!=15?(m(),z(B,{key:0,current:e(l),currentlabel:e(s),btnExplore:n.btnExplore},null,8,["current","currentlabel","btnExplore"])):e(l)&&e(i).key!=15?(m(),z(J,{key:1,current:e(l),currentlabel:e(s)},null,8,["current","currentlabel"])):e(l)&&e(i).key==15?(m(),z(K,{key:2,current:e(l),currentlabel:e(s)},null,8,["current","currentlabel"])):E("",!0),j(Q)]),j(U)],64)}}},_e=De;export{_e as _};
