Ext.define('app.view.actvprocdef.component.ActvprocdefOpenWin', {
	extend : 'app.ux.window.PopUpWin',
	alias : 'widget.actvprocdefopenwin',
	title : '选择',
	querybar : ['->',{
		xtype : 'textfield',
		fieldLabel : '单据号',
		enableKeyEvents : true,
		queryparam : 'params[like% t3.DOC_NO_]',
		labelWidth : 60,
		width : 160
	}],
	fieldref : "",
	selreccallback : function(records,pgrid,fieldrefs){
		if(!fieldrefs ){
			console.error(" =============  无fieldrefs= =============== ");
			return;
		}
//		var currgrid = this.up("whotherinwindow").down("whotherinsubgrid");
//		var currmodel = currgrid.getStore().getModel();
//		var selectedrecs = [];
		Ext.Array.forEach(records,function(it ,index , allItems ){
			var tmodel = {};
			Ext.Array.forEach(fieldrefs,function(item,idx,aitems){
				tmodel[item.tfield] = it.get(item.sfield);
			});
			selectedrecs.push(currmodel.create(tmodel));
		});
//		currgrid.getStore().add(selectedrecs);
	},
	items : [{
	   xtype : "popupgrid",
	   vosign : 'prodproplanselect' , 
	   apiread : '/sys/readv/prodproplanselectView',
	   extraParamsfun : function(){ 
//	   var workshop = this.up("ppapplywindow").down("form").down("combobox[name=workshop]").getValue();
		   return {
//		   "params[= t1.workshop]" : workshop
		   }; 
	   }
	}]
});
