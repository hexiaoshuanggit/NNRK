Ext.define("app.view.actvprocdef.component.ActvprocdefMainGrid", {
    extend: 'app.ux.grid.BaseMainGrid',
    alias: 'widget.actvprocdefmaingrid',
    initComponent: function () {
        var me = this;
        var viewModel = me.up('app-actvprocdef').getViewModel();
        me.columns = [{
        	xtype: 'rownumberer'
        },{
        	xtype : 'actiontextcolumn',
        	iconCls : 'fa fa-edit fa-lg',
        	align : 'center',
        	sortable: false,
        	menuDisabled : true,
        	tooltip: '显示',
        	width : 40
        },{
        	xtype : 'actiontextcolumn',
        	iconCls : 'fa fa-image fa-lg',
        	align : 'center',
        	sortable: false,
        	menuDisabled : true,
        	width : 40,
        	handler : function(view, recordIndex, cellIndex, e, record, row){
        		window.open(window.webContextValue +  "/actrepo/digam/" + record.getId(), '_blank','width=800,height=500');
        	}
        }];
        
        
        var  uiserverinfos = viewModel.get("mainServersource");
        me.columns = me.columns.concat ( app.ux.ColumnsFactory.getColumnsfast(uiserverinfos)  );
        me.model = app.ux.ModelFactory.getModelFast(uiserverinfos ,viewModel.get("maininfo") );

        me.store = Ext.create("Ext.data.Store",{
        	model : me.model,
        	autoLoad : true,
        	pageSize : 100
        });
        me.dockedItems = [{
        	xtype : 'toolbar',
        	style : 'background-color : #DBEAF9',
        	items : [{
				text : '新增',
				xtype : 'buttontransparent',
				ref : 'add2',glyph : 0xf016
			},{
				text : '删除',
				xtype : 'buttontransparent',
				ref : 'delete',tooltip : '删除(shift+d)',
				disabled : true,
				glyph : 0xf014
			}],
        	dock : 'top'
        },{
			xtype : 'pagingtoolbar',
			store : me.store,
			displayInfo : true,
			prependButtons : true,
			dock : 'bottom'
		}];
        me.callParent(arguments);
    }
});
