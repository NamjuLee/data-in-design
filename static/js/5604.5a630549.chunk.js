"use strict";(self.webpackChunkData_in_Design=self.webpackChunkData_in_Design||[]).push([[5604],{56287:(e,t,i)=>{i.d(t,{r:()=>l});var r=i(35143),s=i(13398),a=i(25463),o=i(46053),n=(i(18690),i(40565),i(85842));const h={visible:"visibleSublayers"};let l=class extends((0,a.$)(s.A)){constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("wms-sublayer-update",(e=>this.notifyChange(h[e.propertyName])))],"layer"))}get layers(){return this.visibleSublayers.filter((e=>{let{name:t}=e;return t})).map((e=>{let{name:t}=e;return t})).join()}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,i=null===e||void 0===e?void 0:e.sublayers,r=[],s=e=>{const{minScale:i,maxScale:a,sublayers:o,visible:n}=e;n&&(0===t||(0===i||t<=i)&&(0===a||t>=a))&&(o?o.forEach(s):r.push(e))};return null!==i&&void 0!==i&&i.forEach(s),r}toJSON(){const{layer:e,layers:t}=this,{imageFormat:i,imageTransparency:r,version:s}=e;return{format:i,request:"GetMap",service:"WMS",styles:"",transparent:r?"TRUE":"FALSE",version:s,layers:t}}};(0,r._)([(0,o.MZ)()],l.prototype,"layer",null),(0,r._)([(0,o.MZ)({readOnly:!0})],l.prototype,"layers",null),(0,r._)([(0,o.MZ)({type:Number})],l.prototype,"scale",void 0),(0,r._)([(0,o.MZ)({readOnly:!0})],l.prototype,"version",null),(0,r._)([(0,o.MZ)({readOnly:!0})],l.prototype,"visibleSublayers",null),l=(0,r._)([(0,n.$)("esri.layers.support.ExportWMSImageParameters")],l)},55604:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var r=i(8),s=i(35143),a=i(76460),o=i(50346),n=i(68134),h=i(46053),l=(i(18690),i(40565),i(85842)),p=i(76797),d=i(14509),u=i(75185),c=i(4176),m=i(91196),y=i(771),g=i(50076),x=i(55053),f=i(56287);const v=e=>{let t=class extends e{initialize(){this.exportImageParameters=new f.r({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null!==(e=this.exportImageParameters)&&void 0!==e&&e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new g.A("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:i}=t;if(!i)return Promise.reject(new g.A("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:i}));const r=this.createFetchPopupFeaturesQuery(e);if(!r)return Promise.resolve([]);const{extent:s,width:a,height:o,x:n,y:h}=r;if(!(s&&a&&o))throw new g.A("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:s,width:a,height:o});return t.fetchFeatureInfo(s,a,o,n,h)}};return(0,s._)([(0,h.MZ)()],t.prototype,"exportImageParameters",void 0),(0,s._)([(0,h.MZ)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,s._)([(0,h.MZ)()],t.prototype,"layer",void 0),(0,s._)([(0,h.MZ)(x.ui)],t.prototype,"timeExtent",void 0),t=(0,s._)([(0,l.$)("esri.layers.mixins.WMSLayerView")],t),t};let M=class extends(v((0,y.A)((0,u.e)(m.A)))){constructor(){super(...arguments),this.bitmapContainer=new d.l}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch((e=>{(0,o.zf)(e)||a.A.getLogger(this.declaredClass).error(e)}))}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:i}=e;this.bitmapContainer=new d.l,this.container.addChild(this.bitmapContainer),this.strategy=new c.A({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add((0,n.wB)((()=>this.exportImageVersion),(()=>this.requestUpdate())),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.strategy=null,this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:i}=this,{x:r,y:s}=e,{spatialReference:a}=t;let o=null,n=0,h=0;if(i.children.some((e=>{const{width:t,height:i,resolution:l,x:d,y:u}=e,c=d+l*t,m=u-l*i;return r>=d&&r<=c&&s<=u&&s>=m&&(o=new p.A({xmin:d,ymin:m,xmax:c,ymax:u,spatialReference:a}),n=t,h=i,!0)})),!o)return null;const l=o.width/n,d=Math.round((r-o.xmin)/l),u=Math.round((o.ymax-s)/l);return{extent:o,width:n,height:h,x:d,y:u}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,i,s){return this.layer.fetchImageBitmap(e,t,i,(0,r.A)({timeExtent:this.timeExtent},s))}};(0,s._)([(0,h.MZ)()],M.prototype,"strategy",void 0),(0,s._)([(0,h.MZ)()],M.prototype,"updating",void 0),M=(0,s._)([(0,l.$)("esri.views.2d.layers.WMSLayerView2D")],M);const _=M},4176:(e,t,i)=>{i.d(t,{A:()=>R});var r=i(35143),s=i(13398),a=(i(81806),i(50346)),o=i(46053),n=(i(18690),i(40565),i(85842)),h=i(2413),l=i(80963),p=i(88235);const d=Math.PI/180;function u(e){return e*d}function c(e,t){const i=u(t.rotation),r=Math.abs(Math.cos(i)),s=Math.abs(Math.sin(i)),[a,o]=t.size;return e[0]=Math.round(o*s+a*r),e[1]=Math.round(o*r+a*s),e}var m=i(16060),y=i(40181),g=i(93453);const x=(0,h.vt)(),f=[0,0],v=new g.A(0,0,0,0),M=2048,_=2048,w=!1,b=!1,S=!1;let P=class extends s.A{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=S,this.imageMaxWidth=M,this.imageMaxHeight=_,this.imageRotationSupported=w,this.imageNormalizationSupported=b,this.update=(0,a.sg)((async(e,t)=>{if((0,a.Te)(t),!e.stationary||this.destroyed)return;const i=e.state,r=(0,l.Vp)(i.spatialReference),s=this.hidpi?e.pixelRatio:1,o=this.imageNormalizationSupported&&i.worldScreenWidth&&i.worldScreenWidth<i.size[0];o?(f[0]=i.worldScreenWidth,f[1]=i.size[1]):this.imageRotationSupported?(f[0]=i.size[0],f[1]=i.size[1]):c(f,i);const n=Math.floor(f[0]*s)>this.imageMaxWidth||Math.floor(f[1]*s)>this.imageMaxHeight,h=r&&(i.extent.xmin<r.valid[0]||i.extent.xmax>r.valid[1]),p=!this.imageNormalizationSupported&&h,d=!n&&!p,u=this.imageRotationSupported?i.rotation:0,m=this.container.children.slice();if(d){const e=o?i.paddedViewState.center:i.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(i,f,e,i.resolution,u,s,t)}else{let e=Math.min(this.imageMaxWidth,this.imageMaxHeight);p&&(e=Math.min(i.worldScreenWidth,e)),this._imagePromise=this._tiledExport(i,e,s,t)}try{const e=await this._imagePromise;(0,a.Te)(t);const i=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=null!==e&&void 0!==e?e:[];for(const t of m)e.includes(t)||i.push(t.fadeOut().then((()=>{t.remove(),t.destroy()})));for(const t of e)i.push(t.fadeIn());await Promise.all(i)}catch(y){this._imagePromise=null,(0,a.QP)(y)}}),5e3),this.updateExports=(0,a.sg)((async e=>{const t=[];for(const i of this.container.children){if(!i.visible||!i.stage)return;t.push(e(i).then((()=>{i.invalidateTexture(),i.requestRender()})))}this._imagePromise=(0,a.Lx)(t).then((()=>this._imagePromise=null)),await this._imagePromise}))}destroy(){this.bitmaps.forEach((e=>e.destroy())),this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}async _export(e,t,i,r,s,o){const n=await this.fetchSource(e,Math.floor(t*s),Math.floor(i*s),{rotation:r,pixelRatio:s,signal:o});(0,a.Te)(o);const h=new m.mb(null,{immutable:!0,requestRenderOnSourceChangedEnabled:!0});return h.x=e.xmin,h.y=e.ymax,h.resolution=e.width/t,h.rotation=r,h.pixelRatio=s,h.opacity=0,this.container.addChild(h),await h.setSourceAsync(n,o),(0,a.Te)(o),h}async _singleExport(e,t,i,r,s,a,o){!function(e,t,i,r){const[s,a]=t,[o,n]=r,h=.5*i;e[0]=s-h*o,e[1]=a-h*n,e[2]=s+h*o,e[3]=a+h*n}(x,i,r,t);const n=(0,h.w1)(x,e.spatialReference);return[await this._export(n,t[0],t[1],s,a,o)]}_tiledExport(e,t,i,r){const s=p.A.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),a=new y.A(s),o=a.getTileCoverage(e);if(!o)return null;const n=[];return o.forEach(((s,o,l,p)=>{v.set(s,o,l,0),a.getTileBounds(x,v);const d=(0,h.w1)(x,e.spatialReference);n.push(this._export(d,t,t,0,i,r).then((e=>(0!==p&&(v.set(s,o,l,p),a.getTileBounds(x,v),e.x=x[0],e.y=x[3]),e))))})),Promise.all(n)}};(0,r._)([(0,o.MZ)()],P.prototype,"_imagePromise",void 0),(0,r._)([(0,o.MZ)()],P.prototype,"bitmaps",void 0),(0,r._)([(0,o.MZ)()],P.prototype,"container",void 0),(0,r._)([(0,o.MZ)()],P.prototype,"fetchSource",void 0),(0,r._)([(0,o.MZ)()],P.prototype,"hidpi",void 0),(0,r._)([(0,o.MZ)()],P.prototype,"imageMaxWidth",void 0),(0,r._)([(0,o.MZ)()],P.prototype,"imageMaxHeight",void 0),(0,r._)([(0,o.MZ)()],P.prototype,"imageRotationSupported",void 0),(0,r._)([(0,o.MZ)()],P.prototype,"imageNormalizationSupported",void 0),(0,r._)([(0,o.MZ)()],P.prototype,"requestUpdate",void 0),(0,r._)([(0,o.MZ)()],P.prototype,"updating",null),P=(0,r._)([(0,n.$)("esri.views.2d.layers.support.ExportStrategy")],P);const R=P},771:(e,t,i)=>{i.d(t,{A:()=>l});var r=i(35143),s=i(76460),a=i(50346),o=i(68134),n=i(46053),h=(i(18690),i(40565),i(85842));const l=e=>{let t=class extends e{initialize(){this.handles.add((0,o.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,a.zf)(e)||s.A.getLogger(this.declaredClass).error(e)}))})),"RefreshableLayerView")}};return(0,r._)([(0,n.MZ)()],t.prototype,"layer",void 0),t=(0,r._)([(0,h.$)("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=5604.5a630549.chunk.js.map