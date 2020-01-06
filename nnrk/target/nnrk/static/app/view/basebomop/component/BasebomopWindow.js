Ext.define('app.view.basebomop.component.BasebomopWindow', {
	extend : 'app.ux.window.BaseWindow',
	alias : 'widget.basebomopwindow',
	requires : ['app.view.basebomop.component.BasebomopSubGrid',
		            'app.view.basebomop.component.BasebomopSubFileGrid',
			        'app.view.basebomop.component.BasebomopOpenWin',
			        'app.view.basebomop.component.BasebomopOpenWin3',
			        'app.view.basebomop.component.BasebomopOpenWin4'],
	uses : [],
	initComponent : function() {
	  var me = this;
	  me.title = me.up("app-basebomop").title;
	  var viewModel = me.up("app-basebomop").getViewModel();
	  
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
			  xtype : 'basebomopsubgrid'
		  },{
			  xtype : "basebomopsubfilegrid"
		  }]
	  },{
		  xtype : "basebomopopenwin",
		  hidden : true
	  },{
		  xtype : "basebomopopenwin3",
		  hidden : true
	  },{
		  xtype : "basebomopopenwin4",
		  hidden : true
	  },{
		  xtype : "fileuploadwin",
		  hidden : true
	  }];
	  this.callParent(arguments);
	}
});
