Ext.define('app.view.basechkmrloptpl.component.BasechkmrloptplWindow', {
	extend : 'app.ux.window.BaseWindow',
	alias : 'widget.basechkmrloptplwindow',
	requires : ['app.view.basechkmrloptpl.component.BasechkmrloptplSubGrid',
					'app.view.basechkmrloptpl.component.BasechkmrloptplSubFileGrid',
		             'app.view.basechkmrloptpl.component.BasechkmrloptplOpenWin' ,
		             'app.view.basechkmrloptpl.component.BasechkmrloptplOpenWin2'],
	uses : [],
	initComponent : function() {
	  var me = this;
	  me.title = me.up("app-basechkmrloptpl").title;
	  var viewModel = me.up("app-basechkmrloptpl").getViewModel();
	  
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
			  xtype : 'basechkmrloptplsubgrid'
		  },{
			  xtype : 'basechkmrloptplsubfilegrid'
		  }]
	  },{
		  xtype : "basechkmrloptplopenwin",
		  hidden : true
	  },{
		  xtype : "basechkmrloptplopenwin2",
		  hidden : true
	  },{
		  xtype : "fileuploadwin",
		  hidden :  true
	  }];
	  this.callParent(arguments);
	}
});
