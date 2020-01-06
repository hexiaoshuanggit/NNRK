Ext.define('app.view.mymessage.MymessageModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.mymessage',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/basemrl/reade/systemmessage' ,
	            update: webContextValue  + '/basemrl/updatess',
	            create: webContextValue   +  '/basemrl/createss',
	            destroy:webContextValue  + '/basemrl/deletess'
	        }
		}
	}
});
