Ext.define('app.view.basemrlclass.BasemrlclassModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.basemrlclass',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/basemrlclass/subtree',
	            update: webContextValue  + '/basemrlclass/updatess',
	            create: webContextValue   +  '/basemrlclass/createss',
	            destroy:webContextValue  + '/basemrlclass/deletess'
	        }
		}
	}
});
