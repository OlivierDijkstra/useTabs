import{useState as t,useEffect as n}from"react";function e(){return e=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},e.apply(this,arguments)}function r({container:r,defaultTab:i,duration:o=150}){var l;const a=`${o}ms`,u={opacity:0,position:"absolute",left:0,top:0,pointerEvents:"none",zIndex:"-1"},[c,p]=t(i),[s,g]=t(i),[f,h]=t((null==i||null==(l=i.current)?void 0:l.getBoundingClientRect())||null),[d,v]=t(null),[m,y]=t(!!i),[$,x]=t(u);function b(t){t&&(h(((null==t?void 0:t.target)||(null==t?void 0:t.current)).getBoundingClientRect()),v(r.current.getBoundingClientRect()),y(!c),p(t))}return n(()=>{var t,n;f&&d&&(x(e({},u,{transition:`transform ${m||s?"0ms":a}, opacity ${i?"0ms":a}`,width:`${(t=f).width}px`,height:`${t.height}px`,opacity:c?1:0,transform:`translate(\n          ${t.left-(n=d).left}px, \n          ${t.top-n.top}px\n        )`})),g(!1))},[f,d]),n(()=>{null!=i&&i.current&&b(i)},[]),{setHightlight:b,highlightStyles:$}}export{r as default};
//# sourceMappingURL=index.modern.js.map
