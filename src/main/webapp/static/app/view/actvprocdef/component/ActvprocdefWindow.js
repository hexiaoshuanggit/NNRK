Ext.define('app.view.actvprocdef.component.ActvprocdefWindow', {
	extend : 'app.ux.window.BaseWindow',
	alias : 'widget.actvprocdefwindow',
	requires : ['app.view.actvprocdef.component.ActvprocdefSubGrid'],
	uses : [],
	initComponent : function() {
	  var me = this;
	  me.title = me.up("app-actvprocdef").title;
	  var viewModel = me.up("app-actvprocdef").getViewModel();
	  
	  var  uiserverinfos = viewModel.get("mainServersource");
	  var formItems = app.ux.FormFieldsFactory.getItems(uiserverinfos);
	  
	  me.custtoolbars = [];
	  me.items = [{
		  xtype: "form",
	      ref:'mainform',
	      anchor : '100% 24%',
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
	  },{
		  xtype : "tabpanel",
		  anchor : '100% 76%',
		  items : [{
			  xtype : 'actvprocdefsubgrid'
		  }]
	  }];
	  this.callParent(arguments);
	}
});
