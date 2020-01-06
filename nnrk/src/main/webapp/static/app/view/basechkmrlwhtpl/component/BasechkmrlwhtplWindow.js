Ext.define('app.view.basechkmrlwhtpl.component.BasechkmrlwhtplWindow', {
	extend : 'app.ux.window.BaseWindow',
	alias : 'widget.basechkmrlwhtplwindow',
	requires : ['app.view.basechkmrlwhtpl.component.BasechkmrlwhtplSubGrid',
		             'app.view.basechkmrlwhtpl.component.BasechkmrlwhtplSubFileGrid',
		             'app.view.basechkmrlwhtpl.component.BasechkmrlwhtplOpenWin',
		             'app.view.basechkmrlwhtpl.component.BasechkmrlwhtplOpenWin2'],
	uses : [],
	initComponent : function() {
	  var me = this;
	  me.title = me.up("app-basechkmrlwhtpl").title;
	  var viewModel = me.up("app-basechkmrlwhtpl").getViewModel();
	  
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
			  xtype : 'basechkmrlwhtplsubgrid'
		  },{
			  xtype : 'basechkmrlwhtplsubfilegrid'
		  }]
	  },{
		  xtype : "basechkmrlwhtplopenwin",
		  hidden : true
	  },{
		  xtype : "basechkmrlwhtplopenwin2",
		  hidden : true
	  },{
		  xtype : "fileuploadwin",
		  hidden : true
	  }];
	  this.callParent(arguments);
	}
});
