Ext.define('app.view.missiondefinition.MissiondefinitionController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.missiondefinition',
    
    control : {
    	'app-missiondefinition' : {
    		afterrender : function(comp,eOpts){
    			var defgrid = comp.down("missiondefinitionmaingrid");
    			Ext.gzqUtil.initstoreQueryParmas(defgrid.getStore(),defgrid);
    		}
    	},
    	'app-missiondefinition missiondefinitionwindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	'app-missiondefinition missiondefinitionwindow missiondefinition1subgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			var currgrid = btn.up("missiondefinition1subgrid");
    			var currsubstore = currgrid.getStore();
    			var currmodel = currsubstore.getModel();
    			currgrid.getStore().add(currmodel.create());
    			currgrid.findPlugin("cellediting").startEditByPosition({row:  currsubstore.getCount() - 1 ,column: 3});
    		}
    	}
    }
});
