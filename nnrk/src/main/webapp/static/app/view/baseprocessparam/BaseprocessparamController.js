Ext.define('app.view.baseprocessparam.BaseprocessparamController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.baseprocessparam',
    
    control : {
    	'app-baseprocessparam' : {
    		afterrender : function(comp,eOpts){
    			var openwin1 = comp.down("baseprocessparamwindow").down("baseprocessparamopenwin");
    			Ext.gzqUtil.initstoreQueryParmas(openwin1.down("grid").getStore(),openwin1);
    			
    			var openwin2 = comp.down("baseprocessparamwindow").down("baseprocessparammrlwin");
    			Ext.gzqUtil.initstoreQueryParmas(openwin2.down("grid").getStore(),openwin2);
    		}
    	},
    	'app-baseprocessparam baseprocessparamwindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	
    	"app-baseprocessparam baseprocessparamwindow button[ref=doccheck]":{
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.baseWinBarRequset(btn,'/baseprocessparam/check',"审核成功");
    		}
    	},
    	"app-baseprocessparam baseprocessparamwindow button[ref=docuncheck]":{
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.baseWinBarRequset(btn,'/baseprocessparam/uncheck',"弃审成功");
    		}
    	},
    	
    	'app-baseprocessparam baseprocessparamwindow combobox[name=workCenterName]' : {
    		select : function(combo, record, eOpts ){
    			var tplwin = combo.up("baseprocessparamwindow");
    			tplwin.down("textfield[name=workCenterId]").setValue(record.get('id'));
    		}
    	},
    	
    	'app-baseprocessparam baseprocessparamwindow combobox[name=opCode]' : {
    		select : function(combo, record, eOpts ){
    			var tplwin = combo.up("baseprocessparamwindow");
    			tplwin.down("textfield[name=opId]").setValue(record.get('id'));
    			tplwin.down("textfield[name=opName]").setValue(record.get('name'));
    		}
    	},
    	
    	'app-baseprocessparam baseprocessparamwindow combobox[name=equipName]' : {
    		select : function(combo, record, eOpts ){
    			var tplwin = combo.up("baseprocessparamwindow");
    			tplwin.down("textfield[name=equipId]").setValue(record.get('id'));
    		}
    	},
    	
    	'app-baseprocessparam baseprocessparamwindow form textfield[name=mrlCode]' : {
    		barclick : function(tf,e,eOpts){
    			tf.up("baseprocessparamwindow").down("baseprocessparammrlwin").show();
    		}
    	},
    	
    	'app-baseprocessparam baseprocessparamwindow baseprocessparamsubgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			btn.up("baseprocessparamwindow").down("baseprocessparamopenwin").show();
    		}
    	}
    }
});
