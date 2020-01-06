Ext.define('app.view.acttaskhistory.ActtaskhistoryModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.acttaskhistory',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/actusertask/myhistorytask',
	            update: webContextValue  + '/actusertask/updatess',
	            create: webContextValue   +  '/actusertask/createss',
	            destroy:webContextValue  + '/actusertask/deletess'
	        }
		}
	}
});
