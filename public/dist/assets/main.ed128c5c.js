import{r as m,c as _,a as n,t as i,u as d,F as g,p as v,b as h,d as c,o as y,e as b}from"./vendor.caf1ffb9.js";var S="/dist/assets/logo.03d6d6da.png";var O=(t,r)=>{const l=t.__vccOpts||t;for(const[s,e]of r)l[s]=e;return l};const u=t=>(v("data-v-467e25ec"),t=t(),h(),t),k=u(()=>n("img",{alt:"Vue logo",src:S,height:"40"},null,-1)),L=u(()=>n("p",null,[n("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Documentation "),c(" | "),n("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Documentation")],-1)),N=u(()=>n("p",null,[c(" Edit "),n("code",null,"components/HelloWorld.vue"),c(" to test hot module replacement. ")],-1)),V={props:{msg:String},setup(t){const r=m({count:0});return(l,s)=>(y(),_(g,null,[k,n("h1",null,"Vue "+i(t.msg),1),L,n("button",{type:"button",onClick:s[0]||(s[0]=e=>d(r).count++)}," count is: "+i(d(r).count),1),N],64))}};var x=O(V,[["__scopeId","data-v-467e25ec"]]),H=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));const I=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}};I();const p={"./components/HelloWorld.vue":H},f={};for(const t in p){const r=t.split("/").pop().replace(/\.\w+$/,"");f[r]=p[t].default}for(const t of document.getElementsByClassName("vue-app"))b({template:t.innerHTML,components:f}).mount(t);