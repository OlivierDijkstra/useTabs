import{useState as t,useEffect as n}from"react";function e(){return e=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},e.apply(this,arguments)}function i(i){var r,o=i.container,l=i.defaultTab,u=i.duration,a=(void 0===u?150:u)+"ms",c={opacity:0,position:"absolute",left:0,top:0,pointerEvents:"none",zIndex:"-1"},p=t(l),s=p[0],f=p[1],g=t(l),h=g[0],d=g[1],v=t((null==l||null==(r=l.current)?void 0:r.getBoundingClientRect())||null),m=v[0],y=v[1],x=t(null),b=x[0],w=x[1],B=t(!!l),C=B[0],O=B[1],R=t(c),j=R[0],z=R[1];function E(t){t&&(y(((null==t?void 0:t.target)||(null==t?void 0:t.current)).getBoundingClientRect()),w(o.current.getBoundingClientRect()),O(!s),f(t))}return n(function(){var t,n;m&&b&&(z(e({},c,{transition:"transform "+(C||h?"0ms":a)+", opacity "+(l?"0ms":a),width:(t=m).width+"px",height:t.height+"px",opacity:s?1:0,transform:"translate(\n          "+(t.left-(n=b).left)+"px, \n          "+(t.top-n.top)+"px\n        )"})),d(!1))},[m,b]),n(function(){null!=l&&l.current&&E(l)},[]),{setHightlight:E,highlightStyles:j}}export{i as default};
//# sourceMappingURL=index.module.js.map
