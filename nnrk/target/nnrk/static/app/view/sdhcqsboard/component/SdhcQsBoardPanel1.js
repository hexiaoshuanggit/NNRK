Ext.define('app.view.sdhcqsboard.component.SdhcQsBoardPanel1', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.sdhcqsboardpanel1',
	requires : ['app.view.sdhcqsboard.component.SdhcQsBoardChart',
		            'app.view.sdhcqsboard.component.SdhcQsBoardGrid'],
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
		me.pbuiserverinfos = app.ux.UiServer.getinfosfast("sdhcqsboard");  //vosign
		me.pbmodel = app.ux.ModelFactory.getModelFast(me.pbuiserverinfos ,{
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/baseworkcc/reade/sdhcqsboard'
	        }
        });
        me.pbstore = Ext.create("Ext.data.Store",{
        	model : me.pbmodel,
        	autoLoad : false,
        	pageSize : 10
        });
        me.items = [{
	   		 xtype : "sdhcqsboardgrid",region: 'west',flex: 1
	   	 },{
	   		 xtype : "sdhcqsboardchart",region: 'center',flex: 2
	   	 }];
	    this.callParent();
	}

})