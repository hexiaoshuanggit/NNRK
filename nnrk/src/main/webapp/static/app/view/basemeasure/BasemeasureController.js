Ext.define('app.view.basemeasure.BasemeasureController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.basemeasure',
    
    control : {
    	'app-basemeasure' : {
    		afterrender : function(comp,eOpts){
    			//Ext.gzqUtil.initstoreQueryParmas(gstore,gparentpanel);
    		}
    	},
    	'app-basemeasure basemeasurewindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	'app-basemeasure basemeasurewindow basemeasuresubgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			var currgrid = btn.up("basemeasuresubgrid");
    			var currsubstore = currgrid.getStore();
    			var currmodel = currsubstore.getModel();
    			currgrid.getStore().add(currmodel.create());
    			currgrid.findPlugin("cellediting").startEditByPosition({row:  currsubstore.getCount() - 1 ,column: 3});
    		}
    	}
    }
});
