Ext.define('app.view.basemrlclass.Basemrlclass', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.basemrlclass.BasemrlclassController',
        'app.view.basemrlclass.BasemrlclassModel',
        'app.view.basemrlclass.component.BasemrlclassMainGrid',
        'app.view.basemrlclass.component.BasemrlclassWindow',
        'app.view.basemrlclass.model.MrlTreeModel'
    ],
    xtype: 'app-basemrlclass',
	controller: 'basemrlclass',
    viewModel: {
        type: 'basemrlclass'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("basemrlclass");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'basemrlclassmaingrid'
        },{
        	xtype : 'basemrlclasswindow',
        	hidden : true
        }];
		this.callParent();
	}
});
