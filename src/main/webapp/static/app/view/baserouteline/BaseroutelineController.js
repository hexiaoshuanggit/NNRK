Ext.define('app.view.baserouteline.BaseroutelineController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.baserouteline',
    
    control : {
    	'app-baserouteline' : {
    		afterrender : function(comp,eOpts){
    			var gmaingrid = comp.down("baseroutelinemaingrid");
    			var opopewin = comp.down("baseroutelinewindow").down("baseroutelineopenwin");
    			var mrlopewin = comp.down("baseroutelinewindow").down("baseroutelinemrlopenwin");
    			
    			Ext.gzqUtil.initstoreQueryParmas(gmaingrid.getStore() ,gmaingrid);
    			Ext.gzqUtil.initstoreQueryParmas(opopewin.down("popupgrid").getStore() ,opopewin);
    			Ext.gzqUtil.initstoreQueryParmas(mrlopewin.down("popupgrid").getStore(),mrlopewin);
    		}
    	},
    	'app-baserouteline baseroutelinewindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	'app-baserouteline baseroutelinewindow baseroutelinesubgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			btn.up("baseroutelinewindow").down("baseroutelineopenwin").show();
    		}
    	},
    	'app-baserouteline baseroutelinewindow baseroutelinesubgrid2 button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			btn.up("baseroutelinewindow").down("baseroutelinemrlopenwin").show();
    		}
    	}
    }
});
