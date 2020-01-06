Ext.define('app.view.basedeptemp.Basedeptemp', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.basedeptemp.BasedeptempController',
        'app.view.basedeptemp.BasedeptempModel',
        'app.view.basedeptemp.component.BasedeptempMainGrid',
        'app.view.basedeptemp.component.BasedeptempWindow'
    ],
    xtype: 'app-basedeptemp',
	controller: 'basedeptemp',
    viewModel: {
        type: 'basedeptemp'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("basedept");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'basedeptempmaingrid'
        },{
        	xtype : 'basedeptempwindow',
        	hidden : true
        }];
		this.callParent();
	}
});
