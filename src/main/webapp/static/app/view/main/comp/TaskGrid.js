Ext.define("app.view.main.comp.TaskGrid", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.consoletaskgrid',
    border: 0,
//    title : '我的任务',
//    header:{
//    	cls:'x-panel-header-new'
//    },
    
    forceFit : true,
    initComponent: function () {
        var me = this;
        me.columns = [{
        	xtype: 'rownumberer'
        }];
        
        var uiserverinfos = app.ux.UiServer.getinfosfast("taskvo");  //vosign
        me.columns = me.columns.concat ( app.ux.ColumnsFactory.getColumnsfast(uiserverinfos)  );
        me.model = app.ux.ModelFactory.getModelFast(uiserverinfos ,{
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/actusertask/mytask' ,
	            destroy:webContextValue  + '/actusertask/deletess'
	        }
        });
        
        me.store = Ext.create("Ext.data.Store",{
        	model : me.model,
        	autoLoad : true,
        	pageSize : 200
        });
        me.callParent(arguments);
    }
});
