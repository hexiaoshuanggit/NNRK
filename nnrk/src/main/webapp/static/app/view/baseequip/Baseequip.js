Ext.define('app.view.baseequip.Baseequip', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.baseequip.BaseequipController',
        'app.view.baseequip.BaseequipModel',
        'app.view.baseequip.component.BaseequipMainGrid',
        'app.view.baseequip.component.BaseequipWindow'
    ],
    xtype: 'app-baseequip',
	controller: 'baseequip',
    viewModel: {
        type: 'baseequip'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("baseequiptype");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'baseequipmaingrid'
        },{
        	xtype : 'baseequipwindow',
        	hidden : true
        }];
		this.callParent();
	}
});
