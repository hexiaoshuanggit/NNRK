Ext.define('app.view.baserouteline.Baserouteline', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.baserouteline.BaseroutelineController',
        'app.view.baserouteline.BaseroutelineModel',
        'app.view.baserouteline.component.BaseroutelineMainGrid',
        'app.view.baserouteline.component.BaseroutelineWindow'
    ],
    xtype: 'app-baserouteline',
	controller: 'baserouteline',
    viewModel: {
        type: 'baserouteline'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("baserouteline");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'baseroutelinemaingrid'
        },{
        	xtype : 'baseroutelinewindow',
        	hidden : true
        }];
		this.callParent();
	}
});
