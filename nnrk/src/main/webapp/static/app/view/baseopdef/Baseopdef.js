Ext.define('app.view.baseopdef.Baseopdef', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.baseopdef.BaseopdefController',
        'app.view.baseopdef.BaseopdefModel',
        'app.view.baseopdef.component.BaseopdefMainGrid',
        'app.view.baseopdef.component.BaseopdefWindow'
    ],
    xtype: 'app-baseopdef',
	controller: 'baseopdef',
    viewModel: {
        type: 'baseopdef'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("baseoperationdef");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'baseopdefmaingrid'
        },{
        	xtype : 'baseopdefwindow',
        	hidden : true
        }];
		this.callParent();
	}
});
