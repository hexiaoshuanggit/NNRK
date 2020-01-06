Ext.define('app.view.actvprocdef.Actvprocdef', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.actvprocdef.ActvprocdefController',
        'app.view.actvprocdef.ActvprocdefModel',
        'app.view.actvprocdef.component.ActvprocdefMainGrid',
        'app.view.actvprocdef.component.ActvprocdefWindow',
        'app.view.actvprocdef.component.ActFileUploadWindow'
    ],
    xtype: 'app-actvprocdef',
	controller: 'actvprocdef',
    viewModel: {
        type: 'actvprocdef'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("actvprocdef");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'actvprocdefmaingrid'
        },{
        	xtype : 'actvprocdefwindow',
        	hidden : true
        },{
        	xtype : 'actfileuploadwin',
        	hidden : true
        }];
		this.callParent();
	}
});
