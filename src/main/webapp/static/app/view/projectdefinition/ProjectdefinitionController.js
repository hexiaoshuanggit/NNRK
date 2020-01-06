Ext.define('app.view.projectdefinition.ProjectdefinitionController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.projectdefinition',
    
    control : {
    	'app-projectdefinition' : {
    		afterrender : function(comp,eOpts){
    			var defgrid = comp.down("projectdefinitionmaingrid");
    			Ext.gzqUtil.initstoreQueryParmas(defgrid.getStore(),defgrid);
    		}
    	},
    	'app-projectdefinition projectdefinitionwindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	'app-projectdefinition projectdefinitionwindow projectdefinition1subgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			var currgrid = btn.up("projectdefinition1subgrid");
    			var currsubstore = currgrid.getStore();
    			var currmodel = currsubstore.getModel();
    			currgrid.getStore().add(currmodel.create());
    			currgrid.findPlugin("cellediting").startEditByPosition({row:  currsubstore.getCount() - 1 ,column: 3});
    		}
    	}
    }
});
