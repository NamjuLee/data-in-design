"use strict";(self.webpackChunkData_in_Design=self.webpackChunkData_in_Design||[]).push([[623],{20623:(e,t,s)=>{s.r(t),s.d(t,{execute:()=>o});var a=s(8),r=s(50076),n=s(30726);let i;function o(e,t){let s=t.responseType;s?"array-buffer"!==s&&"blob"!==s&&"json"!==s&&"native"!==s&&"native-request-init"!==s&&"text"!==s&&(s="text"):s="json",t.responseType=s;const o=(0,n.oA)(t.signal);return delete t.signal,globalThis.invokeStaticMessage("request",{url:e,options:t},{signal:o}).then((async n=>{let l,u,c,b,f;if(n.data)if(n.data instanceof ArrayBuffer){if(!("json"!==s&&"text"!==s&&"blob"!==s||(l=new Blob([n.data]),"json"!==s&&"text"!==s||(i||(i=new FileReaderSync),b=i.readAsText(l),"json"!==s)))){try{u=JSON.parse(b||null)}catch(d){const s=(0,a.A)((0,a.A)({},d),{},{url:e,requestOptions:t});throw new r.A("request:server",d.message,s)}if(u.error){const s=(0,a.A)((0,a.A)({},u.error),{},{url:e,requestOptions:t});throw new r.A("request:server",u.error.message,s)}}}else"native"===s&&(n.data.signal=o,c=await fetch(n.data.url,n.data));switch(s){case"blob":f=l;break;case"json":f=u;break;case"native":f=c;break;case"text":f=b;break;default:f=n.data}return{data:f,requestOptions:t,ssl:n.ssl,url:e}}))}}}]);
//# sourceMappingURL=623.f1d3fa3b.chunk.js.map