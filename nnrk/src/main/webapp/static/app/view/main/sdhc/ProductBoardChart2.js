Ext.define('app.view.main.sdhc.ProductBoardChart2', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.productboardchart2',
	layout: "fit",
	
	initComponent : function() {
		var me = this;
		
		me.pbuiserverinfos = app.ux.UiServer.getinfosfast("sdhcdispatchboard2");  //vosign
		me.pbmodel = app.ux.ModelFactory.getModelFast(me.pbuiserverinfos ,{
			extraParams : {},
			api : {
	            read: webContextValue  +  '/baseworkcc/reade/sdhcdispatchboard2'
	        }
        });
        me.pbstore = Ext.create("Ext.data.Store",{
        	model : me.pbmodel,
        	autoLoad : false,
        	pageSize : 200
        });
		
		me.items = [{
			xtype:"chart",
	        store: me.pbstore,
	        animate:true,
//	        legend: {
//                field: 'status',
//                position: 'right',
//                boxStrokeWidth: 0,
//                labelFont: '12px Helvetica'
//            },
	        series: [{//图像显示配置
	            type: 'pie',
	            angleField: 'rate',
                label: {
                    field: 'status'
                    ,display: 'outside',
                    calloutLine: true
                },
                showInLegend: true,
                highlight: true,
//                highlightCfg: {
//                    fill: '#000',
//                    'stroke-width': 20,
//                    stroke: '#fff'
//                },
                tips: {
                    trackMouse: true,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('status') + ': ' + storeItem.get('rate') + '%');
                    }
                }
	        }]
		 }];
		
	    this.callParent();
	}

})