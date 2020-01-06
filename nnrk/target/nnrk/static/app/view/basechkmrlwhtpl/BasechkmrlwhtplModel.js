Ext.define('app.view.basechkmrlwhtpl.BasechkmrlwhtplModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.basechkmrlwhtpl',

	data : {
		maininfo : {
			extraParams : {
				"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/basechkmrlwhtpl/reade/basechkmrlwhtpl' ,
	            update: webContextValue  + '/basechkmrlwhtpl/updatess',
	            create: webContextValue   +  '/basechkmrlwhtpl/createss',
	            destroy:webContextValue  + '/basechkmrlwhtpl/deletess'
	        }
		}
	}
});
