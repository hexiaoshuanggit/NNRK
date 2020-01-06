Ext.define("app.view.main.comp.MessageGrid",{
	extend: 'Ext.grid.Panel',
	alias: 'widget.mmessagegrid',
    initComponent: function () {
    	var me = this;
    	me.columns = [
           {xtype: 'rownumberer'}
    	  ,{text: '消息分类', dataIndex: 'moduleText',align : 'center',width :100}
    	  ,{text: '消息内容', dataIndex: 'content', align : 'center', width :300}
    	  ,{text: '处理级别', dataIndex: 'level', align : 'center', width :90}
    	  ,{text: '创建日期', dataIndex: 'createTime', align : 'center', width :110}
    	  ,{text: '关闭日期', dataIndex: 'closeTime', align : 'center', width :110}
    	];
    	me.model = Ext.ClassManager.get("app.view.main.model.MessageModel");
    	me.store =  Ext.create("Ext.data.Store",{
        	model : me.model,
        	autoLoad : true,
        	pageSize : 500
        });
    	
//    	me.dockedItems = [{
//        	xtype : 'toolbar',
//        	style : 'background-color : #DBEAF9',
//        	items : [],
//        	dock : 'top'
//        },{
//			xtype : 'pagingtoolbar',
//			store : me.store,
//			displayInfo : true,
//			prependButtons : true,
//			dock : 'bottom'
//		}];
    	
    	me.callParent(arguments);
    }
});