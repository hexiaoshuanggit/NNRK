Ext.define('app.view.basecustomer.BasecustomerModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.basecustomer',

	data : {
		maininfo : {
			extraParams : {
//				"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/basecustomer/reade/basecustomer' ,
	            update: webContextValue  + '/basecustomer/updatess',
	            create: webContextValue   +  '/basecustomer/createss',
	            destroy:webContextValue  + '/basecustomer/deletess'
	        }
		}
	}
});
