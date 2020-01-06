Ext.define('app.view.basemeasure.BasemeasureModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.basemeasure',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/basemeasure/reade/basemeasure' ,
	            update: webContextValue  + '/basemeasure/updatess',
	            create: webContextValue   +  '/basemeasure/createss',
	            destroy:webContextValue  + '/basemeasure/deletess'
	        }
		}
	}
});
