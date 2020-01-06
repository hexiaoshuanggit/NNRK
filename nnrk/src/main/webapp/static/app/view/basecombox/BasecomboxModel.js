Ext.define('app.view.basecombox.BasecomboxModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.basecombox',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/basecombox/reade/basecombox' ,
	            update: webContextValue  + '/basecombox/updatess',
	            create: webContextValue   +  '/basecombox/createss',
	            destroy:webContextValue  + '/basecombox/deletess'
	        }
		}
	}
});
