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
define(["dijit","dojo","dojox","dojo/require!esri/main,esri/_coremap,esri/touchcontainer,dijit/form/HorizontalSlider,dijit/form/VerticalSlider,dijit/form/HorizontalRule,dijit/form/VerticalRule,dijit/form/HorizontalRuleLabels,dijit/form/VerticalRuleLabels,esri/layers/agsdynamic,esri/layers/agstiled,esri/layers/agsimageservice"],function(_1,_2,_3){_2.provide("esri.map");_2.require("esri.main");_2.require("esri._coremap");if(esri.isTouchEnabled){_2.require("esri.touchcontainer");}else{_2.declare("esri._MapContainer",esri._CoreMap,(function(){var dc=_2.connect,_4=_2.disconnect,dh=_2.hitch,_5=_2.mixin,_6=_2.isMozilla,_7=_2.stopEvent,_8=_2.fixEvent,_9=esri.geometry.Point;var _a=navigator.userAgent.indexOf("Macintosh")!==-1?1:3,_b=_2.isChrome<2?360:120,_c=1,_d=1,_e=300;return {constructor:function(_f){_5(this,{_dragEnd:false,_clickDuration:_e,_downCoords:null,_clickTimer:null,_onKeyDown_connect:null,_onKeyUp_connect:null,_onMouseDragHandler_connect:null});var _10=this.__container,_11=this._connects;_11.push(dc(_10,"onselectstart",function(evt){_7(evt);return false;}),dc(_10,"ondragstart",function(evt){_7(evt);return false;}));if(_6){_2.style(_10,"MozUserSelect","none");}_11.push(dc(_10,"onmouseenter",this,"_onMouseEnterHandler"),dc(_10,"onmouseleave",this,"_onMouseLeaveHandler"),dc(_10,"onmousedown",this,"_onMouseDownHandler"),dc(_10,"onclick",this,"_onClickHandler"),dc(_10,"ondblclick",this,"_onDblClickHandler"));this.enableMouseWheel(false);this._onMouseMoveHandler_connect=dc(_10,"onmousemove",this,"_onMouseMoveHandler");this._onMouseUpHandler_connect=dc(_10,"onmouseup",this,"_onMouseUpHandler");this._processEvent=dh(this,this._processEvent);this._fireClickEvent=dh(this,this._fireClickEvent);},_cleanUp:function(){_4(this._onMouseMoveHandler_connect);_4(this._onMouseUpHandler_connect);_4(this._onMouseDragHandler_connect);_4(this._scrollHandle);var _12=this._connects,i;for(i=_12.length;i>=0;i--){_4(_12[i]);delete _12[i];}this.inherited("_cleanUp",arguments);},_processEvent:function(evt){evt=_8(evt,evt.target);if(evt.type==="DOMMouseScroll"&&_2.isFF<3){evt.screenPoint=new _9(window.scrollX+evt.screenX-this.position.x,window.scrollY+evt.screenY-this.position.y);}else{evt.screenPoint=new _9(evt.pageX-this.position.x,evt.pageY-this.position.y);}evt.mapPoint=this.extent?this.toMap(evt.screenPoint):new _9();return evt;},_onMouseEnterHandler:function(evt){_4(this._onKeyDown_connect);_4(this._onKeyUp_connect);this._onKeyDown_connect=dc(document,"onkeydown",this,"_onKeyDownHandler");this._onKeyUp_connect=dc(document,"onkeyup",this,"_onKeyUpHandler");this.onMouseOver(this._processEvent(evt));},_onMouseLeaveHandler:function(evt){_4(this._onKeyDown_connect);_4(this._onKeyUp_connect);this.onMouseOut(this._processEvent(evt));},_onMouseMoveHandler:function(evt){if(this._dragEnd){this._dragEnd=false;return;}this.onMouseMove(this._processEvent(evt));},_onMouseDownHandler:function(evt){_4(this._onMouseMoveHandler_connect);var _13=this.__container;if(_13.setCapture){_13.setCapture(false);}this._onMouseDragHandler_connect=dc(document,"onmousemove",this,"_onMouseDragHandler");evt=this._processEvent(evt);this._downCoords=evt.screenPoint.x+","+evt.screenPoint.y;this.onMouseDown(evt);},_onMouseUpHandler:function(evt){var _14=this.__container;if(_14.releaseCapture){_14.releaseCapture();}evt=this._processEvent(evt);_4(this._onMouseDragHandler_connect);_4(this._onMouseMoveHandler_connect);this._onMouseMoveHandler_connect=dc(_14,"onmousemove",this,"_onMouseMoveHandler");this.onMouseUp(evt);},_onMouseDragHandler:function(evt){_4(this._onMouseDragHandler_connect);this._onMouseDragHandler_connect=dc(document,"onmousemove",this,"_onMouseDraggingHandler");_4(this._onMouseUpHandler_connect);this._onMouseUpHandler_connect=dc(document,"onmouseup",this,"_onDragMouseUpHandler");this._docLeaveConnect=dc(document,"onmouseout",this,"_onDocMouseOut");this.onMouseDragStart(this._processEvent(evt));},_onDocMouseOut:function(evt){var _15=evt.relatedTarget,_16=evt.relatedTarget&&evt.relatedTarget.nodeName.toLowerCase();if(!_15||(_2.isChrome&&_16==="html")){this._onDragMouseUpHandler(evt);}},_onMouseDraggingHandler:function(evt){this.onMouseDrag(this._processEvent(evt));_2.stopEvent(evt);},_onDragMouseUpHandler:function(evt){var _17=this.__container;if(_17.releaseCapture){_17.releaseCapture();}this._dragEnd=true;evt=this._processEvent(evt);this.onMouseDragEnd(evt);_4(this._docLeaveConnect);_4(this._onMouseDragHandler_connect);_4(this._onMouseUpHandler_connect);this._onMouseMoveHandler_connect=dc(_17,"onmousemove",this,"_onMouseMoveHandler");this._onMouseUpHandler_connect=dc(_17,"onmouseup",this,"_onMouseUpHandler");this.onMouseUp(evt);},_onClickHandler:function(evt){evt=this._processEvent(evt);if(this._downCoords!==(evt.screenPoint.x+","+evt.screenPoint.y)){return;}clearTimeout(this._clickTimer);this._clickEvent=_5({},evt);this._clickTimer=setTimeout(this._fireClickEvent,this._clickDuration);},_fireClickEvent:function(){clearTimeout(this._clickTimer);if(_2.isIE<9){var GL=esri.layers.GraphicsLayer;this._clickEvent.graphic=GL._clicked;delete GL._clicked;}this.onClick(this._clickEvent);},_onDblClickHandler:function(evt){clearTimeout(this._clickTimer);this.onDblClick(this._processEvent(evt));},_onMouseWheelHandler:function(evt){if(this.__canStopSWEvt()){_2.stopEvent(evt);}evt=this._processEvent(evt);var _18=_2.isIE||_2.isWebKit?evt.wheelDelta/_b:-evt.detail/_a,_19=Math.abs(_18);if(_19<=_c){_19=_c;}else{_19=_d;}evt.value=_18<0?-_19:_19;this.onMouseWheel(evt);},__canStopSWEvt:function(){},_onKeyDownHandler:function(evt){this.onKeyDown(evt);},_onKeyUpHandler:function(evt){this.onKeyUp(evt);},__setClickDuration:function(dur){this._clickDuration=dur;},__resetClickDuration:function(){this._clickDuration=_e;},enableMouseWheel:function(_1a){_4(this._scrollHandle);this._scrollHandle=dc(this.__container,(_2.isFF||_6)?(_1a?"MozMousePixelScroll":"DOMMouseScroll"):"onmousewheel",this,this._onMouseWheelHandler);},onMouseOver:function(){},onMouseMove:function(){},onMouseOut:function(){},onMouseDown:function(){},onMouseDragStart:function(){},onMouseDrag:function(){},onMouseDragEnd:function(){},onMouseUp:function(){},onClick:function(){},onDblClick:function(){},onMouseWheel:function(){},onKeyDown:function(){},onKeyUp:function(){}};}()));}_2.require("dijit.form.HorizontalSlider");_2.require("dijit.form.VerticalSlider");_2.require("dijit.form.HorizontalRule");_2.require("dijit.form.VerticalRule");_2.require("dijit.form.HorizontalRuleLabels");_2.require("dijit.form.VerticalRuleLabels");_2.declare("esri.Map",esri._MapContainer,(function(){var _1b=30,_1c=100,_1d=30,_1e=10,_1f=1,_20=-1,_21=_2.mouseButtons.LEFT,_22={up:"panUp",right:"panRight",down:"panDown",left:"panLeft"},_23={upperRight:"panUpperRight",lowerRight:"panLowerRight",lowerLeft:"panLowerLeft",upperLeft:"panUpperLeft"};var dc=_2.connect,ddc=_2.disconnect,dcr=_2.create,ds=_2.style,dh=_2.hitch,abs=Math.abs,_24=_2.coords,_25=_2.deprecated,dk=_2.keys,_26=_2.mixin,_27=esri.geometry.Rect,_28=esri.geometry.Point,_29=esri.geometry.Extent;var _2a=[dk.NUMPAD_PLUS,61,dk.NUMPAD_MINUS,dk.UP_ARROW,dk.NUMPAD_8,dk.RIGHT_ARROW,dk.NUMPAD_6,dk.DOWN_ARROW,dk.NUMPAD_2,dk.LEFT_ARROW,dk.NUMPAD_4,dk.PAGE_UP,dk.NUMPAD_9,dk.PAGE_DOWN,dk.NUMPAD_3,dk.END,dk.NUMPAD_1,dk.HOME,dk.NUMPAD_7];return {constructor:function(_2b,_2c){_26(this,{_dragOrigin:null,_slider:null,_navDiv:null,_zoomRect:null,_mapParams:_26({attributionWidth:0.45,slider:true,nav:false,logo:true,sliderStyle:"default"},_2c||{}),_zoom:0,_keyboardPanDx:0,_keyboardPanDy:0});_26(this,{_onLoadHandler_connect:null,_panHandler_connect:null,_panStartHandler_connect:null,_upPanHandler_connect:null,_dblClickZoomHandler_connect:null,_recenterZoomHandler_connect:null,_recenterHandler_connect:null,_downPanHandler_connect:null,_downZoomHandler_connect:null,_keyNavigatingHandler_connect:null,_keyNavigationEndHandler_connect:null,_scrollZoomHandler_connect:null,_zoomHandler_connect:null,_upZoomHandler_connect:null});_26(this,{isDoubleClickZoom:false,isShiftDoubleClickZoom:false,isClickRecenter:false,isScrollWheelZoom:false,isPan:false,isRubberBandZoom:false,isKeyboardNavigation:false,isPanArrows:false,isZoomSlider:false});if(_2.isFunction(esri._css)){esri._css=esri._css(this._mapParams.force3DTransforms);this.force3DTransforms=this._mapParams.force3DTransforms;}var _2d=(esri._hasTransforms&&esri._hasTransitions);this.navigationMode=this._mapParams.navigationMode||(_2d&&"css-transforms")||"classic";if(this.navigationMode==="css-transforms"&&!_2d){this.navigationMode="classic";}this.fadeOnZoom=esri._isDefined(this._mapParams.fadeOnZoom)?this._mapParams.fadeOnZoom:(this.navigationMode==="css-transforms");if(this.navigationMode!=="css-transforms"){this.fadeOnZoom=false;}this._zoomRect=new esri.Graphic(null,new esri.symbol.SimpleFillSymbol(esri.config.defaults.map.zoomSymbol));this.setMapCursor("default");this.smartNavigation=_2c&&_2c.smartNavigation;if(!esri._isDefined(this.smartNavigation)&&_2.isMac&&!esri.isTouchEnabled&&!(_2.isFF<=3.5)){var _2e=navigator.userAgent.match(/Mac\s+OS\s+X\s+([\d]+)(\.|\_)([\d]+)\D/i);if(_2e&&esri._isDefined(_2e[1])&&esri._isDefined(_2e[3])){var _2f=parseInt(_2e[1],10),_30=parseInt(_2e[3],10);this.smartNavigation=((_2f>10)||(_2f===10&&_30>=6));}}var _31=true;this.showAttribution=esri._isDefined(this._mapParams.showAttribution)?this._mapParams.showAttribution:_31;this._onLoadHandler_connect=dc(this,"onLoad",this,"_onLoadInitNavsHandler");var _32=dcr("div",{"class":"esriControlsBR"+(this._mapParams.nav?" withPanArrows":"")},this.root),_33;if(this.showAttribution){if(_2.getObject("esri.dijit.Attribution",false)){_33=dcr("span",{"class":"esriAttribution"},_32);_2.style(_33,"width",Math.floor(this.width*this._mapParams.attributionWidth)+"px");this._connects.push(dc(_33,"onclick",function(){var _34="esriAttributionOpen";if(_2.hasClass(this,_34)){_2.removeClass(this,_34);}else{if(this.scrollWidth>this.clientWidth){_2.addClass(this,_34);}}}));this.attribution=new esri.dijit.Attribution({map:this},_33);}else{console.log("Unable to show map attribution. Did you forget to require 'esri.dijit.Attribution'?");}}if(this._mapParams.logo){var _35={};if(_2.isIE===6){_35.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true', sizingMethod='crop', src='"+_2.moduleUrl("esri")+"../../images/map/logo-med.png"+"')";}var _36=this._ogol=dcr("div",{style:_35},_32);if((this.root.clientWidth*this.root.clientHeight)<250000){_2.addClass(_36,"logo-sm");}else{_2.addClass(_36,"logo-med");}if(!esri.isTouchEnabled){this._ogol_connect=dc(_36,"onclick",this,"_openLogoLink");}}if(esri.isTouchEnabled){this._panInitEvent="onTouchStart";this._zoomInitEvent="onGestureStart";}else{this._panInitEvent="onMouseDown";this._zoomInitEvent="onMouseDown";}},_cleanUp:function(){this.disableMapNavigation();var i;for(i=this._connects.length;i>=0;i--){ddc(this._connects[i]);delete this._connects[i];}ddc(this._slider_connect);ddc(this._ogol_connect);var _37=this._slider;if(_37&&_37.destroy&&!_37._destroyed){_37.destroy();}var _38=this._navDiv,_39=this.attribution;if(_38){_2.destroy(_38);}if(_39){_39.destroy();}this.attribution=null;this.inherited("_cleanUp",arguments);},_normalizeRect:function(evt){var xy=evt.screenPoint,dx=this._dragOrigin.x,dy=this._dragOrigin.y,_3a=new _27((xy.x<dx?xy.x:dx)-this.__visibleRect.x,(xy.y<dy?xy.y:dy)-this.__visibleRect.y,abs(xy.x-dx),abs(xy.y-dy));if(_3a.width===0){_3a.width=1;}if(_3a.height===0){_3a.height=1;}return _3a;},_downZoomHandler:function(evt){if(evt.button===_21&&evt.shiftKey&&this.isRubberBandZoom){this._dragOrigin=_26({},evt.screenPoint);this.setCursor("crosshair");this._zoomHandler_connect=dc(this,"onMouseDrag",this,"_zoomHandler");this._upZoomHandler_connect=dc(this,"onMouseUp",this,"_upZoomHandler");if(evt.ctrlKey){this._zoom=_20;}else{this._zoom=_1f;}if(_2.isChrome){evt.preventDefault();}}},_zoomHandler:function(evt){var _3b=this._normalizeRect(evt).offset(this.__visibleRect.x,this.__visibleRect.y),g=this.graphics,_3c=this._zoomRect;if(!_3c.geometry){this.setCursor("crosshair");}if(_3c.geometry){g.remove(_3c,true);}var tl=this.toMap(new _28(_3b.x,_3b.y)),br=this.toMap(new _28(_3b.x+_3b.width,_3b.y+_3b.height));_3b=new _27(tl.x,tl.y,br.x-tl.x,tl.y-br.y);_3b._originOnly=true;_3c.setGeometry(_3b);g.add(_3c,true);},_upZoomHandler:function(evt){var _3d=this._zoomRect;ddc(this._zoomHandler_connect);ddc(this._upZoomHandler_connect);if(this._canZoom(this._zoom)&&_3d.getDojoShape()){this.graphics.remove(_3d);_3d.geometry=null;var _3e=this._normalizeRect(evt);_3e.x+=this.__visibleRect.x;_3e.y+=this.__visibleRect.y;var _3f;if(this._zoom===_20){var _40=this.extent.getWidth(),_41=(_40*this.width)/_3e.width,_42=(_41-_40)/2,ext=this.extent;_3f=new _29(ext.xmin-_42,ext.ymin-_42,ext.xmax+_42,ext.ymax+_42,this.spatialReference);}else{var min=this.toMap({x:_3e.x,y:(_3e.y+_3e.height)}),max=this.toMap({x:(_3e.x+_3e.width),y:_3e.y});_3f=new _29(min.x,min.y,max.x,max.y,this.spatialReference);}this._extentUtil(null,null,_3f);}if(_3d.getDojoShape()){this.graphics.remove(_3d,true);}this._zoom=0;this.resetMapCursor();},_downPanHandler:function(evt){if(evt.button===_21&&!evt.shiftKey&&this.isPan){this._dragOrigin=new _28(0,0);_26(this._dragOrigin,evt.screenPoint);this._panHandler_connect=dc(this,"onMouseDrag",this,"_panHandler");this._panStartHandler_connect=dc(this,"onMouseDragStart",this,"_panStartHandler");this._upPanHandler_connect=dc(this,"onMouseUp",this,"_upPanHandler");if(_2.isChrome){evt.preventDefault();}}},_panStartHandler:function(evt){this.setCursor("move");this.__panStart(evt.screenPoint.x,evt.screenPoint.y);},_panHandler:function(evt){this.__pan(evt.screenPoint.x-this._dragOrigin.x,evt.screenPoint.y-this._dragOrigin.y);},_upPanHandler:function(evt){ddc(this._panHandler_connect);ddc(this._panStartHandler_connect);ddc(this._upPanHandler_connect);if(this.__panning){this.__panEnd(evt.screenPoint.x-this._dragOrigin.x,evt.screenPoint.y-this._dragOrigin.y);this.resetMapCursor();}},_isPanningOrZooming:function(){return this.__panning||this.__zooming;},_recenterHandler:function(evt){if(evt.shiftKey&&!this._isPanningOrZooming()){this.centerAt(evt.mapPoint);}},_recenterZoomHandler:function(evt){if(evt.shiftKey&&!this._isPanningOrZooming()){evt.value=evt.ctrlKey?-1:1;this._scrollZoomHandler(evt,true);}},_dblClickZoomHandler:function(evt){if(!this._isPanningOrZooming()){evt.value=1;this._scrollZoomHandler(evt,true);}},_canZoom:function(_43){if(!this.__tileInfo){return true;}var _44=this.getLevel(),_45=this.getNumLevels();if((_44===0&&_43<0)||(_44===_45-1&&_43>0)){return false;}return true;},_scrollZoomHandler:function(evt,_46){if(!_46){if(this.smartNavigation&&!evt.shiftKey&&!this._isPanningOrZooming()){this.disableScrollWheelZoom();this._setScrollWheelPan(true);this._scrollPanHandler(evt);return;}var _47=evt.timeStamp;if(!esri._isDefined(_47)||_47<=0){_47=(new Date()).getTime();}var _48=this._ts?(_47-this._ts):_47;if(_48<_1c){return;}this._ts=_47;}if(!this._canZoom(evt.value)){return;}this._extentUtil({numLevels:evt.value,mapAnchor:evt.mapPoint,screenAnchor:evt.screenPoint});},_scrollPanHandler:function(evt){if(evt.shiftKey&&!this._isPanningOrZooming()){this._setScrollWheelPan(false);this.enableScrollWheelZoom();this._scrollZoomHandler(evt);return;}var dx=0,dy=0;if(_2.isFF){if(evt.axis===evt.HORIZONTAL_AXIS){dx=-evt.detail;}else{dy=-evt.detail;}}else{dx=evt.wheelDeltaX;dy=evt.wheelDeltaY;}this.translate(dx,dy);},_keyNavigatingHandler:function(evt){var kc=evt.keyCode;if(_2.indexOf(_2a,kc)!==-1){if(kc===dk.NUMPAD_PLUS||kc===61){this._extentUtil({numLevels:1});}else{if(kc===dk.NUMPAD_MINUS){this._extentUtil({numLevels:-1});}else{if(!this.__panning){this.__panStart(0,0);}switch(kc){case dk.UP_ARROW:case dk.NUMPAD_8:this._keyboardPanDy+=_1e;break;case dk.RIGHT_ARROW:case dk.NUMPAD_6:this._keyboardPanDx-=_1e;break;case dk.DOWN_ARROW:case dk.NUMPAD_2:this._keyboardPanDy-=_1e;break;case dk.LEFT_ARROW:case dk.NUMPAD_4:this._keyboardPanDx+=_1e;break;case dk.PAGE_UP:case dk.NUMPAD_9:this._keyboardPanDx-=_1e;this._keyboardPanDy+=_1e;break;case dk.PAGE_DOWN:case dk.NUMPAD_3:this._keyboardPanDx-=_1e;this._keyboardPanDy-=_1e;break;case dk.END:case dk.NUMPAD_1:this._keyboardPanDx+=_1e;this._keyboardPanDy-=_1e;break;case dk.HOME:case dk.NUMPAD_7:this._keyboardPanDx+=_1e;this._keyboardPanDy+=_1e;break;default:return;}this.__pan(this._keyboardPanDx,this._keyboardPanDy);}}_2.stopEvent(evt);}},_keyNavigationEndHandler:function(evt){if(this.__panning&&(evt.keyCode!==dk.SHIFT)){this.__panEnd(this._keyboardPanDx,this._keyboardPanDy);this._keyboardPanDx=this._keyboardPanDy=0;}},_onLoadInitNavsHandler:function(){this.enableMapNavigation();this._createNav();if(this._mapParams.sliderStyle==="small"||!this._createSlider){this._createSimpleSlider();}else{this._createSlider();}ddc(this._onLoadHandler_connect);},_createNav:function(){if(this._mapParams.nav){var div,v,i,_49=_2.addClass,id=this.id;this._navDiv=dcr("div",{id:id+"_navdiv"},this.root);_49(this._navDiv,"navDiv");var w2=this.width/2,h2=this.height/2,wh;for(i in _22){v=_22[i];div=dcr("div",{id:id+"_pan_"+i},this._navDiv);_49(div,"fixedPan "+v);if(i==="up"||i==="down"){wh=parseInt(_24(div).w,10)/2;ds(div,{left:(w2-wh)+"px",zIndex:_1b});}else{wh=parseInt(_24(div).h,10)/2;ds(div,{top:(h2-wh)+"px",zIndex:_1b});}this._connects.push(dc(div,"onclick",dh(this,this[v])));}this._onMapResizeNavHandler_connect=dc(this,"onResize",this,"_onMapResizeNavHandler");for(i in _23){v=_23[i];div=dcr("div",{id:id+"_pan_"+i,style:{zIndex:_1b}},this._navDiv);_49(div,"fixedPan "+v);this._connects.push(dc(div,"onclick",dh(this,this[v])));}this.isPanArrows=true;}},_onMapResizeNavHandler:function(_4a,wd,ht){var id=this.id,w2=wd/2,h2=ht/2,_4b=_2.byId,i,div,wh;for(i in _22){div=_4b(id+"_pan_"+i);if(i==="up"||i==="down"){wh=parseInt(_24(div).w,10)/2;ds(div,"left",(w2-wh)+"px");}else{wh=parseInt(_24(div).h,10)/2;ds(div,"top",(h2-wh)+"px");}}},_createSimpleSlider:function(){if(this._mapParams.slider){var _4c=(this._slider=dcr("div",{id:this.id+"_zoom_slider","class":"esriSimpleSlider",style:"z-index: "+_1d+";"}));_2.addClass(_4c,esri.config.defaults.map.slider.width?"esriSimpleSliderHorizontal":"esriSimpleSliderVertical");var _4d=dcr("div",{"class":"esriSimpleSliderIncrementButton"},_4c);_4d.innerHTML="+";var _4e=dcr("div",{"class":"esriSimpleSliderDecrementButton"},_4c);_4e.innerHTML="-";if(_2.isIE<8){_2.addClass(_4e,"dj_ie67Fix");}this._connects.push(dc(_4d,"onclick",this,this._simpleSliderChangeHandler));this._connects.push(dc(_4e,"onclick",this,this._simpleSliderChangeHandler));this.root.appendChild(_4c);this.isZoomSlider=true;}},_simpleSliderChangeHandler:function(evt){var _4f=(evt.currentTarget.className.indexOf("IncrementButton")!==-1)?true:false;this._extentUtil({numLevels:_4f?1:-1});},_createSlider:function(){if(this._mapParams.slider){var div=dcr("div",{id:this.id+"_zoom_slider"},this.root),_50=esri.config.defaults.map,_51=_50.slider.width,_52=_51?_1.form.HorizontalSlider:_1.form.VerticalSlider,_53=_2.toJson(_26({position:"absolute"},_50.slider)),_54=this.getNumLevels(),_55=_1.form,i,il,_56;_53=_53.substring(1,_53.length-1).split("\"").join("").split(",").join(";");if(_54>0){var _57,_58,_59,_5a,_5b,_5c=_50.sliderLabel;if(_5c){var _5d=_51?_55.HorizontalRule:_55.VerticalRule,_5e=_51?_55.HorizontalRuleLabels:_55.VerticalRuleLabels,_5f=_51?"topDecoration":"rightDecoration",_60=_51?"height:"+_5c.tick+"px":"width:"+_5c.tick+"px";_5b=_5c.labels;if(_5b===null){_5b=[];for(i=0,il=_54;i<il;i++){_5b[i]="";}}_57=dcr("div");div.appendChild(_57);_58=new _5d({container:_5f,count:_54,style:_60},_57);_59=dcr("div");div.appendChild(_59);_5a=new _5e({container:_5f,count:_54,labels:_5b,style:_5c.style},_59);_57=_59=null;}_56=(this._slider=new _52({id:div.id,minimum:0,maximum:_54-1,discreteValues:_54,value:this.getLevel(),clickSelect:true,intermediateChanges:true,style:_53+"; z-index:"+_1d+";"},div));_56.startup();if(_5c){_58.startup();_5a.startup();}this._slider_connect=dc(_56,"onChange",this,"_onSliderChangeHandler");this._connects.push(dc(this,"onExtentChange",this,"_onExtentChangeSliderHandler"));this._connects.push(dc(_56._movable,"onFirstMove",this,"_onSliderMoveStartHandler"));}else{_56=(this._slider=new _52({id:div.id,minimum:0,maximum:2,discreteValues:3,value:1,clickSelect:true,intermediateChanges:_50.sliderChangeImmediate,style:_53+" height:100px; z-index:"+_1d+";"},div));var _61=_56.domNode.firstChild.childNodes;for(i=1;i<=3;i++){ds(_61[i],"visibility","hidden");}_56.startup();this._slider_connect=dc(_56,"onChange",this,"_onDynSliderChangeHandler");this._connects.push(dc(this,"onExtentChange",this,"_onExtentChangeDynSliderHandler"));}var _62=_56.incrementButton,_63=_56.decrementButton;_62.style.outline="none";_63.style.outline="none";_56.sliderHandle.style.outline="none";_56._onKeyPress=function(){};var _64=_56._movable;if(_64){var _65=_64.onMouseDown;_64.onMouseDown=function(e){if(_2.isIE<9&&e.button!==1){return;}_65.apply(this,arguments);};}this.isZoomSlider=true;}},_onSliderMoveStartHandler:function(){ddc(this._slider_connect);ddc(this._slidermovestop_connect);this._slider_connect=dc(this._slider,"onChange",this,"_onSliderChangeDragHandler");this._slidermovestop_connect=dc(this._slider._movable,"onMoveStop",this,"_onSliderMoveEndHandler");},_onSliderChangeDragHandler:function(_66){this._extentUtil({targetLevel:_66});},_onSliderMoveEndHandler:function(){ddc(this._slider_connect);ddc(this._slidermovestop_connect);},_onSliderChangeHandler:function(_67){this.setLevel(_67);},_updateSliderValue:function(_68,_69){ddc(this._slider_connect);var _6a=this._slider;var _6b=_6a._onChangeActive;_6a._onChangeActive=false;_6a.set("value",_68);_6a._onChangeActive=_6b;this._slider_connect=dc(_6a,"onChange",this,_69);},_onExtentChangeSliderHandler:function(_6c,_6d,_6e,lod){ddc(this._slidermovestop_connect);this._updateSliderValue(lod.level,"_onSliderChangeHandler");},_onDynSliderChangeHandler:function(_6f){this._extentUtil({numLevels:_6f>0?1:-1});},_onExtentChangeDynSliderHandler:function(){this._updateSliderValue(1,"_onDynSliderChangeHandler");},_openLogoLink:function(evt){window.open(esri.config.defaults.map.logoLink,"_blank");_2.stopEvent(evt);},enableMapNavigation:function(){this.enableDoubleClickZoom();this.enableClickRecenter();this.enablePan();this.enableRubberBandZoom();this.enableKeyboardNavigation();if(this.smartNavigation){this._setScrollWheelPan(true);}else{this.enableScrollWheelZoom();}},disableMapNavigation:function(){this.disableDoubleClickZoom();this.disableClickRecenter();this.disablePan();this.disableRubberBandZoom();this.disableKeyboardNavigation();this.disableScrollWheelZoom();if(this.smartNavigation){this._setScrollWheelPan(false);}},enableDoubleClickZoom:function(){if(!this.isDoubleClickZoom){this._dblClickZoomHandler_connect=dc(this,"onDblClick",this,"_dblClickZoomHandler");this.isDoubleClickZoom=true;}},disableDoubleClickZoom:function(){if(this.isDoubleClickZoom){ddc(this._dblClickZoomHandler_connect);this.isDoubleClickZoom=false;}},enableShiftDoubleClickZoom:function(){if(!this.isShiftDoubleClickZoom){_25(this.declaredClass+": "+esri.bundle.map.deprecateShiftDblClickZoom,null,"v2.0");this._recenterZoomHandler_connect=dc(this,"onDblClick",this,"_recenterZoomHandler");this.isShiftDoubleClickZoom=true;}},disableShiftDoubleClickZoom:function(){if(this.isShiftDoubleClickZoom){_25(this.declaredClass+": "+esri.bundle.map.deprecateShiftDblClickZoom,null,"v2.0");ddc(this._recenterZoomHandler_connect);this.isShiftDoubleClickZoom=false;}},enableClickRecenter:function(){if(!this.isClickRecenter){this._recenterHandler_connect=dc(this,"onClick",this,"_recenterHandler");this.isClickRecenter=true;}},disableClickRecenter:function(){if(this.isClickRecenter){ddc(this._recenterHandler_connect);this.isClickRecenter=false;}},enablePan:function(){if(!this.isPan){this._downPanHandler_connect=dc(this,this._panInitEvent,this,"_downPanHandler");this.isPan=true;}},disablePan:function(){if(this.isPan){ddc(this._downPanHandler_connect);this.isPan=false;}},enableRubberBandZoom:function(){if(!this.isRubberBandZoom){this._downZoomHandler_connect=dc(this,this._zoomInitEvent,this,"_downZoomHandler");this.isRubberBandZoom=true;}},disableRubberBandZoom:function(){if(this.isRubberBandZoom){ddc(this._downZoomHandler_connect);this.isRubberBandZoom=false;}},enableKeyboardNavigation:function(){if(!this.isKeyboardNavigation){this._keyNavigatingHandler_connect=dc(this,"onKeyDown",this,"_keyNavigatingHandler");this._keyNavigationEndHandler_connect=dc(this,"onKeyUp",this,"_keyNavigationEndHandler");this.isKeyboardNavigation=true;}},disableKeyboardNavigation:function(){if(this.isKeyboardNavigation){ddc(this._keyNavigatingHandler_connect);ddc(this._keyNavigationEndHandler_connect);this.isKeyboardNavigation=false;}},enableScrollWheelZoom:function(){if(!this.isScrollWheelZoom){this._scrollZoomHandler_connect=dc(this,"onMouseWheel",this,"_scrollZoomHandler");this.isScrollWheelZoom=true;}},__canStopSWEvt:function(){return this.isScrollWheelZoom||this.isScrollWheelPan;},disableScrollWheelZoom:function(){if(this.isScrollWheelZoom){ddc(this._scrollZoomHandler_connect);this.isScrollWheelZoom=false;}},_setScrollWheelPan:function(_70){this.isScrollWheelPan=_70;this.enableMouseWheel(_70);ddc(this._mwMacHandle);if(_70){this._mwMacHandle=dc(this,"onMouseWheel",this,this._scrollPanHandler);}},showPanArrows:function(){if(this._navDiv){esri.show(this._navDiv);this.isPanArrows=true;}},hidePanArrows:function(){if(this._navDiv){esri.hide(this._navDiv);this.isPanArrows=false;}},showZoomSlider:function(){if(this._slider){ds(this._slider.domNode||this._slider,"visibility","visible");this.isZoomSlider=true;}},hideZoomSlider:function(){if(this._slider){ds(this._slider.domNode||this._slider,"visibility","hidden");this.isZoomSlider=false;}}};}()));_2.require("esri.layers.agsdynamic");_2.require("esri.layers.agstiled");_2.require("esri.layers.agsimageservice");if(esri.isTouchEnabled){_2.extend(esri.Map,(function(){var dc=_2.connect,ddc=_2.disconnect,_71=esri.geometry.Point,_72=esri.geometry.getLength,_73=esri.TileUtils.getCandidateTileInfo;return {_multiTouchTapZoomHandler:function(evt){if(!this._isPanningOrZooming()){evt.value=-1;this._scrollZoomHandler(evt,true);}},_downPanHandler:function(evt){var _74=this._zoomAnim||this._panAnim;if(_74&&_74._active){_74.stop();_74._fire("onEnd",[_74.node]);}this._dragOrigin=new _71(0,0);_2.mixin(this._dragOrigin,evt.screenPoint);ddc(this._panHandler_connect);ddc(this._upPanHandler_connect);this._panHandler_connect=dc(this,"onTouchMove",this,this._panHandler);this._upPanHandler_connect=dc(this,"onTouchEnd",this,this._upPanHandler);},_panHandler:function(evt){evt.preventDefault();if(this.__panning){this._panX=evt.screenPoint.x;this._panY=evt.screenPoint.y;this.__pan(evt.screenPoint.x-this._dragOrigin.x,evt.screenPoint.y-this._dragOrigin.y);}else{this.setCursor("move");this.__panStart(evt.screenPoint.x,evt.screenPoint.y);}},_upPanHandler:function(evt){ddc(this._panHandler_connect);ddc(this._upPanHandler_connect);if(this.__panning){this.__panEnd(evt.screenPoint.x-this._dragOrigin.x,evt.screenPoint.y-this._dragOrigin.y);this.resetMapCursor();}},_downZoomHandler:function(evt){var _75=this._zoomAnim||this._panAnim;if(_75&&_75._active){_75.stop();_75._fire("onEnd",[_75.node]);}else{if(this.__panning){evt.screenPoint=new _71(this._panX,this._panY);evt.mapPoint=this.toMap(evt.screenPoint);this._upPanHandler(evt);}}ddc(this._zoomHandler_connect);ddc(this._upZoomHandler_connect);this._zoomHandler_connect=dc(this,"onGestureChange",this,this._zoomHandler);this._upZoomHandler_connect=dc(this,"onGestureEnd",this,this._upZoomHandler);},_zoomHandler:function(evt){if(evt.screenPoints){evt.preventDefault();this.currLength=_72(evt.screenPoints[0],evt.screenPoints[1]);if(this.__zooming){var _76=this.currLength/this._length;this._zoomStartExtent=this.__scaleExtent(this.extent,_76,this._dragOrigin);this.__zoom(this._zoomStartExtent,_76,this._dragOrigin);}else{this._dragOrigin=new _71((evt.screenPoints[0].x+evt.screenPoints[1].x)/2,(evt.screenPoints[0].y+evt.screenPoints[1].y)/2);this._length=this.currLength;this.__zoomStart(this.extent,this._dragOrigin);}this._fireOnScale(this.currLength/this._length,this._dragOrigin,true);}},_upZoomHandler:function(evt){ddc(this._zoomHandler_connect);ddc(this._upZoomHandler_connect);if(evt.processMultiTouchTap){this._multiTouchTapZoomHandler(evt);evt.preventDefault();}else{if(this.__zooming&&this._zoomAnim===null){var _77=this.currLength/this._length,_78=this.extent.getWidth();this._zoomAnimAnchor=this.toMap(this._dragOrigin);this._zoomStartExtent=this.__scaleExtent(this.extent,1/_77,this._zoomAnimAnchor);if(this.__tileInfo){var ct=_73(this,this.__tileInfo,this._zoomStartExtent),_79=this.__getExtentForLevel(ct.lod.level,this._zoomAnimAnchor),_7a=this.getNumLevels()-1,_7b=_79.extent,_7c=_79.lod,_7d=_78/_7b.getWidth(),_7e=ct.lod.level;if(_77<1){if(_7d>_77){_7e--;}}else{if(_7d<_77){_7e++;}}if(_7e<0){_7e=0;}else{if(_7e>_7a){_7e=_7a;}}if(_7e!==ct.lod.level){_79=this.__getExtentForLevel(_7e,this._zoomAnimAnchor);_7b=_79.extent;_7c=_79.lod;}this._zoomEndExtent=_7b;this._zoomEndLod=_7c;this._zoomAnim=esri.fx.animateRange({range:{start:(_78/this._zoomStartExtent.getWidth()),end:_7d},duration:esri.config.defaults.map.zoomDuration,rate:esri.config.defaults.map.zoomRate,onAnimate:_2.hitch(this,"_adjustZoomHandler"),onEnd:_2.hitch(this,"_adjustZoomEndHandler")}).play();this._fireOnScale(this.extent.getWidth()/this._zoomEndExtent.getWidth(),this._dragOrigin);}else{this._zoomEndExtent=this._zoomStartExtent;this._fireOnScale(this.extent.getWidth()/this._zoomEndExtent.getWidth(),this._dragOrigin);this._adjustZoomEndHandler();}}}},_adjustZoomHandler:function(_7f){var _80=this.__scaleExtent(this.extent,_7f,this._zoomAnimAnchor);this.__zoom(_80,_7f,this._dragOrigin);},_adjustZoomEndHandler:function(){var _81=this.extent.getWidth()/this._zoomEndExtent.getWidth(),_82=this.__scaleExtent(this.extent,1/_81,this._zoomAnimAnchor);this.__zoomEnd(_82,_81,this._dragOrigin,this._zoomEndLod,true);this._zoomStartExtent=this._zoomEndExtent=this._zoomEndLod=this._dragOrigin=this._zoomAnim=this._zoomAnimAnchor=null;}};}()));}});