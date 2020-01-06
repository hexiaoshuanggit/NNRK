Ext.define('app.view.basedept.Basedept', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.basedept.BasedeptController',
        'app.view.basedept.BasedeptModel',
        'app.view.basedept.component.BasedeptMainGrid',
        'app.view.basedept.component.BasedeptWindow'
    ],
    xtype: 'app-basedept',
	controller: 'basedept',
    viewModel: {
        type: 'basedept'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'basedeptmaingrid'
        },{
        	xtype : 'basedeptwindow',
        	hidden : true
        }];
		this.callParent();
	}
});
