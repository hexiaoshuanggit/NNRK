Ext.define('app.view.basebomop.component.BasebomopOpenWin4', {
	extend : 'app.ux.window.PopUpWin',
	alias : 'widget.basebomopopenwin4',
	title : '选择',
	querybar : ['->',{
		xtype : 'textfield',
		fieldLabel : '物料编码',
		enableKeyEvents : true,
		queryparam : 'params[like mrlCode]',
		labelWidth : 60,
		width : 160
	},{
		xtype : 'textfield',
		fieldLabel : '物料名称',
		enableKeyEvents : true,
		queryparam : 'params[like mrlName]',
		labelWidth : 60,
		width : 160
	}],
	fieldref : "",
	selreccallback : function(records,pgrid,fieldrefs){
		if(records.length != 1 ){
			Ext.MessageBox.alert("提示","请选择一条数据");
			throw "please select single ";
		}
		
		var rec = records[0];
		var mform = this.up("basebomopwindow").down("form");
		mform.down("textfield[name=mrlId]").setValue(rec.get("mrlId"));
		mform.down("textfield[name=mrlName]").setValue(rec.get("mrlName"));
		mform.down("textfield[name=mrlCode]").setValue(rec.get("mrlCode"));
		mform.down("textfield[name=mrlSpec]").setValue(rec.get("mrlSpec"));
		
		mform.down("textfield[name=routelineId]").setValue(rec.get("lineId"));
		mform.down("textfield[name=routelineName]").setValue(rec.get("lineName"));
//		mform.down("textfield[name=version]").setValue(rec.get("lineVersion"));
		mform.down("checkbox[name=isDefault]").setValue(rec.get("isDefault"));
	},
	items : [{
	   xtype : "popupgrid",
	   vosign : 'basevproductroute' , 
	   apiread : '/basemrl/reade/basevproductroute',
	   extraParamsfun : function(){ 
		   var tmpmrlId = this.up("basebomopwindow").down("form").down("textfield[name=mrlId]").getValue();
		   if(!tmpmrlId){
			   Ext.MessageBox.alert("提示","请先选择物料");
			   throw "no materialId";
		   }
		   return {
			   "params[= mrlId]" : tmpmrlId
	   }; }
	}]
});
