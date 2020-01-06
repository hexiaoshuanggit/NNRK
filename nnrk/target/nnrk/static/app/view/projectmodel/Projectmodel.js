Ext.define('app.view.projectmodel.Projectmodel', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.projectmodel.ProjectmodelController',
        'app.view.projectmodel.ProjectmodelModel',
        'app.view.projectmodel.component.ProjectmodelMainGrid',
        'app.view.projectmodel.component.ProjectmodelWindow'
    ],
    xtype: 'app-projectmodel',
	controller: 'projectmodel',
    viewModel: {
        type: 'projectmodel'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("projectmodel");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'projectmodelmaingrid'
        },{
        	xtype : 'projectmodelwindow',
        	hidden : true
        }];
		this.callParent();
	}
});
