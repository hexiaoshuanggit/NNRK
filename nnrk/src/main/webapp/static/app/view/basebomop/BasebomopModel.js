Ext.define('app.view.basebomop.BasebomopModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.basebomop',

	data : {
		maininfo : {
			extraParams : {
				"sortedCondition[1_docCode]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/basebomop/reade/basebomop' ,
	            update: webContextValue  + '/basebomop/updatess',
	            create: webContextValue   +  '/basebomop/createss',
	            destroy:webContextValue  + '/basebomop/deletess'
	        }
		}
	}
});
