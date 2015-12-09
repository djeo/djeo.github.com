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
define(["dijit","dojo","dojox","dojo/require!esri/geometry,esri/utils"],function(_1,_2,_3){_2.provide("esri.dijit.Attribution");_2.require("esri.geometry");_2.require("esri.utils");_2.declare("esri.dijit.Attribution",null,{itemDelimiter:" | ",listClass:"esriAttributionList",itemClass:"esriAttributionItem",lastItemClass:"esriAttributionLastItem",delimiterClass:"esriAttributionDelim",constructor:function(_4,_5){try{_2.mixin(this,_4);this._attributions={};this._pendingDfds={};this._activeLayers=[];this._sharedLayers=[];var _6=(this.domNode=_2.byId(_5)),_7=this.map,_8="<span class='"+this.listClass+"'></span>";if(_6){_2.attr(_6,"innerHTML",_8);this.listNode=_2.query(".esriAttributionList",_6)[0];this.itemNodes={};}this._eventConnections=[_2.connect(_7,"onLayerAdd",this,this._onLayerAdd),_2.connect(_7,"onLayerRemove",this,this._onLayerRemove),_2.connect(_7,"onLayerSuspend",this,this._onLayerSuspend),_2.connect(_7,"onLayerResume",this,this._onLayerResume),_2.connect(_7,"onExtentChange",this,this._onExtentChange)];if(_7.loaded){var _9=_7.layerIds.concat(_7.graphicsLayerIds),_a,i,_b=_9.length;for(i=0;i<_b;i++){_a=_7.getLayer(_9[i]);if(_a.loaded){this._onLayerAdd(_a);}}}}catch(err){}},startup:function(){},destroy:function(){_2.forEach(this._eventConnections,_2.disconnect);_2.destroy(this.listNode);this.map=this.domNode=this._eventConnections=this.listNode=this._attributions=this._pendingDfds=this.itemNodes=this._activeLayers=this._lastItem=this._sharedLayers=null;},_onLayerAdd:function(_c){try{var _d=this._attributions,_e=_c.id;if(esri._isDefined(_d[_e])||!_c.showAttribution){return;}if(_c.hasAttributionData){var _f=_c.getAttributionData();this._pendingDfds[_e]=1;_d[_e]=_f;_f.addBoth(_2.partial(this._onAttributionLoad,this,_c));}else{_d[_e]=_c.copyright||_c.copyrightText||"";if(_d[_e]){if(!_c.suspended){this._activeLayers.push(_e);}this._createNode(_e);}else{this._onLayerRemove(_c);}}}catch(err){}},_onAttributionLoad:function(_10,_11,_12){var _13=_10._attributions,_14=_10._pendingDfds,_15=_11.id;if(!_14||!_14[_15]){return;}delete _14[_15];if(!_12||_12 instanceof Error){_12="";}if(_12){_13[_15]=_10._createIndexByLevel(_12,_11.declaredClass.toLowerCase().indexOf("vetiledlayer")!==-1);}else{_13[_15]=_11.copyright||_11.copyrightText||"";}if(_13[_15]){if(!_11.suspended){_10._activeLayers.push(_15);}_10._createNode(_15);}else{_10._onLayerRemove(_11);}},_onLayerRemove:function(_16){try{var _17=_16.id,_18=this.itemNodes,idx,_19=-1;this._onLayerSuspend(_16);delete this._attributions[_17];delete this._pendingDfds[_17];idx=this._getGroupIndex(_17);if(idx!==-1){_19=_2.indexOf(this._sharedLayers[idx],_17);if(_19!==-1){this._sharedLayers[idx].splice(_19,1);if(this._sharedLayers[idx].length<=1){this._sharedLayers.splice(idx,1);}}}if(_18[_17]&&_19===-1){_2.destroy(_18[_17]);}delete _18[_17];this._updateLastItem();}catch(err){}},_onLayerSuspend:function(_1a){try{var _1b=_1a.id;if(this._attributions[_1b]){var idx=_2.indexOf(this._activeLayers,_1b),_1c=this.itemNodes[_1b];if(idx!==-1){this._activeLayers.splice(idx,1);}if(_1c){this._toggleItem(_1c,false,this._getGroupIndex(_1b));}}}catch(err){}},_onLayerResume:function(_1d){try{var _1e=_1d.id,_1f=this._attributions[_1e],_20=this.itemNodes[_1e];if(_1f){if(_2.indexOf(this._activeLayers,_1e)===-1){this._activeLayers.push(_1e);}if(_20){var _21=_2.isString(_1f)?_1f:this._getContributorsList(_1f,this.map.extent,this.map.getLevel());if(!_2.isString(_1f)){_2.attr(_20,"innerHTML",(_21?(_21+this._getDelimiter()):""));}if(_21){this._toggleItem(_20,true,this._getGroupIndex(_1e));}}}}catch(err){}},_onExtentChange:function(_22,_23,_24,lod){try{var _25=this._activeLayers,_26=this._attributions,_27=this.itemNodes,_28,_29,_2a,i,len=_25.length||0;for(i=0;i<len;i++){_29=_25[i];_2a=_26[_29];_28=_27[_29];if(_28&&!_2.isString(_2a)){var _2b=this._getContributorsList(_2a,_22,lod?lod.level:-1);_2.attr(_28,"innerHTML",(_2b?(_2b+this._getDelimiter()):""));this._toggleItem(_28,!!_2b,-1);}}}catch(err){}},_createNode:function(_2c){if(!this.domNode){return;}var _2d=this._checkShareInfo(_2c),_2e=_2d&&_2d.sharedWith,_2f=_2e&&this.itemNodes[_2e];var map=this.map,_30=this._attributions[_2c],_31,_32=(_2.isString(_30)?_30:this._getContributorsList(_30,map.extent,map.getLevel())),_33=(!!_32&&!map.getLayer(_2c).suspended);if(_2f){this.itemNodes[_2c]=_2f;this._toggleItem(_2f,_33,_2d.index);}else{_31=(this.itemNodes[_2c]=_2.create("span",{"class":this.itemClass,"innerHTML":_32?(_32+this._getDelimiter()):"","style":"display"+": "+(_33?"inline":"none")},this.listNode));if(_33){this._setLastItem(_31);}}},_checkShareInfo:function(_34){var _35=this._attributions,_36,i,_37=-1,_38=_35[_34],_39;if(_38&&_2.isString(_38)){for(i in _35){_36=_35[i];if(i!==_34&&_36&&_2.isString(_36)){if(_36.length===_38.length&&_36.toLowerCase()===_38.toLowerCase()){_39=i;break;}}}var _3a=this._sharedLayers,len=_3a.length,_3b;if(_39){for(i=0;i<len;i++){_3b=_3a[i];if(_2.indexOf(_3b,_39)!==-1){_37=i;_3b.push(_34);break;}}if(_37===-1){_37=_3a.push([_39,_34])-1;}}}return (_37>-1)?{index:_37,sharedWith:_39}:null;},_getGroupIndex:function(_3c){var _3d=this._sharedLayers,i,len=_3d.length,_3e=-1;for(i=0;i<len;i++){if(_2.indexOf(_3d[i],_3c)!==-1){_3e=i;break;}}return _3e;},_getDelimiter:function(){var _3f=this.itemDelimiter;return _3f?("<span class='"+this.delimiterClass+"'>"+_3f+"</span>"):"";},_toggleItem:function(_40,_41,_42){if(_42>-1&&!_41){var _43=this._sharedLayers[_42],i,len=_43.length,_44=this._activeLayers;for(i=0;i<len;i++){if(_2.indexOf(_44,_43[i])!==-1){return;}}}_2.style(_40,"display",(_41?"inline":"none"));this._updateLastItem();},_updateLastItem:function(){var _45=this.listNode.childNodes,i,len=_45.length,_46;if(len){for(i=len-1;i>=0;i--){_46=_45[i];if(_2.style(_46,"display")!=="none"){this._setLastItem(_46);break;}}}},_setLastItem:function(_47){var _48=this.itemClass,_49=this.lastItemClass;if(this._lastItem){_2.replaceClass(this._lastItem,_48,_49);}if(_47){_2.replaceClass(_47,_49,_48);this._lastItem=_47;}},_createIndexByLevel:function(_4a,_4b){var _4c=_4a.contributors,_4d,_4e,_4f,i,_50=_4c?_4c.length:0,j,_51,z,sr=new esri.SpatialReference(4326),_52={},_53,_54;for(i=0;i<_50;i++){_4d=_4c[i];_4e=_4d.coverageAreas;_51=_4e?_4e.length:0;for(j=0;j<_51;j++){_4f=_4e[j];_54=_4f.bbox;_53={extent:esri.geometry.geographicToWebMercator(new esri.geometry.Extent(_54[1],_54[0],_54[3],_54[2],sr)),attribution:_4d.attribution||"",zoomMin:_4f.zoomMin-((_4b&&_4f.zoomMin)?1:0),zoomMax:_4f.zoomMax-((_4b&&_4f.zoomMax)?1:0),score:esri._isDefined(_4f.score)?_4f.score:100,objectId:i};for(z=_53.zoomMin;z<=_53.zoomMax;z++){_52[z]=_52[z]||[];_52[z].push(_53);}}}return _52;},_getContributorsList:function(_55,_56,_57){var _58="";if(_56&&esri._isDefined(_57)&&_57>-1){var _59=_55[_57],_5a,_5b=_56.getCenter().normalize(),i,_5c=_59?_59.length:0,_5d=[],_5e={};for(i=0;i<_5c;i++){_5a=_59[i];if(!_5e[_5a.objectId]&&_5a.extent.contains(_5b)){_5e[_5a.objectId]=1;_5d.push(_5a);}}_5d.sort(function(a,b){return b.score-a.score;});_5c=_5d.length;for(i=0;i<_5c;i++){_5d[i]=_5d[i].attribution;}_58=_5d.join(", ");}return _58;}});});