Ext.define('app.view.basechkmrloptpl.BasechkmrloptplController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.basechkmrloptpl',
    
    control : {
    	'app-basechkmrloptpl' : {
    		afterrender : function(comp,eOpts){
    			var mgird = comp.down("basechkmrloptplmaingrid");
    			Ext.gzqUtil.initstoreQueryParmas(mgird.getStore(),mgird);
    			
    			var openwin = comp.down("basechkmrloptplwindow").down("basechkmrloptplopenwin");
    			Ext.gzqUtil.initstoreQueryParmas(openwin.down("popupgrid").getStore(),openwin);
    			
    			var openwin2 = comp.down("basechkmrloptplwindow").down("basechkmrloptplopenwin2");
    			Ext.gzqUtil.initstoreQueryParmas(openwin2.down("popupgrid").getStore(),openwin2);
    		}
    	},
    	'app-basechkmrloptpl basechkmrloptplwindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	'app-basechkmrloptpl basechkmrloptplwindow textfield[name=mrlCode]' : {
    		barclick : function(btn, e, eOpts ){
    			btn.up("basechkmrloptplwindow").down("basechkmrloptplopenwin2").show();
    		}
    	},
    	'app-basechkmrloptpl basechkmrloptplwindow combobox[name=opId]' : {
    		select : function(combo, record, eOpts ){
    			var tplwin = combo.up("basechkmrloptplwindow");
    			tplwin.down("textfield[name=opName]").setValue(record.get('name'));
    			tplwin.down("textfield[name=opCode]").setValue(record.get('code'));
    		}
    	},
    	
    	
    	
    	
    	
    	
    	"app-basechkmrloptpl basechkmrloptplwindow button[ref=doccheck]":{
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.baseWinBarRequset(btn,'/basechkmrloptpl/check',"审核成功");
    		}
    	},
    	"app-basechkmrloptpl basechkmrloptplwindow button[ref=docuncheck]":{
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.baseWinBarRequset(btn,'/basechkmrloptpl/uncheck',"弃审成功");
    		}
    	},
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	'app-basechkmrloptpl basechkmrloptplwindow basechkmrloptplsubgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			btn.up("basechkmrloptplwindow").down("basechkmrloptplopenwin").show();
    		}
    	}
    }
});
