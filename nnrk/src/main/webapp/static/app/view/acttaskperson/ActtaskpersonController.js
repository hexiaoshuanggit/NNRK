Ext.define('app.view.acttaskperson.ActtaskpersonController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    
    alias: 'controller.acttaskperson',
    
    control : {
    	'app-acttaskperson' : {
    		afterrender : function(comp,eOpts){
    			//Ext.gzqUtil.initstoreQueryParmas(gstore,gparentpanel);
    		}
    	},
    	'app-acttaskperson acttaskpersonwindow button[ref=save]' : {
    		click : function(btn,e,eOpts){
    			Ext.gzqUtil.gwinform4save(btn);
    		}
    	},
    	'app-acttaskperson acttaskpersonmaingrid' : {
    		//1. 动态生成tbar ,  2. 刷新子表数据
    		actioncolumnclick : function(grid,rec){
    			//为该表单动态增加该用户任务所需处理的按钮(动态生成tbar )
    			var outlines = rec.get("outgoings").split(",");
    			var opwin = grid.up("app-acttaskperson").down("acttaskpersonwindow");
    			var dytbar = opwin.down("toolbar[ref=dynamicbar]");
    			if(!dytbar){
    				dytbar = opwin.addDocked({
        				xtype: 'toolbar',dock: 'top',ref:'dynamicbar', items: [],style : 'background-color : #F2F2F2',
        			})[0];
    			}
    			dytbar.removeAll();
    			for(var ti = 0 ; ti < outlines.length;  ti++ ){
    				dytbar.add( { xtype: 'buttontransparent', glyph : 0xf046,text: outlines[ti]
    				   ,handler : function(abtn,e,eOtps){
    					    abtn.disable();
    					    var gcomment = abtn.up("acttaskpersonwindow").down("textarea[name=gcomment]").getValue();
    						Ext.Ajax.request({
    						    url: window.webContextValue + "/acttask/submit" ,
    						    method : "POST",timeout : 120000,
    						    params : {"taskId" : rec.getId(),"comment" : gcomment 
    						    	,"outgoingTransitionName" : abtn.getText(),"userName" : window.lognUserName
    						    	,"formDatas" : ""},
    						    success : function(response){
    					    		Ext.MessageBox.alert("操作成功", "任务已 "  + abtn.getText() );
    						    },
    						    failure : function(){
    						    	abtn.enable();
    						    }
    						});
    				   }
    				}); 
    			}
    			
    			//2. 刷新子表的信息(根据businesskey)
    			opwin.down("acttaskpersonsubcommentgrid").getStore().proxy.extraParams = {
    				"params[= businessKey]" : rec.get("businessKey") 
    			}
    			opwin.down("acttaskpersonsubcommentgrid").getStore().load();
    			opwin.down("acttaskpersonsubfilegrid").getStore().proxy.extraParams = {
    				"params[= recordId]" : rec.get("businessKey")
    			}
    			opwin.down("acttaskpersonsubfilegrid").getStore().load();
    		}
    	},
    	'app-acttaskperson acttaskpersonwindow acttaskpersonsubgrid button[ref=subadd]' : {
    		click : function(btn,e,eOpts){
    			var currgrid = btn.up("acttaskpersonsubgrid");
    			var currsubstore = currgrid.getStore();
    			var currmodel = currsubstore.getModel();
    			currgrid.getStore().add(currmodel.create());
    			currgrid.findPlugin("cellediting").startEditByPosition({row:  currsubstore.getCount() - 1 ,column: 3});
    		}
    	}
    }
});
