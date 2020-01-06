Ext.define('app.view.missiondefinition.MissiondefinitionModel', {
	extend : 'Ext.app.ViewModel',

	alias : 'viewmodel.missiondefinition',

	data : {
		maininfo : {
			extraParams : {
				//"sortedCondition[createTime]" : "asc"
			},
			api : {
	            read: webContextValue  +  '/missiondefinition/reade/missiondefinition' ,
	            update: webContextValue  + '/missiondefinition/updatess',
	            create: webContextValue   +  '/missiondefinition/createss',
	            destroy:webContextValue  + '/missiondefinition/deletess'
	        }
		}
	}
});
