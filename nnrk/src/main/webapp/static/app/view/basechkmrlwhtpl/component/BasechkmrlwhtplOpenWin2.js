Ext.define('app.view.basechkmrlwhtpl.component.BasechkmrlwhtplOpenWin2', {
	extend : 'app.ux.window.PopUpWin',
	alias : 'widget.basechkmrlwhtplopenwin2',
	title : '选择',
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
		if(records.length != 1){
			Ext.MessageBox.alert("提示","请选择一条数据");
			throw "please single record";
		}
		var rec = records[0];
		var mform = this.up("basechkmrlwhtplwindow").down("form");
		mform.down("textfield[name=mrlId]").setValue(rec.get('id'));
		mform.down("textfield[name=mrlCode]").setValue(rec.get('code'));
		mform.down("textfield[name=mrlName]").setValue(rec.get('name'));
		mform.down("textfield[name=mrlSpec]").setValue(rec.get('specification'));
	},
	items : [{
	   xtype : "popupgrid",
	   vosign : 'basemrl',
	   apiread : '/basechkitem/reade/basemrl',
	   extraParamsfun : function(){ return {
	   }; }
	}]
});
