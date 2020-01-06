Ext.define('app.view.projectmodel.ProjectmodelController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.projectmodel',
    
    control : {
    	'app-projectmodel' : {
    		afterrender : function(comp,eOpts){
    			//Ext.gzqUtil.initstoreQueryParmas(gstore,gparentpanel);
    		}
    	},
    	'app-projectmodel projectmodelwindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	'app-projectmodel projectmodelwindow projectmodel1subgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			var currgrid = btn.up("projectmodel1subgrid");
    			var currsubstore = currgrid.getStore();
    			var currmodel = currsubstore.getModel();
    			currgrid.getStore().add(currmodel.create());
    			currgrid.findPlugin("cellediting").startEditByPosition({row:  currsubstore.getCount() - 1 ,column: 3});
    		}
    	}
    }
});
