Ext.define('app.view.problem.Problem', {
    extend: 'app.ux.container.BaseContainer',
    requires: [
        'app.view.problem.ProblemController',
        'app.view.problem.ProblemModel',
        'app.view.problem.component.ProblemMainGrid',
        'app.view.problem.component.ProblemWindow'
    ],
    xtype: 'app-problem',
	controller: 'problem',
    viewModel: {
        type: 'problem'
    },
    initComponent : function() {
    	var me = this;
    	var viewModel = me.getViewModel();
    	
    	var uiserverinfos = app.ux.UiServer.getinfosfast("problem");  //  VOSIGN
    	viewModel.set("mainServersource",uiserverinfos);
    	
        this.items = [{
        	xtype : 'problemmaingrid'
        },{
        	xtype : 'problemwindow',
        	hidden : true
        }];
		this.callParent();
	}
});
