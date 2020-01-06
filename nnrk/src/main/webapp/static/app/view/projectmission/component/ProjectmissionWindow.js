Ext.define('app.view.projectmission.component.ProjectmissionWindow', {
	extend : 'app.ux.window.BaseWindow',
	alias : 'widget.projectmissionwindow',
	requires : [
'app.view.projectmission.component.Projectmission1SubGrid','app.view.projectmission.component.Projectmission2SubGrid'
		 //window insert req subgrid
	],
	uses : [],
	initComponent : function() {
	  var me = this;
	  me.title = me.up("app-projectmission").title;
	  var viewModel = me.up("app-projectmission").getViewModel();
	  
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
,{xtype : 'tabpanel', anchor : '100% 78%',  items : [ {xtype:'projectmission1subgrid'},{xtype:'projectmission2subgrid'}]}
	//window insert subgrids
	  ];
	  this.callParent(arguments);
	}
});
