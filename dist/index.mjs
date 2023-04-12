import { useState, useEffect } from 'react';

var R=Object.defineProperty,M=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var y=(i,t,e)=>t in i?R(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,u=(i,t)=>{for(var e in t||(t={}))d.call(t,e)&&y(i,e,t[e]);if(S)for(var e of S(t))v.call(t,e)&&y(i,e,t[e]);return i},g=(i,t)=>M(i,L(t));function x({container:i,defaultTab:t,duration:e=150,zIndex:E=0}){let s=`${e}ms`,m={opacity:0,position:"absolute",left:0,top:0,transition:`transform 0s, opacity ${s}`,pointerEvents:"none",zIndex:E,width:"0px",height:"0px",transform:"translate(0, 0)"},[o,h]=useState(null),[a,c]=useState(m);function f(n){let r=!!(n!=null&&n.currentTarget)||(n==null?void 0:n.current);if(!n||!i.current){o&&clearTimeout(o),h(null),c(g(u({},a),{opacity:0}));return}let p=r.getBoundingClientRect(),l=i.current.getBoundingClientRect();H(p,l);}function H(n,r){let p=o?s:"0ms";o&&(clearTimeout(o),h(null));let l=g(u({},m),{transition:`transform ${p}, opacity ${s}`,width:`${n.width}px`,height:`${n.height}px`,opacity:1,transform:`translate(
          ${n.left-Number(r.left)}px, 
          ${n.top-Number(r.top)}px
        )`});c(l);let b=setTimeout(()=>{c(g(u({},l),{transition:`transform ${s}, opacity ${s}`}));},e);h(b);}return useEffect(()=>{t!=null&&t.current&&f(t);},[]),{setHighlight:f,highlightStyles:a}}

export { x as default };
