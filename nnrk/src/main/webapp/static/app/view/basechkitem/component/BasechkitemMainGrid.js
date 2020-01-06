Ext.define("app.view.basechkitem.component.BasechkitemMainGrid", {
    extend: 'app.ux.grid.BaseMainGrid',
    alias: 'widget.basechkitemmaingrid',
    initComponent: function () {
        var me = this;
        var viewModel = me.up('app-basechkitem').getViewModel();
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
				ref : 'add',tooltip:'新增(shift+a)',
				glyph : 0xf016
			},{
				text : '删除',
				xtype : 'buttontransparent',
				ref : 'delete',tooltip : '删除(shift+d)',
				disabled : true,
				glyph : 0xf014
			},{
				xtype : "buttontransparent",
				glyph : 0xf1c3,
				tooltip: 'Excel导入',
				menu : [{
					text : '模版下载',
					handler : function(hbtn,e,eOpts){
						window.open(webContextValue + '/sys/exceltpldown/basechkitem');
					},
					glyph : 0xf1c3,
				},{
					text : 'Excel导入',
					handler : function(btn,e,eOpts){
						btn.up("app-basechkitem").down("basechkitemexcelwin").show();
					},
					glyph : 0xf1c3,
				}]
			},'->',{
				xtype : "textfield",fieldLabel : "编码",
				labelWidth : 30,width : 130,
				enableKeyEvents : true,
				queryparam : "params[like code]"
			},{
				xtype : "textfield",fieldLabel : "名称",
				labelWidth : 30,width : 130,
				enableKeyEvents : true,
				queryparam : "params[like name]"
			},{
				xtype : "buttontransparent",
				ref : "querybtn",
				text : "查询",
				glyph : 0xf002
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