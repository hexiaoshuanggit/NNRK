Ext.define('app.view.basechkmrloptpl.BasechkmrloptplModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.basechkmrloptpl',

	data : {
		maininfo : {
			extraParams : {
				"sortedCondition[1_docCode]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/basechkmrloptpl/reade/basechkmrloptpl' ,
	            update: webContextValue  + '/basechkmrloptpl/updatess',
	            create: webContextValue   +  '/basechkmrloptpl/createss',
	            destroy:webContextValue  + '/basechkmrloptpl/deletess'
	        }
		}
	}
});
