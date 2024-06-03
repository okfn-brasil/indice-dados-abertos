import{c as D,a as U,_ as W,b as X}from"./Footer.0ae4c9fe.js";import{_ as Y,a as Z}from"./Mapa.8b76893f.js";import{_ as F,a as q,f as B}from"./escalaGlobal.30f6d5b6.js";import{r as j,n as w,o as d,c as m,a as s,t as c,b as S,q as e,F as f,x as C,A as g,B as b,E as k,d as N,s as I,G as z,z as O,v as E,P as x,y as V,u as aa,D as P}from"./entry.1bec8008.js";import{_,a as $}from"./escalaForm.b7c290f8.js";import{_ as ea}from"./ParticipeCall.2e84528b.js";const ta={id:"ranking"},sa={class:"container-fluid wrap"},na={class:"flex justify-between items-center"},oa={class:"tag"},la={class:"mt-2"},ia={class:"flex flex-wrap mt-12"},ra={class:"w-full md:w-6/12 md:pr-12"},ca={class:"w-full md:w-6/12 md:pl-12"},ua={class:"tabela tabela-mapa",id:"tabelamapa"},da=s("thead",null,[s("tr",null,[s("th",{class:"capital"},"Municí­pio"),s("th",null,"Pontuação"),s("th",null,"Ní­vel")])],-1),ma=["data-capital"],va={class:"capital"},pa={class:"pontuacao"},ga={class:"nivel"},ba={__name:"MapaDimensao",props:["current","currentlabel"],setup(n){const{current:u,currentlabel:G}=n,o=j(!1),r=w(()=>u?Object.values(D).map(y=>({key:y.key,nota:y.notas[u.key],nome:y.nome})):!1);return(y,T)=>{const t=q,p=Y;return d(),m("section",ta,[s("div",sa,[s("div",na,[s("div",oa,c(n.currentlabel)+" "+c(n.current.key),1),S(t)]),s("h2",null,c(n.current.label),1),s("p",la," Veja a situação geral da abertura de dados "+c(n.currentlabel=="Conjunto de Dados"?"deste":"desta")+" "+c(n.currentlabel.toLowerCase())+" nas capitais ",1),s("div",ia,[s("div",ra,[S(p,{current:n.current,valores:e(r),active:e(o)},null,8,["current","valores","active"])]),s("div",ca,[s("table",ua,[da,s("tbody",null,[(d(!0),m(f,null,C(Object.values("capitais"in y?y.capitais:e(D)).sort((h,a)=>a.notas[n.current.key]-h.notas[n.current.key]),(h,a)=>{var l;return d(),m("tr",g(b({click:()=>{("navigateTo"in y?y.navigateTo:e(k))("/capital/"+h.slug)}},!0),{"data-capital":h.key,class:"hoverable"}),[s("td",va,[s("b",null,c(a+1)+"º",1),N(" "+c(h.nome),1)]),s("td",pa,c((l=h.notas[n.current.key])==null?void 0:l.toFixed(0)),1),s("td",ga,[s("span",{class:I(["label",("escalaGlobal"in y?y.escalaGlobal:e(F))(Math.round(h.notas[n.current.key]))])},c(("escalaGlobal"in y?y.escalaGlobal:e(F))(Math.round(h.notas[n.current.key]))),3)])],16,ma)}),256))])])])])])])}}},ha=ba,ka={class:"bg-cinzaClaro"},ya={key:0,class:"conjunto-banner"},fa={class:"container-fluid wrap text-center"},Ta=s("h4",{class:"text-branco font-semibold"},"Este conjunto de dados não integra a pontuação do Índice nesta edição.",-1),$a={class:"btn-tooltip big mt-0 cursor-pointer"},Ea=["href"],Fa=["data-dimensao"],La={key:0,class:"t13 mt-2"},ja={class:"btn-tooltip"},Ga={class:"capital"},Ma=["data-dimensao"],Ia={key:0,class:"ranking"},Sa=s("button",{class:"btn-tooltip"},"explorar capital",-1),wa={class:"container-fluid wrap"},Ca={class:"flex justify-between items-center"},Da={class:"tag"},Na={class:"mt-2"},qa={class:"tabela-scroll"},Aa={class:"tabela tabela-dimensao",id:"tabelamapa"},Ba=s("th",{class:"capital"},"Municí­pio",-1),Pa=s("th",{class:"pontuacao"},"Pontuação",-1),za=s("th",{class:"nivel"},"Ní­vel",-1),Oa=["data-dimensao"],Va={key:0},_a=["data-capital"],Ra={__name:"TabelaDimensao",props:["current","currentlabel","btnExplore"],setup(n){const{current:u,currentlabel:G,btnExplore:o}=n;j(!1),w(()=>u?Object.values(D).map(a=>({key:a.key,nota:a.notas[u.key]})):!1);const r=j(!1),y=j({x:0,y:0}),T=(a,l)=>{r.value=l||!1,t(a)},t=a=>{y.value={x:a.x,y:a.y}};let p=j(null);const h=(a,l)=>{p.value=l?a:null,document.querySelectorAll(`[data-capital="${a}"]`).forEach(v=>{v.classList.toggle("hovered",l)})};return z(()=>{document.getElementById("tabelamapa"),document.getElementById("mapatabela"),document.querySelectorAll("[data-capital]").forEach(v=>{v.addEventListener("mouseenter",()=>h(v.dataset.capital,!0)),v.addEventListener("mouseleave",()=>h(v.dataset.capital,!1))});let l=document.querySelector("#tabelamapa tbody"),i=document.querySelectorAll("#mapatabela path, #mapatabela circle");l&&(l.addEventListener("mouseenter",()=>{l.classList.add("active"),i.forEach(v=>{v.classList.add("active")})}),l.addEventListener("mouseleave",()=>{l.classList.remove("active"),i.forEach(v=>{v.classList.remove("active")})})),i&&i.forEach(v=>{v.addEventListener("mouseenter",()=>{l.classList.add("active"),i.forEach(L=>{L.classList.add("active")})}),v.addEventListener("mouseleave",()=>{l.classList.remove("active"),i.forEach(L=>{L.classList.remove("active")})})})}),(a,l)=>{const i=q;return d(),m("section",ka,[e(r)?(d(),m("div",{key:0,class:"tooltip",style:O({left:e(y).x+"px",top:e(y).y+"px"})},[n.current.score?E("",!0):(d(),m("div",ya,[s("div",fa,[Ta,s("div",$a,[s("a",{href:"https://go.ok.org.br/odi2023-nota",target:"blank"},"Saiba mais na nota metodológica",8,Ea)])])])),e(r).dimensao?(d(),m(f,{key:1},[s("p",{class:"icon big","data-dimensao":e(r).dimensao.label},c(e(r).dimensao.label),9,Fa),e(r).dimensao.score?E("",!0):(d(),m("p",La,"Este conjunto de dados não integra a pontuação do Índice nesta edição.")),s("button",ja,"explorar "+c(n.btnExplore),1)],64)):e(r).capital?(d(),m(f,{key:2},[s("p",Ga,c(e(r).capital.nome),1),e(r).d?(d(),m(f,{key:0},[s("p",{class:"ranking icon block","data-dimensao":e(r).d.label},c(e(r).d.label),9,Ma),s("p",{class:I(["label",("escalaGlobal"in a?a.escalaGlobal:e(F))(Math.round(e(r).capital.notas[e(r).d.key]))])},c(Math.round(e(r).capital.notas[e(r).d.key])),3)],64)):E("",!0),e(r).ranking?(d(),m(f,{key:1},[e(r).ranking?(d(),m("p",Ia,c(e(r).ranking+1)+"ª posição no ranking",1)):E("",!0),s("p",{class:I(["label",("escalaGlobal"in a?a.escalaGlobal:e(F))(Math.round(e(r).capital.notas[n.current.key]))])},c(Math.round(e(r).capital.notas[n.current.key])),3)],64)):E("",!0),Sa],64)):E("",!0)],4)):E("",!0),s("div",wa,[s("div",Ca,[s("div",Da,c(n.currentlabel)+" "+c(n.current.key),1),S(i)]),s("h2",null,c(n.current.label),1),s("p",Na,"Resultados por "+c(n.currentlabel=="Categoria"?"conjunto de dados":"categoria"),1),s("div",qa,[s("table",Aa,[s("thead",null,[s("tr",null,[Ba,Pa,za,(d(!0),m(f,null,C(n.current.children,v=>(d(),m("th",g({class:["icon",{excluir:!v.score}],"data-dimensao":v.label},b({mouseenter:L=>{T(L,{dimensao:v})},mousemove:t,mouseleave:()=>{T(!1)},click:()=>{("navigateTo"in a?a.navigateTo:e(k))((a._.provides[x]||a.$route).fullPath+"/"+v.slug)}},!0)),c(v.label),17,Oa))),256))])]),n.current?(d(),m("tbody",Va,[(d(!0),m(f,null,C(Object.values("capitais"in a?a.capitais:e(D)).sort((v,L)=>L.notas[n.current.key]-v.notas[n.current.key]),(v,L)=>(d(),m("tr",{"data-capital":v.key,class:"hoverable"},[s("td",g(b({mouseenter:M=>{T(M,{capital:v,ranking:L})},mousemove:t,mouseleave:()=>{T(!1)},click:()=>{("navigateTo"in a?a.navigateTo:e(k))("/capital/"+v.slug)}},!0),{class:"capital"}),[s("span",null,[s("b",null,c(L+1)+"º",1),N(" "+c(v.nome),1)])],16),s("td",g(b({mouseenter:M=>{T(M,{capital:v,ranking:L})},mousemove:t,mouseleave:()=>{T(!1)},click:()=>{("navigateTo"in a?a.navigateTo:e(k))("/capital/"+v.slug)}},!0),{class:"pontuacao"}),[s("span",null,c(Math.round(v.notas[n.current.key])),1)],16),s("td",g(b({mouseenter:M=>{T(M,{capital:v,ranking:L})},mousemove:t,mouseleave:()=>{T(!1)},click:()=>{("navigateTo"in a?a.navigateTo:e(k))("/capital/"+v.slug)}},!0),{class:"nivel"}),[s("span",{class:I(["label",("escalaGlobal"in a?a.escalaGlobal:e(F))(Math.round(v.notas[n.current.key]))])},c(("escalaGlobal"in a?a.escalaGlobal:e(F))(Math.round(v.notas[n.current.key]))),3)],16),(d(!0),m(f,null,C(n.current.children,M=>(d(),m("td",g({class:["dimensao",{excluir:!M.score}]},b({mouseenter:A=>{T(A,{capital:v,d:M})},mousemove:t,mouseleave:()=>{T(!1)}},!0)),[s("span",{class:I(["label",("escalaGlobal"in a?a.escalaGlobal:e(F))(Math.round(v.notas[M.key]))])},c(Math.round(v.notas[M.key])),3)],16))),256))],8,_a))),256))])):E("",!0)])])])])}}},Ha=Ra,Ja={key:0,class:"conjunto-banner"},Ka={class:"container-fluid wrap text-center"},Qa=s("h4",{class:"text-branco font-semibold"},"Este conjunto de dados não integra a pontuação do Índice nesta edição.",-1),Ua={class:"btn-tooltip big mt-0 cursor-pointer"},Wa=["href"],Xa={class:"bg-cinzaClaro"},Ya=["data-dimensao"],Za=s("button",{class:"btn-tooltip"},"explorar dimensão",-1),xa={key:1},ae={class:"ranking"},ee={class:"capital"},te=["data-dimensao"],se={key:0,class:"ranking"},ne=s("button",{class:"btn-tooltip"},"explorar capital",-1),oe={class:"container-fluid wrap"},le={class:"flex justify-between items-center"},ie={class:"tag"},re=s("p",{class:"mt-2"},"Veja como cada critério foi atendido por este conjunto de dados nas capitais",-1),ce={class:"tabela-scroll"},ue={class:"tabela tabela-conjunto-dados"},de=s("tr",null,[s("th",{class:"capital",rowspan:"2"},"Município"),s("th",{class:"pontuacao",rowspan:"2"},"Pontuação"),s("th",{class:"nivel",rowspan:"2"},"Nível"),s("th",{class:"pre-heading",colspan:"3"},"Acesso"),s("th",{class:"pre-heading"},"Licenciamento"),s("th",{class:"pre-heading",colspan:"2"},"Documentação"),s("th",{class:"pre-heading"},"Formato"),s("th",{class:"pre-heading",colspan:"2"},"Detalhamento"),s("th",{class:"pre-heading",colspan:"2"},"Temporalidade")],-1),me=V('<div class="legenda-tabela"><p class="titulo">Como ler a tabela:</p><p class="sim">Sim</p><p class="nao">Não</p><p class="nao-aplicado">Não se aplica</p><p class="nao-localizado">Não há/não foram localizados dados abertos ou os dados disponíveis não atendem à descrição mínima</p></div>',1),ve={__name:"TabelaConjuntoDados",props:["current","currentlabel"],setup(n){const u=j(!1),G=j({x:0,y:0}),o=(t,p)=>{u.value=p||!1,r(t)},r=t=>{G.value={x:t.x,y:t.y}};let y=j(null);const T=(t,p)=>{y.value=p?t:null,document.querySelectorAll(`[data-capital="${t}"]`).forEach(a=>{a.classList.toggle("hovered",p)})};return z(()=>{document.getElementById("tabelamapa"),document.getElementById("mapatabela"),document.querySelectorAll("[data-capital]").forEach(a=>{a.addEventListener("mouseenter",()=>T(a.dataset.capital,!0)),a.addEventListener("mouseleave",()=>T(a.dataset.capital,!1))});let p=document.querySelector("#tabelamapa tbody"),h=document.querySelectorAll("#mapatabela path, #mapatabela circle");p&&(p.addEventListener("mouseenter",()=>{p.classList.add("active"),h.forEach(a=>{a.classList.add("active")})}),p.addEventListener("mouseleave",()=>{p.classList.remove("active"),h.forEach(a=>{a.classList.remove("active")})})),h&&h.forEach(a=>{a.addEventListener("mouseenter",()=>{p.classList.add("active"),h.forEach(l=>{l.classList.add("active")})}),a.addEventListener("mouseleave",()=>{p.classList.remove("active"),h.forEach(l=>{l.classList.remove("active")})})})}),(t,p)=>{const h=q;return d(),m(f,null,[n.current.score?E("",!0):(d(),m("div",Ja,[s("div",Ka,[Qa,s("div",Ua,[s("a",{href:"https://go.ok.org.br/odi2023-nota",target:"blank"},"Saiba mais na nota metodológica",8,Wa)])])])),s("section",Xa,[e(u)?(d(),m("div",{key:0,class:"tooltip",style:O({left:e(G).x+"px",top:e(G).y+"px"})},[e(u).dimensao?(d(),m(f,{key:0},[s("p",{class:"icon big","data-dimensao":e(u).dimensao.label},c(e(u).dimensao.label),9,Ya),Za],64)):e(u).indicador?(d(),m("div",xa,[s("p",ae,c(("tooltipIndicador"in t?t.tooltipIndicador:e(_))(e(u).indicador)),1)])):e(u).capital?(d(),m(f,{key:2},[s("p",ee,c(e(u).capital.nome),1),e(u).d?(d(),m(f,{key:0},[s("p",{class:"ranking icon block","data-dimensao":e(u).d.label},c(e(u).d.label),9,te),s("p",{class:I(["label",("escalaGlobal"in t?t.escalaGlobal:e(F))(Math.round(e(u).capital.notas[e(u).d.key]))])},c(Math.round(e(u).capital.notas[e(u).d.key])),3)],64)):E("",!0),e(u).ranking?(d(),m(f,{key:1},[e(u).ranking?(d(),m("p",se,c(e(u).ranking)+"ª posição no ranking",1)):E("",!0),s("p",{class:I(["label",("escalaGlobal"in t?t.escalaGlobal:e(F))(Math.round(e(u).capital[n.current.key]))])},c(Math.round(e(u).capital[n.current.key])),3)],64)):E("",!0),ne],64)):E("",!0)],4)):E("",!0),s("div",oe,[s("div",le,[s("div",ie,c(n.currentlabel)+" "+c(n.current.key),1),S(h)]),s("h2",null,c(n.current.label),1),re,s("div",ce,[s("table",ue,[s("thead",null,[de,s("tr",null,[(d(),m(f,null,C(11,a=>s("th",g({class:"sub-heading"},b({mouseenter:l=>{o(l,{indicador:"i"+a})},mousemove:r,mouseleave:()=>{o(!1)}},!0)),"I"+c(a),17)),64))])]),s("tbody",null,[(d(!0),m(f,null,C(Object.values("capitais"in t?t.capitais:e(D)).sort((a,l)=>l.notas[n.current.key]-a.notas[n.current.key]),(a,l)=>(d(),m("tr",null,[s("td",g(b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0),{class:"capital"}),[s("span",null,[s("b",null,c(l+1)+"º",1),N(" "+c(a.nome),1)])],16),s("td",g(b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0),{class:"pontuacao"}),[s("span",null,c(Math.round(a.notas[n.current.key])),1)],16),s("td",g(b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0),{class:"nivel"}),[s("span",{class:I(["label",("escalaGlobal"in t?t.escalaGlobal:e(F))(Math.round(a.notas[n.current.key]))])},c(("escalaGlobal"in t?t.escalaGlobal:e(F))(Math.round(a.notas[n.current.key]))),3)],16),s("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[n.current.key].i1)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),s("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[n.current.key].i2)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),s("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[n.current.key].i3)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),s("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[n.current.key].i4)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),s("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[n.current.key].i5)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),s("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[n.current.key].i6)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),s("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[n.current.key].i7)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),s("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[n.current.key].i8)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),s("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[n.current.key].i9)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),s("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[n.current.key].i10)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),s("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[n.current.key].i11)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16)]))),256))])])]),me])])],64)}}},pe=ve,ge={key:0,class:"conjunto-banner"},be={class:"container-fluid wrap text-center"},he=s("h4",{class:"text-branco font-semibold"},"Este conjunto de dados não integra a pontuação do Índice nesta edição.",-1),ke={class:"btn-tooltip big mt-0 cursor-pointer"},ye=["href"],fe={class:"bg-cinzaClaro"},Te={key:0},$e={class:"ranking"},Ee=["data-dimensao"],Fe=s("button",{class:"btn-tooltip"},"explorar dimensão",-1),Le={class:"capital"},je=["data-dimensao"],Ge={key:0,class:"ranking"},Me=s("button",{class:"btn-tooltip"},"explorar capital",-1),Ie={class:"container-fluid wrap"},Se={class:"flex justify-between items-center"},we={class:"tag"},Ce=s("div",{class:"tag"},"Indicadores específicos",-1),De=s("p",{class:"mt-2"},[N("A dimensão de Governança de Dados é avaliada a partir de indicadores específicos."),s("br"),N("Veja como cada um deles foi atendido nas capitais")],-1),Ne={class:"tabela-scroll"},qe={class:"tabela tabela-conjunto-dados"},Ae=s("tr",null,[s("th",{class:"capital",rowspan:"2"},"Município"),s("th",{class:"pontuacao",rowspan:"2"},"Pontuação"),s("th",{class:"nivel",rowspan:"2"},"Nível"),s("th",{class:"pre-heading",colspan:"10"},"Acesso")],-1),Be=V('<div class="legenda-tabela"><p class="titulo">Como ler a tabela:</p><p class="sim">Sim</p><p class="nao">Não</p><p class="nao-aplicado">Não se aplica</p><p class="nao-localizado">Não há/não foram localizados dados abertos ou os dados disponíveis não atendem à descrição mínima</p></div>',1),Pe={__name:"TabelaGovernanca",props:["current","currentlabel"],setup(n){const u=j(!1),G=j({x:0,y:0}),o=(t,p)=>{u.value=p||!1,r(t)},r=t=>{G.value={x:t.x,y:t.y}};let y=j(null);const T=(t,p)=>{y.value=p?t:null,document.querySelectorAll(`[data-capital="${t}"]`).forEach(a=>{a.classList.toggle("hovered",p)})};return z(()=>{document.getElementById("tabelamapa"),document.getElementById("mapatabela"),document.querySelectorAll("[data-capital]").forEach(a=>{a.addEventListener("mouseenter",()=>T(a.dataset.capital,!0)),a.addEventListener("mouseleave",()=>T(a.dataset.capital,!1))});let p=document.querySelector("#tabelamapa tbody"),h=document.querySelectorAll("#mapatabela path, #mapatabela circle");p&&(p.addEventListener("mouseenter",()=>{p.classList.add("active"),h.forEach(a=>{a.classList.add("active")})}),p.addEventListener("mouseleave",()=>{p.classList.remove("active"),h.forEach(a=>{a.classList.remove("active")})})),h&&h.forEach(a=>{a.addEventListener("mouseenter",()=>{p.classList.add("active"),h.forEach(l=>{l.classList.add("active")})}),a.addEventListener("mouseleave",()=>{p.classList.remove("active"),h.forEach(l=>{l.classList.remove("active")})})})}),(t,p)=>{const h=q;return d(),m(f,null,[n.current.score?E("",!0):(d(),m("div",ge,[s("div",be,[he,s("div",ke,[s("a",{href:"https://go.ok.org.br/odi2023-nota",target:"blank"},"Saiba mais na nota metodológica",8,ye)])])])),s("section",fe,[e(u)?(d(),m("div",{key:0,class:"tooltip",style:O({left:e(G).x+"px",top:e(G).y+"px"})},[e(u).indicador?(d(),m("div",Te,[s("p",$e,c(("tooltipIndicador"in t?t.tooltipIndicador:e(_))(e(u).indicador)),1)])):e(u).dimensao?(d(),m(f,{key:1},[s("p",{class:"icon big","data-dimensao":e(u).dimensao.label},c(e(u).dimensao.label),9,Ee),Fe],64)):e(u).capital?(d(),m(f,{key:2},[s("p",Le,c(e(u).capital.nome),1),e(u).d?(d(),m(f,{key:0},[s("p",{class:"ranking icon block","data-dimensao":e(u).d.label},c(e(u).d.label),9,je),s("p",{class:I(["label",("escalaGlobal"in t?t.escalaGlobal:e(F))(e(u).capital.notas[e(u).d.key])])},c(Math.round(e(u).capital.notas[e(u).d.key])),3)],64)):E("",!0),e(u).ranking?(d(),m(f,{key:1},[e(u).ranking?(d(),m("p",Ge,c(e(u).ranking)+"ª posição no ranking",1)):E("",!0),s("p",{class:I(["label",("escalaGlobal"in t?t.escalaGlobal:e(F))(Math.round(e(u).capital[n.current.key]))])},c(Math.round(e(u).capital[n.current.key])),3)],64)):E("",!0),Me],64)):E("",!0)],4)):E("",!0),s("div",Ie,[s("div",Se,[s("div",we,c(n.currentlabel)+" "+c(n.current.key),1),S(h)]),s("h2",null,c(n.current.label),1),Ce,De,s("div",Ne,[s("table",qe,[s("thead",null,[Ae,s("tr",null,[(d(),m(f,null,C(10,a=>s("th",g({class:"sub-heading"},b({mouseenter:l=>{o(l,{indicador:"g"+a})},mousemove:r,mouseleave:()=>{o(!1)}},!0)),"G"+c(a),17)),64))])]),s("tbody",null,[(d(!0),m(f,null,C(Object.values("capitais"in t?t.capitais:e(D)).sort((a,l)=>l.notas[n.current.key]-a.notas[n.current.key]),(a,l)=>(d(),m("tr",null,[s("td",g(b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0),{class:"capital"}),[s("span",null,[s("b",null,c(l+1)+"º",1),N(" "+c(a.nome),1)])],16),s("td",g(b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0),{class:"pontuacao"}),[s("span",null,c(Math.round(a.notas[n.current.key])),1)],16),s("td",g(b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0),{class:"nivel"}),[s("span",{class:I(["label",("escalaGlobal"in t?t.escalaGlobal:e(F))(Math.round(a.notas[n.current.key]))])},c(("escalaGlobal"in t?t.escalaGlobal:e(F))(Math.round(a.notas[n.current.key]))),3)],16),s("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[n.current.key].g1)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),s("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[n.current.key].g2)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),s("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[n.current.key].g3)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),s("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[n.current.key].g4)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),s("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[n.current.key].g5)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),s("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[n.current.key].g6)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),s("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[n.current.key].g7)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),s("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[n.current.key].g8)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),s("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[n.current.key].g9)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16),s("td",g({class:["indicador",("escalaForm"in t?t.escalaForm:e($))(a.entradas[n.current.key].g10)]},b({mouseenter:i=>{o(i,{capital:a,ranking:l})},mousemove:r,mouseleave:()=>{o(!1)},click:()=>{("navigateTo"in t?t.navigateTo:e(k))("/capital/"+a.slug)}},!0))," ",16)]))),256))])])]),Be])])],64)}}},ze=Pe,Oe={__name:"TemplateDimensao",props:["btnExplore"],setup(n){const u=aa();let G=j(u.params.dimensao),o=w(()=>G.value?B(U,"slug",G.value):!1),r=j(u.params.categoria),y=w(()=>o.value?o.value.children:!1),T=w(()=>y.value&&r.value?B(y.value,"slug",r.value):!1),t=j(u.params.conjunto_de_dados),p=w(()=>T.value?T.value.children:!1),h=w(()=>p.value&&t.value?B(p.value,"slug",t.value):!1),a=w(()=>t.value?h.value:r.value?T.value:o.value),l=w(()=>t.value?"Conjunto de Dados":r.value?"Categoria":"Dimensão");return(i,v)=>{const L=W,M=Z,A=ha,R=Ha,H=pe,J=ze,K=ea,Q=X;return d(),m(f,null,[S(L),s("main",null,[S(M,{class:"pt-11"}),S(A,{current:e(a),currentlabel:e(l)},null,8,["current","currentlabel"]),e(a)&&e(a).children[1]&&e(o).key!=15?(d(),P(R,{key:0,current:e(a),currentlabel:e(l),btnExplore:n.btnExplore},null,8,["current","currentlabel","btnExplore"])):e(a)&&e(o).key!=15?(d(),P(H,{key:1,current:e(a),currentlabel:e(l)},null,8,["current","currentlabel"])):e(a)&&e(o).key==15?(d(),P(J,{key:2,current:e(a),currentlabel:e(l)},null,8,["current","currentlabel"])):E("",!0),S(K)]),S(Q)],64)}}},Qe=Oe;export{Qe as _};
