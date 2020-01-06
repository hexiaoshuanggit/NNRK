Ext.define("app.view.acttaskperson.component.ActtaskpersonSubCommentGrid", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.acttaskpersonsubcommentgrid',
    title : '审核意见',
    initComponent: function () {
        var me = this;
        me.columns = [{
        	xtype: 'rownumberer'
        }];
        
        var uiserverinfos = app.ux.UiServer.getinfosfast("actvcomment");  //vosign
        me.columns = me.columns.concat ( app.ux.ColumnsFactory.getColumnsfast(uiserverinfos)  );
        me.model = app.ux.ModelFactory.getModelFast(uiserverinfos ,{
        	modelMainId : 'mainId',
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/actvcomment/reade/actvcomment' ,
	            destroy:webContextValue  + '/actusertask/deletess'
	        }
        });
        
        me.store = Ext.create("Ext.data.Store",{
        	model : me.model,
        	autoLoad : false,
        	pageSize : 100
        });
        me.dockedItems = [{
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
