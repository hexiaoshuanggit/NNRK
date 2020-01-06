Ext.define('app.view.problem.ProblemController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.problem',
    
    control : {
    	'app-problem' : {
    		afterrender : function(comp,eOpts){
    			var defgrid = comp.down("problemmaingrid");
    			Ext.gzqUtil.initstoreQueryParmas(defgrid.getStore(),defgrid);
    		}
    	},
    	'app-problem problemwindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	'app-problem problemwindow problem1subgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			var currgrid = btn.up("problem1subgrid");
    			var currsubstore = currgrid.getStore();
    			var currmodel = currsubstore.getModel();
    			currgrid.getStore().add(currmodel.create());
    			currgrid.findPlugin("cellediting").startEditByPosition({row:  currsubstore.getCount() - 1 ,column: 3});
    		}
    	}
    	,
    	'app-problem problemwindow problem1subgrid button[ref=subchildadd]' : {
    		click : function(btn,e,eOpts){
    			var currgrid = btn.up("problem1subgrid");
    			var currsubstore = currgrid.getStore();
    			var currmodel = currsubstore.getModel();
    			currgrid.getStore().add(currmodel.create());
    			currgrid.findPlugin("cellediting").startEditByPosition({row:  currsubstore.getCount() - 1 ,column: 3});
    		}
    	}
    }
});
