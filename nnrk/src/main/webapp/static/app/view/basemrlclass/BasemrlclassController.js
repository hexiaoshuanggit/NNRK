Ext.define('app.view.basemrlclass.BasemrlclassController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.basemrlclass',
    
    control : {
    	'app-basemrlclass' : {
    		afterrender : function(comp,eOpts){
    			//Ext.gzqUtil.initstoreQueryParmas(gstore,gparentpanel);
//    			var treemaingrid = comp.down("basemrlclassmaingrid");
//    			treemaingrid.expandAll();
    		}
    	},
    	'app-basemrlclass basemrlclasswindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    			//重新刷新物料组数据
    			Ext.MyExtJsHelper.reloadStore("basemrlclassstoreId");
    		}
    	},
    	'app-basemrlclass basemrlclasswindow basemrlclasssubgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			var currgrid = btn.up("basemrlclasssubgrid");
    			var currsubstore = currgrid.getStore();
    			var currmodel = currsubstore.getModel();
    			currgrid.getStore().add(currmodel.create());
    			currgrid.findPlugin("cellediting").startEditByPosition({row:  currsubstore.getCount() - 1 ,column: 3});
    		}
    	}
    }
});
