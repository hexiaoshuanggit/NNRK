Ext.define('app.view.projectmission.ProjectmissionModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.projectmission',

	data : {
		maininfo : {
			extraParams : {
				"sortedCondition[sn]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/projectmission/reade/projectmission' ,
	            update: webContextValue  + '/projectmission/updatess',
	            create: webContextValue   +  '/projectmission/createss',
	            destroy:webContextValue  + '/projectmission/deletess'
	        }
		}
	}
});
