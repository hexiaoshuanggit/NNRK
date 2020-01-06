Ext.define('app.view.main.sdhc.IndexBoardPanel2', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.sdhcindexboardpanel2',
	requires : ['app.view.main.model.ReportModel'
			        ,'app.view.main.comp.ReportGrid'
			        ,'app.view.main.comp.TaskGrid'],
    layout: {type: 'vbox'},
	listeners:{
		afterrender : function( me, eOpts ){
			
		}
	},
	refresh : function(){  //刷新该页面内容
		this.down("consoletaskgrid").getStore().load();
		this.down("reportgrid").getStore().load();
	},
	initComponent : function() {
		var me = this;
        me.items = [
        	{xtype: 'consoletaskgrid',width: '100%',flex: 1},
        	{xtype : "reportgrid",width: '100%',flex: 1}
        ];
	    this.callParent();
	}

})