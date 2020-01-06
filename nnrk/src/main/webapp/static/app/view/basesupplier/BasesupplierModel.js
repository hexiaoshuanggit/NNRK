Ext.define('app.view.basesupplier.BasesupplierModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.basesupplier',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/basesupplier/reade/basesupplier' ,
	            update: webContextValue  + '/basesupplier/updatess',
	            create: webContextValue   +  '/basesupplier/createss',
	            destroy:webContextValue  + '/basesupplier/deletess'
	        }
		}
	}
});
