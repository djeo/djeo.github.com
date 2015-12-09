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
define(["dijit","dojo","dojox","dojo/require!esri/layers/tiled"],function(_1,_2,_3){_2.provide("esri.layers.WebTiledLayer");_2.require("esri.layers.tiled");_2.declare("esri.layers.WebTiledLayer",esri.layers.TiledMapServiceLayer,{constructor:function(_4,_5){if(!_5){_5={};}var _6=new esri.geometry.Extent(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,new esri.SpatialReference({wkid:102100}));var _7=new esri.geometry.Extent(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,new esri.SpatialReference({wkid:102100}));this.initialExtent=_5.initialExtent||_6;this.fullExtent=_5.fullExtent||_7;if(_5.tileInfo){this.tileInfo=_5.tileInfo;}else{var _8=[{"level":0,"resolution":156543.033928,"scale":591657527.591555},{"level":1,"resolution":78271.5169639999,"scale":295828763.795777},{"level":2,"resolution":39135.7584820001,"scale":147914381.897889},{"level":3,"resolution":19567.8792409999,"scale":73957190.948944},{"level":4,"resolution":9783.93962049996,"scale":36978595.474472},{"level":5,"resolution":4891.96981024998,"scale":18489297.737236},{"level":6,"resolution":2445.98490512499,"scale":9244648.868618},{"level":7,"resolution":1222.99245256249,"scale":4622324.434309},{"level":8,"resolution":611.49622628138,"scale":2311162.217155},{"level":9,"resolution":305.748113140558,"scale":1155581.108577},{"level":10,"resolution":152.874056570411,"scale":577790.554289},{"level":11,"resolution":76.4370282850732,"scale":288895.277144},{"level":12,"resolution":38.2185141425366,"scale":144447.638572},{"level":13,"resolution":19.1092570712683,"scale":72223.819286},{"level":14,"resolution":9.55462853563415,"scale":36111.909643},{"level":15,"resolution":4.77731426794937,"scale":18055.954822},{"level":16,"resolution":2.38865713397468,"scale":9027.977411},{"level":17,"resolution":1.19432856685505,"scale":4513.988705},{"level":18,"resolution":0.597164283559817,"scale":2256.994353},{"level":19,"resolution":0.298582141647617,"scale":1128.497176}];var _9=new esri.layers.TileInfo({"rows":256,"cols":256,"origin":{"x":-20037508.342787,"y":20037508.342787},"spatialReference":{"wkid":102100},"lods":_8});this.tileInfo=_9;}this.spatialReference=new esri.SpatialReference(this.tileInfo.spatialReference.toJson());this.copyright=_5.copyright||"";var _a=new _2._Url(_4);var _b=_a.scheme+"://"+_a.authority+"/";this.urlPath=_4.substring(_b.length);this.tileServers=_5.tileServers||[];this.tileServers.push(_b);this.tileServers=_2.map(this.tileServers,function(_c){if(_c.charAt(_c.length-1)!=="/"){_c+="/";}return _c;});this.loaded=true;this.onLoad(this);},getTileUrl:function(_d,_e,_f){var _10=this.tileServers[_e%this.tileServers.length];var _11=_10+_2.string.substitute(this.urlPath,{level:_d,col:_f,row:_e});return esri._getProxiedUrl(_11);}});});