import{useState as t,useEffect as n}from"react";function r(){return r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},r.apply(this,arguments)}function e({container:e,defaultTab:i,duration:o=150,zIndex:a=0}){var l;const u=`${o}ms`,s={opacity:0,position:"absolute",left:0,top:0,transition:"transform 0s, opacity 0s",pointerEvents:"none",zIndex:a,width:"0px",height:"0px",transform:"translate(0, 0)"},[p,c]=t(i),[h,f]=t(!!i),[g,d]=t((null==i||null==(l=i.current)?void 0:l.getBoundingClientRect())||null),[m,v]=t(null),[x,y]=t(!!i),[$,b]=t(s);function w(t){t&&(d(((null==t?void 0:t.target)||(null==t?void 0:t.current)).getBoundingClientRect()),v(e.current.getBoundingClientRect()),y(!p),c(t))}return n(()=>{var t,n;g&&m&&(b(r({},s,{transition:`transform ${x||h?"0ms":u}, opacity ${i?"0ms":u}`,width:`${(t=g).width}px`,height:`${t.height}px`,opacity:p?1:0,transform:`translate(\n          ${t.left-(n=m).left}px, \n          ${t.top-n.top}px\n        )`})),f(!1))},[g,m]),n(()=>{null!=i&&i.current&&w(i)},[]),{setHighlight:w,highlightStyles:$}}export{e as default};
//# sourceMappingURL=index.modern.js.map
