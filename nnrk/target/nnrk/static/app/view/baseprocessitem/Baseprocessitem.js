Ext.define('app.view.baseprocessitem.Baseprocessitem', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.baseprocessitem.BaseprocessitemController',
        'app.view.baseprocessitem.BaseprocessitemModel',
        'app.view.baseprocessitem.component.BaseprocessitemMainGrid',
        'app.view.baseprocessitem.component.BaseprocessitemWindow'
    ],
    xtype: 'app-baseprocessitem',
	controller: 'baseprocessitem',
    viewModel: {
        type: 'baseprocessitem'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("baseprocessitem");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'baseprocessitemmaingrid'
        },{
        	xtype : 'baseprocessitemwindow',
        	hidden : true
        }];
		this.callParent();
	}
});
