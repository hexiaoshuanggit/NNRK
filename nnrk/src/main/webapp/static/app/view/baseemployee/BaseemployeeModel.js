Ext.define('app.view.baseemployee.BaseemployeeModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.baseemployee',

	data : {
		maininfo : {
			extraParams : {
				"sortedCondition[1_code]" : "asc",
				"sortedCondition[2_createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/baseemployee/reade/baseemployee' ,
	            update: webContextValue  + '/baseemployee/updatess',
	            create: webContextValue   +  '/baseemployee/createss',
	            destroy:webContextValue  + '/baseemployee/deletess'
	        }
		}
	}
});
