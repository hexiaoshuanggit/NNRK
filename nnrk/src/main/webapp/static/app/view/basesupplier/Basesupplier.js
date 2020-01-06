Ext.define('app.view.basesupplier.Basesupplier', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.basesupplier.BasesupplierController',
        'app.view.basesupplier.BasesupplierModel',
        'app.view.basesupplier.component.BasesupplierMainGrid',
        'app.view.basesupplier.component.BasesupplierWindow'
    ],
    xtype: 'app-basesupplier',
	controller: 'basesupplier',
    viewModel: {
        type: 'basesupplier'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("basesupplier");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'basesuppliermaingrid'
        },{
        	xtype : 'basesupplierwindow',
        	hidden : true
        }];
		this.callParent();
	}
});
