Ext.define('app.view.projectmission.Projectmission', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.projectmission.ProjectmissionController',
        'app.view.projectmission.ProjectmissionModel',
        'app.view.projectmission.component.ProjectmissionMainGrid',
        'app.view.projectmission.component.ProjectmissionWindow'
    ],
    xtype: 'app-projectmission',
	controller: 'projectmission',
    viewModel: {
        type: 'projectmission'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("projectmission");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'projectmissionmaingrid'
        },{
        	xtype : 'projectmissionwindow',
        	hidden : true
        }];
		this.callParent();
	}
});
