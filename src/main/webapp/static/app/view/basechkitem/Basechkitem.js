Ext.define('app.view.basechkitem.Basechkitem', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.basechkitem.BasechkitemController',
        'app.view.basechkitem.BasechkitemModel',
        'app.view.basechkitem.component.BasechkitemMainGrid',
        'app.view.basechkitem.component.BasechkitemWindow',
        'app.view.basechkitem.component.BasechkitemExcelWindow'
    ],
    xtype: 'app-basechkitem',
	controller: 'basechkitem',
    viewModel: {
        type: 'basechkitem'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("basechkitem");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'basechkitemmaingrid'
        },{
        	xtype : 'basechkitemwindow',
        	hidden : true
        },{
        	xtype : "basechkitemexcelwin",
        	hidden : true
        }];
		this.callParent();
	}
});
