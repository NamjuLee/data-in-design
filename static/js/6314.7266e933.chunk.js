"use strict";(self.webpackChunkData_in_Design=self.webpackChunkData_in_Design||[]).push([[6314],{93795:(e,t,a)=>{function l(e){return e=e||globalThis.location.hostname,m.some((t=>{var a;return null!=(null===(a=e)||void 0===a?void 0:a.match(t))}))}function n(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(o)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(r)||null!=t.match(i)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}a.d(t,{EM:()=>n,b5:()=>l});const o=/^devext.arcgis.com$/,r=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,i=/^[\w-]*\.mapsqa.arcgis.com$/,m=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,o,r,/^jsapps.esri.com$/,s,i]},26314:(e,t,a)=>{a.r(t),a.d(t,{fetchSymbolFromStyle:()=>p,resolveWebStyleSymbol:()=>g});var l=a(95444),n=a(93795),o=a(50076),r=a(30726),s=a(90534),i=a(44568),m=a(79453),c=a(9192),u=a(24141),y=a(8446),b=a(25158);function g(e,t,a,l){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,a){const l=y.jg.replace(/\{SymbolName\}/gi,e.name),n=(0,r.Ru)(t.portal)?t.portal:i.A.getDefault();return(0,y.yA)(l,a).then((e=>{const t=(0,y.bo)(e.data);return(0,c.rS)(t,{portal:n,url:(0,s.An)((0,s.nM)(l)),origin:"portal-item"})}))}(e,t,l):(0,y.cF)(e,t,l).then((n=>p((0,r.T7)(n),e.name,t,a,l))):Promise.reject(new o.A("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function p(e,t,a,g,p){var h,f,d;const v=e.data,w=a&&(0,r.Ru)(a.portal)?a.portal:i.A.getDefault(),A={portal:w,url:(0,s.An)(e.baseUrl),origin:"portal-item"},S=v.items.find((e=>e.name===t));if(!S){const e="The symbol name '".concat(t,"' could not be found");return Promise.reject(new o.A("symbolstyleutils:symbol-name-not-found",e,{symbolName:t}))}let D=(0,m.f)((0,y.o5)(S,g),A),N=null!==(h=null===(f=S.thumbnail)||void 0===f?void 0:f.href)&&void 0!==h?h:null;const M=S.thumbnail&&S.thumbnail.imageData;(0,n.b5)()&&(D=null!==(d=(0,n.EM)(D))&&void 0!==d?d:"",N=(0,n.EM)(N));const $={portal:w,url:(0,s.An)((0,s.nM)(D)),origin:"portal-item"};return(0,y.yA)(D,p).then((n=>{const o="cimRef"===g?(0,y.bo)(n.data):n.data,r=(0,c.rS)(o,$);if(r&&(0,l.wk)(r)){if(N){const e=(0,m.f)(N,A);r.thumbnail=new b.V({url:e})}else M&&(r.thumbnail=new b.V({url:"data:image/png;base64,".concat(M)}));e.styleUrl?r.styleOrigin=new u.A({portal:a.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(r.styleOrigin=new u.A({portal:a.portal,styleName:e.styleName,name:t}))}return r}))}}}]);
//# sourceMappingURL=6314.7266e933.chunk.js.map