import{d as v,u as x,s as h,a as t,o as r,c as a,F as l,r as d,i as c,n as y,e as V,m as C}from"./index-B86WECW4.js";const w={key:0,class:"flex flex-col border-2 border-black h-[440px] max-w-[440px]"},B=["disabled","value","onInput"],F=v({__name:"SudokuBlock",setup(N){const o=x(),{sudokuBlock:f,isStarted:b,isCompleted:p,isPaused:m}=h(o),g=(u,i)=>{const n=i.target;let s=n.value.replace(/[^1-9]/g,"");s.length>1&&(s=s.slice(0,1));const e=parseFloat(s);if(Number.isNaN(e)){n.value="";return}C(u,e),u.value!==e?o.scorePenalty():(o.scoreSuccess(),p.value&&o.finishGame())};return(u,i)=>t(b)?(r(),a("div",w,[(r(!0),a(l,null,d(t(f),(n,s)=>(r(),a("div",{key:s,class:"flex w-full h-full"},[(r(!0),a(l,null,d(n,(e,_)=>(r(),a("input",{key:_,type:"number",disabled:e.isVisible||t(c)(e)||t(m),value:e.isVisible&&e.value||!e.isVisible&&e.guess,class:y(["text-center text-lg font-bold border border-gray-300 outline-none disabled:cursor-not-allowed w-full h-full",e.isVisible?"bg-gray-200":"",e.isError?"bg-red-200":"",t(c)(e)?"bg-green-400":""]),onInput:k=>g(e,k)},null,42,B))),128))]))),128))])):V("",!0)}});export{F as default};
