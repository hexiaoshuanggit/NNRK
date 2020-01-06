Ext.define('app.view.main.comp.MessageWin',{
	extend : 'Ext.window.Window',
	alias : 'widget.mmessagewin',
	requires : ['app.view.main.comp.MessageGrid'],
	closeAction : 'hide',
	bodyStyle : 'padding : 1px 1px 0',
	layout : 'fit',
	modal : true,
	width : 800,height : 500,
	title :'我的消息',
    listeners : {
    	show : function(win, eOpts){
//    		win.down("mmessagegrid").getStore().load();
    	}
    },	
	initComponent : function() {
		 var me = this;
	 	me.dockedItems = [{
        	xtype : 'toolbar',
        	style : 'background-color : #DBEAF9',
        	items : [],
 			dock : 'top'
        }];
	 	 me.items = [{
	 		 xtype : 'mmessagegrid'
	 	 }];
	 	this.callParent(arguments);
	}
});
