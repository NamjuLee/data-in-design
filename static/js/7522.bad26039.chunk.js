"use strict";(self.webpackChunkData_in_Design=self.webpackChunkData_in_Design||[]).push([[7522],{87522:(s,o,t)=>{t.r(o),t.d(o,{Solution:()=>n});class n{constructor(s){console.log("Let's learn Typescript for digital mapping and visualization!!"),console.log("Typescript, Graph data Structure"),console.log("=================================");let o=[];for(let h=0;h<7;++h)o.push(new e(h));o[0].push(o[1]),o[0].push(o[2]),o[1].push(o[3]),o[1].push(o[4]),o[2].push(o[5]),o[2].push(o[6]);let t=0,n=[];(s=>{let o=[];for(s[0].visit=!0,o.push(s[0]),n.push(s[0]);o.length>0;){let s=o.shift();for(let t=0;t<s.connection.length;++t){let e=s.connection[t];e.visit||(e.visit=!0,n.push(e),o.push(e))}if(t++>100)return void console.log("safeguard")}})(o),console.log("BFS!",n),console.log("done"),o=[];for(let h=0;h<7;++h)o.push(new e(h));o[0].push(o[1]),o[0].push(o[2]),o[1].push(o[3]),o[1].push(o[4]),o[2].push(o[5]),o[2].push(o[6]);let i=[];const l=s=>{if(!s.visit){s.visit=!0,i.push(s);for(let o=0;o<s.connection.length;++o)l(s.connection[o])}};l(o[0]),console.log("DFS!",i),console.log("done")}destroy(){}}class e{constructor(s){this.visit=!1,this.id=-1,this.connection=[],this.id=s}push(s){this.connection.push(s),s.connection.push(this)}}}}]);
//# sourceMappingURL=7522.bad26039.chunk.js.map