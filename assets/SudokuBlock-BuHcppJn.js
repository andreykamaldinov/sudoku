import{d as h,u as w,s as x,a as t,o as u,c as a,F as l,r as f,i as c,n as S,e as B,m as C,_ as V}from"./index-DmpjOLYN.js";const F={key:0,class:"flex flex-col border-2 border-black h-[440px] w-[440px] mob:w-full"},N=["disabled","value","onInput"],A=h({__name:"SudokuBlock",setup(D){const r=w(),{sudokuBlock:p,isStarted:b,isCompleted:m,isPaused:k}=x(r),_=(s,d,n,i)=>{const e=i.target;e.value=e.value.replace(/[^1-9]/g,"").charAt(0);const o=parseFloat(e.value);if(s.guess!==o){if(Number.isNaN(o)){e.value="";return}r.recordMove(s,o,n,d),C(s,o),g(s),s.isError||r.removeMoveFromHistory(n,d),m.value&&r.finishGame()}},g=s=>{s.guess===s.value?r.scoreSuccess():r.scorePenalty()},v=s=>{(s.key==="ArrowUp"||s.key==="ArrowDown")&&s.preventDefault()};return(s,d)=>t(b)?(u(),a("div",F,[(u(!0),a(l,null,f(t(p),(n,i)=>(u(),a("div",{key:i,class:"flex w-full h-full sudoku-row"},[(u(!0),a(l,null,f(n,(e,o)=>(u(),a("input",{key:o,type:"number",disabled:e.isVisible||t(c)(e)||t(k)||e.isHint,value:e.isVisible&&e.value||!e.isVisible&&e.guess,class:S(["sudoku-cell text-center text-lg font-bold border border-gray-300 outline-none disabled:cursor-not-allowed w-full h-full",e.isVisible?"bg-gray-200":"",e.isError?"bg-red-200":"",e.isHint?"bg-blue-400":"",t(c)(e)?"bg-green-400":""]),onInput:y=>_(e,o,i,y),onKeydown:v},null,42,N))),128))]))),128))])):B("",!0)}}),H=V(A,[["__scopeId","data-v-d0582375"]]);export{H as default};
