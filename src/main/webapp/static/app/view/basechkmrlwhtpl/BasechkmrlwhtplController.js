Ext.define('app.view.basechkmrlwhtpl.BasechkmrlwhtplController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.basechkmrlwhtpl',
    
    control : {
    	'app-basechkmrlwhtpl' : {
    		afterrender : function(comp,eOpts){
    			var mgrid = comp.down("basechkmrlwhtplmaingrid");
    			Ext.gzqUtil.initstoreQueryParmas(mgrid.getStore(),mgrid);
    			
    			var openwin = comp.down("basechkmrlwhtplwindow").down("basechkmrlwhtplopenwin");
    			Ext.gzqUtil.initstoreQueryParmas(openwin.down("popupgrid").getStore(),openwin);
    			
    			var openwin2 = comp.down("basechkmrlwhtplwindow").down("basechkmrlwhtplopenwin2");
    			Ext.gzqUtil.initstoreQueryParmas(openwin2.down("popupgrid").getStore(),openwin2);
    		}
    	},
    	'app-basechkmrlwhtpl basechkmrlwhtplwindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	
    	'app-basechkmrlwhtpl basechkmrlwhtplwindow textfield[name=mrlCode]' : {
    		barclick : function(btn,e,eOpts){
    			btn.up("basechkmrlwhtplwindow").down("basechkmrlwhtplopenwin2").show();
    		}
    	},
    	
    	"app-basechkmrlwhtpl basechkmrlwhtplwindow button[ref=doccheck]":{
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.baseWinBarRequset(btn,'/basechkmrlwhtpl/check',"审核成功");
    		}
    	},
    	"app-basechkmrlwhtpl basechkmrlwhtplwindow button[ref=docuncheck]":{
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.baseWinBarRequset(btn,'/basechkmrlwhtpl/uncheck',"弃审成功");
    		}
    	},
    	
    	'app-basechkmrlwhtpl basechkmrlwhtplwindow basechkmrlwhtplsubgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			btn.up("basechkmrlwhtplwindow").down("basechkmrlwhtplopenwin").show();
    		}
    	}
    }
});
