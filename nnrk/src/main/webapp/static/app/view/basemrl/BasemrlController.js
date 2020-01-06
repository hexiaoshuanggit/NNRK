Ext.define('app.view.basemrl.BasemrlController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.basemrl',
    
    control : {
    	'app-basemrl' : {
    		afterrender : function(comp,eOpts){
    			var mgrid = comp.down("basemrlmaingrid");
    			Ext.gzqUtil.initstoreQueryParmas(mgrid.getStore(),mgrid);
    		}
    	},
    	'app-basemrl basemrlwindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	'app-basemrl basemrlwindow basemrlsubgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			var currgrid = btn.up("basemrlsubgrid");
    			var currsubstore = currgrid.getStore();
    			var currmodel = currsubstore.getModel();
    			currgrid.getStore().add(currmodel.create());
    			currgrid.findPlugin("cellediting").startEditByPosition({row:  currsubstore.getCount() - 1 ,column: 3});
    		}
    	}
    }
});
