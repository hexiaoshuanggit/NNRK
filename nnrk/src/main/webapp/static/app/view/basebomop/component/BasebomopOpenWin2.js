Ext.define('app.view.basebomop.component.BasebomopOpenWin2', {
	extend : 'app.ux.window.PopUpWin',
	alias : 'widget.basebomopopenwin2',
	title : '选择',
	querybar : ['->',{
		xtype : 'textfield',
		fieldLabel : '工序编码',
		enableKeyEvents : true,
		queryparam : 'params[like opcode]',
		labelWidth : 60,
		width : 160
	}],
	fieldref : "BOMOP_ROUTEOP",
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
	   vosign : 'baserouteoperation' , 
	   apiread : '/baserouteline/reade/baserouteoperation',
	   extraParamsfun : function(){ 
		   var routelineId = this.up("basebomopwindow").down("form").down("combobox[name=routelineId]").getValue();
		   if(!routelineId){
			   Ext.MessageBox.alert("提示","请先选择工艺路线");
			   throw "no routelineId";
		   }
		   return {
			   "params[= mainId]" : routelineId
		   }; 
	   }
	}]
});
