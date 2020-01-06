Ext.define('app.view.project.Project', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.project.ProjectController',
        'app.view.project.ProjectModel',
        'app.view.project.component.ProjectMainGrid',
        'app.view.project.component.ProjectWindow'
    ],
    xtype: 'app-project',
	controller: 'project',
    viewModel: {
        type: 'project'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("project");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'projectmaingrid'
        },{
        	xtype : 'projectwindow',
        	hidden : true
        }];
		this.callParent();
	}
});
