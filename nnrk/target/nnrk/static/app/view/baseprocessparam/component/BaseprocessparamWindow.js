Ext.define('app.view.baseprocessparam.component.BaseprocessparamWindow', {
	extend : 'app.ux.window.BaseWindow',
	alias : 'widget.baseprocessparamwindow',
	requires : ['app.view.baseprocessparam.component.BaseprocessparamSubGrid',
		            'app.view.baseprocessparam.component.BaseprocessparamOpenWin',
		            'app.view.baseprocessparam.component.BaseMrlOpenWin'],
	uses : [],
	initComponent : function() {
	  var me = this;
	  me.title = me.up("app-baseprocessparam").title;
	  var viewModel = me.up("app-baseprocessparam").getViewModel();
	  
	  var  uiserverinfos = viewModel.get("mainServersource");
	  var formItems = app.ux.FormFieldsFactory.getItems(uiserverinfos);
	  
	  me.custtoolbars = [{
		  xtype : 'buttontransparent',
		  ref : 'doccheck',
		  text : '审核',
		  disabled : true,
		  glyph : 0xf00c
	  },{
		  xtype : 'buttontransparent',
		  ref : 'docuncheck',
		  text : '弃审',
		  disabled : true,
		  glyph : 0xf0e2
	  }];
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
			  xtype : 'baseprocessparamsubgrid'
		  }]
	  },{
		  xtype : "baseprocessparamopenwin",
		  hidden : true
	  },{
		  xtype : "baseprocessparammrlwin",
		  hidden : true
	  }];
	  this.callParent(arguments);
	}
});
