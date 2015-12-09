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
define(["dijit","dojo","dojox","dojo/require!esri/InfoWindowBase,esri/PopupBase,esri/dijit/NavigationBar,esri/dijit/InfoView,dojo/number,dojo/date/locale,dojox/charting/Chart2D,dojox/charting/themes/PlotKit/base,dojox/charting/action2d/Tooltip,dojo/i18n"],function(_1,_2,_3){_2.provide("esri.dijit.PopupMobile");_2.require("esri.InfoWindowBase");_2.require("esri.PopupBase");_2.require("esri.dijit.NavigationBar");_2.require("esri.dijit.InfoView");_2.require("dojo.number");_2.require("dojo.date.locale");_2.require("dojox.charting.Chart2D");_2.require("dojox.charting.themes.PlotKit.base");_2.require("dojox.charting.action2d.Tooltip");_2.require("dojo.i18n");(function(){var dc=_3.charting,pk=dc.themes.PlotKit;pk.popup=pk.base.clone();pk.popup.chart.fill=pk.popup.plotarea.fill="#e7eef6";pk.popup.colors=["#284B70","#702828","#5F7143","#F6BC0C","#382C6C","#50224F","#1D7554","#4C4C4C","#0271AE","#706E41","#446A73","#0C3E69","#757575","#B7B7B7","#A3A3A3"];pk.popup.series.stroke.width=1;pk.popup.marker.stroke.width=1;}());_2.declare("esri.dijit.PopupMobile",[esri.InfoWindowBase,esri.PopupBase],{offsetX:3,offsetY:3,zoomFactor:4,marginLeft:10,marginTop:10,highlight:true,popupNavigationBar:null,popupInfoView:null,location:null,xIcon:_2.moduleUrl("esri.dijit","./images/whitex.png"),dArrowIcon:_2.moduleUrl("esri.dijit","./images/whitedown.png"),lArrowIcon:_2.moduleUrl("esri.dijit","./images/whitel.png"),rArrowIcon:_2.moduleUrl("esri.dijit","./images/whiter.png"),constructor:function(_4,_5){this.initialize();_2.mixin(this,_4);this.domNode=_2.byId(_5);var _6=this._nls=_2.mixin({},esri.bundle.widgets.popup);var _7=this.domNode;_2.addClass(_7,"esriPopupMobile");var _8="<div class='sizer'>"+"<div class='titlePane'>"+"<div class='spinner hidden'>"+"</div>"+"<div class='title'></div>"+"<div style='text-align:center'>"+"<div class='titleButton prev hidden'></div>"+"<div class='footer' style='display:inline-block;width:60px;height:15px;'></div>"+"<div class='titleButton next hidden'></div>"+"</div>"+"<div class='titleButton close'></div>"+"<div class='titleButton arrow hidden'></div>"+"</div>"+"</div>"+"<div class='pointer top hidden'></div>"+"<div class='pointer bottom hidden'></div>";_2.attr(_7,"innerHTML",_8);var _9=_2.query(".titlePane",_7)[0];this._arrowButton=_2.query(".arrow",_9)[0];this._pointerTop=_2.query(".top",_7)[0];this._pointerBottom=_2.query(".bottom",_7)[0];this._title=_2.query(".title",_9)[0];this._footer=_2.query(".footer",_9)[0];this._prev=_2.query(".prev",_9)[0];this._next=_2.query(".next",_9)[0];this._spinner=_2.query(".spinner",_9)[0];this._eventConnections=[_2.connect(_2.query(".close",_9)[0],"onclick",this,this.hide),_2.connect(this._arrowButton,"onclick",this,this._toggleView),_2.connect(this._prev,"onclick",this,function(){this.selectPrevious();this._updateUI();}),_2.connect(this._next,"onclick",this,function(){this.selectNext();this._updateUI();})];this._initPopupNavigationBar();this._initPopupInfoView();esri.hide(_7);this.isShowing=false;},setMap:function(_a){this.inherited(arguments);_2.place(this.domNode,_a.root);if(this.highlight){this.enableHighlight(_a);}},unsetMap:function(){this.disableHighlight(this.map);this.inherited(arguments);},setTitle:function(_b,_c){this.destroyDijits(this._title);this.place(_b,this._title);this.destroyDijits(this._footer);this.place(_c,this._footer);if(this.isShowing){this.startupDijits(this._title);this.startupDijits(this._footer);}},setContent:function(_d){this.destroyDijits(this._contentPane);this.place(_d,this._contentPane);this.startupDijits(this._contentPane);},show:function(_e){if(!_e){esri.show(this.domNode);this.isShowing=true;return;}var _f=this.map,_10;if(_e.spatialReference){this._location=_e;_10=_f.toScreen(_e);}else{this._location=_f.toMap(_e);_10=_e;}if(this._maximized){this.restore();}else{this._setPosition(_10);}if(!this.isShowing){esri.show(this.domNode);this.isShowing=true;this.onShow();}},hide:function(){if(this.isShowing){esri.hide(this.domNode);this.isShowing=false;this.onHide();}},onShow:function(){this._followMap();this.startupDijits(this._title);this.showHighlight();},onHide:function(){this._unfollowMap();this.hideHighlight();},destroy:function(){if(this.map){this.unsetMap();}this.cleanup();if(this.isShowing){this.hide();}this.destroyDijits(this._title);this.destroyDijits(this._footer);_2.forEach(this._eventConnections,_2.disconnect);_2.destroy(this.domNode);},selectNext:function(){this.select(this.selectedIndex+1);},selectPrevious:function(){this.select(this.selectedIndex-1);},setFeatures:function(){this.inherited(arguments);this._updateUI();},onSetFeatures:function(){},onClearFeatures:function(){this.setTitle("&nbsp;","&nbsp;");_2.addClass(this._arrowButton,"hidden");this._updateUI();this.hideHighlight();},onSelectionChange:function(){var ptr=this.selectedIndex;this._updateUI();if(ptr>=0){this.setContent(this.features[ptr].getContent());this.updateHighlight(this.map,this.features[ptr]);if(this.isShowing){this.showHighlight();}}},onDfdComplete:function(){this._updateUI();},_followMap:function(){this._unfollowMap();var map=this.map;this._handles=[_2.connect(map,"onPanStart",this,this._onPanStart),_2.connect(map,"onPan",this,this._onPan),_2.connect(map,"onZoomStart",this,this._onZoomStart),_2.connect(map,"onExtentChange",this,this._onExtentChange)];},_unfollowMap:function(){var _11=this._handles;if(_11){_2.forEach(_11,_2.disconnect,_2);this._handles=null;}},_onPanStart:function(){var _12=this.domNode.style;this._panOrigin={left:_12.left,top:_12.top,right:_12.right,bottom:_12.bottom};},_onPan:function(_13,_14){var _15=this._panOrigin,dx=_14.x,dy=_14.y,_16=_15.left,top=_15.top,_17=_15.right,_18=_15.bottom;if(_16){_16=(parseFloat(_16)+dx)+"px";}if(top){top=(parseFloat(top)+dy)+"px";}if(_17){_17=(parseFloat(_17)-dx)+"px";}if(_18){_18=(parseFloat(_18)-dy)+"px";}_2.style(this.domNode,{left:_16,top:top,right:_17,bottom:_18});},_onZoomStart:function(){esri.hide(this.domNode);},_onExtentChange:function(_19,_1a,_1b){if(_1b){esri.show(this.domNode);this.show(this._targetLocation||this._location);this._targetLocation=null;}},_setPosition:function(_1c){var _1d=_1c.x,_1e=_1c.y,_1f=_2.contentBox(this.map.container),_20=_1f.w,_21=_1f.h;var _22=0,_23=_1e+10,_24=118,_25=18,_26=_20-_25;if(_1d>_25&&_1d<_26){_22=_1d-130;if(_22<0){_22=0;}else{if(_22>_20-260){_22=_20-260;}}}else{if(_1d<=_25){_22=_1d-_25;}else{if(_1d>=_26){_22=(_20-260)+(_1d-_26);}}}if(_1d>118&&_1d<_20-130){_24=118;}else{if(_1d<=118){if(_1d>_25){_24=_1d-12;}else{if(_1d<=_25){_24=6;}}}else{if(_1d>=_20-130){if(_1d<_26){_24=118+_1d-(_20-130);}else{if(_1d>=_26){_24=118+(_26)-(_20-130);}}}}}if(_1e<=_21/2){_2.style(this.domNode,{left:_22+"px",top:_23+"px",bottom:null});_2.style(this._pointerTop,{left:_24+"px"});_2.addClass(this._pointerBottom,"hidden");_2.removeClass(this._pointerTop,"hidden");}else{_2.style(this.domNode,{left:_22+"px",top:_23-64+"px",bottom:null});_2.style(this._pointerBottom,{left:_24+"px"});_2.addClass(this._pointerTop,"hidden");_2.removeClass(this._pointerBottom,"hidden");}},_showPointer:function(_27){var _28=["topLeft","topRight","bottomRight","bottomLeft"];_2.forEach(_28,function(ptr){if(ptr===_27){_2.query(".pointer."+ptr,this.domNode).removeClass("hidden");}else{_2.query(".pointer."+ptr,this.domNode).addClass("hidden");}},this);},_toggleView:function(){if(!this.popupNavigationBar){this._initPopupNavigationBar();}if(!this.popupInfoView){this._initPopupInfoView();}this.hide();esri.show(this.popupNavigationBar.container);esri.show(this.popupInfoView.container);var _29="";if(this.selectedIndex>=0){_29=(this.selectedIndex+1)+" of "+this.features.length;this.setContent(this.features[this.selectedIndex].getContent());}},_handleNavigationBar:function(_2a){this.popupInfoView.animateTo(0);switch(_2a.name){case "CloseButton":esri.hide(this.popupNavigationBar.container);esri.hide(this.popupInfoView.container);this.hide();break;case "ToggleButton":esri.hide(this.popupNavigationBar.container);esri.hide(this.popupInfoView.container);this.show(this._location);break;case "PreviousButton":this.selectPrevious();this._updateUI();break;case "NextButton":this.selectNext();this._updateUI();break;}},_initPopupNavigationBar:function(){var _2b={};_2b.items=[{name:"CloseButton",type:"img",src:this.xIcon,srcAlt:this.xIcon,position:"left"},{name:"Title",type:"span",text:"",position:"center"},{name:"ToggleButton",type:"img",src:this.dArrowIcon,srcAlt:this.dArrowIcon,position:"right",toggleGroup:"toggle"},{name:"PreviousButton",type:"img",src:this.lArrowIcon,srcAlt:this.lArrowIcon,position:"right2",toggleGroup:"previous"},{name:"NextButton",type:"img",src:this.rArrowIcon,srcAlt:this.rArrowIcon,position:"right1",toggleGroup:"next"}];this.popupNavigationBar=new esri.dijit.NavigationBar(_2b,_2.create("div",{},_2.body()));_2.connect(this.popupNavigationBar,"onCreate",this,function(_2c){this._prevFeatureButton=_2c[3]._node;this._nextFeatureButton=_2c[4]._node;});_2.connect(this.popupNavigationBar,"onSelect",this,this._handleNavigationBar);_2.connect(this.popupNavigationBar,"onUnSelect",this,this._handleNavigationBar);this.popupNavigationBar.startup();esri.hide(this.popupNavigationBar.container);},_initPopupInfoView:function(){var _2d={items:[{name:"Navigator",type:"div",text:""},{name:"content",type:"div",text:""},{name:"attachment",type:"div",text:""}]};this.popupInfoView=new esri.dijit.InfoView(_2d,_2.create("div",{},_2.body()));_2.addClass(this.popupInfoView.container,"esriMobilePopupInfoView");this.popupInfoView.enableTouchScroll();_2.connect(this.popupInfoView,"onCreate",this,function(_2e){this._contentPane=_2e[1]._node;if(this.selectedIndex>=0){this.setContent(this.features[this.selectedIndex].getContent());}});_2.connect(this.popupInfoView,"onSwipeLeft",this,function(){});_2.connect(this.popupInfoView,"onSwipeRight",this,function(){});this.popupInfoView.startup();},_updateUI:function(){var _2f="&nbsp;",_30="&nbsp;",ptr=this.selectedIndex,_31=this.features,_32=this.deferreds,_33=this._prevFeatureButton.parentNode,_34=this._nextFeatureButton.parentNode,_35=this._spinner,_36=this._actionList,nls=this._nls;if(_31&&_31.length>=1){_2f=_31[ptr].getTitle();_30=(ptr+1)+" of "+_31.length;_2.removeClass(this._arrowButton,"hidden");if(ptr===0){_2.addClass(_33,"hidden");_2.addClass(this._prev,"hidden");}else{_2.removeClass(_33,"hidden");_2.removeClass(this._prev,"hidden");}if(ptr===_31.length-1){_2.addClass(_34,"hidden");_2.addClass(this._next,"hidden");}else{_2.removeClass(_34,"hidden");_2.removeClass(this._next,"hidden");}}else{_2.addClass(this._arrowButton,"hidden");_2.addClass(_33,"hidden");_2.addClass(_34,"hidden");_2.addClass(this._prev,"hidden");_2.addClass(this._next,"hidden");}this.setTitle(_2f,_30);this.popupNavigationBar.getItems()[1]._node.innerHTML=_30;if(_32&&_32.length){_2.removeClass(_35,"hidden");this.setTitle(nls.NLS_searching+"...","&nbsp;");}else{_2.addClass(_35,"hidden");if(!_31||!_31.length){this.setTitle("No Information","&nbsp;");}}}});});