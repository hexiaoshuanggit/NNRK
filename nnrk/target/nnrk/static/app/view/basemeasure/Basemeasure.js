Ext.define('app.view.basemeasure.Basemeasure', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.basemeasure.BasemeasureController',
        'app.view.basemeasure.BasemeasureModel',
        'app.view.basemeasure.component.BasemeasureMainGrid',
        'app.view.basemeasure.component.BasemeasureWindow'
    ],
    xtype: 'app-basemeasure',
	controller: 'basemeasure',
    viewModel: {
        type: 'basemeasure'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("basemeasure");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'basemeasuremaingrid'
        },{
        	xtype : 'basemeasurewindow',
        	hidden : true
        }];
		this.callParent();
	}
});
