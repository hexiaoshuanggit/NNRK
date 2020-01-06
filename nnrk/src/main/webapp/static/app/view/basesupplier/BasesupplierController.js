Ext.define('app.view.basesupplier.BasesupplierController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.basesupplier',
    
    control : {
    	'app-basesupplier' : {
    		afterrender : function(comp,eOpts){
    			var  mgrid = comp.down("basesuppliermaingrid");
    			Ext.gzqUtil.initstoreQueryParmas(mgrid.getStore(),mgrid);
    		}
    	},
    	'app-basesupplier basesupplierwindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	'app-basesupplier basesupplierwindow basesuppliersubgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			var currgrid = btn.up("basesuppliersubgrid");
    			var currsubstore = currgrid.getStore();
    			var currmodel = currsubstore.getModel();
    			currgrid.getStore().add(currmodel.create());
    			currgrid.findPlugin("cellediting").startEditByPosition({row:  currsubstore.getCount() - 1 ,column: 3});
    		}
    	}
    }
});
