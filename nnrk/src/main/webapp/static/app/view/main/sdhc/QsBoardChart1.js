Ext.define('app.view.main.sdhc.QsBoardChart1', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.qsboardchart1',
	layout: "fit",
	style : "border:1px",
	initComponent : function() {
		var me = this;
		me.pbuiserverinfos = app.ux.UiServer.getinfosfast("sdhcqsboard");  //vosign
		me.pbmodel = app.ux.ModelFactory.getModelFast(me.pbuiserverinfos ,{
			extraParams : {},
			api : {
	            read: webContextValue  +  '/baseworkcc/reade/sdhcqsboard'
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
	        legend: {
                position: 'right',
                boxStrokeWidth: 0,
                labelFont: '12px Helvetica'
            },
//            insetPadding : {top: 50, left: 10, right: 10, bottom: 10},
	        axes: [{
	            type: 'Numeric',//数量，一般是纵坐标
	            position: 'left',//位置，左边
	            fields: ['prodRate'],//取数据库的那个字段作为数据
	            title: '月成品率',//纵坐标显示的名称
	            label: {
                    renderer: function(v) { return v + '%'; }
                },
	            grid: true,//显示网格线
	            minimum: 90,//纵坐标从0开始
	            maximum: 100
	        }, {
	            type: 'Category',//类别，一般是横坐标
	            position: 'bottom',//位置，下边
	            fields: ['week'],//取数据库的那个字段作为数据
	            grid: true,//显示网格线
	            calculateCategoryCount: false,
	        }],
	        series: [{//图像显示配置
	            type: 'line',//采用柱状图
	            highlight: true,
	            axis: 'left',
	            title :"周",
                xField: 'week',
                yField: 'prodRate',
                style: {opacity: 0.80},
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('week') + ":" + storeItem.get('prodRate') + '%') ;
                    }
                }
	        }]
		 }];
		
	    this.callParent();
	}

})