Ext.define('app.view.baseemployee.Baseemployee', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.baseemployee.BaseemployeeController',
        'app.view.baseemployee.BaseemployeeModel',
        'app.view.baseemployee.component.BaseemployeeMainGrid',
        'app.view.baseemployee.component.BaseemployeeWindow'
    ],
    xtype: 'app-baseemployee',
	controller: 'baseemployee',
    viewModel: {
        type: 'baseemployee'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("baseemployee");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'baseemployeemaingrid'
        },{
        	xtype : 'baseemployeewindow',
        	hidden : true
        }];
		this.callParent();
	}
});
