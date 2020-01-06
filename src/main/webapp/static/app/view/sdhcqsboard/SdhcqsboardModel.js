Ext.define('app.view.sdhcqsboard.SdhcqsboardModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.sdhcqsboard',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/baseprocessitem/reade/' ,
	            update: webContextValue  + '/baseprocessitem/updatess',
	            create: webContextValue   +  '/baseprocessitem/createss',
	            destroy:webContextValue  + '/baseprocessitem/deletess'
	        }
		}
	}
});
