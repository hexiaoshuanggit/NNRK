Ext.define('app.view.missiondefinition.Missiondefinition', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.missiondefinition.MissiondefinitionController',
        'app.view.missiondefinition.MissiondefinitionModel',
        'app.view.missiondefinition.component.MissiondefinitionMainGrid',
        'app.view.missiondefinition.component.MissiondefinitionWindow'
    ],
    xtype: 'app-missiondefinition',
	controller: 'missiondefinition',
    viewModel: {
        type: 'missiondefinition'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("missiondefinition");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'missiondefinitionmaingrid'
        },{
        	xtype : 'missiondefinitionwindow',
        	hidden : true
        }];
		this.callParent();
	}
});
