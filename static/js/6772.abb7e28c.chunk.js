"use strict";(self.webpackChunkdata_in_design=self.webpackChunkdata_in_design||[]).push([[6772],{51703:(t,i,s)=>{s.d(i,{F:()=>r,l:()=>y});var e=s(28899),h=s(81806);const n=128e3;let x=null,_=null;async function r(){return x||(x=async function(){const t=(0,h.A)("esri-csp-restrictions")?await s.e(7879).then(s.bind(s,27879)).then((t=>t.l)):await s.e(6821).then(s.bind(s,56821)).then((t=>t.l));_=await t.load({locateFile:t=>(0,e.s)("esri/core/libs/libtess/".concat(t))})}()),x}function y(t,i){const s=Math.max(t.length,n);return _.triangulate(t,i,s)}},26889:(t,i,s)=>{s.d(i,{b:()=>e,d:()=>h});class e{constructor(t,i){this.x=t,this.y=i}clone(){return new e(this.x,this.y)}equals(t,i){return t===this.x&&i===this.y}isEqual(t){return t.x===this.x&&t.y===this.y}setCoords(t,i){this.x=t,this.y=i}normalize(){const t=this.x,i=this.y,s=Math.sqrt(t*t+i*i);this.x/=s,this.y/=s}rightPerpendicular(){const t=this.x;this.x=this.y,this.y=-t}move(t,i){this.x+=t,this.y+=i}assign(t){this.x=t.x,this.y=t.y}assignAdd(t,i){this.x=t.x+i.x,this.y=t.y+i.y}assignSub(t,i){this.x=t.x-i.x,this.y=t.y-i.y}rotate(t,i){const s=this.x,e=this.y;this.x=s*t-e*i,this.y=s*i+e*t}scale(t){this.x*=t,this.y*=t}length(){const t=this.x,i=this.y;return Math.sqrt(t*t+i*i)}static distance(t,i){const s=i.x-t.x,e=i.y-t.y;return Math.sqrt(s*s+e*e)}static add(t,i){return new e(t.x+i.x,t.y+i.y)}static sub(t,i){return new e(t.x-i.x,t.y-i.y)}}var h;!function(t){t[t.Unknown=0]="Unknown",t[t.Point=1]="Point",t[t.LineString=2]="LineString",t[t.Polygon=3]="Polygon"}(h||(h={}))},16748:(t,i,s)=>{s.d(i,{O:()=>l,v:()=>y});var e,h,n=s(5095),x=s(26889),_=s(40480);class r{constructor(t,i,s){this.ratio=t,this.x=i,this.y=s}}class y{constructor(t,i,s){let e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:8;this._lines=[],this._starts=[],this.validateTessellation=!0,this._pixelRatio=e,this._pixelMargin=h,this._tileSize=n.dn*e,this._dz=t,this._yPos=i,this._xPos=s}setPixelMargin(t){t!==this._pixelMargin&&(this._pixelMargin=t,this.setExtent(this._extent))}setExtent(t){this._extent=t,this._finalRatio=this._tileSize/t*(1<<this._dz);let i=this._pixelRatio*this._pixelMargin;i/=this._finalRatio;const s=t>>this._dz;i>s&&(i=s),this._margin=i,this._xmin=s*this._xPos-i,this._ymin=s*this._yPos-i,this._xmax=this._xmin+s+2*i,this._ymax=this._ymin+s+2*i}reset(t){this._type=t,this._lines=[],this._starts=[],this._line=null,this._start=0}moveTo(t,i){this._pushLine(),this._prevIsIn=this._isIn(t,i),this._moveTo(t,i,this._prevIsIn),this._prevPt=new x.b(t,i),this._firstPt=new x.b(t,i),this._dist=0}lineTo(t,i){const s=this._isIn(t,i),e=new x.b(t,i),h=x.b.distance(this._prevPt,e);let n,_,y,l,a,o,u,c;if(s)this._prevIsIn?this._lineTo(t,i,!0):(n=this._prevPt,_=e,y=this._intersect(_,n),this._start=this._dist+h*(1-this._r),this._lineTo(y.x,y.y,!0),this._lineTo(_.x,_.y,!0));else if(this._prevIsIn)_=this._prevPt,n=e,y=this._intersect(_,n),this._lineTo(y.x,y.y,!0),this._lineTo(n.x,n.y,!1);else{const t=this._prevPt,i=e;if(t.x<=this._xmin&&i.x<=this._xmin||t.x>=this._xmax&&i.x>=this._xmax||t.y<=this._ymin&&i.y<=this._ymin||t.y>=this._ymax&&i.y>=this._ymax)this._lineTo(i.x,i.y,!1);else{const s=[];if((t.x<this._xmin&&i.x>this._xmin||t.x>this._xmin&&i.x<this._xmin)&&(l=(this._xmin-t.x)/(i.x-t.x),c=t.y+l*(i.y-t.y),c<=this._ymin?o=!1:c>=this._ymax?o=!0:s.push(new r(l,this._xmin,c))),(t.x<this._xmax&&i.x>this._xmax||t.x>this._xmax&&i.x<this._xmax)&&(l=(this._xmax-t.x)/(i.x-t.x),c=t.y+l*(i.y-t.y),c<=this._ymin?o=!1:c>=this._ymax?o=!0:s.push(new r(l,this._xmax,c))),(t.y<this._ymin&&i.y>this._ymin||t.y>this._ymin&&i.y<this._ymin)&&(l=(this._ymin-t.y)/(i.y-t.y),u=t.x+l*(i.x-t.x),u<=this._xmin?a=!1:u>=this._xmax?a=!0:s.push(new r(l,u,this._ymin))),(t.y<this._ymax&&i.y>this._ymax||t.y>this._ymax&&i.y<this._ymax)&&(l=(this._ymax-t.y)/(i.y-t.y),u=t.x+l*(i.x-t.x),u<=this._xmin?a=!1:u>=this._xmax?a=!0:s.push(new r(l,u,this._ymax))),0===s.length)a?o?this._lineTo(this._xmax,this._ymax,!0):this._lineTo(this._xmax,this._ymin,!0):o?this._lineTo(this._xmin,this._ymax,!0):this._lineTo(this._xmin,this._ymin,!0);else if(s.length>1&&s[0].ratio>s[1].ratio)this._start=this._dist+h*s[1].ratio,this._lineTo(s[1].x,s[1].y,!0),this._lineTo(s[0].x,s[0].y,!0);else{this._start=this._dist+h*s[0].ratio;for(let t=0;t<s.length;t++)this._lineTo(s[t].x,s[t].y,!0)}this._lineTo(i.x,i.y,!1)}}this._dist+=h,this._prevIsIn=s,this._prevPt=e}close(){if(this._line.length>2){const t=this._firstPt,i=this._prevPt;t.x===i.x&&t.y===i.y||this.lineTo(t.x,t.y);const s=this._line;let e=s.length;for(;e>=4&&(s[0].x===s[1].x&&s[0].x===s[e-2].x||s[0].y===s[1].y&&s[0].y===s[e-2].y);)s.pop(),s[0].x=s[e-2].x,s[0].y=s[e-2].y,--e}}result(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this._pushLine(),0===this._lines.length?null:(this._type===x.d.Polygon&&t&&a.simplify(this._tileSize,this._margin*this._finalRatio,this._lines),this._lines)}resultWithStarts(){if(this._type!==x.d.LineString)throw new Error("Only valid for lines");this._pushLine();const t=this._lines,i=t.length;if(0===i)return null;const s=[];for(let e=0;e<i;e++)s.push({line:t[e],start:this._starts[e]||0});return s}_isIn(t,i){return t>=this._xmin&&t<=this._xmax&&i>=this._ymin&&i<=this._ymax}_intersect(t,i){let s,e,h;if(i.x>=this._xmin&&i.x<=this._xmax)e=i.y<=this._ymin?this._ymin:this._ymax,h=(e-t.y)/(i.y-t.y),s=t.x+h*(i.x-t.x);else if(i.y>=this._ymin&&i.y<=this._ymax)s=i.x<=this._xmin?this._xmin:this._xmax,h=(s-t.x)/(i.x-t.x),e=t.y+h*(i.y-t.y);else{e=i.y<=this._ymin?this._ymin:this._ymax,s=i.x<=this._xmin?this._xmin:this._xmax;const n=(s-t.x)/(i.x-t.x),x=(e-t.y)/(i.y-t.y);n<x?(h=n,e=t.y+n*(i.y-t.y)):(h=x,s=t.x+x*(i.x-t.x))}return this._r=h,new x.b(s,e)}_pushLine(){this._line&&(this._type===x.d.Point?this._line.length>0&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===x.d.LineString?this._line.length>1&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===x.d.Polygon&&this._line.length>3&&(this._lines.push(this._line),this._starts.push(this._start))),this._line=[],this._start=0}_moveTo(t,i,s){this._type!==x.d.Polygon?s&&(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line.push(new x.b(t,i))):(s||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),i<this._ymin&&(i=this._ymin),i>this._ymax&&(i=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line.push(new x.b(t,i)),this._isH=!1,this._isV=!1)}_lineTo(t,i,s){let e,h;if(this._type!==x.d.Polygon)if(s){if(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line.length>0&&(e=this._line[this._line.length-1],e.equals(t,i)))return;this._line.push(new x.b(t,i))}else this._line&&this._line.length>0&&this._pushLine();else if(s||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),i<this._ymin&&(i=this._ymin),i>this._ymax&&(i=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line&&this._line.length>0){e=this._line[this._line.length-1];const s=e.x===t,n=e.y===i;if(s&&n)return;this._isH&&s||this._isV&&n?(e.x=t,e.y=i,h=this._line[this._line.length-2],h.x===t&&h.y===i?(this._line.pop(),this._line.length<=1?(this._isH=!1,this._isV=!1):(h=this._line[this._line.length-2],this._isH=h.x===t,this._isV=h.y===i)):(this._isH=h.x===t,this._isV=h.y===i)):(this._line.push(new x.b(t,i)),this._isH=s,this._isV=n)}else this._line.push(new x.b(t,i))}}class l{setExtent(t){this._ratio=4096===t?1:4096/t}get validateTessellation(){return this._ratio<1}reset(t){this._lines=[],this._line=null}moveTo(t,i){this._line&&this._lines.push(this._line),this._line=[];const s=this._ratio;this._line.push(new x.b(t*s,i*s))}lineTo(t,i){const s=this._ratio;this._line.push(new x.b(t*s,i*s))}close(){const t=this._line;t&&!t[0].isEqual(t[t.length-1])&&t.push(t[0])}result(){return this._line&&this._lines.push(this._line),0===this._lines.length?null:this._lines}}(h=e||(e={}))[h.sideLeft=0]="sideLeft",h[h.sideRight=1]="sideRight",h[h.sideTop=2]="sideTop",h[h.sideBottom=3]="sideBottom";class a{static simplify(t,i,s){if(!s)return;const h=-i,n=t+i,x=-i,_=t+i,r=[],y=[],l=s.length;for(let a=0;a<l;++a){const t=s[a];if(!t||t.length<2)continue;let i,l=t[0];const o=t.length;for(let s=1;s<o;++s)i=t[s],l.x===i.x&&(l.x<=h&&(l.y>i.y?(r.push(a),r.push(s),r.push(e.sideLeft),r.push(-1)):(y.push(a),y.push(s),y.push(e.sideLeft),y.push(-1))),l.x>=n&&(l.y<i.y?(r.push(a),r.push(s),r.push(e.sideRight),r.push(-1)):(y.push(a),y.push(s),y.push(e.sideRight),y.push(-1)))),l.y===i.y&&(l.y<=x&&(l.x<i.x?(r.push(a),r.push(s),r.push(e.sideTop),r.push(-1)):(y.push(a),y.push(s),y.push(e.sideTop),y.push(-1))),l.y>=_&&(l.x>i.x?(r.push(a),r.push(s),r.push(e.sideBottom),r.push(-1)):(y.push(a),y.push(s),y.push(e.sideBottom),y.push(-1)))),l=i}if(0===r.length||0===y.length)return;a.fillParent(s,y,r),a.fillParent(s,r,y);const o=[];a.calcDeltas(o,y,r),a.calcDeltas(o,r,y),a.addDeltas(o,s)}static fillParent(t,i,s){const h=s.length,n=i.length;for(let x=0;x<n;x+=4){const n=i[x],r=i[x+1],y=i[x+2],l=t[n][r-1],a=t[n][r];let o=8092,u=-1;for(let i=0;i<h;i+=4){if(s[i+2]!==y)continue;const h=s[i],n=s[i+1],x=t[h][n-1],r=t[h][n];switch(y){case e.sideLeft:case e.sideRight:if((0,_.Tq)(l.y,x.y,r.y)&&(0,_.Tq)(a.y,x.y,r.y)){const t=Math.abs(r.y-x.y);t<o&&(o=t,u=i)}break;case e.sideTop:case e.sideBottom:if((0,_.Tq)(l.x,x.x,r.x)&&(0,_.Tq)(a.x,x.x,r.x)){const t=Math.abs(r.x-x.x);t<o&&(o=t,u=i)}}}i[x+3]=u}}static calcDeltas(t,i,s){const e=i.length;for(let h=0;h<e;h+=4){const e=[],n=a.calcDelta(h,i,s,e);t.push(i[h]),t.push(i[h+1]),t.push(i[h+2]),t.push(n)}}static calcDelta(t,i,s,e){const h=i[t+3];if(-1===h)return 0;const n=e.length;return n>1&&e[n-2]===h?0:(e.push(h),a.calcDelta(h,s,i,e)+1)}static addDeltas(t,i){const s=t.length;let h=0;for(let e=0;e<s;e+=4){const i=t[e+3];i>h&&(h=i)}for(let n=0;n<s;n+=4){const s=i[t[n]],x=t[n+1],_=h-t[n+3];switch(t[n+2]){case e.sideLeft:s[x-1].x-=_,s[x].x-=_,1===x&&(s[s.length-1].x-=_),x===s.length-1&&(s[0].x-=_);break;case e.sideRight:s[x-1].x+=_,s[x].x+=_,1===x&&(s[s.length-1].x+=_),x===s.length-1&&(s[0].x+=_);break;case e.sideTop:s[x-1].y-=_,s[x].y-=_,1===x&&(s[s.length-1].y-=_),x===s.length-1&&(s[0].y-=_);break;case e.sideBottom:s[x-1].y+=_,s[x].y+=_,1===x&&(s[s.length-1].y+=_),x===s.length-1&&(s[0].y+=_)}}}}},27307:(t,i,s)=>{s.d(i,{i:()=>u});var e=s(28808),h=s(5095);function n(t,i){return t.x===i.x&&t.y===i.y}function x(t,i){return t.x=i.y,t.y=-i.x,t}function _(t,i){return t.x=-i.y,t.y=i.x,t}function r(t,i){return t.x=i.x,t.y=i.y,t}function y(t,i){return t.x=-i.x,t.y=-i.y,t}function l(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function a(t,i){return t.x*i.x+t.y*i.y}function o(t,i,s,e){return t.x=i.x*s+i.y*e,t.y=i.x*e-i.y*s,t}class u{constructor(t,i,s){this._writeVertex=t,this._writeTriangle=i,this._canUseThinTessellation=s,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0}}tessellate(t,i){(function(t){if(!t)return;const i=t.length;if(i<=1)return;let s=0;for(let e=1;e<i;e++)n(t[e],t[s])||++s===e||(t[s]=t[e]);t.length=s+1})(t),this._canUseThinTessellation&&i.halfWidth<h.Ge&&!i.offset?this._tessellateThin(t,i):this._tessellate(t,i)}_tessellateThin(t,i){if(t.length<2)return;const s=i.wrapDistance||65535;let e=i.initialDistance||0,h=!1,n=t[0].x,x=t[0].y;const _=t.length;for(let r=1;r<_;++r){h&&(h=!1,e=0);let i=t[r].x,_=t[r].y,y=i-n,l=_-x,a=Math.sqrt(y*y+l*l);if(y/=a,l/=a,e+a>s){h=!0;const t=(s-e)/a;a=s-e,i=(1-t)*n+t*i,_=(1-t)*x+t*_,--r}const o=this._writeVertex(n,x,0,0,y,l,l,-y,0,-1,e),u=this._writeVertex(n,x,0,0,y,l,-l,y,0,1,e);e+=a;const c=this._writeVertex(i,_,0,0,y,l,l,-y,0,-1,e),m=this._writeVertex(i,_,0,0,y,l,-l,y,0,1,e);this._writeTriangle(o,u,c),this._writeTriangle(u,c,m),n=i,x=_}}_tessellate(t,i){const s=t[0],h=t[t.length-1],u=n(s,h),c=u?3:2;if(t.length<c)return;const m=i.pixelCoordRatio,d=null!=i.capType?i.capType:e.xR.BUTT,p=null!=i.joinType?i.joinType:e.JO.MITER,g=null!=i.miterLimit?Math.min(i.miterLimit,4):2,f=null!=i.roundLimit?Math.min(i.roundLimit,1.05):1.05,v=null!=i.halfWidth?i.halfWidth:2,w=!!i.textured;let T,b,R,M=null;const V=this._prevNormal,P=this._nextNormal;let E=-1,L=-1;const N=this._joinNormal;let k,B;const D=this._textureNormalLeft,I=this._textureNormalRight,O=this._textureNormal;let S=-1,U=-1;const q=i.wrapDistance||65535;let J=i.initialDistance||0;const A=this._writeVertex,z=this._writeTriangle,H=(t,i,s,e,h,n)=>{const x=A(b,R,k,B,s,e,t,i,h,n,J);return S>=0&&U>=0&&x>=0&&z(S,U,x),S=U,U=x,x};u&&(T=t[t.length-2],P.x=h.x-T.x,P.y=h.y-T.y,L=l(P),P.x/=L,P.y/=L);let j=!1;for(let n=0;n<t.length;++n){if(j&&(j=!1,J=0),T&&(V.x=-P.x,V.y=-P.y,E=L,J+E>q&&(j=!0)),j){const i=(q-J)/E;E=q-J,T={x:(1-i)*T.x+i*t[n].x,y:(1-i)*T.y+i*t[n].y},--n}else T=t[n];b=T.x,R=T.y;const i=n<=0&&!j,s=n===t.length-1;if(i||(J+=E),M=s?u?t[1]:null:t[n+1],M?(P.x=M.x-b,P.y=M.y-R,L=l(P),P.x/=L,P.y/=L):(P.x=void 0,P.y=void 0),!u){if(i){_(N,P),k=N.x,B=N.y,d===e.xR.SQUARE&&(H(-P.y-P.x,P.x-P.y,P.x,P.y,0,-1),H(P.y-P.x,-P.x-P.y,P.x,P.y,0,1)),d===e.xR.ROUND&&(H(-P.y-P.x,P.x-P.y,P.x,P.y,-1,-1),H(P.y-P.x,-P.x-P.y,P.x,P.y,-1,1)),d!==e.xR.ROUND&&d!==e.xR.BUTT||(H(-P.y,P.x,P.x,P.y,0,-1),H(P.y,-P.x,P.x,P.y,0,1));continue}if(s){x(N,V),k=N.x,B=N.y,d!==e.xR.ROUND&&d!==e.xR.BUTT||(H(V.y,-V.x,-V.x,-V.y,0,-1),H(-V.y,V.x,-V.x,-V.y,0,1)),d===e.xR.SQUARE&&(H(V.y-V.x,-V.x-V.y,-V.x,-V.y,0,-1),H(-V.y-V.x,V.x-V.y,-V.x,-V.y,0,1)),d===e.xR.ROUND&&(H(V.y-V.x,-V.x-V.y,-V.x,-V.y,1,-1),H(-V.y-V.x,V.x-V.y,-V.x,-V.y,1,1));continue}}let h,c,A=(W=P,-((C=V).x*W.y-C.y*W.x));if(Math.abs(A)<.01)a(V,P)>0?(N.x=V.x,N.y=V.y,A=1,h=Number.MAX_VALUE,c=!0):(_(N,P),A=1,h=1,c=!1);else{N.x=(V.x+P.x)/A,N.y=(V.y+P.y)/A,h=l(N);const t=(h-1)*v*m;c=h>4||t>E&&t>L}k=N.x,B=N.y;let z=p;switch(p){case e.JO.BEVEL:h<1.05&&(z=e.JO.MITER);break;case e.JO.ROUND:h<f&&(z=e.JO.MITER);break;case e.JO.MITER:h>g&&(z=e.JO.BEVEL)}switch(z){case e.JO.MITER:if(H(N.x,N.y,-V.x,-V.y,0,-1),H(-N.x,-N.y,-V.x,-V.y,0,1),s)break;if(w){const t=j?0:J;S=this._writeVertex(b,R,k,B,P.x,P.y,N.x,N.y,0,-1,t),U=this._writeVertex(b,R,k,B,P.x,P.y,-N.x,-N.y,0,1,t)}break;case e.JO.BEVEL:{const t=A<0;let i,e,h,n;if(t){const t=S;S=U,U=t,i=D,e=I}else i=I,e=D;if(c)h=t?_(this._innerPrev,V):x(this._innerPrev,V),n=t?x(this._innerNext,P):_(this._innerNext,P);else{const i=t?y(this._inner,N):r(this._inner,N);h=i,n=i}const l=t?x(this._bevelStart,V):_(this._bevelStart,V);H(h.x,h.y,-V.x,-V.y,i.x,i.y);const a=H(l.x,l.y,-V.x,-V.y,e.x,e.y);if(s)break;const u=t?_(this._bevelEnd,P):x(this._bevelEnd,P);if(c){const t=this._writeVertex(b,R,k,B,-V.x,-V.y,0,0,0,0,J);S=this._writeVertex(b,R,k,B,P.x,P.y,n.x,n.y,i.x,i.y,J),U=this._writeVertex(b,R,k,B,P.x,P.y,u.x,u.y,e.x,e.y,J),this._writeTriangle(a,t,U)}else{if(w){const t=this._bevelMiddle;t.x=(l.x+u.x)/2,t.y=(l.y+u.y)/2,o(O,t,-V.x,-V.y),H(t.x,t.y,-V.x,-V.y,O.x,O.y),o(O,t,P.x,P.y),S=this._writeVertex(b,R,k,B,P.x,P.y,t.x,t.y,O.x,O.y,J),U=this._writeVertex(b,R,k,B,P.x,P.y,n.x,n.y,i.x,i.y,J)}else{const t=S;S=U,U=t}H(u.x,u.y,P.x,P.y,e.x,e.y)}if(t){const t=S;S=U,U=t}break}case e.JO.ROUND:{const t=A<0;let i,e;if(t){const t=S;S=U,U=t,i=D,e=I}else i=I,e=D;const n=t?y(this._inner,N):r(this._inner,N);let l,u;c?(l=t?_(this._innerPrev,V):x(this._innerPrev,V),u=t?x(this._innerNext,P):_(this._innerNext,P)):(l=n,u=n);const m=t?x(this._roundStart,V):_(this._roundStart,V),d=t?_(this._roundEnd,P):x(this._roundEnd,P),p=H(l.x,l.y,-V.x,-V.y,i.x,i.y),g=H(m.x,m.y,-V.x,-V.y,e.x,e.y);if(s)break;const f=this._writeVertex(b,R,k,B,-V.x,-V.y,0,0,0,0,J);c||this._writeTriangle(S,U,f);const v=y(this._outer,n),T=this._writeVertex(b,R,k,B,P.x,P.y,d.x,d.y,e.x,e.y,J);let M,E;const L=h>2;if(L){let i;h!==Number.MAX_VALUE?(v.x/=h,v.y/=h,i=a(V,v),i=(h*(i*i-1)+1)/i):i=-1,M=t?x(this._startBreak,V):_(this._startBreak,V),M.x+=V.x*i,M.y+=V.y*i,E=t?_(this._endBreak,P):x(this._endBreak,P),E.x+=P.x*i,E.y+=P.y*i}o(O,v,-V.x,-V.y);const q=this._writeVertex(b,R,k,B,-V.x,-V.y,v.x,v.y,O.x,O.y,J);o(O,v,P.x,P.y);const z=w?this._writeVertex(b,R,k,B,P.x,P.y,v.x,v.y,O.x,O.y,J):q,j=f,C=w?this._writeVertex(b,R,k,B,P.x,P.y,0,0,0,0,J):f;let W=-1,F=-1;if(L&&(o(O,M,-V.x,-V.y),W=this._writeVertex(b,R,k,B,-V.x,-V.y,M.x,M.y,O.x,O.y,J),o(O,E,P.x,P.y),F=this._writeVertex(b,R,k,B,P.x,P.y,E.x,E.y,O.x,O.y,J)),w?L?(this._writeTriangle(j,g,W),this._writeTriangle(j,W,q),this._writeTriangle(C,z,F),this._writeTriangle(C,F,T)):(this._writeTriangle(j,g,q),this._writeTriangle(C,z,T)):L?(this._writeTriangle(f,g,W),this._writeTriangle(f,W,F),this._writeTriangle(f,F,T)):(this._writeTriangle(f,g,q),this._writeTriangle(f,z,T)),c?(S=this._writeVertex(b,R,k,B,P.x,P.y,u.x,u.y,i.x,i.y,J),U=T):(S=w?this._writeVertex(b,R,k,B,P.x,P.y,u.x,u.y,i.x,i.y,J):p,this._writeTriangle(S,C,T),U=T),t){const t=S;S=U,U=t}break}}}var C,W}}}}]);
//# sourceMappingURL=6772.abb7e28c.chunk.js.map