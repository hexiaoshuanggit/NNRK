Ext.define('app.view.basemrl.Basemrl', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.basemrl.BasemrlController',
        'app.view.basemrl.BasemrlModel',
        'app.view.basemrl.component.BasemrlMainGrid',
        'app.view.basemrl.component.BasemrlWindow'
    ],
    xtype: 'app-basemrl',
	controller: 'basemrl',
    viewModel: {
        type: 'basemrl'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("basemrl");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'basemrlmaingrid'
        },{
        	xtype : 'basemrlwindow',
        	hidden : true
        }];
		this.callParent();
	}
});
