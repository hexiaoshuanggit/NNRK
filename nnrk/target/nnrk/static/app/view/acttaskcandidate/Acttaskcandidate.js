Ext.define('app.view.acttaskcandidate.Acttaskcandidate', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.acttaskcandidate.ActtaskcandidateController',
        'app.view.acttaskcandidate.ActtaskcandidateModel',
        'app.view.acttaskcandidate.component.ActtaskcandidateMainGrid',
        'app.view.acttaskcandidate.component.ActtaskcandidateWindow'
    ],
    xtype: 'app-acttaskcandidate',
	controller: 'acttaskcandidate',
    viewModel: {
        type: 'acttaskcandidate'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("taskvo");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'acttaskcandidatemaingrid'
        },{
        	xtype : 'acttaskcandidatewindow',
        	hidden : true
        }];
		this.callParent();
	}
});
