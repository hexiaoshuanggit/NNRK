Ext.define('app.view.baseprocessparam.BaseprocessparamModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.baseprocessparam',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/baseprocessparam/reade/baseprocessparam' ,
	            update: webContextValue  + '/baseprocessparam/updatess',
	            create: webContextValue   +  '/baseprocessparam/createss',
	            destroy:webContextValue  + '/baseprocessparam/deletess'
	        }
		}
	}
});
