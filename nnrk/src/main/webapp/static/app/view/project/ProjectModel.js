Ext.define('app.view.project.ProjectModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.project',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/project/reade/project' ,
	            update: webContextValue  + '/project/updatess',
	            create: webContextValue   +  '/project/createss',
	            destroy:webContextValue  + '/project/deletess'
	        }
		}
	}
});
