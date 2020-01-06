Ext.define('app.view.acttaskhistory.ActtaskhistoryController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.acttaskhistory',
    
    control : {
    	'app-acttaskhistory' : {
    		afterrender : function(comp,eOpts){
    			//Ext.gzqUtil.initstoreQueryParmas(gstore,gparentpanel);
    		}
    	},
    	'app-acttaskhistory acttaskhistorywindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	'app-acttaskhistory acttaskhistorymaingrid' : {
    		//1. 动态生成tbar ,  2. 刷新子表数据
    		actioncolumnclick : function(grid,rec){
    			var opwin = grid.up("app-acttaskhistory").down("acttaskhistorywindow");
    			opwin.down("acttaskhistorysubcommentgrid").getStore().proxy.extraParams = {
    				"params[= businessKey]" : rec.get("businessKey") 
    			}
    			opwin.down("acttaskhistorysubcommentgrid").getStore().load();
    			opwin.down("acttaskhistorysubfilegrid").getStore().proxy.extraParams = {
    				"params[= recordId]" : rec.get("businessKey")
    			}
    			opwin.down("acttaskhistorysubfilegrid").getStore().load();
    		}
    	},
    	'app-acttaskhistory acttaskhistorywindow acttaskhistorysubgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			var currgrid = btn.up("acttaskhistorysubgrid");
    			var currsubstore = currgrid.getStore();
    			var currmodel = currsubstore.getModel();
    			currgrid.getStore().add(currmodel.create());
    			currgrid.findPlugin("cellediting").startEditByPosition({row:  currsubstore.getCount() - 1 ,column: 3});
    		}
    	}
    }
});
