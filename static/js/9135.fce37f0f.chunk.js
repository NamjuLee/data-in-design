"use strict";(self.webpackChunkData_in_Design=self.webpackChunkData_in_Design||[]).push([[9135],{89135:(n,t,e)=>{e.r(t),e.d(t,{registerFunctions:()=>v});var r=e(55171),i=e(80324),a=e(43036),u=e(92975),o=e(76797),c=e(89189),s=e(56203),l=e(66388),f=e(13904),d=e(65215),A=e(23701),w=e(19902),y=e(9861),h=e(31633);function m(n){return 0===r.rE.indexOf("4.")?d.A.fromExtent(n):new d.A({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function p(n,t,e){if((0,a.y)(n,2,2,t,e),n[0]instanceof c.A&&n[1]instanceof c.A);else if(n[0]instanceof c.A&&null===n[1]);else if(n[1]instanceof c.A&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new y.D$(t,y.TX.InvalidParameter,e)}async function g(n,t){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return 0;let e=1;(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid)&&(e=(0,u.G9)(n.spatialReference)/(0,h.GA)(n.spatialReference));let r=0;if("polyline"===n.type)for(const a of n.paths)for(let n=1;n<a.length;n++)r+=(0,u.BM)(a[n],a[n-1],e);else if("polygon"===n.type)for(const a of n.rings){for(let n=1;n<a.length;n++)r+=(0,u.BM)(a[n],a[n-1],e);(a[0][0]!==a[a.length-1][0]||a[0][1]!==a[a.length-1][1]||void 0!==a[0][2]&&a[0][2]!==a[a.length-1][2])&&(r+=(0,u.BM)(a[0],a[a.length-1],e))}else"extent"===n.type&&(r+=2*(0,u.BM)([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],e),r+=2*(0,u.BM)([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],e),r*=2,r+=4*Math.abs((0,a.A)(n.zmax,0)*e-(0,a.A)(n.zmin,0)*e));const i=new A.A({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[0,0],[0,r]]});return(0,s.Zu)(i,t)}function v(n){"async"===n.mode&&(n.functions.disjoint=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>(p(i=(0,a.G)(i),t,e),null===i[0]||null===i[1]||(0,s.nf)(i[0],i[1]))))},n.functions.intersects=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>(p(i=(0,a.G)(i),t,e),null!==i[0]&&null!==i[1]&&(0,s.HY)(i[0],i[1]))))},n.functions.touches=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>(p(i=(0,a.G)(i),t,e),null!==i[0]&&null!==i[1]&&(0,s.yI)(i[0],i[1]))))},n.functions.crosses=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>(p(i=(0,a.G)(i),t,e),null!==i[0]&&null!==i[1]&&(0,s.NN)(i[0],i[1]))))},n.functions.within=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>(p(i=(0,a.G)(i),t,e),null!==i[0]&&null!==i[1]&&(0,s.ux)(i[0],i[1]))))},n.functions.contains=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>(p(i=(0,a.G)(i),t,e),null!==i[0]&&null!==i[1]&&(0,s.gR)(i[0],i[1]))))},n.functions.overlaps=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>(p(i=(0,a.G)(i),t,e),null!==i[0]&&null!==i[1]&&(0,s.$f)(i[0],i[1]))))},n.functions.equals=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>((0,a.y)(i,2,2,t,e),i[0]===i[1]||(i[0]instanceof c.A&&i[1]instanceof c.A?(0,s.aI)(i[0],i[1]):!(!(0,a.k)(i[0])||!(0,a.k)(i[1]))&&i[0].getTime()===i[1].getTime()))))},n.functions.relate=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{if(i=(0,a.G)(i),(0,a.y)(i,3,3,t,e),i[0]instanceof c.A&&i[1]instanceof c.A)return(0,s.c7)(i[0],i[1],(0,a.j)(i[2]));if(i[0]instanceof c.A&&null===i[1])return!1;if(i[1]instanceof c.A&&null===i[0])return!1;if(null===i[0]&&null===i[1])return!1;throw new y.D$(t,y.TX.InvalidParameter,e)}))},n.functions.intersection=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>(p(i=(0,a.G)(i),t,e),null===i[0]||null===i[1]?null:(0,s.y$)(i[0],i[1]))))},n.functions.union=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{const o=[];if(0===(u=(0,a.G)(u)).length)throw new y.D$(t,y.TX.WrongNumberOfParameters,e);if(1===u.length)if((0,a.m)(u[0])){const n=(0,a.G)(u[0]);for(let r=0;r<n.length;r++)if(null!==n[r]){if(!(n[r]instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);o.push(n[r])}}else{if(!(0,a.x)(u[0])){if(u[0]instanceof c.A)return(0,a.q)((0,i.Yq)(u[0]),t.spatialReference);if(null===u[0])return null;throw new y.D$(t,y.TX.InvalidParameter,e)}{const n=(0,a.G)(u[0].toArray());for(let r=0;r<n.length;r++)if(null!==n[r]){if(!(n[r]instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);o.push(n[r])}}}else for(let i=0;i<u.length;i++)if(null!==u[i]){if(!(u[i]instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);o.push(u[i])}return 0===o.length?null:(0,s.KC)(o)}))},n.functions.difference=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>(p(u=(0,a.G)(u),t,e),null!==u[0]&&null===u[1]?(0,i.Yq)(u[0]):null===u[0]?null:(0,s.iv)(u[0],u[1]))))},n.functions.symmetricdifference=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>(p(u=(0,a.G)(u),t,e),null===u[0]&&null===u[1]?null:null===u[0]?(0,i.Yq)(u[1]):null===u[1]?(0,i.Yq)(u[0]):(0,s.BT)(u[0],u[1]))))},n.functions.clip=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{if(i=(0,a.G)(i),(0,a.y)(i,2,2,t,e),!(i[1]instanceof o.A)&&null!==i[1])throw new y.D$(t,y.TX.InvalidParameter,e);if(null===i[0])return null;if(!(i[0]instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);return null===i[1]?null:(0,s.$Q)(i[0],i[1])}))},n.functions.cut=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{if(u=(0,a.G)(u),(0,a.y)(u,2,2,t,e),!(u[1]instanceof A.A)&&null!==u[1])throw new y.D$(t,y.TX.InvalidParameter,e);if(null===u[0])return[];if(!(u[0]instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);return null===u[1]?[(0,i.Yq)(u[0])]:(0,s.Jj)(u[0],u[1])}))},n.functions.area=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,u)=>{if((0,a.y)(u,1,2,t,e),null===(u=(0,a.G)(u))[0])return 0;if((0,a.T)(u[0])){const n=await u[0].sumArea((0,i.uf)((0,a.A)(u[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new y.D$(t,y.TX.Cancelled,e);return n}if((0,a.m)(u[0])||(0,a.x)(u[0])){const n=(0,a.J)(u[0],t.spatialReference);return null===n?0:(0,s._2)(n,(0,i.uf)((0,a.A)(u[1],-1)))}if(!(u[0]instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);return(0,s._2)(u[0],(0,i.uf)((0,a.A)(u[1],-1)))}))},n.functions.areageodetic=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,u)=>{if((0,a.y)(u,1,2,t,e),null===(u=(0,a.G)(u))[0])return 0;if((0,a.T)(u[0])){const n=await u[0].sumArea((0,i.uf)((0,a.A)(u[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new y.D$(t,y.TX.Cancelled,e);return n}if((0,a.m)(u[0])||(0,a.x)(u[0])){const n=(0,a.J)(u[0],t.spatialReference);return null===n?0:(0,s.PW)(n,(0,i.uf)((0,a.A)(u[1],-1)))}if(!(u[0]instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);return(0,s.PW)(u[0],(0,i.uf)((0,a.A)(u[1],-1)))}))},n.functions.length=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,u)=>{if((0,a.y)(u,1,2,t,e),null===(u=(0,a.G)(u))[0])return 0;if((0,a.T)(u[0])){const n=await u[0].sumLength((0,i.SQ)((0,a.A)(u[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new y.D$(t,y.TX.Cancelled,e);return n}if((0,a.m)(u[0])||(0,a.x)(u[0])){const n=(0,a.H)(u[0],t.spatialReference);return null===n?0:(0,s.Zu)(n,(0,i.SQ)((0,a.A)(u[1],-1)))}if(!(u[0]instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);return(0,s.Zu)(u[0],(0,i.SQ)((0,a.A)(u[1],-1)))}))},n.functions.length3d=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{if((0,a.y)(u,1,2,t,e),null===(u=(0,a.G)(u))[0])return 0;if((0,a.m)(u[0])||(0,a.x)(u[0])){const n=(0,a.H)(u[0],t.spatialReference);return null===n?0:!0===n.hasZ?g(n,(0,i.SQ)((0,a.A)(u[1],-1))):(0,s.Zu)(n,(0,i.SQ)((0,a.A)(u[1],-1)))}if(!(u[0]instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);return!0===u[0].hasZ?g(u[0],(0,i.SQ)((0,a.A)(u[1],-1))):(0,s.Zu)(u[0],(0,i.SQ)((0,a.A)(u[1],-1)))}))},n.functions.lengthgeodetic=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,u)=>{if((0,a.y)(u,1,2,t,e),null===(u=(0,a.G)(u))[0])return 0;if((0,a.T)(u[0])){const n=await u[0].sumLength((0,i.SQ)((0,a.A)(u[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new y.D$(t,y.TX.Cancelled,e);return n}if((0,a.m)(u[0])||(0,a.x)(u[0])){const n=(0,a.H)(u[0],t.spatialReference);return null===n?0:(0,s.mh)(n,(0,i.SQ)((0,a.A)(u[1],-1)))}if(!(u[0]instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);return(0,s.mh)(u[0],(0,i.SQ)((0,a.A)(u[1],-1)))}))},n.functions.distance=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{u=(0,a.G)(u),(0,a.y)(u,2,3,t,e);let o=u[0];((0,a.m)(u[0])||(0,a.x)(u[0]))&&(o=(0,a.K)(u[0],t.spatialReference));let l=u[1];if(((0,a.m)(u[1])||(0,a.x)(u[1]))&&(l=(0,a.K)(u[1],t.spatialReference)),!(o instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);if(!(l instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);return(0,s.Io)(o,l,(0,i.SQ)((0,a.A)(u[2],-1)))}))},n.functions.distancegeodetic=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{u=(0,a.G)(u),(0,a.y)(u,2,3,t,e);const o=u[0],c=u[1];if(!(o instanceof f.A))throw new y.D$(t,y.TX.InvalidParameter,e);if(!(c instanceof f.A))throw new y.D$(t,y.TX.InvalidParameter,e);const l=new A.A({paths:[],spatialReference:o.spatialReference});return l.addPath([o,c]),(0,s.mh)(l,(0,i.SQ)((0,a.A)(u[2],-1)))}))},n.functions.densify=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{if(u=(0,a.G)(u),(0,a.y)(u,2,3,t,e),null===u[0])return null;if(!(u[0]instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);const l=(0,a.g)(u[1]);if(isNaN(l))throw new y.D$(t,y.TX.InvalidParameter,e);if(l<=0)throw new y.D$(t,y.TX.InvalidParameter,e);return u[0]instanceof d.A||u[0]instanceof A.A?(0,s.jL)(u[0],l,(0,i.SQ)((0,a.A)(u[2],-1))):u[0]instanceof o.A?(0,s.jL)(m(u[0]),l,(0,i.SQ)((0,a.A)(u[2],-1))):u[0]}))},n.functions.densifygeodetic=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{if(u=(0,a.G)(u),(0,a.y)(u,2,3,t,e),null===u[0])return null;if(!(u[0]instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);const l=(0,a.g)(u[1]);if(isNaN(l))throw new y.D$(t,y.TX.InvalidParameter,e);if(l<=0)throw new y.D$(t,y.TX.InvalidParameter,e);return u[0]instanceof d.A||u[0]instanceof A.A?(0,s.Ow)(u[0],l,(0,i.SQ)((0,a.A)(u[2],-1))):u[0]instanceof o.A?(0,s.Ow)(m(u[0]),l,(0,i.SQ)((0,a.A)(u[2],-1))):u[0]}))},n.functions.generalize=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{if(u=(0,a.G)(u),(0,a.y)(u,2,4,t,e),null===u[0])return null;if(!(u[0]instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);const o=(0,a.g)(u[1]);if(isNaN(o))throw new y.D$(t,y.TX.InvalidParameter,e);return(0,s.px)(u[0],o,(0,a.h)((0,a.A)(u[2],!0)),(0,i.SQ)((0,a.A)(u[3],-1)))}))},n.functions.buffer=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{if(u=(0,a.G)(u),(0,a.y)(u,2,3,t,e),null===u[0])return null;if(!(u[0]instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);const o=(0,a.g)(u[1]);if(isNaN(o))throw new y.D$(t,y.TX.InvalidParameter,e);return 0===o?(0,i.Yq)(u[0]):(0,s.r)(u[0],o,(0,i.SQ)((0,a.A)(u[2],-1)))}))},n.functions.buffergeodetic=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{if(u=(0,a.G)(u),(0,a.y)(u,2,3,t,e),null===u[0])return null;if(!(u[0]instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);const o=(0,a.g)(u[1]);if(isNaN(o))throw new y.D$(t,y.TX.InvalidParameter,e);return 0===o?(0,i.Yq)(u[0]):(0,s.SE)(u[0],o,(0,i.SQ)((0,a.A)(u[2],-1)))}))},n.functions.offset=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{if(u=(0,a.G)(u),(0,a.y)(u,2,6,t,e),null===u[0])return null;if(!(u[0]instanceof d.A||u[0]instanceof A.A))throw new y.D$(t,y.TX.InvalidParameter,e);const o=(0,a.g)(u[1]);if(isNaN(o))throw new y.D$(t,y.TX.InvalidParameter,e);const c=(0,a.g)((0,a.A)(u[4],10));if(isNaN(c))throw new y.D$(t,y.TX.InvalidParameter,e);const l=(0,a.g)((0,a.A)(u[5],0));if(isNaN(l))throw new y.D$(t,y.TX.InvalidParameter,e);return(0,s.cY)(u[0],o,(0,i.SQ)((0,a.A)(u[2],-1)),(0,a.j)((0,a.A)(u[3],"round")).toLowerCase(),c,l)}))},n.functions.rotate=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{i=(0,a.G)(i),(0,a.y)(i,2,3,t,e);let u=i[0];if(null===u)return null;if(!(u instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);u instanceof o.A&&(u=d.A.fromExtent(u));const l=(0,a.g)(i[1]);if(isNaN(l))throw new y.D$(t,y.TX.InvalidParameter,e);const A=(0,a.A)(i[2],null);if(null===A)return(0,s.e$)(u,l);if(A instanceof f.A)return(0,s.e$)(u,l,A);throw new y.D$(t,y.TX.InvalidParameter,e)}))},n.functions.centroid=function(t,e){return n.standardFunctionAsync(t,e,((n,r,s)=>{if(s=(0,a.G)(s),(0,a.y)(s,1,1,t,e),null===s[0])return null;let w=s[0];if(((0,a.m)(s[0])||(0,a.x)(s[0]))&&(w=(0,a.K)(s[0],t.spatialReference)),null===w)return null;if(!(w instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);return w instanceof f.A?(0,a.q)((0,i.Yq)(s[0]),t.spatialReference):w instanceof d.A?w.centroid:w instanceof A.A?(0,u.tI)(w):w instanceof l.A?(0,u.e0)(w):w instanceof o.A?w.center:null}))},n.functions.multiparttosinglepart=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,u)=>{u=(0,a.G)(u),(0,a.y)(u,1,1,t,e);const h=[];if(null===u[0])return null;if(!(u[0]instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);if(u[0]instanceof f.A)return[(0,a.q)((0,i.Yq)(u[0]),t.spatialReference)];if(u[0]instanceof o.A)return[(0,a.q)((0,i.Yq)(u[0]),t.spatialReference)];const m=await(0,s.CR)(u[0]);if(m instanceof d.A){const n=[],t=[];for(let e=0;e<m.rings.length;e++)if(m.isClockwise(m.rings[e])){const t=(0,w.rS)({rings:[m.rings[e]],hasZ:!0===m.hasZ,hazM:!0===m.hasM,spatialReference:m.spatialReference.toJSON()});n.push(t)}else t.push({ring:m.rings[e],pt:m.getPoint(e,0)});for(let e=0;e<t.length;e++)for(let r=0;r<n.length;r++)if(n[r].contains(t[e].pt)){n[r].addRing(t[e].ring);break}return n}if(m instanceof A.A){const n=[];for(let t=0;t<m.paths.length;t++){const e=(0,w.rS)({paths:[m.paths[t]],hasZ:!0===m.hasZ,hazM:!0===m.hasM,spatialReference:m.spatialReference.toJSON()});n.push(e)}return n}if(u[0]instanceof l.A){const n=(0,a.q)((0,i.Yq)(u[0]),t.spatialReference);for(let t=0;t<n.points.length;t++)h.push(n.getPoint(t));return h}return null}))},n.functions.issimple=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{if(i=(0,a.G)(i),(0,a.y)(i,1,1,t,e),null===i[0])return!0;if(!(i[0]instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);return(0,s.pn)(i[0])}))},n.functions.simplify=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{if(i=(0,a.G)(i),(0,a.y)(i,1,1,t,e),null===i[0])return null;if(!(i[0]instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);return(0,s.CR)(i[0])}))},n.functions.convexhull=function(t,e){return n.standardFunctionAsync(t,e,((n,r,i)=>{if(i=(0,a.G)(i),(0,a.y)(i,1,1,t,e),null===i[0])return null;if(!(i[0]instanceof c.A))throw new y.D$(t,y.TX.InvalidParameter,e);return(0,s.HF)(i[0])}))})}},56203:(n,t,e)=>{e.d(t,{$Q:()=>f,$f:()=>$,BT:()=>x,CR:()=>I,HF:()=>P,HY:()=>m,Io:()=>y,Jj:()=>d,KC:()=>G,NN:()=>w,Ow:()=>C,PW:()=>M,SE:()=>N,Zu:()=>k,_2:()=>Z,aI:()=>h,c7:()=>T,cY:()=>F,e$:()=>b,gR:()=>A,iv:()=>X,jL:()=>Y,mh:()=>O,nf:()=>v,pn:()=>D,px:()=>q,r:()=>R,ux:()=>g,y$:()=>S,yI:()=>p});e(35238);var r=e(3826),i=(e(13904),e(19902));function a(n){var t;return Array.isArray(n)?null===(t=n[0])||void 0===t?void 0:t.spatialReference:null===n||void 0===n?void 0:n.spatialReference}function u(n){return n?Array.isArray(n)?n.map(u):n.toJSON?n.toJSON():n:n}function o(n){return Array.isArray(n)?n.map((n=>(0,i.rS)(n))):(0,i.rS)(n)}let c;async function s(){return c||(c=(0,r.ho)("geometryEngineWorker",{strategy:"distributed"})),c}async function l(n,t){return(await s()).invoke("executeGEOperation",{operation:n,parameters:u(t)})}async function f(n,t){return o(await l("clip",[a(n),n,t]))}async function d(n,t){return o(await l("cut",[a(n),n,t]))}function A(n,t){return l("contains",[a(n),n,t])}function w(n,t){return l("crosses",[a(n),n,t])}function y(n,t,e){return l("distance",[a(n),n,t,e])}function h(n,t){return l("equals",[a(n),n,t])}function m(n,t){return l("intersects",[a(n),n,t])}function p(n,t){return l("touches",[a(n),n,t])}function g(n,t){return l("within",[a(n),n,t])}function v(n,t){return l("disjoint",[a(n),n,t])}function $(n,t){return l("overlaps",[a(n),n,t])}function T(n,t,e){return l("relate",[a(n),n,t,e])}function D(n){return l("isSimple",[a(n),n])}async function I(n){return o(await l("simplify",[a(n),n]))}async function P(n){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return o(await l("convexHull",[a(n),n,t]))}async function X(n,t){return o(await l("difference",[a(n),n,t]))}async function x(n,t){return o(await l("symmetricDifference",[a(n),n,t]))}async function S(n,t){return o(await l("intersect",[a(n),n,t]))}async function G(n){const t=function(n,t){let e;return Array.isArray(n)?e=n:(e=[],e.push(n),null!=t&&e.push(t)),e}(n,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null);return o(await l("union",[a(t),t]))}async function F(n,t,e,r,i,u){return o(await l("offset",[a(n),n,t,e,r,i,u]))}async function R(n,t,e){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=[a(n),n,t,e,r];return o(await l("buffer",i))}async function N(n,t,e,r,i,u){const c=[a(n),n,t,e,r,i,u];return o(await l("geodesicBuffer",c))}function Q(n){var t;return"xmin"in n?n.center:"x"in n?n:null===(t=n.extent)||void 0===t?void 0:t.center}async function b(n,t,e){var r;if(null==n)throw new j;const i=n.spatialReference;if(null==(e=null!==(r=e)&&void 0!==r?r:Q(n)))throw new j;const a=n.constructor.fromJSON(await l("rotate",[i,n,t,e]));return a.spatialReference=i,a}async function q(n,t,e,r){return o(await l("generalize",[a(n),n,t,e,r]))}async function Y(n,t,e){return o(await l("densify",[a(n),n,t,e]))}async function C(n,t,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return o(await l("geodesicDensify",[a(n),n,t,e,r]))}function Z(n,t){return l("planarArea",[a(n),n,t])}function k(n,t){return l("planarLength",[a(n),n,t])}function M(n,t,e){return l("geodesicArea",[a(n),n,t,e])}function O(n,t,e){return l("geodesicLength",[a(n),n,t,e])}class j extends Error{constructor(){super("Illegal Argument Exception")}}}}]);
//# sourceMappingURL=9135.fce37f0f.chunk.js.map