Ext.define('app.view.baseprocessparam.component.BaseMrlOpenWin', {
	extend : 'app.ux.window.PopUpWin',
	alias : 'widget.baseprocessparammrlwin',
	title : '选择物料',
	querybar : ['->',{
		xtype : 'textfield',
		fieldLabel : '物料编码',
		enableKeyEvents : true,
		queryparam : 'params[like code]',
		labelWidth : 60,
		width : 160
	},{
		xtype : 'textfield',
		fieldLabel : '物料名称',
		enableKeyEvents : true,
		queryparam : 'params[like name]',
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
		var mform = this.up("baseprocessparamwindow").down("form");
		mform.down("textfield[name=mrlId]").setValue(rec.get("id"));
		mform.down("textfield[name=mrlName]").setValue(rec.get("name"));
		mform.down("textfield[name=mrlCode]").setValue(rec.get("code"));
	},
	items : [{
	   xtype : "popupgrid",
	   vosign : 'basemrl' , 
	   apiread : '/basemrl/reade/basemrl',
	   extraParamsfun : function(){ return {
//		   var workshop = this.up("ppapplywindow").down("form").down("combobox[name=workshop]").getValue();
//		   if(!workshop){
//			   Ext.MessageBox.alert("提示","请先选择车间");
//			   throw "no workshop";
//		   }
//		   return {
//			   "params[= t1.workshop]" : workshop
//		   }; 
	   }; }
	}]
});
