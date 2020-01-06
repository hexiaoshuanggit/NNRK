Ext.define('app.view.project.ProjectController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.project',
    
    control : {
    	'app-project' : {
    		afterrender : function(comp,eOpts){
    			var defgrid = comp.down("projectmaingrid");
    			Ext.gzqUtil.initstoreQueryParmas(defgrid.getStore(),defgrid);
    		}
    	},
    	'app-project projectwindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	'app-project projectwindow project1subgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			var currgrid = btn.up("project1subgrid");
    			var currsubstore = currgrid.getStore();
    			var currmodel = currsubstore.getModel();
    			currgrid.getStore().add(currmodel.create());
    			currgrid.findPlugin("cellediting").startEditByPosition({row:  currsubstore.getCount() - 1 ,column: 3});
    		}
    	}
    }
});
