Ext.define('app.view.acttaskcandidate.component.ActtaskcandidateWindow', {
	extend : 'app.ux.window.BaseWindow',
	alias : 'widget.acttaskcandidatewindow',
	requires : ['app.view.acttaskcandidate.component.ActtaskcandidateSubCommentGrid',
		             'app.view.acttaskcandidate.component.ActtaskcandidateSubFileGrid'],
	uses : [],
	initComponent : function() {
	  var me = this;
	  me.title = me.up("app-acttaskcandidate").title;
	  var viewModel = me.up("app-acttaskcandidate").getViewModel();
	  
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
			  xtype : 'acttaskcandidatesubcommentgrid'
		  },{
			  xtype : 'acttaskcandidatesubfilegrid'
		  }]
	  }];
	  this.callParent(arguments);
	}
});
