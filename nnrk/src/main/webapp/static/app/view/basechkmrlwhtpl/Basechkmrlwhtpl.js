Ext.define('app.view.basechkmrlwhtpl.Basechkmrlwhtpl', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.basechkmrlwhtpl.BasechkmrlwhtplController',
        'app.view.basechkmrlwhtpl.BasechkmrlwhtplModel',
        'app.view.basechkmrlwhtpl.component.BasechkmrlwhtplMainGrid',
        'app.view.basechkmrlwhtpl.component.BasechkmrlwhtplWindow'
    ],
    xtype: 'app-basechkmrlwhtpl',
	controller: 'basechkmrlwhtpl',
    viewModel: {
        type: 'basechkmrlwhtpl'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("basechkmrlwhtpl");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'basechkmrlwhtplmaingrid'
        },{
        	xtype : 'basechkmrlwhtplwindow',
        	hidden : true
        }];
		this.callParent();
	}
});
