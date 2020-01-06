Ext.define('app.view.projectdefinition.Projectdefinition', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.projectdefinition.ProjectdefinitionController',
        'app.view.projectdefinition.ProjectdefinitionModel',
        'app.view.projectdefinition.component.ProjectdefinitionMainGrid',
        'app.view.projectdefinition.component.ProjectdefinitionWindow'
    ],
    xtype: 'app-projectdefinition',
	controller: 'projectdefinition',
    viewModel: {
        type: 'projectdefinition'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("projectdefinition");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'projectdefinitionmaingrid'
        },{
        	xtype : 'projectdefinitionwindow',
        	hidden : true
        }];
		this.callParent();
	}
});
