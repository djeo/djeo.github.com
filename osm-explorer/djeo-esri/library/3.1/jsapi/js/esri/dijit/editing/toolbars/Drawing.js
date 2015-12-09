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
define(["dijit","dojo","dojox","dojo/require!dijit/_CssStateMixin,esri/dijit/editing/toolbars/ToolbarBase,esri/dijit/editing/tools/Editing,esri/dijit/editing/tools/Selection,esri/dijit/editing/tools/AdvancedTools"],function(_1,_2,_3){_2.provide("esri.dijit.editing.toolbars.Drawing");_2.require("dijit._CssStateMixin");_2.require("esri.dijit.editing.toolbars.ToolbarBase");_2.require("esri.dijit.editing.tools.Editing");_2.require("esri.dijit.editing.tools.Selection");_2.require("esri.dijit.editing.tools.AdvancedTools");(function(){var _4=[_2.moduleUrl("esri.dijit.editing","css/drawingToolbar.css")];var _5=document.getElementsByTagName("head").item(0),_6;for(i=0,il=_4.length;i<il;i++){_6=document.createElement("link");_6.type="text/css";_6.rel="stylesheet";_6.href=_4[i];_5.appendChild(_6);}})();_2.declare("esri.dijit.editing.toolbars.Drawing",[esri.dijit.editing.toolbars.ToolbarBase,_1._CssStateMixin],{onShowAttributeInspector:function(){},_activateTool:function(_7,_8){this._settings.editor._activeTool=_7;if(_7!=="EDITING"){this._settings.templatePicker.clearSelection();}if(_7!=="ATTRIBUTES"){this._settings.editor._hideAttributeInspector();}if(_7==="CLEAR"){return;}this.inherited(arguments);},_initializeToolbar:function(){var _9=this._settings.layers;_2.forEach(_9,function(_a){this._tbConnects.push(_2.connect(_a,"onSelectionComplete",this,"_updateUI"));},this);},activateEditing:function(_b,_c){this._tools.EDITING._activateTool(_b,_c.geometryType);this._activeTool=this._tools.EDITING;this._activeTool.setChecked(true);},_updateUI:function(){if(this._settings.undoManager){this._tools.UNDO.set("disabled",this._settings.undoManager.canUndo===false);this._tools.REDO.set("disabled",this._settings.undoManager.canRedo===false);}this._selectedFeatures=esri.dijit.editing.Util.LayerHelper.getSelection(this._settings.layers);var _d=this._selectedFeatures.length;if(this._tools.DELETE){this._tools.DELETE.set("disabled",_d<=0);}if(this._tools.CLEAR){this._tools.CLEAR.set("disabled",_d<=0);}if(this._tools.ATTRIBUTES){this._tools.ATTRIBUTES.set("disabled",_d<=0);}if(this._tools.UNION){this._tools.UNION.set("disabled",_d<2);}},_toolFinished:function(_e){if(_e==="ATTRIBUTES"&&(this._selectedFeatures&&this._selectedFeatures.length)){this.onShowAttributeInspector(this._selectedFeatures[0]);}if(_e==="SELECT"||_e==="CUT"||_e==="RESHAPING"||_e==="EDITING"){this._activeTool.deactivate();this._activeTool.setChecked(false);this._activeTool=null;}if(_e==="DELETE"){this.onDelete();}this._updateUI();},_createTools:function(){this._tools.SELECT=new esri.dijit.editing.tools.Selection({settings:this._settings,onClick:_2.hitch(this,"_activateTool","SELECT",true),onFinished:_2.hitch(this,"_toolFinished","SELECT")});this.addChild(this._tools.SELECT);this._tools.CLEAR=new esri.dijit.editing.tools.ButtonToolBase(_2.mixin(esri.dijit.editing.tools.SelectionTools.selectClear,{settings:this._settings,onClick:_2.hitch(this._settings.editor,"_clearSelection",false)}));this.addChild(this._tools.CLEAR);this._createSeparator();this._tools.ATTRIBUTES=new esri.dijit.editing.tools.ButtonToolBase(_2.mixin(esri.dijit.editing.tools.EditingTools.attributes,{settings:this._settings,onClick:_2.hitch(this,"_toolFinished","ATTRIBUTES")}));this.addChild(this._tools.ATTRIBUTES);this._createSeparator();this._tools.EDITING=new esri.dijit.editing.tools.Editing({settings:this._settings,onClick:_2.hitch(this,"_activateTool","EDITING",true),onApplyEdits:_2.hitch(this,"onApplyEdits"),onFinished:_2.hitch(this,"_toolFinished","EDITING")});this.addChild(this._tools.EDITING);this._tools.DELETE=new esri.dijit.editing.tools.ButtonToolBase(_2.mixin(esri.dijit.editing.tools.EditingTools.del,{settings:this._settings,onClick:_2.hitch(this,"_toolFinished","DELETE")}));this.addChild(this._tools.DELETE);if(this._settings.toolbarOptions){if(this._settings.toolbarOptions.cutVisible||this._settings.toolbarOptions.mergeVisible||this._settings.toolbarOptions.reshapeVisible){this._createSeparator();}if(this._settings.toolbarOptions.cutVisible){this._tools.CUT=new esri.dijit.editing.tools.Cut({settings:this._settings,onFinished:_2.hitch(this,"_toolFinished","CUT"),onClick:_2.hitch(this,"_activateTool","CUT",true),onApplyEdits:_2.hitch(this,"onApplyEdits")});this.addChild(this._tools.CUT);}if(this._settings.toolbarOptions.mergeVisible){this._tools.UNION=new esri.dijit.editing.tools.Union({settings:this._settings,onFinished:_2.hitch(this,"_toolFinished","UNION"),onApplyEdits:_2.hitch(this,"onApplyEdits")});this.addChild(this._tools.UNION);}if(this._settings.toolbarOptions.reshapeVisible){this._tools.RESHAPING=new esri.dijit.editing.tools.Reshape({settings:this._settings,onClick:_2.hitch(this,"_activateTool","RESHAPING",true),onFinished:_2.hitch(this,"_toolFinished","RESHAPING"),onApplyEdits:_2.hitch(this,"onApplyEdits")});this.addChild(this._tools.RESHAPING);}}if(this._settings.enableUndoRedo){this._createSeparator();this._tools.UNDO=new esri.dijit.editing.tools.ButtonToolBase(_2.mixin(esri.dijit.editing.tools.EditingTools.undo,{settings:this._settings,onClick:_2.hitch(this,function(){this._tools.UNDO.set("disabled",true);this._tools.REDO.set("disabled",true);this._settings.editor._undo();})}));this.addChild(this._tools.UNDO);this._tools.REDO=new esri.dijit.editing.tools.ButtonToolBase(_2.mixin(esri.dijit.editing.tools.EditingTools.redo,{settings:this._settings,onClick:_2.hitch(this,function(){this._tools.UNDO.set("disabled",true);this._tools.REDO.set("disabled",true);this._settings.editor._redo();})}));this.addChild(this._tools.REDO);}}});});