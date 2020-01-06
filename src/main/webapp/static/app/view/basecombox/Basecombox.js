Ext.define('app.view.basecombox.Basecombox', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.basecombox.BasecomboxController',
        'app.view.basecombox.BasecomboxModel',
        'app.view.basecombox.component.BasecomboxMainGrid',
        'app.view.basecombox.component.BasecomboxWindow'
    ],
    xtype: 'app-basecombox',
	controller: 'basecombox',
    viewModel: {
        type: 'basecombox'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("basecombox");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'basecomboxmaingrid'
        },{
        	xtype : 'basecomboxwindow',
        	hidden : true
        }];
		this.callParent();
	}
});
