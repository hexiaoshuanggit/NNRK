Ext.define("app.view.main.comp.ReportGrid",{
	extend: 'Ext.grid.Panel',
	alias: 'widget.reportgrid',
	border: 0,
    columnLines : true,
//    title : "报表查看",
//    glyph : 0xf1c1,
    forceFit : true,
    initComponent: function () {
    	var me = this;
    	me.columns = [{
    		xtype: 'rownumberer'
    	},{
    		 text: '报表名称', dataIndex: 'reportName',align : 'center'
    			 , renderer : function(val, metaData, model, row, col, store,
    					gridview){
    			 metaData.style = 'color:blue;font-size:15px;';
    			 return val;
    		 }
    	},{
    		text: '查看', dataIndex: 'id', align : 'center'
    		    ,renderer : function(val, metaData, model){   
    			var reportUrl = model.get("reportUrl") + "&realation=" + window.loginUserEntity;
    			return Ext.String.format("<a href=\"{0}\" target=\"_blank\">报表查看</a>",reportUrl);
    		}
    	}];
    	me.model = Ext.ClassManager.get("app.view.main.model.ReportModel");
    	me.store =  Ext.create("Ext.data.Store",{
        	model : me.model,
        	autoLoad : true,
        	pageSize : 100
        });
    	me.callParent(arguments);
    }
});