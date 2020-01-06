Ext.define('app.view.basedept.BasedeptModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.basedept',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/basedept/reade/' ,
	            update: webContextValue  + '/basedept/updatess',
	            create: webContextValue   +  '/basedept/createss',
	            destroy:webContextValue  + '/basedept/deletess'
	        }
		}
	}
});
