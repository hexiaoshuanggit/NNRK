Ext.define('app.view.basemrl.BasemrlModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.basemrl',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/basemrl/reade/basemrl',
	            update: webContextValue  + '/basemrl/updatess',
	            create: webContextValue   +  '/basemrl/createss',
	            destroy:webContextValue  + '/basemrl/deletess'
	        }
		}
	}
});
