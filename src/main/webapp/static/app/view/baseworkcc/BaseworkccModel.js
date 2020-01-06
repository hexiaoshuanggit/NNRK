Ext.define('app.view.baseworkcc.BaseworkccModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.baseworkcc',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/baseworkcc/reade/baseworkcenter' ,
	            update: webContextValue  + '/baseworkcc/updatess',
	            create: webContextValue   +  '/baseworkcc/createss',
	            destroy:webContextValue  + '/baseworkcc/deletess'
	        }
		}
	}
});
