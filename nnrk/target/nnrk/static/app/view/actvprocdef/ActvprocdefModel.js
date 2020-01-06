Ext.define('app.view.actvprocdef.ActvprocdefModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.actvprocdef',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/actvprocdef/reade/actvprocdef',
	            update: webContextValue  + '/actvprocdef/updatess',
	            create: webContextValue   +  '/actvprocdef/createss',
	            destroy:webContextValue  + '/actvprocdef/deletess'
	        }
		}
	}
});
