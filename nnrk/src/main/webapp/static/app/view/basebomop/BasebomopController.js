Ext.define('app.view.basebomop.BasebomopController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.basebomop',
    
    control : {
    	'app-basebomop' : {
    		afterrender : function(comp,eOpts){
    			Ext.MyExtJsHelper.initComboboxDatas("baseroutelineopcomstoreId","app.store.base.RouteLineOpComStore");
    			
    			var gmgrid = comp.down("basebomopmaingrid");
    			Ext.gzqUtil.initstoreQueryParmas(gmgrid.getStore(),gmgrid);
    			
    			var openwin = comp.down("basebomopwindow").down("basebomopopenwin");
    			Ext.gzqUtil.initstoreQueryParmas(openwin.down("popupgrid").getStore(),openwin);
    			
    			var openwin3 = comp.down("basebomopwindow").down("basebomopopenwin3");
    			Ext.gzqUtil.initstoreQueryParmas(openwin3.down("popupgrid").getStore(),openwin3);
    		}
    	},
    	'app-basebomop basebomopwindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	
    	'app-basebomop basebomopmaingrid button[ref=syncerp]' : {
    		click : function(btn,e,eOpts){
    			//从sap同步数据
    			btn.disable();
    			Ext.Ajax.request({
				    url: window.webContextValue + '/basebomop/syncerp',
				    method : "POST",timeout : 120000,
				    params : {},
				    success : function(response){
				    	btn.up("basebomopmaingrid").getStore().load();
			    		Ext.MessageBox.alert("操作成功","同步成功");
				    },
				    callback : function(){
				    	btn.enable();
				    }
				});
    		}
    	},
    	
    	'app-basebomop basebomopwindow textfield[name=mrlCode]' : {
    		barclick : function(btn,e,eOpts){
    			btn.up("basebomopwindow").down("basebomopopenwin3").show();
    		}
    	},
    	'app-basebomop basebomopwindow textfield[name=routelineId]' : {
    		change : function( tf, newValue, oldValue, eOpts ){
    			var lineopstore = Ext.getStore("baseroutelineopcomstoreId");
    			lineopstore.load({
    				params : {
    					"params[= t1.MAIN_ID_]" : newValue //record.get('routlineId')
    				}
    			})
    		}
    	},
    	'app-basebomop basebomopwindow textfield[name=routelineName]' : {
    		barclick : function(btn,e,eOpts){
    			btn.up("basebomopwindow").down("basebomopopenwin4").show();
    		}
    	},
    	'app-basebomop basebomopwindow basebomopsubgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			btn.up("basebomopwindow").down("basebomopopenwin").show();
    		}
    	},
    	'app-basebomop basebomopwindow basebomopsubgrid' : {
    		beforeedit : function( editor, context, eOpts ){
    			if( context.column.dataIndex == "opCode" ){
    				var formfield = context.column.getEditor(context.record);
    				formfield.grec = context.record;
    			}
    		}
    	},
    	'app-basebomop basebomopwindow basebomopsubgrid combobox[name=opCode]' : {
    		select : function( combo, record, eOpts ){
    			combo.grec.set("opdefId",record.get("opdefId"));
    			combo.grec.set("opName",record.get("name"));
    		}
    	},
    	
    	"app-basebomop basebomopwindow button[ref=doccheck]":{
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.baseWinBarRequset(btn,'/basebomop/check',"审核成功");
    		}
    	},
    	"app-basebomop basebomopwindow button[ref=docuncheck]":{
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.baseWinBarRequset(btn,'/basebomop/uncheck',"弃审成功");
    		}
    	},
    }
});
