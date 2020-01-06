Ext.define('app.view.acttaskperson.ActtaskpersonModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.acttaskperson',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/actusertask/mytask',
	            update: webContextValue  + '/actusertask/updatess',
	            create: webContextValue   +  '/actusertask/createss',
	            destroy:webContextValue  + '/actusertask/deletess'
	        }
		}
	}
});
