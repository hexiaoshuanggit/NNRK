Ext.define('app.view.basebomop.Basebomop', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.basebomop.BasebomopController',
        'app.view.basebomop.BasebomopModel',
        'app.view.basebomop.component.BasebomopMainGrid',
        'app.view.basebomop.component.BasebomopWindow'
    ],
    xtype: 'app-basebomop',
	controller: 'basebomop',
    viewModel: {
        type: 'basebomop'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("basebomop");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'basebomopmaingrid'
        },{
        	xtype : 'basebomopwindow',
        	hidden : true
        }];
		this.callParent();
	}
});
