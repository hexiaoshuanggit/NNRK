Ext.define('app.view.baseequip.BaseequipModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.baseequip',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/baseequip/reade/baseequiptype' ,
	            update: webContextValue  + '/baseequip/updatess',
	            create: webContextValue   +  '/baseequip/createss',
	            destroy:webContextValue  + '/baseequip/deletess'
	        }
		}
	}
});
