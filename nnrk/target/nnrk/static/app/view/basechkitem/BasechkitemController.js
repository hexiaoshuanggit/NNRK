Ext.define('app.view.basechkitem.BasechkitemController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.basechkitem',
    
    control : {
    	'app-basechkitem' : {
    		afterrender : function(comp,eOpts){
    			var mgird = comp.down("basechkitemmaingrid");
    			Ext.gzqUtil.initstoreQueryParmas(mgird.getStore(),mgird);
    		}
    	},
    	'app-basechkitem basechkitemwindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	
    	"app-basechkitem basechkitemwindow button[ref=syncTpl]":{
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.baseWinBarRequset(btn,'/basechkitem/synctpl',"检测模板相关项已更新");
    		}
    	},
    	
    	'app-basechkitem basechkitemwindow basechkitemsubgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			var currgrid = btn.up("basechkitemsubgrid");
    			var currsubstore = currgrid.getStore();
    			var currmodel = currsubstore.getModel();
    			currgrid.getStore().add(currmodel.create());
    			currgrid.findPlugin("cellediting").startEditByPosition({row:  currsubstore.getCount() - 1 ,column: 3});
    		}
    	}
    }
});
