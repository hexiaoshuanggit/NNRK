Ext.define("app.view.basemeasure.component.BasemeasureSubGrid", {
    extend: 'app.ux.grid.BaseSubGrid',
    alias: 'widget.basemeasuresubgrid',
    title : '详细数据',
    initComponent: function () {
        var me = this;
        me.columns = [{
        	xtype: 'rownumberer'
        },{
        	xtype : 'actiontextcolumn',
        	iconCls : 'fa fa-search fa-lg',
        	align : 'center',
        	sortable: false,
        	menuDisabled : true,
        	tooltip: '历史查看',
        	width : 40,
        	handler : function(view, recordIndex, cellIndex, e, record, row){
        		Ext.gzqUtil.gopenHistory(record);
        	}
        }];
        
        var uiserverinfos = app.ux.UiServer.getinfosfast("");  //vosign
        me.columns = me.columns.concat ( app.ux.ColumnsFactory.getColumnsfast(uiserverinfos)  );
        me.model = app.ux.ModelFactory.getModelFast(uiserverinfos ,{
        	modelMainId : 'mainId',
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/basemeasure/reade/' ,
	            destroy:webContextValue  + '/basemeasure/deletess'
	        }
        });
        
        me.store = Ext.create("Ext.data.Store",{
        	model : me.model,
        	autoLoad : false,
        	pageSize : 100
        });
        me.dockedItems = [{
        	xtype : 'toolbar',
        	items : [{
				text : '新增',tooltip:'新增(shift+a)',
				xtype : 'buttontransparent',
				ref : 'subadd',
				glyph : 0xf016
			},{
				text : '删除',tooltip:'删除(shift+d)',
				xtype : 'buttontransparent',
				ref : 'subdelete',
				disabled : true,
				glyph : 0xf014
			}],
			style : 'background-color : #DBEAF9',
        	dock : 'top'
        },{
			xtype : 'pagingtoolbar',
			store : me.store,
			displayInfo : true,
			prependButtons : true,
			dock : 'bottom'
		}];
        me.selModel=Ext.create("Ext.selection.CheckboxModel", {
            injectCheckbox: 1,
            mode : 'SIMPLE',
            enableKeyNav:false
        });
        me.callParent(arguments);
    }
});
