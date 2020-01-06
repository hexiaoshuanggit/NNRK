Ext.define('app.view.basechkitem.BasechkitemModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.basechkitem',

	data : {
		maininfo : {
			extraParams : {
				"sortedCondition[1_code]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/basechkitem/reade/basechkitem' ,
	            update: webContextValue  + '/basechkitem/updatess',
	            create: webContextValue   +  '/basechkitem/createss',
	            destroy:webContextValue  + '/basechkitem/deletess'
	        }
		}
	}
});
