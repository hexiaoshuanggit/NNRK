Ext.define('app.view.baseware.BasewareModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.baseware',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/baseware/reade/baseware' ,
	            update: webContextValue  + '/baseware/updatess',
	            create: webContextValue   +  '/baseware/createss',
	            destroy:webContextValue  + '/baseware/deletess'
	        }
		}
	}
});
