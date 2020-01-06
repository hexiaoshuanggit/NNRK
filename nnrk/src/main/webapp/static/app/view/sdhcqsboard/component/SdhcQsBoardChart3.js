Ext.define('app.view.sdhcqsboard.component.SdhcQsBoardChart3', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.sdhcqsboardchart3',
	layout: "fit",
	
	initComponent : function() {
		var me = this;
		
		me.pbuiserverinfos = app.ux.UiServer.getinfosfast("sdhcqsboard3");  //vosign
		me.pbmodel = app.ux.ModelFactory.getModelFast(me.pbuiserverinfos ,{
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/baseworkcc/reade/sdhcqsboard3'
	        }
        });
        me.pbstore = Ext.create("Ext.data.Store",{
        	model : me.pbmodel,
        	autoLoad : false,
        	pageSize : 15
        });
		
		me.items = [{
			xtype:"chart",
	        store: me.pbstore,
	        animate:true,
	        legend: {
                position: 'right',
                boxStrokeWidth: 0,
                labelFont: '12px Helvetica'
            },
//            insetPadding : {top: 50, left: 10, right: 10, bottom: 10},
	        series: [{//图像显示配置
	            type: 'pie',//采用柱状图
	            angleField: 'rate',
                label: {
                    field: 'status',
                    display: 'inside',font: '14px Arial',
                    calloutLine: true
                },
                showInLegend: true,
                highlight: true,
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