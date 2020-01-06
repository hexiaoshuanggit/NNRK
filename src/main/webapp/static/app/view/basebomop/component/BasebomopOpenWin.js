Ext.define('app.view.basebomop.component.BasebomopOpenWin', {
	extend : 'app.ux.window.PopUpWin',
	alias : 'widget.basebomopopenwin',
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
	fieldref : "BOMOP_MRL",
	selreccallback : function(records,pgrid,fieldrefs){
		var currgrid = this.up("basebomopwindow").down("basebomopsubgrid");
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
