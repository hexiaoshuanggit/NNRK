Ext.define('app.view.baseware.Baseware', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.baseware.BasewareController',
        'app.view.baseware.BasewareModel',
        'app.view.baseware.component.BasewareMainGrid',
        'app.view.baseware.component.BasewareWindow'
    ],
    xtype: 'app-baseware',
	controller: 'baseware',
    viewModel: {
        type: 'baseware'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("baseware");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'basewaremaingrid'
        },{
        	xtype : 'basewarewindow',
        	hidden : true
        }];
		this.callParent();
	}
});
