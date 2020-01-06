Ext.define("app.view.baserouteline.component.BaseroutelineSubFileGrid", {
    extend: 'app.ux.grid.BaseSubGrid',
    alias: 'widget.baseroutelinesubfilegrid',
    title : '相关附件',
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
        },{
        	xtype : 'actiontextcolumn',
        	iconCls : 'fa fa-download fa-lg',
        	align : 'center',
        	sortable: false,
        	menuDisabled : true,
        	tooltip: '查看/下载',
        	width : 40,
        	handler : function(view, recordIndex, cellIndex, e, record, row){
        		window.open(webContextValue + '/basebyte/download/' + record.getId(),"_blank");
        	}
        }];
        
        var uiserverinfos = app.ux.UiServer.getinfosfast("basebytearray");  //vosign
        me.columns = me.columns.concat ( app.ux.ColumnsFactory.getColumnsfast(uiserverinfos)  );
        me.model = app.ux.ModelFactory.getModelFast(uiserverinfos ,{
        	modelMainId : 'recordId',
			extraParams : {
				"sortedCondition[1_sort]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/basemrl/reade/basebytearray',
	            destroy:webContextValue  + '/basemrl/deletess'
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
				glyph : 0xf016,
				listeners : { //写在这里面主要以后复制粘贴容易点
			    	click : function(btn,e, eOpts){
			    		var upwin = btn.up("basewindow").down("fileuploadwin");
			    		var substore = btn.up("basesubgrid").getStore();
			    		var mrecId = substore.mainIdValue;
			    		if(!mrecId){Ext.MessageBox.alert('提示','请先保存主数据再上传'); throw "please save first";}
			    		upwin.down("textfield[name=recordId]").setValue(mrecId);
			    		if( !upwin.hasListener("hide") ){
			    			upwin.on("hide", function(upwin, eOpts){
				    			upwin.down("form").reset();
				    			substore.load();
				    		}, this );
			    		}
			    		upwin.show();
			    	}
			    },
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
