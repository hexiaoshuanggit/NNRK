Ext.define('app.view.projectdefinition.ProjectdefinitionModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.projectdefinition',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/projectdefinition/reade/projectdefinition' ,
	            update: webContextValue  + '/projectdefinition/updatess',
	            create: webContextValue   +  '/projectdefinition/createss',
	            destroy:webContextValue  + '/projectdefinition/deletess'
	        }
		}
	}
});
