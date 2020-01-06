Ext.define('app.view.sdhcqsboard.Sdhcqsboard', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.sdhcqsboard.SdhcqsboardController',
        'app.view.sdhcqsboard.SdhcqsboardModel',
        'app.view.sdhcqsboard.component.SdhcQsBoardPanel'
    ],
    xtype: 'app-sdhcqsboard',
	controller: 'sdhcqsboard',
    viewModel: {
        type: 'sdhcqsboard'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
        this.items = [{
        	xtype : 'sdhcqsboardpanel'
        }];
		this.callParent();
	}
});
