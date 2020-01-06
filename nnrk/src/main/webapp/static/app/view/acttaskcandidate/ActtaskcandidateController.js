Ext.define('app.view.acttaskcandidate.ActtaskcandidateController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.acttaskcandidate',
    
    control : {
    	'app-acttaskcandidate' : {
    		afterrender : function(comp,eOpts){
    			//Ext.gzqUtil.initstoreQueryParmas(gstore,gparentpanel);
    		}
    	},
    	'app-acttaskcandidate acttaskcandidatewindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	'app-acttaskcandidate acttaskcandidatewindow acttaskcandidatesubgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			var currgrid = btn.up("acttaskcandidatesubgrid");
    			var currsubstore = currgrid.getStore();
    			var currmodel = currsubstore.getModel();
    			currgrid.getStore().add(currmodel.create());
    			currgrid.findPlugin("cellediting").startEditByPosition({row:  currsubstore.getCount() - 1 ,column: 3});
    		}
    	}
    }
});
