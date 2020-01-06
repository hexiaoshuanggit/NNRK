Ext.define('app.view.baseequip.component.BaseequipOpenWin', {
	extend : 'app.ux.window.PopUpWin',
	alias : 'widget.baseequipopenwin',
	title : '选择',
	querybar : ['->',{
		xtype : 'textfield',
		fieldLabel : '单据号',
		enableKeyEvents : true,
		queryparam : 'params[like% t3.DOC_NO_]',
		labelWidth : 60,
		width : 160
	}],
	selreccallback : function(records,pgrid){
		var selectedrecs = [];
		Ext.Array.forEach(records,function(item ,index , allItems ){
		});
//		currgrid.getStore().add(selectedrecs);
	},
	items : [{
	   xtype : "popupgrid",
	   vosign : 'prodproplanselect' , 
	   apiread : '/sys/readv/prodproplanselectView',
	   extraParamsfun : function(){ return {}; }
	}]
});
