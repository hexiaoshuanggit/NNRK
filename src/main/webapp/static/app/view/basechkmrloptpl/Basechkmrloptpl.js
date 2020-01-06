Ext.define('app.view.basechkmrloptpl.Basechkmrloptpl', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.basechkmrloptpl.BasechkmrloptplController',
        'app.view.basechkmrloptpl.BasechkmrloptplModel',
        'app.view.basechkmrloptpl.component.BasechkmrloptplMainGrid',
        'app.view.basechkmrloptpl.component.BasechkmrloptplWindow'
    ],
    xtype: 'app-basechkmrloptpl',
	controller: 'basechkmrloptpl',
    viewModel: {
        type: 'basechkmrloptpl'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("basechkmrloptpl");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'basechkmrloptplmaingrid'
        },{
        	xtype : 'basechkmrloptplwindow',
        	hidden : true
        }];
		this.callParent();
	}
});
