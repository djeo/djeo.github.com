/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
define(["dijit","dojo","dojox","dojo/require!esri/layers/layer,esri/geometry,dojox/xml/parser,dojox/gfx/matrix"],function(_1,_2,_3){_2.provide("esri.layers.dynamic");_2.require("esri.layers.layer");_2.require("esri.geometry");_2.require("dojox.xml.parser");_2.require("dojox.gfx.matrix");_2.declare("esri.layers.DynamicMapServiceLayer",esri.layers.Layer,{constructor:function(_4,_5){this.useMapTime=(_5&&_5.hasOwnProperty("useMapTime"))?(!!_5.useMapTime):true;var _6=_2.hitch;this._exportMapImageHandler=_6(this,this._exportMapImageHandler);this._imgSrcFunc=_6(this,this._imgSrcFunc);this._divAlphaImageFunc=_6(this,this._divAlphaImageFunc);this._tileLoadHandler=_6(this,this._tileLoadHandler);this._tileErrorHandler=_6(this,this._tileErrorHandler);},opacity:1,isPNG32:false,_setMap:function(_7,_8,_9){this.inherited(arguments);this._map=_7;var d=(this._div=_2.create("div",null,_8)),_a=esri._css.names,_b={position:"absolute",width:_7.width+"px",height:_7.height+"px",overflow:"visible",opacity:this.opacity},_c=_2.isIE,_d=_2.connect,vd=_7.__visibleDelta;if(_c&&_c>7){delete _b.opacity;}if(_7.navigationMode==="css-transforms"){_b[_a.transform]=esri._css.translate(vd.x,vd.y);_2.style(d,_b);this._left=vd.x;this._top=vd.y;}else{_b.left="0px";_b.top="0px";_2.style(d,_b);this._left=this._top=0;}_2.style(d,_b);this._onResizeHandler_connect=_d(_7,"onResize",this,"_onResizeHandler");this._opacityChangeHandler_connect=_d(this,"onOpacityChange",this,"_opacityChangeHandler");this._img_loading=null;this._dragOrigin={x:0,y:0};this.evaluateSuspension();if(this.suspended&&!_7.loaded){var _e=_2.connect(_7,"onLoad",this,function(){_2.disconnect(_e);_e=null;this.evaluateSuspension();});}return d;},_unsetMap:function(_f,_10){_2.destroy(this._div);this._map=this._div=null;var _11=_2.disconnect;_11(this._onResizeHandler_connect);_11(this._opacityChangeHandler_connect);this._onResizeHandler_connect=this._opacityChangeHandler_connect=null;this._fireUpdateEnd();this._toggleTime();clearTimeout(this._wakeTimer);this._wakeTimer=null;this._disableDrawConnectors();this.inherited(arguments);},_onResizeHandler:function(_12,_13,_14){_2.style(this._div,{width:_13+"px",height:_14+"px"});this._onExtentChangeHandler(_12);},onSuspend:function(){this.inherited(arguments);this._fireUpdateEnd();this._toggleTime();esri.hide(this._div);clearTimeout(this._wakeTimer);this._wakeTimer=null;this._disableDrawConnectors();},onResume:function(){this.inherited(arguments);var map=this._map;this._toggleTime();if(map.navigationMode==="css-transforms"){var vd=map.__visibleDelta;this._left=vd.x;this._top=vd.y;_2.style(this._div,esri._css.names.transform,esri._css.translate(this._left,this._top));}this._enableDrawConnectors();this._wakeTimer=this._wakeTimer||setTimeout(_2.hitch(this,function(){if(!this.suspended){this._onExtentChangeHandler(this._map.extent);}}),0);},_enableDrawConnectors:function(){var _15=_2.connect,map=this._map;if(map){this._onPanHandler_connect=_15(map,"onPan",this,"_onPanHandler");this._onExtentChangeHandler_connect=_15(map,"onExtentChange",this,"_onExtentChangeHandler");if(map.navigationMode==="css-transforms"){this._onScaleHandler_connect=_15(map,"onScale",this,this._onScaleHandler);}else{this._onZoomHandler_connect=_15(map,"onZoom",this,"_onZoomHandler");}}},_disableDrawConnectors:function(){var _16=_2.disconnect;_16(this._onPanHandler_connect);_16(this._onExtentChangeHandler_connect);_16(this._onZoomHandler_connect);_16(this._onScaleHandler_connect);this._onPanHandler_connect=this._onExtentChangeHandler_connect=this._onZoomHandler_connect=this._onScaleHandler_connect=null;},_toggleTime:function(){var map=this._map;if(this.timeInfo&&this.useMapTime&&map&&!this.suspended){if(!this._timeConnect){this._timeConnect=_2.connect(map,"onTimeExtentChange",this,this._onTimeExtentChangeHandler);}this._setTime(map.timeExtent);}else{_2.disconnect(this._timeConnect);this._timeConnect=null;this._setTime(null);}},_setTime:function(_17){if(this._params){this._params.time=_17?_17.toJson().join(","):null;}},_onPanHandler:function(_18,_19){this._panDx=_19.x;this._panDy=_19.y;var _1a=this._dragOrigin,vd=this._map.__visibleDelta,img=this._img;if(img){if(this._map.navigationMode==="css-transforms"){this._left=vd.x+_19.x;this._top=vd.y+_19.y;_2.style(this._div,esri._css.names.transform,esri._css.translate(this._left,this._top));}else{_2.style(img,{left:(_1a.x+_19.x)+"px",top:(_1a.y+_19.y)+"px"});}}},_onExtentChangeHandler:function(_1b,_1c,_1d){if(this.suspended){return;}clearTimeout(this._wakeTimer);this._wakeTimer=null;var _1e=this._map,_1f=this._img,_20=_1f&&_1f.style,_21=this._dragOrigin;if(_1c&&!_1d&&_1f&&(_1c.x!==this._panDx||_1c.y!==this._panDy)){if(_1e.navigationMode==="css-transforms"){var vd=_1e.__visibleDelta;this._left=vd.x;this._top=vd.y;_2.style(this._div,esri._css.names.transform,esri._css.translate(this._left,this._top));}else{_2.style(_1f,{left:(_21.x+_1c.x)+"px",top:(_21.y+_1c.y)+"px"});}}if(_1f){_21.x=parseInt(_20.left,10);_21.y=parseInt(_20.top,10);}else{_21.x=(_21.y=0);}if(_1e.navigationMode==="css-transforms"){if(_1d&&_1f){_2.style(_1f,esri._css.names.transition,"none");_1f._multiply=_1f._multiply?_3.gfx.matrix.multiply(_1f._matrix,_1f._multiply):_1f._matrix;}}this._fireUpdateStart();var _22=this._img_loading;if(_22){_2.disconnect(_22._onload_connect);_2.disconnect(_22._onerror_connect);_2.disconnect(_22._onabort_connect);_2.destroy(_22);this._img_loading=null;var _23=this._jsonRequest;if(_23){try{_23.cancel();}catch(e){}this._jsonRequest=null;}}if(this.version>=10&&_1e.wrapAround180){_1b=_1b._normalize(true);}if(this.isPNG32){var div=(this._img_loading=_2.create("div"));div.id=_1e.id+"_"+this.id+"_"+new Date().getTime();_2.style(div,{position:"absolute",left:"0px",top:"0px",width:_1e.width+"px",height:_1e.height+"px"});var _24=div.appendChild(_2.create("div"));_2.style(_24,{opacity:0,width:_1e.width+"px",height:_1e.height+"px"});this.getImageUrl(_1b,_1e.width,_1e.height,this._divAlphaImageFunc);div=null;}else{var img=(this._img_loading=_2.create("img")),_25=esri._css.names,_26=_2.isIE,css={position:"absolute",width:_1e.width+"px",height:_1e.height+"px"};if(_26&&_26>7){css.opacity=this.opacity;}if(_1e.navigationMode==="css-transforms"){css[_25.transform]=esri._css.translate(-this._left,-this._top);img._tdx=-this._left;img._tdy=-this._top;css[_25.transition]=_25.transformName+" "+esri.config.defaults.map.zoomDuration+"ms ease";}else{css.left="0px";css.top="0px";}img.id=_1e.id+"_"+this.id+"_"+new Date().getTime();_2.style(img,css);img._onload_connect=_2.connect(img,"onload",this,"_onLoadHandler");img._onerror_connect=_2.connect(img,"onerror",this,"_onErrorHandler");img._onabort_connect=_2.connect(img,"onabort",this,"_onErrorHandler");this._startRect={left:_21.x,top:_21.y,width:_1f?parseInt(_20.width,10):_1e.width,height:_1f?parseInt(_20.height,10):_1e.height,zoom:(_20&&_20.zoom)?parseFloat(_20.zoom):1};this.getImageUrl(_1b,_1e.width,_1e.height,this._imgSrcFunc);img=null;}},_onTimeExtentChangeHandler:function(_27){if(this.suspended){return;}this._setTime(_27);this.refresh(true);},getImageUrl:function(_28,wd,ht,_29){},_imgSrcFunc:function(src){this._img_loading.src=src;},_divAlphaImageFunc:function(src){_2.style(this._img_loading,"filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+src+"', sizingMethod='scale')");this._onLoadHandler({currentTarget:this._img_loading});},_onLoadHandler:function(evt){var img=evt.currentTarget,_2a=_2.disconnect,_2b=this._map;_2a(img._onload_connect);_2a(img._onerror_connect);_2a(img._onabort_connect);if(!_2b||_2b.__panning||_2b.__zooming){_2.destroy(img);this._fireUpdateEnd();return;}_3.xml.parser.removeChildren(this._div);this._img=img;this._startRect={left:0,top:0,width:_2b.width,height:_2b.height,zoom:1};this._div.appendChild(img);if(!this.suspended){esri.show(this._div);}img._onload_connect=img._onerror_connect=img._onabort_connect=this._img_loading=null;var _2c=this._dragOrigin;_2c.x=(_2c.y=0);this.onUpdate();this._fireUpdateEnd();},_onErrorHandler:function(evt){var img=evt.currentTarget,_2d=_2.disconnect;_2.style(img,"visibility","hidden");_2d(img._onload_connect);_2d(img._onerror_connect);_2d(img._onabort_connect);img._onload_connect=img._onerror_connect=img._onabort_connect=null;var _2e=new Error(esri.bundle.layers.dynamic.imageError+": "+img.src);this.onError(_2e);this._fireUpdateEnd(_2e);},setUseMapTime:function(use,_2f){this.useMapTime=use;this._toggleTime();if(!_2f){this.refresh(true);}},refresh:function(){if(this._map){this._onExtentChangeHandler(this._map.extent);}},_onScaleHandler:function(mtx,_30){var css={},_31=esri._css.names,img=this._img;if(!img){return;}_2.style(img,_31.transition,_30?"none":(_31.transformName+" "+esri.config.defaults.map.zoomDuration+"ms ease"));img._matrix=mtx;mtx=img._multiply?_3.gfx.matrix.multiply(mtx,img._multiply):mtx;if(img._tdx||img._tdy){mtx=_3.gfx.matrix.multiply(mtx,{"xx":1,"xy":0,"yx":0,"yy":1,"dx":img._tdx,"dy":img._tdy});}css[_31.transform]=esri._css.matrix(mtx);_2.style(img,css);},_onZoomHandler:function(_32,_33,_34){var _35=this._startRect,_36=_35.width*_33,_37=_35.height*_33,img=this._img,_38=_2.isIE;if(img){if(_38&&_38<8){_2.style(img,{left:(_35.left-((_36-_35.width)*(_34.x-_35.left)/_35.width))+"px",top:(_35.top-((_37-_35.height)*(_34.y-_35.top)/_35.height))+"px",zoom:_33*_35.zoom});}else{_2.style(img,{left:(_35.left-((_36-_35.width)*(_34.x-_35.left)/_35.width))+"px",top:(_35.top-((_37-_35.height)*(_34.y-_35.top)/_35.height))+"px",width:_36+"px",height:_37+"px"});}}},_exportMapImage:function(url,_39,_3a){var _3b=this._exportMapImageHandler;_39.token=this._getToken();esri.request({url:url,content:_39,callbackParamName:"callback",load:function(){_3b(arguments[0],arguments[1],_3a);},error:esri.config.defaults.io.errorHandler});},_exportMapImageHandler:function(_3c,io,_3d){var _3e=new esri.layers.MapImage(_3c);this.onMapImageExport(_3e);if(_3d){_3d(_3e);}},onMapImageExport:function(){},setOpacity:function(o){if(this.opacity!=o){this.onOpacityChange(this.opacity=o);}},onOpacityChange:function(){},_opacityChangeHandler:function(_3f){_2.style(this._div,"opacity",_3f);}});});