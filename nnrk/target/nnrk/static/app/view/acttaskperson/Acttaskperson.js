Ext.define('app.view.acttaskperson.Acttaskperson', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.acttaskperson.ActtaskpersonController',
        'app.view.acttaskperson.ActtaskpersonModel',
        'app.view.acttaskperson.component.ActtaskpersonMainGrid',
        'app.view.acttaskperson.component.ActtaskpersonWindow'
    ],
    xtype: 'app-acttaskperson',
	controller: 'acttaskperson',
    viewModel: {
        type: 'acttaskperson'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("taskvo");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'acttaskpersonmaingrid'
        },{
        	xtype : 'acttaskpersonwindow',
        	hidden : true
        }];
		this.callParent();
	}
});
