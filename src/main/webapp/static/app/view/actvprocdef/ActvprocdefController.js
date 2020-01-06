Ext.define('app.view.actvprocdef.ActvprocdefController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.actvprocdef',
    
    control : {
    	'app-actvprocdef' : {
    		afterrender : function(comp,eOpts){
    			//Ext.gzqUtil.initstoreQueryParmas(gstore,gparentpanel);
    		}
    	},
    	'app-actvprocdef  actvprocdefmaingrid button[ref=add2]' : {
    		click : function(btn,e,eOpts){
    			btn.up("app-actvprocdef").down("actfileuploadwin").show();
    		}
    	},
    	'app-actvprocdef actvprocdefwindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	'app-actvprocdef actvprocdefwindow actvprocdefsubgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			var currgrid = btn.up("actvprocdefsubgrid");
    			var currsubstore = currgrid.getStore();
    			var currmodel = currsubstore.getModel();
    			currgrid.getStore().add(currmodel.create());
    			currgrid.findPlugin("cellediting").startEditByPosition({row:  currsubstore.getCount() - 1 ,column: 3});
    		}
    	}
    }
});
