Ext.define('app.view.baseprocessitem.BaseprocessitemModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.baseprocessitem',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/baseprocessitem/reade/baseprocessitem' ,
	            update: webContextValue  + '/baseprocessitem/updatess',
	            create: webContextValue   +  '/baseprocessitem/createss',
	            destroy:webContextValue  + '/baseprocessitem/deletess'
	        }
		}
	}
});
