Ext.define('app.view.baseprocessparam.component.BaseprocessparamOpenWin', {
	extend : 'app.ux.window.PopUpWin',
	alias : 'widget.baseprocessparamopenwin',
	title : '选择',
	querybar : ['->',{
		xtype : 'textfield',
		fieldLabel : '检测项',
		enableKeyEvents : true,
		queryparam : 'params[like name]',
		labelWidth : 60,
		width : 160
	}],
	fieldref : "PROCESSPARA_CITEM",
	selreccallback : function(records,pgrid,fieldrefs){
		var currgrid = this.up("baseprocessparamwindow").down("baseprocessparamsubgrid");
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
	   vosign : 'baseprocessitem' , 
	   apiread : '/baseprocessparam/reade/baseprocessitem',
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
