Ext.define('app.view.problem.component.ProblemWindow', {
	extend : 'app.ux.window.BaseWindow',
	alias : 'widget.problemwindow',
	requires : [

		 //window insert req subgrid
	],
	uses : [],
	initComponent : function() {
	  var me = this;
	  me.title = me.up("app-problem").title;
	  var viewModel = me.up("app-problem").getViewModel();
	  
	  var  uiserverinfos = viewModel.get("mainServersource");
	  var formItems = app.ux.FormFieldsFactory.getItems(uiserverinfos);
	  
	  me.custtoolbars = [];
	  me.items = [{
		  xtype: "form",
	      ref:'mainform',
	      anchor : '100% 22%',
  		  layout: 'fit',
  		  items : [{
  			xtype:'fieldset',frame : true,
  			autoScroll : true,title : '信息录入',
  			defaults: {
	        	margin: '2 5 2 5', labelWidth :70,enableKeyEvents:true
	  		},
  			layout: {
	  	      type: 'table',columns: 4
	  		},
	  		items : formItems
  		  }] 
	  }
,{xtype : 'tabpanel', anchor : '100% 78%',  items : []}
	//window insert subgrids
	  ];
	  this.callParent(arguments);
	}
});
