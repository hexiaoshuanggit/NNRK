Ext.define('app.view.baseprocessitem.BaseprocessitemController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.baseprocessitem',
    
    control : {
    	'app-baseprocessitem' : {
    		afterrender : function(comp,eOpts){
    			var mgrid = comp.down("baseprocessitemmaingrid");
    			Ext.gzqUtil.initstoreQueryParmas(mgrid.getStore(),mgrid);
    		}
    	},
    	'app-baseprocessitem baseprocessitemwindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	'app-baseprocessitem baseprocessitemwindow baseprocessitemsubgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			var currgrid = btn.up("baseprocessitemsubgrid");
    			var currsubstore = currgrid.getStore();
    			var currmodel = currsubstore.getModel();
    			currgrid.getStore().add(currmodel.create());
    			currgrid.findPlugin("cellediting").startEditByPosition({row:  currsubstore.getCount() - 1 ,column: 3});
    		}
    	}
    }
});
