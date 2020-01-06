Ext.define('app.view.baseprocessparam.Baseprocessparam', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.baseprocessparam.BaseprocessparamController',
        'app.view.baseprocessparam.BaseprocessparamModel',
        'app.view.baseprocessparam.component.BaseprocessparamMainGrid',
        'app.view.baseprocessparam.component.BaseprocessparamWindow'
    ],
    xtype: 'app-baseprocessparam',
	controller: 'baseprocessparam',
    viewModel: {
        type: 'baseprocessparam'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("baseprocessparam");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'baseprocessparammaingrid'
        },{
        	xtype : 'baseprocessparamwindow',
        	hidden : true
        }];
		this.callParent();
	}
});
