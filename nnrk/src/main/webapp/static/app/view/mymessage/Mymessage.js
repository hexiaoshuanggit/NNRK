Ext.define('app.view.mymessage.Mymessage', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.mymessage.MymessageController',
        'app.view.mymessage.MymessageModel',
        'app.view.mymessage.component.MymessageMainGrid',
        'app.view.mymessage.component.MymessageWindow'
    ],
    xtype: 'app-mymessage',
	controller: 'mymessage',
    viewModel: {
        type: 'mymessage'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
//    	var uiserverinfos = app.ux.UiServer.getinfosfast("systemmessage");  //  VOSIGN
//    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'mymessagemaingrid'
        }];
		this.callParent();
	}
});
