Ext.define('app.view.basechkitem.component.BasechkitemExcelWindow',{
	extend : 'Ext.window.Window',
	alias : 'widget.basechkitemexcelwin',
	ref : "upexcel",
	title : 'Excel导入',
	closeAction : 'hide',
	bodyStyle : 'padding : 1px 1px 0',
	layout : 'fit',
	modal : true,
    listeners : {
    },	
	initComponent : function() {
		 var me = this;
	 	 me.width =342;
	 	 me.height = 140;
	 	me.dockedItems = [{
        	xtype : 'toolbar',
        	style : 'background-color : #DBEAF9',
        	items : [{
 				text : '上传',
 				xtype : 'buttontransparent',
 				glyph : 0xf093,
 				listeners : {
 					click : function(btn,e,eOpts){
 						var sdhcmkexcelwin = btn.up("window[ref=upexcel]");
 						var form = sdhcmkexcelwin.down('form').getForm();
 						if(form.isValid()){
 							form.submit({
 			                    url: webContextValue  +  '/basechkitem/uploadorder',
 			                    waitMsg: '上传中...',
 			                    success: function(fp, o) {
 			                    	sdhcmkexcelwin.up("app-basechkitem").down("basechkitemmaingrid").getStore().load();
 			                    	sdhcmkexcelwin.hide();
 			                    }
 			                });
 						}
 					}
 				}
 			}],
 			dock : 'top'
        }];
	 	
	 	me.items =  [{
	 		xtype: "form",
	 		items : [{
	 			xtype: 'filefield',name: 'mkorderxls',fieldLabel: 'Excel',
 		        labelWidth: 50,msgTarget: 'side',
 		        allowBlank: false,anchor: '100%',
 		        buttonText: '请选择文件'
	 		}]
  		  }] 
	 	
	 	this.callParent(arguments);
	}
	
});
