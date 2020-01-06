Ext.define('app.view.acttaskperson.component.ActtaskpersonWindow', {
	extend : 'app.ux.window.BaseWindow',
	alias : 'widget.acttaskpersonwindow',
	requires : ['app.view.acttaskperson.component.ActtaskpersonSubCommentGrid',
		             'app.view.acttaskperson.component.ActtaskpersonSubFileGrid'],
	uses : [],
	listeners: {
		afterrender : function( win, eOpts ){
			//把没用的按钮隐藏了
			win.down("buttontransparent[ref=save]").hide();
			win.down("buttontransparent[ref=continueadd]").hide();
			win.down("buttontransparent[ref=copyadd]").hide();
		}
	},
	initComponent : function() {
	  var me = this;
	  me.title = me.up("app-acttaskperson").title;
	  var viewModel = me.up("app-acttaskperson").getViewModel();
	  
	  var  uiserverinfos = viewModel.get("mainServersource");
	  var formItems = app.ux.FormFieldsFactory.getItems(uiserverinfos);
	  
	  
	  me.custtoolbars = [{
		  xtype:'buttontransparent',text:'单据详情',
	      glyph : 0xf15c,ref : 'business',
	      handler : function(busbtn,eOpts){
//	    	  if(Ext.gzqUtil.gwinformIsAdd(busbtn.up("acttaskpersonwindow"))){
//	    		  Ext.MessageBox.alert("提示","新增状态无详情");
//	    		   throw "please select";
//	    	  }
	    	  try{
	    	  //获取businesskey 和 相关的 module
	    	  var processInstanceRef1 = busbtn.up("acttaskpersonwindow").down("textfield[name=processInstanceRef1]").getValue();
	    	  var btn = Ext.getCmp("mybuttonmainmenu-btnId").down("[module=" + processInstanceRef1 + "]");
	    	  var pCenter = busbtn.up("app-main").down("maincenter");
	    	  var newTab = Ext.gzqUtil.openMainMenu(pCenter,{
	  			id : btn.id,text : btn.text,module : btn.module
	  		  });
	    	  //定位到相关的数据
	    	  newTab.down("basemaingrid").getStore().load({
	    		  params : {//
	    			  "params[= id]" : busbtn.up("acttaskpersonwindow").down("textfield[name=businessKey]").getValue()
	    		  }
	    	  });
	    	  }catch(e){}
	      }
	  }];
	  me.items = [{
		  xtype: "form",ref:'mainform',
	      anchor : '100% 36%',layout: {type: 'hbox',align: 'stretch'},
  		  items : [{
  			xtype:'fieldset',frame : true,autoScroll : true,
  			flex: 1,title : '任务信息',
  			defaults: {
	        	margin: '2 5 2 5', labelWidth :70,
	    	    enableKeyEvents:true
	  		},
  			layout: {
	  	      type: 'table',columns: 2
	  		},
	  		items : formItems
  		  },{
  			xtype:'fieldset',frame : true,autoScroll : true,
  			flex: 1,
  			title : '任务处理',
  			defaults: {
	        	margin: '2 5 2 5', labelWidth :70,
	    	    enableKeyEvents:true
	  		},
  			layout: {
	  	      type: 'fit'
	  		},
	  		items : [{xtype : "textarea", fieldLabel: '任务批注', labelAlign :'right', name : "gcomment"}]
  		  }] 
	  },{
		  xtype : "tabpanel",
		  anchor : '100% 64%',
		  items : [{
			  xtype : 'acttaskpersonsubcommentgrid'
		  },{
			  xtype : 'acttaskpersonsubfilegrid'
		  }]
	  }];
	  this.callParent(arguments);
	}
});
