//>>built
require({cache:{"djeo/djeo/Engine":function(){define("djeo/djeo/Engine",["require","dojo/_base/declare","dojo/has","dojo/_base/lang","dojo/_base/array","dojo/dom-construct","dojo/dom-geometry","dojo/on","../_base","../dojox/gfx","../dojox/gfx/matrix","../Engine","./Placemark","../util/geometry","../_tiles"],function(o,q,h,n,l,r,f,e,g,m,b,d,a,c,k){var t={mouseover:"onmouseover",mouseout:"onmouseout",click:"onclick"};return q([d],{scaleFactor:1.2,correctionScale:1E4,pointZoomFactor:0.01,resizePoints:!0,
resizeLines:!0,resizeAreas:!0,correctScale:!1,layers:null,_layerReg:null,container:null,constructor:function(){this._require=o;n.mixin(this.ignoredDependencies,{Highlight:1,Tooltip:1});this._supportedLayers=k;this._initBasicFactories(new a({map:this.map,engine:this}))},initialize:function(a){var c=this.map;this.map.container.style.overflow="hidden";this.container=r.create("div",{style:{width:"100%",height:"100%",position:"relative"}},c.container);this.surface=m.createSurface(this.container,c.width,
c.height);this.surface.rawNode.style.position="absolute";this.group=this.surface.createGroup();if(c.resizePoints!==void 0)this.resizePoints=c.resizePoints;if(c.resizeLines!==void 0)this.resizeLines=c.resizeLines;if(c.resizeAreas!==void 0)this.resizeAreas=c.resizeAreas;if(c.resizePoints!==void 0)this.resizePoints=c.resizePoints;if(c.resizeLines!==void 0)this.resizeLines=c.resizeLines;if(c.resizeAreas!==void 0)this.resizeAreas=c.resizeAreas;this.initialized=!0;a()},createContainer:function(a){return a.createGroup()},
prepare:function(){var a=this.map.getBbox();if(a)this.extent=a;var c=a[3]-a[1];if(a[2]-a[0]<1E3||c<1E3)this.correctScale=!0;this.factories.Placemark.init();this.factories.Placemark.prepare()},getTopContainer:function(){return this.group},onForFeature:function(a,c,b,d){var k=[],b=this.normalizeCallback(a,c,b,d),c=t[c];l.forEach(a.baseShapes,function(a){k.push([a,a.connect(c,b)])});return k},disconnect:function(a){l.forEach(a,function(a){a[0].disconnect(a[1])})},destroy:function(){this.surface.destroy()},
onForMap:function(a,c,b){return e(this.map.container,a,n.hitch(this,function(a){var j=f.position(this.container,!0),j=this.map.containerPixelToCoords(a.pageX-j.x,a.pageY-j.y);c.call(b,{mapCoords:j,nativeEvent:a})}))},_on_zoom_changed:function(a,c,b){return e(this,a,n.hitch(b,c))},_on_extent_changed:function(a,c,b){return e(this,a,n.hitch(b,c))},zoomTo:function(a){var c=this.map,d=a[2]-a[0],k=a[3]-a[1],t=(this.group.getTransform()||{xx:1}).xx,i=Math.min(c.width/d,c.height/k),e=this.factories.Placemark,
g=e.getX(a[0]),f=e.getY(a[3]);d==0&&k==0&&(d=c.extent||c.getBbox(),i=this.pointZoomFactor*Math.min(d[2]-d[0],d[3]-d[1]),c.width>c.height?(k=i,d=c.width/c.height*i):(d=i,k=c.height/c.width*i),i=c.width/d,g=e.getX(a[0]-d/2),f=e.getY(a[3]+k/2));var m=this.layers;m.length&&(l.forEach(m,function(c){c.zoomTo(a)}),m[0].discreteScales&&(i=m[0].getScale()));m=i;this.correctScale&&(i/=this.correctionScale);this.group.setTransform([b.translate((c.width-m*d)/2,(c.height-m*k)/2),b.scale(i),b.translate(-g,-f)]);
t!=i&&(e.calculateLengthDenominator(),this.resizeFeatures(this.map.document,t/i));this.onzoom_changed()},resizeFeatures:function(a,c){l.forEach(a.features,function(a){a.isPlacemark?this._resizePlacemark(a,c):a.isContainer&&this.resizeFeatures(a,c)},this)},_resizePlacemark:function(a,c){if(!a.invalid&&(this.resizePoints&&a.isPoint()?l.forEach(a.baseShapes,function(a){a.applyRightTransform(b.scale(c))}):m.renderer!="vml"&&!(m.renderer=="svg"&&(h("webkit")||h("opera")))&&(this.resizeLines&&a.isLine()||
this.resizeAreas&&a.isArea())&&l.forEach(a.baseShapes,function(a){var b=a.getStroke();b&&(b.width*=c,a.setStroke(b))}),a.textShapes)){var d=this.map.engine.factories.Placemark._calculateTextPosition(a);l.forEach(a.textShapes,function(a){a.setTransform(d)})}},_setCamera:function(a){var c=this.map,d=c.engine.factories.Placemark,k=g.scales[a.zoom],t=d.getX(a.center[0]-c.width/k/2),i=d.getY(a.center[1]+c.height/k/2),e=this.layers;e.length&&l.forEach(e,function(c){c._setCenterAndZoom(a.center,a.zoom)},
this);this.correctScale&&(k/=this.correctionScale);this.group.setTransform([b.scale(k),b.translate(-t,-i)]);d.calculateLengthDenominator();this.resizeFeatures(c.document,1/k)},_set_center:function(a){var a=this.map.getCoords(a),c=this.map,d=c.engine.factories.Placemark,k=(this.group.getTransform()||{xx:1}).xx,t=k,i=this.layers;i.length&&l.forEach(i,function(c){c.setCenter(a)},this);this.correctScale&&(t*=this.correctionScale);i=d.getX(a[0]-c.width/t/2);c=d.getY(a[1]+c.height/t/2);this.group.setTransform([b.scale(k),
b.translate(-i,-c)])},_get_center:function(){var a=this.map;return this.containerPixelToCoords(a.width/2,a.height/2)},_set_zoom:function(a){var c=this.map;if(!(a<c.minZoom||a>c.maxZoom)){var b=(this.group.getTransform()||{xx:1}).xx,b=g.scales[a]/b,d=this.layers;d.length&&l.forEach(d,function(c){c.setZoom(a)});this.group.applyLeftTransform({xx:b,yy:b,dx:c.width/2*(1-b),dy:c.height/2*(1-b)});this.factories.Placemark.calculateLengthDenominator();this.resizeFeatures(this.map.document,1/b);this.onzoom_changed()}},
_get_zoom:function(){return this.layers.length?this.layers[0].zoom:-1},_get_extent:function(){var a=this.map,c=this.containerPixelToCoords(0,a.height),a=this.containerPixelToCoords(a.width,0);return[c[0],c[1],a[0],a[1]]},containerPixelToCoords:function(a,c){var b=this.group.getTransform(),d=b.xx,k=-b.dx/d,b=-b.dy/d;this.correctScale&&(k/=this.correctionScale,b/=this.correctionScale);this.correctScale&&(d*=this.correctionScale);k+=this.extent[0]+a/d;b=this.extent[3]-b-c/d;return[k,b]},_appendDiv:function(a){this.container.children[0].appendChild(a)}})})},
"tiles/BaseTileable":function(){define("tiles/BaseTileable",["dojo/_base/declare","dojo/has","dojo/_base/window","dojo/_base/lang","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/_base/sniff"],function(o,q,h,n,l,r,f){var e;if(q("webkit")){r=h.doc.createElement("div");r.style.webkitTransform="translate3d(0px,1px,0px)";h.doc.documentElement.appendChild(r);var g=h.doc.defaultView.getComputedStyle(r,"")["-webkit-transform"];e=g&&g.indexOf("matrix")===0;h.doc.documentElement.removeChild(r)}var m=
function(b,d){b.style.KhtmlUserSelect=d?"auto":"none";b.style.MozUserSelect=d?"":"none";b.onselectstart=d?null:function(){return!1};if(q("ie")){b.unselectable=d?"":"on";for(var a=b.getElementsByTagName("*"),c=0;c<a.length;c++)a[c].unselectable=d?"":"on"}};return o(null,{maxSpeed:500,scrollBar:!1,constraint:!1,numTilesX:0,numTilesY:0,tileBounds:null,wrapHor:!1,tiles:null,ltTile:null,rtTile:null,lbTile:null,rbTile:null,tileSize:256,zoom:0,center:null,setTileContent:null,offsetX:0,offsetY:0,extraTilesL:0,
extraTilesR:0,extraTilesT:0,extraTilesB:0,swapThresholdX:1,swapThresholdY:1,_left:0,_top:0,constructor:function(b,d){this.kwArgs=b;n.isString(d)&&(d=l.byId(d));this.domNode=d;if(!dojo.isArray(this.tileSize))this.tileSize=[this.tileSize,this.tileSize];if(b.zoom!==void 0)this.zoom=b.zoom;if(!b.extent){var a=Math.pow(2,this.zoom);this.extent=[0,0,this.tileSize[0]*a,this.tileSize[1]*a]}if(!b.center)this.center=[0,0];if(!b.setTileContent)this.setTileContent=function(){};this.tiles=[];this.tileBounds=[];
if(b.extraTiles!==void 0)this.extraTilesB=this.extraTilesT=this.extraTilesR=this.extraTilesL=a=b.extraTiles},_calculateTileBounds:function(){var b=this.tileBounds,d=this.extent,a=this.tileSize;b[0]=Math.floor((d[0]+1)/a[0]);b[1]=Math.floor((d[1]+1)/a[1]);b[2]=Math.floor((d[2]-1)/a[0]);b[3]=Math.floor((d[3]-1)/a[1])},_mixin:function(){n.mixin(this,this.kwArgs);delete this.kwArgs},_buildRendering:function(){this.containerNode=f.create("div",{style:{position:"relative"}});this.containerNode.style.height=
(h.global.innerHeight||h.doc.documentElement.clientHeight)*2+"px";this.buildTiles();this.domNode.appendChild(this.containerNode);this.touchNode=this.domNode;m(this.domNode,!1)},buildTiles:function(){this.updateDivDimensions();this.numTilesX=1+Math.ceil(this.width/this.tileSize[0])+this.extraTilesL+this.extraTilesR;this.numTilesY=1+Math.ceil(this.height/this.tileSize[1])+this.extraTilesT+this.extraTilesB;for(var b=this.tiles,d=0,a=0;a<this.numTilesX;a++)for(var c=0;c<this.numTilesY;c++){b[d]={empty:!0,
div:f.create("div",{style:{position:"absolute",left:a*this.tileSize[0]+"px",top:c*this.tileSize[1]+"px",width:this.tileSize[0]+"px",height:this.tileSize[1]+"px"}},this.containerNode),l:a!=0?b[d-this.numTilesY]:null,t:c!=0?b[d-1]:null,r:null,b:null,x:a,y:c};if(a!=0)b[d-this.numTilesY].r=b[d];if(c!=0)b[d-1].b=b[d];d++}this.ltTile=this.tiles[0];this.lbTile=this.tiles[this.numTilesY-1];this.rtTile=this.tiles[this.numTilesY*(this.numTilesX-1)];this.rbTile=this.tiles[this.numTilesY*this.numTilesX-1]},_startup:function(){this.updateTileDivs()},
doZoom:function(b,d,a){this.updateDivDimensions();if(d===void 0)d=this.halfWidth,a=this.halfHeight;var c=Math.pow(2,b-this.zoom);this.zoom=b;for(b=0;b<4;b++)this.extent[b]=Math.floor(c*this.extent[b]);this._calculateTileBounds();var b=this.getPos(),k=c*(-this._top+(this.y1-this.tileOffsetY)*this.tileSize[1]-b.y+a);this.center[0]=c*(-this._left+(this.x1-this.tileOffsetX)*this.tileSize[0]-b.x+d)+this.halfWidth-d;this.center[1]=k+this.halfHeight-a;this.updateTileDivs()},updateDivDimensions:function(){this.width=
this.domNode.clientWidth;this.height=this.domNode.clientHeight;this.halfWidth=Math.floor(this.width/2);this.halfHeight=Math.floor(this.height/2)},updateTileDivs:function(){var b=this.center,d=this.tileBounds,a=b[0]-(this.width-this.halfWidth),c=b[1]-(this.height-this.halfHeight),b=a%this.tileSize[0],k=c%this.tileSize[1],a=(a-b)/this.tileSize[0],c=(c-k)/this.tileSize[1],t=0,j=0;b<0&&(t=-b,t=1+(t-t%this.tileSize[0])/this.tileSize[0],b+=t*this.tileSize[0]);k<0&&(j=-k,j=1+(j-j%this.tileSize[1])/this.tileSize[1],
k+=j*this.tileSize[1]);b+=this.extraTilesL*this.tileSize[0];k+=this.extraTilesT*this.tileSize[1];t+=this.extraTilesL;j+=this.extraTilesT;a<d[0]&&(t+=d[0]-a,a=d[0]);c<d[1]&&(j+=d[1]-c,c=d[1]);this.x1=a;this.y1=c;this.tileOffsetX=t;this.tileOffsetY=j;for(var e=this.ltTile,g=0;g<this.numTilesX;g++)for(var m=e,f=0;f<this.numTilesY;f++){var i=g+a-t,w=f+c-j,u=i>=d[0]&&i<=d[2];if(w>=d[1]&&w<=d[3]&&(u||this.wrapHor)){this.wrapHor&&!u&&(i>d[2]?i=d[0]+(i-d[2]-1)%(d[2]-d[0]+1):i<d[0]&&(i=d[2]+(i-d[0]+1)%(d[2]-
d[0]+1)));if(e.empty)e.empty=!1;this.setTileContent(e,this.zoom,i,w)}else e.empty||this.clearTile(e);e=e.b?e.b:m.r}this.offsetX=-this._left-b;this.offsetY=-this._top-k;this.scrollTo({x:this.offsetX,y:this.offsetY})},clearTile:function(b){b.div.removeChild(b.img);delete b.img;b.empty=!0},_renderTile:function(b,d,a){var c=this.tileBounds,d=d+this.x1-this.tileOffsetX,a=a+this.y1-this.tileOffsetY,k=d>=c[0]&&d<=c[2];if(a>=c[1]&&a<=c[3]&&(k||this.wrapHor)){this.wrapHor&&!k&&(d>c[2]?d=c[0]+(d-c[2]-1)%(c[2]-
c[0]+1):d<c[0]&&(d=c[2]+(d-c[0]+1)%(c[2]-c[0]+1)));if(b.empty)b.empty=!1;this.setTileContent(b,this.zoom,d,a)}else b.empty||this.clearTile(b)},onTouchMove:function(b,d){var a=this.getPos(),c=a.x-this.offsetX,k=a.y-this.offsetY,e=(c-c%this.tileSize[0])/this.tileSize[0],j=(k-k%this.tileSize[1])/this.tileSize[1];this.swapTiles(Math.abs(e)>=this.swapThresholdX?e:0,Math.abs(j)>=this.swapThresholdY?j:0);if(Math.abs(e)>=this.swapThresholdX)this.offsetX=a.x-c%this.tileSize[0];if(Math.abs(j)>=this.swapThresholdY)this.offsetY=
a.y-k%this.tileSize[1];this.scrollTo({x:this.startPos.x+b,y:this.startPos.y+d})},swapTiles:function(b,d){if(b){var a=this.ltTile,c=a,k=this.rtTile,e=k,j=this.lbTile,g=this.rbTile,m=Math.abs(b);if(m>1)for(var f=1;f<m;f++)c=c.r,e=k.l,j=j.r,g=g.l;var h=this._left;b<0?(this.ltTile=c.r,this.rtTile=c,this.lbTile=j.r,this.rbTile=j,h+=this.numTilesX*this.tileSize[0]):(this.ltTile=e,this.rtTile=e.l,this.lbTile=g,this.rbTile=g.l,h-=this.tileSize[0]);this._left-=b*this.tileSize[0];for(f=0;f<this.numTilesY;f++){if(b<
0){for(var j=a,i=0;i<m;i++)j.div.style.left=h+i*this.tileSize[0]+"px",this._renderTile(j,this.numTilesX+i,f),j=j.r;c.r.l=null;c.r=null}else{j=k;for(i=0;i<m;i++)j.div.style.left=h-i*this.tileSize[0]+"px",this._renderTile(j,-1-i,f),j=j.l;e.l.r=null;e.l=null}k.r=a;a.l=k;a=a.b;c=c.b;e=e.b;k=k.b}this.x1-=b}if(d){g=j=this.lbTile;c=a=this.ltTile;e=this.rbTile;k=this.rtTile;h=Math.abs(d);if(m>1)for(f=1;f<m;f++)g=g.t,c=c.b,e=e.t,k=k.b;m=this._top;d<0?(this.ltTile=c.b,this.lbTile=c,this.rtTile=k.b,this.rbTile=
k,m+=this.numTilesY*this.tileSize[1]):(this.ltTile=g,this.lbTile=g.t,this.rtTile=e,this.rbTile=e.t,m-=this.tileSize[1]);this._top-=d*this.tileSize[1];for(f=0;f<this.numTilesX;f++){if(d<0){k=a;for(i=0;i<h;i++)k.div.style.top=m+i*this.tileSize[1]+"px",this._renderTile(k,f,this.numTilesY+i),k=k.b;c.b.t=null;c.b=null}else{k=j;for(i=0;i<h;i++)k.div.style.top=m-i*this.tileSize[1]+"px",this._renderTile(k,f,-1-i),k=k.t;g.t.b=null;g.t=null}a.t=j;j.b=a;j=j.r;g=g.r;c=c.r;a=a.r}this.y1-=d}},slideTo:function(){},
scrollTo:function(b){var d=this.containerNode.style;q("webkit")?d.webkitTransform=this.makeTranslateStr(b):(d.top=Math.round(b.y)+"px",d.left=Math.round(b.x)+"px");this._pos=b},makeTranslateStr:function(b){var d=b.y+"px",b=b.x+"px";return e?"translate3d("+b+","+d+",0px)":"translate("+b+","+d+")"},getPos:function(){return this._pos||{x:0,y:0}}})})},"djeo/dojox/gfx":function(){define("djeo/dojox/gfx",["dojo/_base/lang","./gfx/_base","./gfx/renderer!"],function(o,q,h){q.switchTo(h);return q})},"djeo/util/geometry":function(){define("djeo/util/geometry",
["./bbox"],function(o){return{center:function(q){var q=o.get(q),h;q&&(h=[(q[0]+q[2])/2,(q[1]+q[3])/2]);return h}}})},"djeo/djeo/Moveable":function(){define("djeo/djeo/Moveable",["dojo/_base/declare","dojo/_base/event","dojo/on","dojo/touch","dojo/_base/lang","dojo/dom-class","./Mover"],function(o,q,h,n,l,r,f){return o(null,{delay:0,constructor:function(e,g){this.node=e;this.map=g;this.mover=f;this._pressHandle=h(e,n.press,l.hitch(this,this.onPress))},destroy:function(){this._pressHandle.remove();
delete this._pressHandle},onPress:function(e){if(this.delay)this._onMoveHandle=h(this.node,n.move,l.hitch(this,this._onMove)),this._onReleaseHandle=h(this.node,n.release,l.hitch(this,this.onRelease)),this._lastX=e.pageX,this._lastY=e.pageY;else this.onDragDetected(e);q.stop(e)},_onMove:function(e){if(Math.abs(e.pageX-this._lastX)>this.delay||Math.abs(e.pageY-this._lastY)>this.delay)this.onRelease(e),this.onDragDetected(e);q.stop(e)},onRelease:function(e){this._onReleaseHandle.cancel();this._onMoveHandle.cancel();
delete this._onReleaseHandle;q.stop(e)},onDragDetected:function(e){new this.mover(this.node,e,this)},onMoveStart:function(){},onMoveStop:function(){},onFirstMove:function(){for(var e=this.map.engine,g=0;g<e.layers.length;g++)e.layers[g].setStartPos()},onMove:function(e,g,f,b,d){this.onMoving(e,g,f,b,d);var a=this.map.engine;a.group.applyLeftTransform({dx:b,dy:d});if(a._infoWindow){s=a._infoWindow.domNode.style;var c=s.left,k=s.top;s.left=c?parseInt(c.substr(0,c.length-2))+b:b;s.top=k?parseInt(k.substr(0,
k.length-2))+d:d}for(c=0;c<a.layers.length;c++)a.layers[c].onMove(g,f);this.onMoved(e,g,f,b,d)},onMoving:function(){},onMoved:function(){}})})},"djeo/gfx":function(){define("djeo/gfx",["dojo/has","dojo/_base/Color","./dojox/gfx","./_base","./common/Placemark","dojo/_base/sniff"],function(o,q,h,n,l){n.shapes={circle:1,star:{size:[1E3,1E3],points:[0,-476,118,-112,500,-112,191,112,309,476,0,251,-309,476,-191,112,-500,-112,-118,-112,0,-476]},cross:{size:[10,10],points:[-1,-5,1,-5,1,-1,5,-1,5,1,1,1,1,
5,-1,5,-1,1,-5,1,-5,-1,-1,-1,-1,-5]},x:{size:[100,100],points:[-50,-50,-25,-50,0,-15,25,-50,50,-50,15,0,50,50,25,50,0,15,-25,50,-50,50,-15,0,-50,-50]},square:{size:[2,2],points:[-1,-1,-1,1,1,1,1,-1,-1,-1]},triangle:{size:[10,10],points:[-5,5,5,5,0,-5,-5,5]}};return{applyFill:function(h,f,e,g){var m=l.get("fill",f,e,g),f=l.get("fillOpacity",f,e,g);if(m||f!==void 0)if(g=(e=h.getFill())&&e.a,m&&(e=new q(m)),e){if(f!==void 0)e.a=f;else if(g!==void 0)e.a=g;h.setFill(e)}},applyStroke:function(n,f,e,g,m){if(h.renderer==
"vml"||h.renderer=="svg"&&(o("webkit")||o("opera")))m=1;var b=l.get("stroke",f,e,g),d=l.get("strokeWidth",f,e,g),f=l.get("strokeOpacity",f,e,g);if(b||d!==void 0||f!==void 0)if(d===0)n.setStroke(null);else{e=n.getStroke();if(b)e||(e={join:"round",cap:"round"}),e.color=new q(b);if(e){if(f!==void 0)e.color.a=f;if(d)e.width=d*m;n.setStroke(e)}}}}})},"djeo/djeo/Mover":function(){define("djeo/djeo/Mover",["dojo/_base/declare","dojo/has","dojo/_base/event","dojo/on","dojo/touch","dojo/_base/lang","dojo/_base/sniff"],
function(o,q,h,n,l,r){return o(null,{constructor:function(f,e,g){this.node=f;this.startX=e.touches?e.touches[0].pageX:e.pageX;this.startY=e.touches?e.touches[0].pageY:e.pageY;this.mouseButton=e.button;e=this.host=g;f=f.ownerDocument;this._onFirstMove=n(f,l.move,r.hitch(this,this.onFirstMove));this._onMouseMove=n(f,l.move,r.hitch(this,this.onMouseMove));this._onMouseUp=n(f,l.release,r.hitch(this,this.onMouseUp));if(e&&e.onMoveStart)e.onMoveStart(this)},onMouseMove:function(f){var e=f.touches?f.touches[0].pageX:
f.pageX,g=f.touches?f.touches[0].pageY:f.pageY;this.host.onMove(this,this.startPosX+(e-this.startX),this.startPosY+(g-this.startY),e-this.lastX,g-this.lastY,f);this.lastX=e;this.lastY=g;h.stop(f)},onMouseUp:function(f){(q("webkit")&&q("mac")&&this.mouseButton==2?f.button==0:this.mouseButton==f.button)&&this.destroy();h.stop(f)},onFirstMove:function(f){var e=this.node.style,g=this.host;this.startPosX=Math.round(parseFloat(e.left))||0;this.startPosY=Math.round(parseFloat(e.top))||0;this.lastX=this.startX;
this.lastY=this.startY;if(g&&g.onFirstMove)g.onFirstMove(this,f);this._onFirstMove.remove();delete this._onFirstMove},destroy:function(){this._onFirstMove&&this._onFirstMove.remove();this._onMouseUp.remove();this._onMouseMove.remove();var f=this.host;if(f&&f.onMoveStop)f.onMoveStop(this);this._onFirstMove=this._onMouseMove=this._onMouseUp=this._onFirstMove=this.node=this.host=null}})})},"djeo/projection":function(){define("djeo/projection",["dojo/_base/lang","dojo/_base/array","dojo/_base/kernel",
"./Map","./Placemark","./FeatureContainer","./util/_base","./util/bbox"],function(o,q,h,n,l,r,f,e){var g={},m,b={},d={},a=function(a,c,b){return m.transform(a,c,b)},c=function(a,c,b){return Proj4js.transform(a,c,b)},k=function(a,c,d){return b[a][c](d)},t=function(a,c,b,d,k,g,j){a==1?(c=g(d,k,{x:c[0],y:c[1]}),b.push(c.x,c.y),e.extend(j,[c.x,c.y])):q.forEach(c,function(c){var e=[];t(a-1,c,e,d,k,g,j);b.push(e)})};g.transform=function(i,e,g,j){var f=g,p;m?(d[i]||(d[i]=new m.Proj(i)),d[e]||(d[e]=new m.Proj(e)),
d[i].readyToUse&&d[i].readyToUse&&(i=d[i],e=d[e],p=a)):h.global.Proj4js&&(d[i]||(d[i]=new Proj4js.Proj(i)),d[e]||(d[e]=new Proj4js.Proj(e)),d[i].readyToUse&&d[i].readyToUse&&(i=d[i],e=d[e],p=c));!p&&b[i]&&b[i][e]&&(p=k);if(p)if(j){var f=[],n=[Infinity,Infinity,-Infinity,-Infinity],l=0;switch(j){case "Point":l=1;break;case "LineString":l=2;break;case "Polygon":l=3;break;case "MultiLineString":l=3;break;case "MultiPolygon":l=4}l&&t(l,g,f,i,e,p,n)}else j=p(i,e,{x:g[0],y:g[1]}),i=p(i,e,{x:g[2],y:g[3]}),
f=[j.x,j.y,i.x,i.y];return f};g.addTransform=function(a,c,d){b[a]||(b[a]={});b[a][c]=d};g.setProj4js=function(a){m||(m=a)};var j=l.prototype,p=j.getCoords;j.getCoords=function(){var a=this._coords;if(!a&&(a=p.call(this))){var c=this.getProjection(),b=this.map.projection;if(c&&b&&c!==b)this._coords=a=g.transform(c,b,a,this.getCoordsType())}return a};var j=n.prototype,y=j._get_center;j._get_center=function(){var a=y.call(this),c=this.appProjection||this.dataProjection||this.projection;this.projection&&
c!=this.projection&&(a=g.transform(this.projection,c,a,"Point"));return a};var z=j._get_extent;j._get_extent=function(){var a=z.call(this),c=this.appProjection||this.dataProjection||this.projection;this.projection&&c!=this.projection&&(a=g.transform(this.projection,c,a));return a};var A=j.containerPixelToCoords;j.containerPixelToCoords=function(a,c){var b=A.call(this,a,c),d=this.appProjection||this.dataProjection||this.projection;this.projection&&d!=this.projection&&(b=g.transform(this.projection,
d,b,"Point"));return b};o.extend(l,{getProjection:function(){return this.projection||this.parent.getProjection()},getBbox:function(){var a=this._bbox;if(!a&&this.bbox){var c=this.getProjection(),b=this.map.projection;c&&b&&c!==b&&(a=null)}a||(a=e.get(this));return a}});o.extend(r,{getProjection:function(){var a=this.projection||this._projection;if(!a)this._projection=a=this.parent.getProjection();return a}});o.extend(n,{getProjection:function(){return this.dataProjection||this.projection},getCoords:function(a,
c){var b=this.appProjection||this.dataProjection||this.projection;this.projection&&b!=this.projection&&(a=g.transform(b,this.projection,a,c||"Point"));return a}});g.addTransform("EPSG:4326","EPSG:3857",function(a){return{x:f.earthRadius*a.x*Math.PI/180,y:f.earthRadius*Math.log(Math.tan(Math.PI/4+a.y*Math.PI/360))}});g.addTransform("EPSG:3857","EPSG:4326",function(a){return{x:180*a.x/(Math.PI*f.earthRadius),y:360/Math.PI*Math.atan(Math.exp(a.y/f.earthRadius))-90}});return g})},"djeo/djeo/Placemark":function(){define("djeo/djeo/Placemark",
["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../dojox/gfx","../dojox/gfx/matrix","../_base","../common/Placemark","../util/geometry","../gfx"],function(o,q,h,n,l,r,f,e,g,m){var b=function(a){l.renderer=="svg"&&!n("mozilla")&&a.rawNode.setAttribute("vector-effect","non-scaling-stroke");return a},d={family:1,size:1,weight:1,style:1,variant:1};return o([e],{multipleSymbolizers:!0,constructor:function(a){q.mixin(this,a)},init:function(){this.group=this.engine.group;this.areas=
this.group.createGroup();this.lines=this.group.createGroup();this.points=this.group.createGroup();this.text=this.group.createGroup()},prepare:function(){this.calculateLengthDenominator()},calculateLengthDenominator:function(){this.lengthDenominator=(this.group.getTransform()||{xx:1}).xx},getX:function(a){a-=this.engine.extent[0];this.engine.correctScale&&(a*=this.engine.correctionScale);return parseInt(a)},getY:function(a){a=this.engine.extent[3]-a;this.engine.correctScale&&(a*=this.engine.correctionScale);
return parseInt(a)},makePoint:function(){return null},makeLineString:function(a,c){return b(this.lines.createPath({path:this.makePathString(c,1)}))},makePolygon:function(a,c){return b(this.areas.createPath({path:this.makePathString(c,2)}))},makeMultiLineString:function(a,c){return b(this.lines.createPath({path:this.makePathString(c,2)}))},makeMultiPolygon:function(a,c){return b(this.areas.createPath({path:this.makePathString(c,3)}))},applyPointStyle:function(a,c,b){var d=c.point,e=c.points,g=a.baseShapes,
f=g.length;if(e){this._updateShapes(a,b,c,e,!0);var m=!1;h.forEach(e,function(e,j){var h=g[j];h&&m&&(this._removeShape(h,a),h=null);var l=this._applyPointStyle(b,c,d,e,a,h);h&&h!=l&&(m=!0,g[j]=l);j>=f&&g.push(l)},this)}else if(f>1)h.forEach(g,function(e,g){var j=this._applyPointStyle(b,c,d,null,a,e);if(f==0||j!=e)a.baseShapes[g]=j},this);else{var e=g[0],l=this._applyPointStyle(b,c,d,null,a,e);if(f==0||e!=l)a.baseShapes[0]=l}},_applyPointStyle:function(a,c,d,g,j,p){var h=e.get("shape",c,d,g),l=e.getImgSrc(c,
d,g),n,i,o,u=e.getScale(c,d,g),a=[r.translate(this.getX(a[0]),this.getY(a[1]))],x=!0,v=!p?!0:!1;if(h){if(!f.shapes[h])h=e.defaultShapeType;n=!0}else l&&(n=!1);n!==void 0&&(i=n?e.getSize(c,d,g):e.getImgSize(c,d,g));if(i)j.reg.size=[i[0],i[1]],j.reg.scale=u;else if(p&&(o=e.get("rScale",c,d,g),n!==void 0&&o!==void 0))i=j.reg.size,u=o*j.reg.scale;n?(n=f.shapes[h],l=h=="circle"?2:Math.max(n.size[0],n.size[1]),o=u/this.lengthDenominator/l,a.push(r.scale(o*i[0],o*i[1])),h=="circle"?(p&&p.shape.type!="circle"&&
(this._removeShape(p,j),v=!0,p=null),h={cx:0,cy:0,r:1},p?p.setShape(h):p=b(this.points.createCircle(h))):(p&&p.shape.type!="polyline"&&(this._removeShape(p,j),v=!0,p=null),p?p.setShape({points:n.points}):p=b(this.points.createPolyline(n.points))),m.applyFill(p,c,d,g),m.applyStroke(p,c,d,g,l/Math.max(i[0],i[1])/u)):n===!1?(p&&p.shape.type!="image"&&(this._removeShape(p,j),v=!0,p=null),c=e.getAnchor(c,d,g,i),i={type:"image",src:this._getImageUrl(l),width:i[0],height:i[1],x:-c[0],y:-c[1]},p?p.setShape(i):
p=this.points.createImage(i),a.push(r.scale(1/this.lengthDenominator*u))):p&&(p.shape.type!="image"&&m.applyFill(p,c,d,g),o!==void 0&&(p.applyRightTransform(r.scale(c.rScale)),x=!1));if(p){if(x){u=j.reg;i=u.heading;if(i===void 0){i=j.orientation;if(q.isObject(i))i=i.heading;u.heading=i}i!==void 0&&a.push(r.rotate(i));p.setTransform(a)}v&&this._connectEvents(p,j)}return p},applyLineStyle:function(a,c,b){var d=c.line,e=c.lines,g=a.baseShapes;e?(this._updateShapes(a,b,c,e),h.forEach(e,function(a,b){this._applyLineStyle(g[b],
c,d,a)},this)):h.forEach(g,function(a){this._applyLineStyle(a,c,d)},this)},_applyLineStyle:function(a,c,b,d){m.applyStroke(a,c,b,d,1/this.lengthDenominator)},applyPolygonStyle:function(a,c,b){this._updateShapes(a,b,c);this._applyPolygonStyle(a.baseShapes[0],c,c.area)},_applyPolygonStyle:function(a,c,b){m.applyFill(a,c,b);m.applyStroke(a,c,b,null,1/this.lengthDenominator)},_updateShapes:function(a,c,b,d,e){var b=a.baseShapes,d=d?d.length:1,g=b.length;if(d>g){if(!e)for(e=g;e<d;e++)g=this.createShape(a,
c),this._connectEvents(g,a),b.push(g)}else if(d<g)for(e=g-1;e>=d;e--)g=b.pop(),this._removeShape(g,a)},_connectEvents:function(a,c){var b=c.handles,d;for(d in b){var e=b[d][1],g=b[d][2],f=b[d][3];h.forEach(b[d][0],function(b,d){f[d].push([a,a.connect(b,this.engine.normalizeCallback(c,b,g,e))])},this)}},_removeShape:function(a,c){var b=c.handles;a.removeShape();for(var d in b){var e=b[d][3];h.forEach(b[d][0],function(c,b){a.disconnect(e[b].pop()[1])})}},remove:function(a){a.visible&&h.forEach(a.baseShapes,
function(c){this._removeShape(c,a)},this)},show:function(a,c){if(c){var b=a.reg.gfxContainer;delete a.reg.gfxContainer;h.forEach(a.baseShapes,function(a){b.add(a)},this)}else{if(a.baseShapes.length)a.reg.gfxContainer=a.baseShapes[0].getParent();h.forEach(a.baseShapes,function(a){a.removeShape()})}},makeText:function(a,c){if(l.renderer!="vml"){a.textShapes&&h.forEach(a.textShapes,function(a){a.removeShape()});var b;if(a.isPoint())b=c.point;else if(a.isArea())b=c.area;if(b=e.get("text",c,b)){var d=
b.label||this._getLabel(a,b);if(d)a.textShapes=[],a.reg.ts=b,b.haloFill&&b.haloRadius&&this._makeTextShape(a,d,null,{color:b.haloFill,width:2*b.haloRadius},b),this._makeTextShape(a,d,b.fill,null,b)}}},_makeTextShape:function(a,c,b,d,g){var f={},m=!0;if(a.isPoint()){if(g.hAlign)f.align=g.hAlign}else a.isArea()?f.align="middle":m=!1;if(m)f.text=c,c=this._calculateTextPosition(a,f),f=this.text.createText(f).setTransform(c),b&&f.setFill(b),this._makeFont(f,g,e.getScale(a.reg.cs)),d&&f.setStroke(d),a.textShapes.push(f)},
_calculateTextPosition:function(a,c,b){var d;d===void 0?b||(b=a.getCoords()):b=g.center(a);d=this.getX(b[0]);var b=this.getY(b[1]),f=a.reg.ts,m=e.getScale(a.reg.cs),a=[r.scaleAt(1/this.lengthDenominator,d,b)],h="dx"in f?m*f.dx:0,f="dy"in f?-m*f.dy:0;(h||f)&&a.push(r.translate(h,f));if(c)c.x=d,c.y=b;return a},_makeFont:function(a,c,b){var e,g;for(g in d)g in c&&(e||(e={}),e[g]=c[g]);e&&(e.size&&(e.size*=b),a.setFont(e))},setCoords:function(a,c){var b=c.baseShapes,d=c.textShapes,e=c.getCoords(),g={dx:this.getX(a[0])-
this.getX(e[0]),dy:this.getY(a[1])-this.getY(e[1])};h.forEach(b,function(a){a.applyLeftTransform(g)},this);d&&h.forEach(d,function(b){var d=b.getShape(),e=this._calculateTextPosition(c,d,a);b.setShape(d).setTransform(e)},this)},setOrientation:function(a,c){var b=c.reg;if(b.heading===void 0)b.heading=0;var d=-b.heading+a;h.forEach(c.baseShapes,function(a){a.applyRightTransform(r.rotate(d))},this);b.heading=a},makePathString:function(a,b){var d="";if(b==1)for(var d="M"+this.getX(a[0][0])+","+this.getY(a[0][1]),
e=1;e<a.length;e++)d+="L"+this.getX(a[e][0])+","+this.getY(a[e][1]);else h.forEach(a,function(a){d+=this.makePathString(a,b-1)},this);return d}})})},"djeo/WebTiles":function(){define("djeo/WebTiles",["dojo/_base/declare","dojo/_base/lang","./_base"],function(o,q,h){h.registerDependency("WebTiles");return o(null,{yFirst:!1,dependency:"WebTiles",constructor:function(h){q.mixin(this,h);h=h.paramStr?h.paramStr:this.url;if(q.isString(h)){var l=h.indexOf("[");if(l>-1){var o=h.indexOf("]");parts=h.substring(l+
1,o).split(",");this.url=[];for(var f=0;f<parts.length;f++)this.url[f]=h.substring(0,l)+parts[f]+h.substring(o+1)}else this.url=[h]}this.numUrls=this.url.length},startup:function(h){this.map=h;if(h=this.map.engine.getFactory("WebTiles"))q.mixin(this,h),this.init()}})})},"djeo/djeo/Navigation":function(){define("djeo/djeo/Navigation",["dojo/_base/declare","dojo/has","dojo/on","dojo/aspect","dojo/_base/lang","dojo/_base/event","dojo/dom-geometry","../dojox/gfx","./Moveable","dojo/_base/sniff"],function(o,
q,h,n,l,r,f,e,g){return o(null,{moveable:null,enable:function(f){f===void 0&&(f=!0);f?(this.moveable=new g(this.map.engine.container,this.map),this._onFirstMove=n.after(this.moveable,"onFirstMove",l.hitch(this,function(){this._moved=!0})),this._onMoveStop=n.after(this.moveable,"onMoveStop",l.hitch(this,function(){if(this._moved)this._moved=!1,this.map.engine.emit("extent_changed")})),e.renderer!="silverlight"&&this.enableZoom(!0)):(e.renderer!="silverlight"&&this.enableZoom(!1),this._onMoveStop.remove(),
this._onFirstMove.remove(),this.moveable.destroy(),this.moveable=null)},enableZoom:function(e){if(e){var b=this.map.engine,e=!q("mozilla")?"mousewheel":"DOMMouseScroll";this.wheelHandler=h(b.container,e,l.hitch(this,this._onWheel));this.dblclickHandler=h(b.container,"dblclick",l.hitch(this,function(d){this._onZoom(d,b.scaleFactor)}))}else this.dblclickHandler.remove(),this.wheelHandler.remove(),this.wheelHandler=this.dblclickHandler=null},_onWheel:function(e){var b=e[q("mozilla")?"detail":"wheelDelta"]/
(q("mozilla")?-3:120);this._onZoom(e,Math.pow(this.map.engine.scaleFactor,b))},_onZoom:function(e,b){r.stop(e);var d=this.map,a=d.engine,c=a._get_zoom();if(!(c>=0&&(c==d.minZoom&&b<1||c==d.maxZoom&&b>1))){for(var c=f.position(this.map.engine.container,!0),d=e.pageX-c.x,c=e.pageY-c.y,g=0;g<a.layers.length;g++)a.layers[g].doZoom(b,e);a.group.applyLeftTransform({xx:b,yy:b,dx:d*(1-b),dy:c*(1-b)});a.factories.Placemark.calculateLengthDenominator();a.resizeFeatures(this.map.document,1/b);a._infoWindow&&
a._infoWindow._doZoom(b,d,c);a.onzoom_changed();a.emit("extent_changed")}}})})},"djeo/_tiles":function(){define("djeo/_tiles",[],function(){var o=["WebTiles",{url:"http://[a,b,c].tile.openstreetmap.org"}];return{webtiles:["WebTiles",{}],roadmap:o,osm:o,openstreetmap:o,"osm.org":o,"openstreetmap.org":o,"mapquest-osm":["WebTiles",{url:"http://otile[1,2,3,4].mqcdn.com/tiles/1.0.0/osm"}],"mapquest-oa":["WebTiles",{url:"http://oatile[1,2,3,4].mqcdn.com/tiles/1.0.0/sat"}],arcgis_webtiles:["WebTiles",{}]}})},
"djeo/dojox/gfx/renderer":function(){define("djeo/dojox/gfx/renderer",["./_base","dojo/_base/lang","dojo/_base/sniff","dojo/_base/window","dojo/_base/config"],function(o,q,h,n,l){var r=null;return{load:function(f,e,g){function m(){e(["./gfx/"+b],function(a){o.renderer=b;r=a;g(a)})}if(r&&f!="force")g(r);else{for(var b=l.forceGfxRenderer,f=!b&&(q.isString(l.gfxRenderer)?l.gfxRenderer:"svg,vml,canvas,silverlight").split(","),d,a;!b&&f.length;)switch(f.shift()){case "svg":"SVGAngle"in n.global&&(b="svg");
break;case "vml":h("ie")&&(b="vml");break;case "silverlight":try{h("ie")?(d=new ActiveXObject("AgControl.AgControl"))&&d.IsVersionSupported("1.0")&&(a=!0):navigator.plugins["Silverlight Plug-In"]&&(a=!0)}catch(c){a=!1}finally{d=null}a&&(b="silverlight");break;case "canvas":n.global.CanvasRenderingContext2D&&(b="canvas")}b==="canvas"&&l.canvasEvents!==!1&&(b="canvasWithEvents");b=="svg"&&typeof window.svgweb!="undefined"?window.svgweb.addOnLoad(m):m()}}}})},"djeo/djeo/WebTiles":function(){define("djeo/djeo/WebTiles",
["dojo/_base/declare","dojo/_base/lang","dojo/dom-geometry","dojo/dom-style","dojo/dom-construct","../_base","tiles/BaseTileable","../util/_base","../projection"],function(o,q,h,n,l,r,f,e){return o(null,{zoom:3,_urlCounter:0,_lastUrlIndex:0,projection:"EPSG:3857",init:function(){var e=this.map;this.container=l.create("div",{style:{top:0,left:0,width:"100%",height:"100%",position:"absolute"}},e.engine.container,0);this.discreteScales=r.scales;this._lastUrlIndex=this.url.length-1;if(!e.dataProjection)e.dataProjection=
"EPSG:4326";e.engine.scaleFactor=2;this.tileable=new f({wrapHor:!0,setTileContent:q.hitch(this,this.setTileContent),extraTiles:1},this.container);this.tileable._mixin();this.tileable._buildRendering()},zoomTo:function(e){var f=this.map,b=r.scales,d=[(e[2]+e[0])/2,(e[3]+e[1])/2],e=Math.min(f.width/(e[2]-e[0]),f.height/(e[3]-e[1])),a;if(e<=b[0])a=0;else if(f=b.length-1,e>b[f])a=f;else for(var c=0;c<f;c++)if(b[c]<e&&e<=b[c+1]){a=c;break}this._setCenterAndZoom(d,a)},_setCenterAndZoom:function(g,f){var b=
this.tileable,d=Math.pow(2,f);b.extent=[0,0,b.tileSize[0]*d,b.tileSize[1]*d];b._calculateTileBounds();var d=b.extent,a=g[0]/(2*Math.PI*e.earthRadius/d[2]),c=g[1]/(2*Math.PI*e.earthRadius/d[3]);a+=d[2]/2;c=-c+d[3]/2;b.center=[a,c];b.zoom=f;this.tileable.updateTileDivs();this.zoom=f},setCenter:function(e){this._setCenterAndZoom(e,this.zoom)},setZoom:function(e){this.tileable.doZoom(e);this.zoom=e},onMove:function(e,f){this.tileable.onTouchMove(e,f)},setStartPos:function(){this.tileable.startPos=this.tileable.getPos()},
getScale:function(){return this.discreteScales[this.zoom]},doZoom:function(e,f){var b=h.position(this.container,!0),d=f.pageX-b.x-n.get(this.container,"borderLeftWidth"),b=f.pageY-b.y-n.get(this.container,"borderTopWidth");this.zoom+=(e>1?e:-1/e)/2;this.tileable.doZoom(this.zoom,d,b)},setTileContent:function(e,f,b,d){e.img&&e.div.removeChild(e.img);f=l.create("img",{width:256,height:256,src:this.url[this._urlCounter]+"/"+f+"/"+(this.yFirst?d:b)+"/"+(this.yFirst?b:d)+".png"},e.div);e.img=f;this._urlCounter==
this._lastUrlIndex?this._urlCounter=0:this._urlCounter++}})})}}});define("djeo/native",[],1);