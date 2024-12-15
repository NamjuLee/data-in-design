"use strict";(self.webpackChunkdata_in_design=self.webpackChunkdata_in_design||[]).push([[5454],{33754:(e,t,i)=>{i.d(t,{H:()=>n,L:()=>s});const s=1;function n(e,t){let i=0;for(const n of t){var s;const t=null===(s=n.attributes)||void 0===s?void 0:s[e];"number"==typeof t&&isFinite(t)&&(i=Math.max(i,t))}return i}},35454:(e,t,i)=>{i.r(t),i.d(t,{default:()=>E});var s=i(8),n=i(50076),r=i(30726),a=i(19902),o=i(80963),u=i(98618),l=i(33754),d=i(41607),p=i(24586),c=i(63616),y=i(40296),f=i(40098),h=i(1900),m=i(6127),g=i(32808);const I=o.w5,b={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:o.w5},F={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function _(e){return(0,a.fT)(e)?null!=e.z:!!e.hasZ}function v(e){return(0,a.fT)(e)?null!=e.m:!!e.hasM}class E{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:i}=e,r=this._inferLayerProperties(i,e.fields),a=e.fields||[],o=null!=e.hasM?e.hasM:r.hasM,u=null!=e.hasZ?e.hasZ:r.hasZ,f=!e.spatialReference&&!r.spatialReference,_=f?I:e.spatialReference||r.spatialReference,v=f?b:null,E=e.geometryType||r.geometryType,x=!E;let T=e.objectIdField||r.objectIdField,R=e.timeInfo;if(!x&&(f&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!E))throw new n.A("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!T)throw new n.A("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(r.objectIdField&&T!==r.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:'Provided objectIdField "'.concat(T,'" doesn\'t match the field name "').concat(r.objectIdField,'", found in the provided fields')}),T=r.objectIdField),T&&!r.objectIdField){let e=null;a.some((t=>t.name===T&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):a.unshift({alias:T,name:T,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const s of a){if(null==s.name&&(s.name=s.alias),null==s.alias&&(s.alias=s.name),!s.name)throw new n.A("feature-layer:invalid-field-name","field name is missing",{field:s});if(s.name===T&&(s.type="esriFieldTypeOID"),!m.m.jsonValues.includes(s.type))throw new n.A("feature-layer:invalid-field-type",'invalid type for field "'.concat(s.name,'"'),{field:s})}const j={};for(const s of a)if("esriFieldTypeOID"!==s.type&&"esriFieldTypeGlobalID"!==s.type){const e=(0,g.lD)(s);void 0!==e&&(j[s.name]=e)}if(this._fieldsIndex=new h.A(a),this._createDefaultAttributes=(0,y.Vx)(j,T),R){if(R.startTimeField){const e=this._fieldsIndex.get(R.startTimeField);e?(R.startTimeField=e.name,e.type="esriFieldTypeDate"):R.startTimeField=null}if(R.endTimeField){const e=this._fieldsIndex.get(R.endTimeField);e?(R.endTimeField=e.name,e.type="esriFieldTypeDate"):R.endTimeField=null}if(R.trackIdField){const e=this._fieldsIndex.get(R.trackIdField);e?R.trackIdField=e.name:(R.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:R}}))}R.startTimeField||R.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:R}}),R=null)}const q={warnings:t,featureErrors:[],layerDefinition:(0,s.A)((0,s.A)({},F),{},{drawingInfo:(0,y.F0)(E),templates:(0,y.e2)(j),extent:v,geometryType:E,objectIdField:T,fields:a,hasZ:!!u,hasM:!!o,timeInfo:R}),assignedObjectIds:{}};if(this._queryEngine=new c.d({fields:a,geometryType:E,hasM:o,hasZ:u,objectIdField:T,spatialReference:_,featureStore:new d.A({geometryType:E,hasM:o,hasZ:u}),timeInfo:R,cacheSpatialQueries:!0}),!i||!i.length)return this._nextObjectId=l.L,q;const w=(0,l.H)(T,i);return this._nextObjectId=w+1,await(0,p.Nk)(i,_),this._loadInitialFeatures(q,i)}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([(0,f.$1)(t,i),(0,p.Nk)(e.adds,t),(0,p.Nk)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let i,s,n=null,o=null,u=null;for(const l of e){const e=l.geometry;if(!(0,r.$I)(e)&&(n||(n=(0,a.$B)(e)),o||(o=e.spatialReference),null==i&&(i=_(e)),null==s&&(s=v(e)),n&&o&&null!=i&&null!=s))break}if(t&&t.length){let e=null;t.some((t=>{const i="esriFieldTypeOID"===t.type,s=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,i||s}))&&(u=e.name)}return{geometryType:n,spatialReference:o,objectIdField:u,hasM:s,hasZ:i}}_loadInitialFeatures(e,t){const{geometryType:i,hasM:s,hasZ:n,objectIdField:o,spatialReference:l,featureStore:d}=this._queryEngine,c=[];for(const u of t){if(null!=u.uid&&(e.assignedObjectIds[u.uid]=-1),u.geometry&&i!==(0,a.$B)(u.geometry)){e.featureErrors.push((0,f.Yx)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),s=(0,f.MB)(this._fieldsIndex,t,u.attributes,!0,e.warnings);s?e.featureErrors.push(s):(this._assignObjectId(t,u.attributes,!0),u.attributes=t,null!=u.uid&&(e.assignedObjectIds[u.uid]=u.attributes[o]),(0,r.Ru)(u.geometry)&&(u.geometry=(0,p.Cv)(u.geometry,u.geometry.spatialReference,l)),c.push(u))}if(d.addMany((0,u.Di)([],c,i,n,s,o)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:i}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,i]}return e}_applyEdits(e){const{adds:t,updates:i,deletes:s}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),s&&s.length){for(const e of s)n.deleteResults.push((0,f.bP)(e));this._queryEngine.featureStore.removeManyById(s)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:s,hasM:n,hasZ:o,objectIdField:l,spatialReference:d,featureStore:c}=this._queryEngine,y=[];for(const u of t){if(u.geometry&&s!==(0,a.$B)(u.geometry)){i.push((0,f.Yx)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=(0,f.MB)(this._fieldsIndex,t,u.attributes);if(n)i.push(n);else{if(this._assignObjectId(t,u.attributes),u.attributes=t,null!=u.uid){const t=u.attributes[l];e.uidToObjectId[u.uid]=t}if((0,r.Ru)(u.geometry)){var h;const e=null!==(h=u.geometry.spatialReference)&&void 0!==h?h:d;u.geometry=(0,p.Cv)((0,f.CR)(u.geometry,e),e,d)}y.push(u),i.push((0,f.bP)(u.attributes[l]))}}c.addMany((0,u.Di)([],y,s,o,n,l))}_applyUpdateEdits(e,t){let{updateResults:i}=e;const{geometryType:s,hasM:n,hasZ:o,objectIdField:l,spatialReference:d,featureStore:c}=this._queryEngine;for(const h of t){const{attributes:e,geometry:t}=h,m=e&&e[l];if(null==m){i.push((0,f.Yx)("Identifier field ".concat(l," missing")));continue}if(!c.has(m)){i.push((0,f.Yx)("Feature with object id ".concat(m," missing")));continue}const g=(0,u.oN)(c.getFeature(m),s,o,n);if((0,r.Ru)(t)){var y;if(s!==(0,a.$B)(t)){i.push((0,f.Yx)("Incorrect geometry type."));continue}const e=null!==(y=t.spatialReference)&&void 0!==y?y:d;g.geometry=(0,p.Cv)((0,f.CR)(t,e),e,d)}if(e){const t=(0,f.MB)(this._fieldsIndex,g.attributes,e);if(t){i.push(t);continue}}c.add((0,u.E2)(g,s,o,n,l)),i.push((0,f.bP)(m))}}_assignObjectId(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const s=this._queryEngine.objectIdField;i&&t&&isFinite(t[s])?e[s]=t[s]:e[s]=this._nextObjectId++}}},40296:(e,t,i)=>{i.d(t,{F0:()=>u,Vx:()=>p,e2:()=>c,f:()=>y});var s=i(8),n=i(81806),r=i(53084),a=i(8298),o=i(44460);function u(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.Cb:"esriGeometryPolyline"===e?o.yM:o.WR}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let d=1;function p(e,t){if((0,n.A)("esri-csp-restrictions"))return()=>(0,s.A)({[t]:null},e);try{let i="this.".concat(t," = null;");for(const t in e)i+="this".concat(l.test(t)?".".concat(t):'["'.concat(t,'"]')," = ").concat(JSON.stringify(e[t]),";");const s=new Function("\n      return class AttributesClass$".concat(d++," {\n        constructor() {\n          ").concat(i,";\n        }\n      }\n    "))();return()=>new s}catch(i){return()=>(0,s.A)({[t]:null},e)}}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,r.o8)(e)}}]}function y(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:a.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},40098:(e,t,i)=>{i.d(t,{$1:()=>m,CR:()=>h,MB:()=>c,Yx:()=>u,bP:()=>d});var s=i(30726),n=i(80963),r=i(32808);class a{constructor(){this.code=null,this.description=null}}class o{constructor(e){this.error=new a,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function u(e){return new o(e)}class l{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function d(e){return new l(e)}const p=new Set;function c(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=arguments.length>4?arguments[4]:void 0;p.clear();for(const o in i){const a=e.get(o);if(!a)continue;const l=i[o],d=y(a,l);if(d!==l&&n&&n.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:a,originalValue:l,sanitizedValue:d}}),p.add(a.name),a&&(s||a.editable)){const e=(0,r.CJ)(a,d);if(e)return u((0,r.uo)(e,a,d));t[a.name]=d}}for(const r of null!==(a=null===e||void 0===e?void 0:e.requiredFields)&&void 0!==a?a:[]){var a;if(!p.has(r.name))return u('missing required field "'.concat(r.name,'"'))}return null}function y(e,t){let i=t;return"string"==typeof t&&(0,r.WA)(e)?i=parseFloat(t):null!=t&&(0,r.yM)(e)&&"string"!=typeof t&&(i=String(t)),(0,r.WX)(i)}let f;function h(e,t){if(!e||!(0,n.fn)(t))return e;if("rings"in e||"paths"in e){if((0,s.$I)(f))throw new TypeError("geometry engine not loaded");return f.simplify(t,e)}return e}async function m(e,t){!(0,n.fn)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return(0,s.$I)(f)&&(f=await Promise.all([i.e(2612),i.e(4050)]).then(i.bind(i,1669))),f}()}}}]);
//# sourceMappingURL=5454.9cd372fe.chunk.js.map