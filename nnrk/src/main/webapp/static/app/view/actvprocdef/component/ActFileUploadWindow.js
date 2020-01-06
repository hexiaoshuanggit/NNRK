/** *附件上传弹出框, 简单的弹出框，包含附件上传的一些信息 */
Ext.define('app.view.actvprocdef.component.ActFileUploadWindow',{
	extend : 'Ext.window.Window',
	alias : 'widget.actfileuploadwin',
	title : '流程文件上传',
	closeAction : 'hide',
	bodyStyle : 'padding : 1px 1px 0',
	layout : 'fit',
	modal : true,
    listeners : {
    	hide : function(win,eOpts){
    		win.up("app-actvprocdef").down("actvprocdefmaingrid").getStore().load();
    	}
    },	
	initComponent : function() {
		 var me = this;
	 	 me.width =342;
	 	 me.height = 242;
	 	me.dockedItems = [{
        	xtype : 'toolbar',
        	style : 'background-color : #DBEAF9',
        	items : [{
 				text : '上传',
 				xtype : 'buttontransparent',
 				ref : 'selectsure',
 				glyph : 0xf093,
 				listeners : {
 					click : function(btn,e,eOpts){
 						var fileuploadwin = btn.up("actfileuploadwin");
 						var form = fileuploadwin.down('form').getForm();
 						if(form.isValid()){
 							form.submit({
 			                    url: webContextValue  +  '/actrepo/uploaddef',
 			                    waitMsg: '上传中...',
 			                    success: function(fp, o) {
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
	 			xtype:'fieldset',
	 			frame : true,
	 			title : '流程文件',
	 			items:[{
	 				xtype: 'textfield',name: 'category',fieldLabel: '分类',labelWidth: 50
	 			},{
	 				xtype: 'textfield',name: 'deployName',fieldLabel: '名称',allowBlank: false,labelWidth: 50
	 			},{
	 				xtype: 'filefield',name: 'processdefZip',fieldLabel: '文件(zip)',
	 		        labelWidth: 50,msgTarget: 'side',
	 		        allowBlank: false,anchor: '100%',
	 		        buttonText: '请选择文件'
	 			}]
	 		}]
  		  }] 
	 	
	 	this.callParent(arguments);
	}
	
});
