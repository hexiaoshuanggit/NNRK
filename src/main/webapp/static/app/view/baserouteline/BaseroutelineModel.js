Ext.define('app.view.baserouteline.BaseroutelineModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.baserouteline',

	data : {
		maininfo : {
			extraParams : {
				"sortedCondition[1_code]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/baserouteline/reade/baserouteline' ,
	            update: webContextValue  + '/baserouteline/updatess',
	            create: webContextValue   +  '/baserouteline/createss',
	            destroy:webContextValue  + '/baserouteline/deletess'
	        }
		}
	}
});
