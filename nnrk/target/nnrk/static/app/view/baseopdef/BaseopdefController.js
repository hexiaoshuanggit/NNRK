Ext.define('app.view.baseopdef.BaseopdefController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.baseopdef',
    
    control : {
    	'app-baseopdef' : {
    		afterrender : function(comp,eOpts){
    			var gmaingrid = comp.down("baseopdefmaingrid");
    			Ext.gzqUtil.initstoreQueryParmas(gmaingrid.getStore(),gmaingrid);
    		}
    	},
    	'app-baseopdef baseopdefwindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	'app-baseopdef baseopdefwindow baseopdefsubgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			var currgrid = btn.up("baseopdefsubgrid");
    			var currsubstore = currgrid.getStore();
    			var currmodel = currsubstore.getModel();
    			currgrid.getStore().add(currmodel.create());
    			currgrid.findPlugin("cellediting").startEditByPosition({row:  currsubstore.getCount() - 1 ,column: 3});
    		}
    	}
    }
});
