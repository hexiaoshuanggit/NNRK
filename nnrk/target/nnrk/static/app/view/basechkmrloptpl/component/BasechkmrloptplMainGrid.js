Ext.define("app.view.basechkmrloptpl.component.BasechkmrloptplMainGrid", {
    extend: 'app.ux.grid.BaseMainGrid',
    alias: 'widget.basechkmrloptplmaingrid',
    initComponent: function () {
        var me = this;
        var viewModel = me.up('app-basechkmrloptpl').getViewModel();
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
        },{
        	xtype : 'actiontextcolumn',
        	iconCls : 'fa fa-copy fa-lg',
        	align : 'center',
        	sortable: false,
        	menuDisabled : true,
        	tooltip: '复制',
        	width : 38,
        	handler : function(view, recordIndex, cellIndex, e, record, row){
        		Ext.Ajax.request({
				    url: window.webContextValue + '/basechkmrloptpl/copy' ,
				    method : "POST",timeout : 120000,
				    params : {"recId" : record.getId()},
				    success : function(response){
				    	view.up("basechkmrloptplmaingrid").getStore().load();
				    }
				});
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
			},'->',{
				xtype : "textfield",
				fieldLabel : "物料编码",
				labelWidth : 60,width : 160,
				enableKeyEvents : true,
				queryparam : "params[like mrlCode]"	
			},{
				xtype : "textfield",
				fieldLabel : "物料名称",
				labelWidth : 60,width : 160,
				enableKeyEvents : true,
				queryparam : "params[like mrlName]"	
			},{
				xtype : "combobox",
				fieldLabel : "工序",queryMode: 'local',
				displayField: 'text',valueField: 'code',
				labelWidth : 35,width : 170,
				enableKeyEvents:true,
				matchFieldWidth : false,
				listConfig : {width : 300},
				store : Ext.data.StoreManager.lookup("baseopcomstoreId"),
				queryparam : "params[= opCode]"
			},{
				xtype : "combobox",fieldLabel : "检验类型",
				queryMode: 'local',
                displayField: 'name',valueField: 'name',
				labelWidth : 60,width : 160,
				enableKeyEvents:true,
				store : Ext.data.StoreManager.lookup("basechktypecomstoreId"),
				queryparam : "params[= chkType]"
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
