Ext.define('app.view.baserouteline.component.BaseroutelineOpenWin', {
	extend : 'app.ux.window.PopUpWin',
	alias : 'widget.baseroutelineopenwin',
	title : '选择',
	querybar : ['->',{
		xtype : 'textfield',
		fieldLabel : '工序编码',
		enableKeyEvents : true,
		queryparam : 'params[like code]',
		labelWidth : 60,
		width : 160
	}],
	fieldref : "ROUTELINE_OP",
	selreccallback : function(records,pgrid,fieldrefs){
		var currgrid = this.up("baseroutelinewindow").down("baseroutelinesubgrid");
		var currmodel = currgrid.getStore().getModel();
		var selectedrecs = [];
		Ext.Array.forEach(records,function(it ,index , allItems ){
			var tmodel = {};
			Ext.Array.forEach(fieldrefs,function(item,idx,aitems){
				tmodel[item.tfield] = it.get(item.sfield);
			});
			selectedrecs.push(currmodel.create(tmodel));
		});
		currgrid.getStore().add(selectedrecs);
	},
	items : [{
	   xtype : "popupgrid",
	   vosign : 'baseoperationdef' , 
	   apiread : '/baseopdef/reade/baseoperationdef',
	   extraParamsfun : function(){ return {}; }
	}]
});
