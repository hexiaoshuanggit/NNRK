Ext.define('app.view.problem.ProblemModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.problem',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/problem/reade/problem' ,
	            update: webContextValue  + '/problem/updatess',
	            create: webContextValue   +  '/problem/createss',
	            destroy:webContextValue  + '/problem/deletess'
	        }
		}
	}
});
