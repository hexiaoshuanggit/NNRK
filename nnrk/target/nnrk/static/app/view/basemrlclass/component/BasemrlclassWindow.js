Ext.define('app.view.basemrlclass.component.BasemrlclassWindow', {
	extend : 'app.ux.window.BaseWindow',
	alias : 'widget.basemrlclasswindow',
	requires : [],
	uses : [],
	initComponent : function() {
	  var me = this;
	  me.title = me.up("app-basemrlclass").title;
	  var viewModel = me.up("app-basemrlclass").getViewModel();
	  
	  var  uiserverinfos = viewModel.get("mainServersource");
	  var formItems = app.ux.FormFieldsFactory.getItems(uiserverinfos);
	  
	  me.custtoolbars = [];
	  me.items = [{
		  xtype: "form",
	      ref:'mainform',
	      anchor : '100% 100%',
  		  layout: 'fit',
  		  items : [{
  			xtype:'fieldset',
  			frame : true,
  			autoScroll : true,
  			title : '信息录入',
  			defaults: {
	        	margin: '2 5 2 5',
	    	    labelWidth :70,
	    	    enableKeyEvents:true
	  		},
  			layout: {
	  	      type: 'table',
	  	      columns: 4
	  		},
	  		items : formItems
  		  }] 
	  }];
	  this.callParent(arguments);
	}
});
