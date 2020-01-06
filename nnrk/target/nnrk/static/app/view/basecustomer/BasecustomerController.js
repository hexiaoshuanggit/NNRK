Ext.define('app.view.basecustomer.BasecustomerController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.basecustomer',
    
    control : {
    	'app-basecustomer' : {
    		afterrender : function(comp,eOpts){
    			var mgrid = comp.down("basecustomermaingrid");
    			Ext.gzqUtil.initstoreQueryParmas(mgrid.getStore(),mgrid);
    		}
    	},
    	'app-basecustomer basecustomerwindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	'app-basecustomer basecustomerwindow basecustomersubgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			var currgrid = btn.up("basecustomersubgrid");
    			var currsubstore = currgrid.getStore();
    			var currmodel = currsubstore.getModel();
    			currgrid.getStore().add(currmodel.create());
    			currgrid.findPlugin("cellediting").startEditByPosition({row:  currsubstore.getCount() - 1 ,column: 3});
    		}
    	}
    }
});
