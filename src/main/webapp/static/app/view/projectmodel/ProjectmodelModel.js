Ext.define('app.view.projectmodel.ProjectmodelModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.projectmodel',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/projectmodel/reade/projectmodel' ,
	            update: webContextValue  + '/projectmodel/updatess',
	            create: webContextValue   +  '/projectmodel/createss',
	            destroy:webContextValue  + '/projectmodel/deletess'
	        }
		}
	}
});
