Ext.define('app.view.baserouteline.component.BaseroutelineWindow', {
	extend : 'app.ux.window.BaseWindow',
	alias : 'widget.baseroutelinewindow',
	requires : ['app.view.baserouteline.component.BaseroutelineSubGrid',
		             'app.view.baserouteline.component.BaseroutelineSubFileGrid',
		             'app.view.baserouteline.component.BaseroutelineSubGrid2',
		             'app.view.baserouteline.component.BaseroutelineMrlOpenWin',
		             'app.view.baserouteline.component.BaseroutelineOpenWin'],
	uses : [],
	initComponent : function() {
	  var me = this;
	  me.title = me.up("app-baserouteline").title;
	  var viewModel = me.up("app-baserouteline").getViewModel();
	  
	  var  uiserverinfos = viewModel.get("mainServersource");
	  var formItems = app.ux.FormFieldsFactory.getItems(uiserverinfos);
	  
	  me.custtoolbars = [];
	  me.items = [{
		  xtype: "form",
	      ref:'mainform',
	      anchor : '100% 22%',
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
		  anchor : '100% 78%',
		  items : [{
			  xtype : 'baseroutelinesubgrid'
		  },{
			  xtype : 'baseroutelinesubgrid2'
		  },{
			  xtype : 'baseroutelinesubfilegrid'
		  }]
	  },{
		  xtype : "fileuploadwin",
		  hidden :  true
	  },{
		  xtype : "baseroutelineopenwin",
		  hidden :  true
	  },{
		  xtype : "baseroutelinemrlopenwin",
		  hidden :  true
	  }];
	  this.callParent(arguments);
	}
});
