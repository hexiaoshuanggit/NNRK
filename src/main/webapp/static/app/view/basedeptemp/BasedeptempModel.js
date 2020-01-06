Ext.define('app.view.basedeptemp.BasedeptempModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.basedeptemp',

	data : {
		maininfo : {
			extraParams : {
				"sortedCondition[1_lineNum]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/basedeptemp/reade/basedept' ,
	            update: webContextValue  + '/basedeptemp/updatess',
	            create: webContextValue   +  '/basedeptemp/createss',
	            destroy:webContextValue  + '/basedeptemp/deletess'
	        }
		}
	}
});
