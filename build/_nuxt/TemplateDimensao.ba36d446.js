import{c as C,a as W,_ as X,b as Y}from"./Footer.1ac64b64.js";import{_ as Z,a as _}from"./Mapa.dc602513.js";import{_ as L,a as q,f as B}from"./escalaGlobal.888691a0.js";import{r as j,n as S,o as d,c as m,a as n,t as c,b as I,q as e,F as f,x as w,A as g,B as b,E as k,d as D,s as N,G as z,z as O,v as E,P as x,y as V,u as aa,D as P}from"./entry.45891b43.js";import{_ as R,a as $}from"./escalaForm.aa92f8fc.js";import{_ as ea}from"./ParticipeCall.1b7a3acd.js";const ta={id:"ranking"},na={class:"container-fluid wrap"},sa={class:"flex justify-between items-center"},oa={class:"tag"},la={class:"mt-2"},ia={class:"flex flex-wrap mt-12"},ra={class:"w-full md:w-6/12 md:pr-12"},ca={class:"w-full md:w-6/12 md:pl-12"},ua={class:"tabela tabela-mapa",id:"tabelamapa"},da=n("thead",null,[n("tr",null,[n("th",{class:"capital"},"Municí­pio"),n("th",null,"Pontuação"),n("th",null,"Ní­vel")])],-1),ma=["data-capital"],va={class:"capital"},pa={class:"pontuacao"},ga={class:"nivel"},ba={__name:"MapaDimensao",props:["current","currentlabel"],setup(s){const{current:u,currentlabel:M}=s,o=j(!1),r=S(()=>u?Object.values(C).map(y=>({key:y.key,nota:y.notas[u.key],nome:y.nome})):!1);return(y,T)=>{const t=q,p=Z;return d(),m("section",ta,[n("div",na,[n("div",sa,[n("div",oa,c(s.currentlabel)+" "+c(s.current.key),1),I(t)]),n("h2",null,c(s.current.label),1),n("p",la," Veja a situação geral da abertura de dados "+c(s.currentlabel=="Conjunto de Dados"?"deste":"desta")+" "+c(s.currentlabel.toLowerCase())+" nas capitais ",1),n("div",ia,[n("div",ra,[I(p,{current:s.current,valores:e(r),active:e(o)},null,8,["current","valores","active"])]),n("div",ca,[n("table",ua,[da,n("tbody",null,[(d(!0),m(f,null,w(Object.values("capitais"in y?y.capitais:e(C)).sort((h,a)=>Math.round(a.notas[s.current.key])-Math.round(h.notas[s.current.key])),(h,a)=>{var l;return d(),m("tr",g(b({click:()=>{("navigateTo"in y?y.navigateTo:e(k))("/capital/"+h.slug)}},!0),{"data-capital":h.key,class:"hoverable"}),[n("td",va,[n("b",null,c(a+1)+"º",1),D(" "+c(h.nome),1)]),n("td",pa,c((l=h.notas[s.current.key])==null?void 0:l.toFixed(0)),1),n("td",ga,[n("span",{class:N(["label",("escalaGlobal"in y?y.escalaGlobal:e(L))(Math.round(h.notas[s.current.key]))])},c(("escalaGlobal"in y?y.escalaGlobal:e(L))(Math.round(h.notas[s.current.key]))),3)])],16,ma)}),256))])])])])])])}}},ha=ba,ka={class:"bg-cinzaClaro"},ya={key:0,class:"conjunto-banner"},fa={class:"container-fluid wrap text-center"},Ta=n("h4",{class:"text-branco font-semibold"},"Este conjunto de dados não integra a pontuação do Índice nesta edição.",-1),$a={class:"btn-tooltip big mt-0 cursor-pointer"},Ea=["href"],La=["data-dimensao"],Fa={key:0,class:"t13 mt-2"},ja={class:"btn-tooltip"},Ma={class:"capital"},Ga=["data-dimensao"],Na={key:0,class:"ranking"},Ia=n("button",{class:"btn-tooltip"},"explorar capital",-1),Sa={class:"container-fluid wrap"},wa={class:"flex justify-between items-center"},Ca={class:"tag"},Da={class:"mt-2"},qa={class:"tabela-scroll"},Aa={class:"tabela tabela-dimensao",id:"tabelamapa"},Ba=n("th",{class:"capital"},"Municí­pio",-1),Pa=n("th",{class:"pontuacao"},"Pontuação",-1),za=n("th",{class:"nivel"},"Ní­vel",-1),Oa=["data-dimensao"],Va={key:0},Ra=["data-capital"],Ha={__name:"TabelaDimensao",props:["current","currentlabel","btnExplore"],setup(s){const{current:u,currentlabel:M,btnExplore:o}=s;j(!1),S(()=>u?Object.values(C).map(a=>({key:a.key,nota:a.notas[u.key]})):!1);const r=j(!1),y=j({x:0,y:0}),T=(a,l)=>{r.value=l||!1,t(a)},t=a=>{y.value={x:a.x,y:a.y}};let p=j(null);const h=(a,l)=>{p.value=l?a:null,document.querySelectorAll(`[data-capital="${a}"]`).forEach(v=>{v.classList.toggle("hovered",l)})};return z(()=>{document.getElementById("tabelamapa"),document.getElementById("mapatabela"),document.querySelectorAll("[data-capital]").forEach(v=>{v.addEventListener("mouseenter",()=>h(v.dataset.capital,!0)),v.addEventListener("mouseleave",()=>h(v.dataset.capital,!1))});let l=document.querySelector("#tabelamapa tbody"),i=document.querySelectorAll("#mapatabela path, #mapatabela circle");l&&(l.addEventListener("mouseenter",()=>{l.classList.add("active"),i.forEach(v=>{v.classList.add("active")})}),l.addEventListener("mouseleave",()=>{l.classList.remove("active"),i.forEach(v=>{v.classList.remove("active")})})),i&&i.forEach(v=>{v.addEventListener("mouseenter",()=>{l.classList.add("active"),i.forEach(F=>{F.classList.add("active")})}),v.addEventListener("mouseleave",()=>{l.classList.remove("active"),i.forEach(F=>{F.classList.remove("active")})})})}),(a,l)=>{const i=q;return d(),m("section",ka,[e(r)?(d(),m("div",{key:0,class:"tooltip",style:O({left:e(y).x+"px",top:e(y).y+"px"})},[s.current.score?E("",!0):(d(),m("div",ya,[n("div",fa,[Ta,n("div",$a,[n("a",{href:"https://go.ok.org.br/odi2023-nota",target:"blank"},"Saiba mais na nota metodológica",8,Ea)])])])),e(r).dimensao?(d(),m(f,{key:1},[n("p",{class:"icon big","data-dimensao":e(r).dimensao.label},c(e(r).dimensao.label),9,La),e(r).dimensao.score?E("",!0):(d(),m("p",Fa,"Este conjunto de dados não integra a pontuação do Índice nesta edição.")),n("button",ja,"explorar "+c(s.btnExplore),1)],64)):e(r).capital?(d(),m(f,{key:2},[n("p",Ma,c(e(r).capital.nome),1),e(r).d?(d(),m(f,{key:0},[n("p",{class:"ranking icon block","data-dimensao":e(r).d.label},c(e(r).d.label),9,Ga),n("p",{class:N(["label",("escalaGlobal"in a?a.escalaGlobal:e(L))(Math.round(e(r).capital.notas[e(r).d.key]))])},c(Math.round(e(r).capital.notas[e(r).d.key])),3)],64)):E("",!0),e(r).ranking?(d(),m(f,{key:1},[e(r).ranking?(d(),m("p",Na,c(e(r).ranking+1)+"ª posição no ranking",1)):E("",!0),n("p",{class:N(["label",("escalaGlobal"in a?a.escalaGlobal:e(L))(Math.round(e(r).capital.notas[s.current.key]))])},c(Math.round(e(r).capital.notas[s.current.key])),3)],64)):E("",!0),Ia],64)):E("",!0)],4)):E("",!0),n("div",Sa,[n("div",wa,[n("div",Ca,c(s.currentlabel)+" "+c(s.current.key),1),I(i)]),n("h2",null,c(s.current.label),1),n("p",Da,"Resultados por "+c(s.currentlabel=="Categoria"?"conjunto de dados":"categoria"),1),n("div",qa,[n("table",Aa,[n("thead",null,[n("tr",null,[Ba,Pa,za,(d(!0),m(f,null,w(s.current.children,v=>(d(),m("th",g({class:["icon",{excluir:!v.score}],"data-dimensao":v.label},b({mouseenter:F=>{T(F,{dimensao:v})},mousemove:t,mouseleave:()=>{T(!1)},click:()=>{("navigateTo"in a?a.navigateTo:e(k))((a._.provides[x]||a.$route).fullPath+"/"+v.slug)}},!0)),c(v.label),17,Oa))),256))])]),s.current?(d(),m("tbody",Va,[(d(!0),m(f,null,w(Object.values("capitais"in a?a.capitais:e(C)).sort((v,F)=>F.notas[s.current.key]-v.notas[s.current.key]),(v,F)=>(d(),m("tr",{"data-capital":v.key,class:"hoverable"},[n("td",g(b({mouseenter:G=>{T(G,{capital:v,ranking:F+1})},mousemove:t,mouseleave:()=>{T(!1)},click:()=>{("navigateTo"in a?a.navigateTo:e(k))("/capital/"+v.slug)}},!0),{class:"capital"}),[n("span",null,[n("b",null,c(F+1)+"º",1),D(" "+c(v.nome),1)])],16),n("td",g(b({mouseenter:G=>{T(G,{capital:v,ranking:F+1})},mousemove:t,mouseleave:()=>{T(!1)},click:()=>{("navigateTo"in a?a.navigateTo:e(k))("/capital/"+v.slug)}},!0),{class:"pontuacao"}),[n("span",null,c(Math.round(v.notas[s.current.key])),1)],16),n("td",g(b({mouseenter:G=>{T(G,{capital:v,ranking:F+1})},mousemove:t,mouseleave:()=>{T(!1)},click:()=>{("navigateTo"in a?a.navigateTo:e(k))("/capital/"+v.slug)}},!0),{class:"nivel"}),[n("span",{class:N(["label",("escalaGlobal"in a?a.escalaGlobal:e(L))(Math.round(v.notas[s.current.key]))])},c(("escalaGlobal"in a?a.escalaGlobal:e(L))(Math.round(v.notas[s.current.key]))),3)],16),(d(!0),m(f,null,w(s.current.children,G=>(d(),m("td",g({class:["dimensao",{excluir:!G.score}]},b({mouseenter:A=>{T(A,{capital:v,d:G})},mousemove:t,mouseleave:()=>{T(!1)}},!0)),[n("span",{class:N(["label",("escalaGlobal"in a?a.escalaGlobal:e(L))(Math.round(v.notas[G.key]))])},c(Math.round(v.notas[G.key])),3)],16))),256))],8,Ra))),256))])):E("",!0)])])])])}}},Ja=Ha,Ka={key:0,class:"conjunto-banner"},Qa={class:"container-fluid wrap text-center"},Ua=n("h4",{class:"text-branco font-semibold"},"Este conjunto de dados não integra a pontuação do Índice nesta edição.",-1),Wa={class:"btn-tooltip big mt-0 cursor-pointer"},Xa=["href"],Ya={class:"bg-cinzaClaro"},Za=["data-dimensao"],_a=n("button",{class:"btn-tooltip"},"explorar dimensão",-1),xa={key:1},ae={class:"ranking"},ee={class:"capital"},te=["data-dimensao"],ne={key:0,class:"ranking"},se=n("button",{class:"btn-tooltip"},"explorar capital",-1),oe={class:"container-fluid wrap"},le={class:"flex justify-between items-center"},ie={class:"tag"},re=n("p",{class:"mt-2"},"Veja como cada critério foi atendido por este conjunto de dados nas capitais",-1),ce={class:"tabela-scroll"},ue={class:"tabela tabela-conjunto-dados"},de=n("tr",null,[n("th",{class:"capital",rowspan:"2"},"Município"),n("th",{class:"pontuacao",rowspan:"2"},"Pontuação"),n("th",{class:"nivel",rowspan:"2"},"Nível"),n("th",{class:"pre-heading",colspan:"3"},"Acesso"),n("th",{class:"pre-heading"},"Licenciamento"),n("th",{class:"pre-heading",colspan:"2"},"Documentação"),n("th",{class:"pre-heading"},"Formato"),n("th",{class:"pre-heading",colspan:"2"},"Detalhamento"),n("th",{class:"pre-heading",colspan:"2"},"Temporalidade")],-1),me=V('<div class="legenda-tabela"><p class="titulo">Como ler a tabela:</p><p class="sim">Sim</p><p class="nao">Não</p><p class="nao-aplicado">Não se aplica</p><p class="nao-localizado">Não há/não foram localizados dados abertos ou os dados disponíveis não atendem à descrição mínima</p></div>',1),ve={__name:"TabelaConjuntoDados",props:["current","currentlabel"],setup(s){const u=j(!1),M=j({x:0,y:0}),o=(t,p)=>{u.value=p||!1,r(t)},r=t=>{M.value={x:t.x,y:t.y}};let y=j(null);const T=(t,p)=>{y.value=p?t:null,document.querySelectorAll(`[data-capital="${t}"]`).forEach(a=>{a.classList.toggle("hovered",p)})};return z(()=>{document.getElementById("tabelamapa"),document.getElementById("mapatabela"),document.querySelectorAll("[data-capital]").forEach(a=>{a.addEventListener("mouseenter",()=>T(a.dataset.capital,!0)),a.addEventListener("mouseleave",()=>T(a.dataset.capital,!1))});let p=document.querySelector("#tabelamapa tbody"),h=document.querySelectorAll("#mapatabela path, #mapatabela circle");p&&(p.addEventListener("mouseenter",()=>{p.classList.add("active"),h.forEach(a=>{a.classList.add("active")})}),p.addEventListener("mouseleave",()=>{p.classList.remove("active"),h.forEach(a=>{a.classList.remove("active")})})),h&&h.forEach(a=>{a.addEventListener("mouseenter",()=>{p.classList.add("active"),h.forEach(l=>{l.classList.add("active")})}),a.addEventListener("mouseleave",()=>{p.classList.remove("active"),h.forEach(l=>{l.classList.remove("active")})})})}),(t,p)=>{const h=q;return d(),m(f,null,[s.current.score?E("",!0):(d(),m("div",Ka,[n("div",Qa,[Ua,n("div",Wa,[n("a",{href:"https://go.ok.org.br/odi2023-nota",target:"blank"},"Saiba mais na nota metodológica",8,Xa)])])])),n("section",Ya,[e(u)?(d(),m("div",{key:0,class:"tooltip",style:O({left:e(M).x+"px",top:e(M).y+"px"})},[e(u).dimensao?(d(),m(f,{key:0},[n("p",{class:"icon big","data-dimensao":e(u).dimensao.label},c(e(u).dimensao.label),9,Za),_a],64)):e(u).indicador?(d(),m("div",xa,[n("p",ae,c(("tooltipIndicador"in t?t.tooltipIndicador:e(R))(e(u).indicador)),1)])):e(u).capital?(d(),m(f,{key:2},[n("p",ee,c(e(u).capital.nome),1),e(u).d?(d(),m(f,{key:0},[n("p",{class:"ranking icon block","data-dimensao":e(u).d.label},c(e(u).d.label),9,te),n("p",{class:N(["label",("escalaGlobal"in t?t.escalaGlobal:e(L))(Math.round(e(u).capital.notas[e(u).d.key]))])},c(Math.round(e(u).capital.notas[e(u).d.key])),3)],64)):E("",!0),e(u).ranking?(d(),m(f,{key:1},[e(u).ranking?(d(),m("p",ne,c(e(u).ranking)+"ª posição no ranking",1)):E("",!0),n("p",{class:N(["label",("escalaGlobal"in t?t.escalaGlobal:e(L))(Math.round(e(u).capital.notas[s.current.key]))])},c(Math.round(e(u).capital.notas[s.current.key])),3)],64)):E("",!0),se],64)):E("",!0)],4)):E("",!0),n("div",oe,[n("div",le,[n("div",ie,c(s.currentlabel)+" "+c(s.current.key),1),I(h)]),n("h2",null,c(s.current.label),1),re,n("div",ce,[n("table",ue,[n("thead",null,[de,n("tr",null,[(d(),m(f,null,w(11,a=>n("th",g({class:"sub-heading"},b({mouseenter:l=>{o(l,{indicador:"i"+a})},mousemove:r,mouseleave:()=>{o(!1)}},!0)),"I"+c(a),17)),64))])]),n("tbody",null,[(d(!0),m(f,null,w(Object.values("capitais"in t?t.capitais:e(C)).sort((a,l)=>l.notas[s.current.key]-a.notas[s.current.key]),(a,l)=>(d(),m("tr",null,[n("td",g(b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0),{class:"capital"}),[n("span",null,[n("b",null,c(l+1)+"º",1),D(" "+c(a.nome),1)])],16),n("td",g(b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0),{class:"pontuacao"}),[n("span",null,c(Math.round(a.notas[s.current.key])),1)],16),n("td",g(b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0),{class:"nivel"}),[n("span",{class:N(["label",("escalaGlobal"in t?t.escalaGlobal:e(L))(Math.round(a.notas[s.current.key]))])},c(("escalaGlobal"in t?t.escalaGlobal:e(L))(Math.round(a.notas[s.current.key]))),3)],16),n("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[s.current.key].i1)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),n("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[s.current.key].i1=="Não"?"NL":a.entradas[s.current.key].i2)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),n("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[s.current.key].i1=="Não"?"NL":a.entradas[s.current.key].i3)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),n("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[s.current.key].i1=="Não"?"NL":a.entradas[s.current.key].i4)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),n("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[s.current.key].i1=="Não"?"NL":a.entradas[s.current.key].i5)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),n("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[s.current.key].i1=="Não"?"NL":a.entradas[s.current.key].i6)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),n("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[s.current.key].i1=="Não"?"NL":a.entradas[s.current.key].i7)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),n("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[s.current.key].i1=="Não"?"NL":a.entradas[s.current.key].i8)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),n("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[s.current.key].i1=="Não"?"NL":a.entradas[s.current.key].i9)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),n("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[s.current.key].i1=="Não"?"NL":a.entradas[s.current.key].i10)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),n("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[s.current.key].i1=="Não"?"NL":a.entradas[s.current.key].i11)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16)]))),256))])])]),me])])],64)}}},pe=ve,ge={key:0,class:"conjunto-banner"},be={class:"container-fluid wrap text-center"},he=n("h4",{class:"text-branco font-semibold"},"Este conjunto de dados não integra a pontuação do Índice nesta edição.",-1),ke={class:"btn-tooltip big mt-0 cursor-pointer"},ye=["href"],fe={class:"bg-cinzaClaro"},Te={key:0},$e={class:"ranking"},Ee=["data-dimensao"],Le=n("button",{class:"btn-tooltip"},"explorar dimensão",-1),Fe={class:"capital"},je=["data-dimensao"],Me={key:0,class:"ranking"},Ge=n("button",{class:"btn-tooltip"},"explorar capital",-1),Ne={class:"container-fluid wrap"},Ie={class:"flex justify-between items-center"},Se={class:"tag"},we=n("div",{class:"tag"},"Indicadores específicos",-1),Ce=n("p",{class:"mt-2"},[D("A dimensão de Governança de Dados é avaliada a partir de indicadores específicos."),n("br"),D("Veja como cada um deles foi atendido nas capitais")],-1),De={class:"tabela-scroll"},qe={class:"tabela tabela-conjunto-dados"},Ae=n("tr",null,[n("th",{class:"capital",rowspan:"2"},"Município"),n("th",{class:"pontuacao",rowspan:"2"},"Pontuação"),n("th",{class:"nivel",rowspan:"2"},"Nível"),n("th",{class:"pre-heading",colspan:"10"},"Instrumentos de gestão e planejamento")],-1),Be=V('<div class="legenda-tabela"><p class="titulo">Como ler a tabela:</p><p class="sim">Sim</p><p class="nao">Não</p><p class="nao-aplicado">Não se aplica</p><p class="nao-localizado">Não há/não foram localizados dados abertos ou os dados disponíveis não atendem à descrição mínima</p></div>',1),Pe={__name:"TabelaGovernanca",props:["current","currentlabel"],setup(s){const u=j(!1),M=j({x:0,y:0}),o=(t,p)=>{u.value=p||!1,r(t)},r=t=>{M.value={x:t.x,y:t.y}};let y=j(null);const T=(t,p)=>{y.value=p?t:null,document.querySelectorAll(`[data-capital="${t}"]`).forEach(a=>{a.classList.toggle("hovered",p)})};return z(()=>{document.getElementById("tabelamapa"),document.getElementById("mapatabela"),document.querySelectorAll("[data-capital]").forEach(a=>{a.addEventListener("mouseenter",()=>T(a.dataset.capital,!0)),a.addEventListener("mouseleave",()=>T(a.dataset.capital,!1))});let p=document.querySelector("#tabelamapa tbody"),h=document.querySelectorAll("#mapatabela path, #mapatabela circle");p&&(p.addEventListener("mouseenter",()=>{p.classList.add("active"),h.forEach(a=>{a.classList.add("active")})}),p.addEventListener("mouseleave",()=>{p.classList.remove("active"),h.forEach(a=>{a.classList.remove("active")})})),h&&h.forEach(a=>{a.addEventListener("mouseenter",()=>{p.classList.add("active"),h.forEach(l=>{l.classList.add("active")})}),a.addEventListener("mouseleave",()=>{p.classList.remove("active"),h.forEach(l=>{l.classList.remove("active")})})})}),(t,p)=>{const h=q;return d(),m(f,null,[s.current.score?E("",!0):(d(),m("div",ge,[n("div",be,[he,n("div",ke,[n("a",{href:"https://go.ok.org.br/odi2023-nota",target:"blank"},"Saiba mais na nota metodológica",8,ye)])])])),n("section",fe,[e(u)?(d(),m("div",{key:0,class:"tooltip",style:O({left:e(M).x+"px",top:e(M).y+"px"})},[e(u).indicador?(d(),m("div",Te,[n("p",$e,c(("tooltipIndicador"in t?t.tooltipIndicador:e(R))(e(u).indicador)),1)])):e(u).dimensao?(d(),m(f,{key:1},[n("p",{class:"icon big","data-dimensao":e(u).dimensao.label},c(e(u).dimensao.label),9,Ee),Le],64)):e(u).capital?(d(),m(f,{key:2},[n("p",Fe,c(e(u).capital.nome),1),e(u).d?(d(),m(f,{key:0},[n("p",{class:"ranking icon block","data-dimensao":e(u).d.label},c(e(u).d.label),9,je),n("p",{class:N(["label",("escalaGlobal"in t?t.escalaGlobal:e(L))(e(u).capital.notas[e(u).d.key])])},c(Math.round(e(u).capital.notas[e(u).d.key])),3)],64)):E("",!0),e(u).ranking?(d(),m(f,{key:1},[e(u).ranking?(d(),m("p",Me,c(e(u).ranking)+"ª posição no ranking",1)):E("",!0),n("p",{class:N(["label",("escalaGlobal"in t?t.escalaGlobal:e(L))(Math.round(e(u).capital.notas[s.current.key]))])},c(Math.round(e(u).capital.notas[s.current.key])),3)],64)):E("",!0),Ge],64)):E("",!0)],4)):E("",!0),n("div",Ne,[n("div",Ie,[n("div",Se,c(s.currentlabel)+" "+c(s.current.key),1),I(h)]),n("h2",null,c(s.current.label),1),we,Ce,n("div",De,[n("table",qe,[n("thead",null,[Ae,n("tr",null,[(d(),m(f,null,w(10,a=>n("th",g({class:"sub-heading"},b({mouseenter:l=>{o(l,{indicador:"g"+a})},mousemove:r,mouseleave:()=>{o(!1)}},!0)),"G"+c(a),17)),64))])]),n("tbody",null,[(d(!0),m(f,null,w(Object.values("capitais"in t?t.capitais:e(C)).sort((a,l)=>l.notas[s.current.key]-a.notas[s.current.key]),(a,l)=>(d(),m("tr",null,[n("td",g(b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0),{class:"capital"}),[n("span",null,[n("b",null,c(l+1)+"º",1),D(" "+c(a.nome),1)])],16),n("td",g(b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0),{class:"pontuacao"}),[n("span",null,c(Math.round(a.notas[s.current.key])),1)],16),n("td",g(b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0),{class:"nivel"}),[n("span",{class:N(["label",("escalaGlobal"in t?t.escalaGlobal:e(L))(Math.round(a.notas[s.current.key]))])},c(("escalaGlobal"in t?t.escalaGlobal:e(L))(Math.round(a.notas[s.current.key]))),3)],16),n("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[s.current.key].g1)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),n("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[s.current.key].g2)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),n("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[s.current.key].g3)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),n("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[s.current.key].g4)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),n("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[s.current.key].g5)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),n("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[s.current.key].g6)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),n("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[s.current.key].g7)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),n("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[s.current.key].g8)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),n("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[s.current.key].g9)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),n("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[s.current.key].g10)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l+1})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16)]))),256))])])]),Be])])],64)}}},ze=Pe,Oe={__name:"TemplateDimensao",props:["btnExplore"],setup(s){const u=aa();let M=j(u.params.dimensao),o=S(()=>M.value?B(W,"slug",M.value):!1),r=j(u.params.categoria),y=S(()=>o.value?o.value.children:!1),T=S(()=>y.value&&r.value?B(y.value,"slug",r.value):!1),t=j(u.params.conjunto_de_dados),p=S(()=>T.value?T.value.children:!1),h=S(()=>p.value&&t.value?B(p.value,"slug",t.value):!1),a=S(()=>t.value?h.value:r.value?T.value:o.value),l=S(()=>t.value?"Conjunto de Dados":r.value?"Categoria":"Dimensão");return(i,v)=>{const F=X,G=_,A=ha,H=Ja,J=pe,K=ze,Q=ea,U=Y;return d(),m(f,null,[I(F),n("main",null,[I(G,{class:"pt-11"}),I(A,{current:e(a),currentlabel:e(l)},null,8,["current","currentlabel"]),e(a)&&e(a).children[1]&&e(o).key!=15?(d(),P(H,{key:0,current:e(a),currentlabel:e(l),btnExplore:s.btnExplore},null,8,["current","currentlabel","btnExplore"])):e(a)&&e(o).key!=15?(d(),P(J,{key:1,current:e(a),currentlabel:e(l)},null,8,["current","currentlabel"])):e(a)&&e(o).key==15?(d(),P(K,{key:2,current:e(a),currentlabel:e(l)},null,8,["current","currentlabel"])):E("",!0),I(Q)]),I(U)],64)}}},Ue=Oe;export{Ue as _};
