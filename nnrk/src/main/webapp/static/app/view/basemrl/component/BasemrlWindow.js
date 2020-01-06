Ext.define('app.view.basemrl.component.BasemrlWindow', {
	extend : 'app.ux.window.BaseWindow',
	alias : 'widget.basemrlwindow',
	requires : ['app.view.basemrl.component.BasemrlSubFileGrid'],
	uses : [],
	initComponent : function() {
	  var me = this;
	  me.title = me.up("app-basemrl").title;
	  var viewModel = me.up("app-basemrl").getViewModel();
	  
	  var  uiserverinfos = viewModel.get("mainServersource");
	  var formItems = app.ux.FormFieldsFactory.getItems(uiserverinfos);
	  
	  me.custtoolbars = [];
	  me.items = [{
		  xtype: "form",
	      ref:'mainform',
	      anchor : '100% 50%',
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
		  anchor : '100% 50%',
		  items : [{
			  xtype : 'basemrlsubfilegrid'
		  }]
	  },{
		  xtype : "fileuploadwin",
		  hidden :  true
	  }];
	  this.callParent(arguments);
	}
});
