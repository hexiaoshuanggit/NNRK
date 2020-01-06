Ext.define('app.view.sdhcqsboard.component.SdhcQsBoardPanel2', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.sdhcqsboardpanel2',
	requires : ['app.view.sdhcqsboard.component.SdhcQsBoardChart2'
		           ,"app.view.sdhcqsboard.component.SdhcQsBoardChart3"],
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
	listeners:{
		afterrender : function( me, eOpts ){
			
		}
	},
	initComponent : function() {
		var me = this;
        me.items = [{
	   		 xtype : "sdhcqsboardchart2",flex: 2
	   	 },{
	   		 xtype : "sdhcqsboardchart3",flex: 1
	   	 }];
	    this.callParent();
	}

})