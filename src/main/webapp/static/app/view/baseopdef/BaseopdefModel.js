Ext.define('app.view.baseopdef.BaseopdefModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.baseopdef',

	data : {
		maininfo : {
			extraParams : {
				"sortedCondition[1_code]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/baseopdef/reade/baseoperationdef' ,
	            update: webContextValue  + '/baseopdef/updatess',
	            create: webContextValue   +  '/baseopdef/createss',
	            destroy:webContextValue  + '/baseopdef/deletess'
	        }
		}
	}
});
