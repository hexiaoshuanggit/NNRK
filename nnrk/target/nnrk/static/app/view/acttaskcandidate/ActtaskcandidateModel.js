Ext.define('app.view.acttaskcandidate.ActtaskcandidateModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.acttaskcandidate',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/actusertask/mygrouptask' ,
	            update: webContextValue  + '/actusertask/updatess',
	            create: webContextValue   +  '/actusertask/createss',
	            destroy:webContextValue  + '/actusertask/deletess'
	        }
		}
	}
});
