import{_ as n,o as l,c,a as t}from"./entry.0e8f5e8a.js";const _={methods:{getTwitterShareUrl(){},getFacebookShareUrl(){}}},i={class:"share"},f=t("span",null,"Compartilhe",-1),u=["href"],h=["href"];function d(e,r,a,o,p,s){return l(),c("div",i,[f,t("a",{class:"twitter",href:s.getTwitterShareUrl(),target:"_blank"},null,8,u),t("a",{class:"facebook",href:s.getFacebookShareUrl(),target:"_blank"},null,8,h)])}const b=n(_,[["render",d]]);function k(e,r,a){return Object.values(e).find(o=>o[r]===a)}function g(e){return e>80?"alto":e>60?"bom":e>40?"medio":e>20?"baixo":e>=0?"opaco":""}export{g as _,b as a,k as f};
