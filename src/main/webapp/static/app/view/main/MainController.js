/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.window.MessageBox'
    ],
    alias: 'controller.main',
    control : {
    	'app-main' : {
    		afterrender : function( container, eOpts ){
//    			Ext.MyExtJsHelper.initComboboxDatas("baseopcomstoreId","app.store.base.OpComStore");
//    			Ext.MyExtJsHelper.initComboboxDatas("baseemployeecomstoreId","app.store.base.EmployeeComStore");
//    			
//    			Ext.MyExtJsHelper.initComboboxDatas("basedocstatuscomstoreId","app.store.base.DocStatusComStore");
//    			Ext.MyExtJsHelper.initComboboxDatas("basechktypecomstoreId","app.store.base.ChkTypeComStore");
//    			Ext.MyExtJsHelper.initComboboxDatas("basechktypecomstore2Id","app.store.base.ChkTypeComStore2");
//    			
//    			Ext.MyExtJsHelper.initComboboxDatas("baseewarelocationId","app.store.base.WareLocationComStore");
    		}
    	},
    	//通用的审核 和 弃审 按钮
    	"app-main basecontainer[ref=mymaincontainer] basewindow[ref=mymainwin] form textfield[name=docStatus]" : {
    		change : function(tf,newValue, oldValue, eOpts){
    			var checkbtn = tf.up("basewindow[ref=mymainwin]").down("buttontransparent[ref=doccheck]");
    			if(checkbtn){    				
    				checkbtn[newValue == "草稿" ? 'enable' : 'disable' ]();
    			}
    			var uncheckbtn = tf.up("basewindow[ref=mymainwin]").down("buttontransparent[ref=docuncheck]");
    			if(uncheckbtn){
    				uncheckbtn[newValue == "已审核" ? 'enable' : 'disable' ]();
    			}
    		}
    	},
    	
    	//菜单颜色显示
    	"app-main maintop buttonmainmenu menu" : {
    		afterrender : function(menu,eOpts) {
    			var htmlelement = document.getElementById(menu.id);
    			var fontchilds = htmlelement.querySelectorAll("div.x-menu-item-glyph");
    			for(var iloop = 0; iloop < fontchilds.length; iloop++){
    				fontchilds[iloop].style.color = '#0000CD';
    			}
    			var spanchilds = htmlelement.getElementsByTagName("span");
    			for(var iloop = 0; iloop < spanchilds.length; iloop++){
    				spanchilds[iloop].style.color = 'blue';
    			}
    		}
    	}
    },
    onChangePwdClick : function(btn,e,eOpts){
    	var pwdWin = Ext.create('widget.window', {
    		 title : '密码修改',width: 300,
    	     height: 150,
    	     layout: { type: 'table',columns: 1},
		  	padding : '10 5 10 5',
    	     items : [{
    	    	 xtype: 'textfield',fieldLabel : '新密码',
    	    	 labelWidth : 60, inputType : 'password',
    	    	 allowBlank :false,minLength : 6
    	     },{
    	    	 xtype : 'button',
    	    	 text : '修改',
    	    	 handler : function(btn){
    	    		 var pwdtxt = btn.previousSibling("textfield");
    	    		if( pwdtxt.validate()){
	    	    		 Ext.Ajax.request({
	    	    		    url:  window.webContextValue + '/manager/changpwd',
	    	 			    method : "POST",
	    	 			    params: {
	    	 			    	password : pwdtxt.getValue()
	    				    },
	    				    success: function(response){
	    				    	Ext.MessageBox.alert("密码修改","修改成功");
	    				    	pwdWin.hide();
	    				    }
	    	    		 });
    	    		}
    	    	 }
    	     }]
    	 });
    	pwdWin.show();
    },
    onMainMenuClick : function(btn,e,eOpts){
    	var pCenter = btn.up("app-main").down("maincenter");
    	Ext.gzqUtil.openMainMenu(pCenter,{
			id : btn.id,
			text : btn.text,
			module : btn.module
		});
    }
});
