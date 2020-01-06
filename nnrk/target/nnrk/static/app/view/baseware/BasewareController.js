Ext.define('app.view.baseware.BasewareController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.baseware',
    
    control : {
    	'app-baseware' : {
    		afterrender : function(comp,eOpts){
    			//Ext.gzqUtil.initstoreQueryParmas(gstore,gparentpanel);
    		}
    	},
    	'app-baseware basewarewindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	'app-baseware basewarewindow basewaresubgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			var currgrid = btn.up("basewaresubgrid");
    			var currsubstore = currgrid.getStore();
    			var currmodel = currsubstore.getModel();
    			currgrid.getStore().add(currmodel.create());
    			currgrid.findPlugin("cellediting").startEditByPosition({row:  currsubstore.getCount() - 1 ,column: 3});
    		}
    	}
    }
});
