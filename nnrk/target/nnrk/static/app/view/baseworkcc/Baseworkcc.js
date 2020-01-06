Ext.define('app.view.baseworkcc.Baseworkcc', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.baseworkcc.BaseworkccController',
        'app.view.baseworkcc.BaseworkccModel',
        'app.view.baseworkcc.component.BaseworkccMainGrid',
        'app.view.baseworkcc.component.BaseworkccWindow'
    ],
    xtype: 'app-baseworkcc',
	controller: 'baseworkcc',
    viewModel: {
        type: 'baseworkcc'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("baseworkcenter");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'baseworkccmaingrid'
        },{
        	xtype : 'baseworkccwindow',
        	hidden : true
        }];
		this.callParent();
	}
});
