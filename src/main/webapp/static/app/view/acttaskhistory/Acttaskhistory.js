Ext.define('app.view.acttaskhistory.Acttaskhistory', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.acttaskhistory.ActtaskhistoryController',
        'app.view.acttaskhistory.ActtaskhistoryModel',
        'app.view.acttaskhistory.component.ActtaskhistoryMainGrid',
        'app.view.acttaskhistory.component.ActtaskhistoryWindow'
    ],
    xtype: 'app-acttaskhistory',
	controller: 'acttaskhistory',
    viewModel: {
        type: 'acttaskhistory'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("taskvo");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'acttaskhistorymaingrid'
        },{
        	xtype : 'acttaskhistorywindow',
        	hidden : true
        }];
		this.callParent();
	}
});
