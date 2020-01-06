Ext.define('app.view.sdhcqsboard.component.SdhcQsBoardChart2', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.sdhcqsboardchart2',
	layout: "fit",
	
	initComponent : function() {
		var me = this;
		
		me.pbuiserverinfos = app.ux.UiServer.getinfosfast("sdhcqsboard2");  //vosign
		me.pbmodel = app.ux.ModelFactory.getModelFast(me.pbuiserverinfos ,{
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/baseworkcc/reade/sdhcqsboard2'
	        }
        });
        me.pbstore = Ext.create("Ext.data.Store",{
        	model : me.pbmodel,
        	autoLoad : false,
        	pageSize : 10
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
	            fields: ['problemNum'],//取数据库的那个字段作为数据
	            title: '月质量问题',//纵坐标显示的名称
	            label: {
                    renderer: function(v) { return v; }
                },
	            grid: true,//显示网格线
	            minimum: 0,//纵坐标从0开始
	            maximum: 30
	        }, {
	            type: 'Category',//类别，一般是横坐标
	            position: 'bottom',//位置，下边
	            fields: ['problemName'],//取数据库的那个字段作为数据
	            grid: true,//显示网格线
	            calculateCategoryCount: false,
	        }],
	        series: [{//图像显示配置
	            type: 'column',//采用柱状图
	            highlight: true,
	            axis: 'left',
	            title :"问题",
                xField: 'problemName',
                yField: 'problemNum',
                style: {opacity: 0.80},
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('problemName') + ":" + storeItem.get('problemNum') ) ;
                    }
                }
	        }]
		 }];
		
	    this.callParent();
	}

})