import{_ as k,o as s,c as o,b as t,d as h,u as w,s as S,w as v,j as x,k as C,l as T,t as V,a as p,p as m,e as $}from"./index-Bw4INNZo.js";const B={},b={viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"none"};function y(a,e){return s(),o("svg",b,e[0]||(e[0]=[t("g",{"stroke-width":"0"},null,-1),t("g",{"stroke-linecap":"round","stroke-linejoin":"round",stroke:"currentColor","stroke-width":"0.064"},null,-1),t("g",null,[t("path",{stroke:"currentColor",d:"M3 2v12s6.333-2.833 10.666-6C9.333 4.833 3 2 3 2z",fill:"black",style:{marker:"none"}})],-1)]))}const M=k(B,[["render",y]]),j={},I={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function P(a,e){return s(),o("svg",I,e[0]||(e[0]=[t("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),t("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),t("g",{id:"SVGRepo_iconCarrier"},[t("path",{d:"M8 5V19M16 5V19",stroke:"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]))}const R=k(j,[["render",P]]),z={class:"flex items-center gap-2"},G={class:"min-w-36"},N={key:0,class:"flex items-center text-black ml-auto"},E=h({__name:"TheTimer",setup(a){const e=w(),{isPaused:i,isStarted:f,isFinished:c}=S(e);let l;const d=()=>{l=setInterval(()=>{e.timeSpent+=1},1e3)},r=()=>{clearInterval(l)},u=()=>{e.setPause(),i.value?r():d()};v(c,n=>{n&&r()}),x(()=>{f.value&&d()}),C(()=>{r()});const g=T(()=>{const n=Math.floor(e.timeSpent/60).toString().padStart(2,"0"),_=(e.timeSpent%60).toString().padStart(2,"0");return`${n}:${_}`});return(n,_)=>(s(),o("div",z,[t("span",G,"Time Spent: "+V(g.value),1),p(c)?$("",!0):(s(),o("button",N,[p(i)?(s(),m(M,{key:0,class:"size-5",onClick:u})):(s(),m(R,{key:1,class:"size-5",onClick:u}))]))]))}});export{E as default};
