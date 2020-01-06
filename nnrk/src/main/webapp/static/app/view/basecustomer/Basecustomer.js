Ext.define('app.view.basecustomer.Basecustomer', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.basecustomer.BasecustomerController',
        'app.view.basecustomer.BasecustomerModel',
        'app.view.basecustomer.component.BasecustomerMainGrid',
        'app.view.basecustomer.component.BasecustomerWindow'
    ],
    xtype: 'app-basecustomer',
	controller: 'basecustomer',
    viewModel: {
        type: 'basecustomer'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("basecustomer");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'basecustomermaingrid'
        },{
        	xtype : 'basecustomerwindow',
        	hidden : true
        }];
		this.callParent();
	}
});
