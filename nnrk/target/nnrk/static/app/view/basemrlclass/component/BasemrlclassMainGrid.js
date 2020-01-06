Ext.define("app.view.basemrlclass.component.BasemrlclassMainGrid", {
    extend: 'app.ux.grid.BaseMainTreeGrid',
    alias: 'widget.basemrlclassmaingrid',
    initComponent: function () {
        var me = this;
        var viewModel = me.up('app-basemrlclass').getViewModel();
        me.columns = [{
        	xtype: 'rownumberer'
        },{
        	xtype : 'actiontextcolumn',
        	iconCls : 'fa fa-edit fa-lg',
        	align : 'center',
        	sortable: false,
        	menuDisabled : true,
        	tooltip: '显示',
        	width : 40,
        	handler : function(view, recordIndex, cellIndex, e, record, row){
        		var treegrid = this.up('treepanel[ref=mymaintreegrid]');
        		treegrid.fireEvent('actioncolumnclick',treegrid,record,'show');
        	}
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
        	xtype : 'treecolumn',  
            text : '类型编码',  dataIndex: 'code',width : 200
        }];
        
        var  uiserverinfos = viewModel.get("mainServersource");
        me.columns = me.columns.concat ( app.ux.ColumnsFactory.getColumnsfast(uiserverinfos)  );
//        me.model = app.ux.ModelFactory.getModelFast(uiserverinfos ,viewModel.get("maininfo"));
        me.model =  Ext.ClassManager.get("app.view.basemrlclass.model.MrlTreeModel");
        me.store = Ext.create("Ext.data.TreeStore",{
        	model : me.model,
        	nodeParam:'id',
        	autoLoad : true,
            listeners : {  
                'nodebeforeexpand' : function(node,eOpts){  
                    this.proxy.extraParams.expandFlag = "true";  //expandFlag 此参数的作用用来说明展开标记
                },
                'nodeexpand' : function(node,eOpts){  
                    delete  this.proxy.extraParams.expandFlag;
                }
            } 
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
			}],
        	dock : 'top'
        }];
        me.callParent(arguments);
    }
});
