Ext.define('app.view.main.comp.MenuPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.mmenupanel',
	layout: {
		type: 'table',
		columns: 4
	}
	,border: 0,
	initComponent : function() {
		var me = this;
		
		var panelmenu = [];
		var tbcolspan = 4;
		
		Ext.Array.forEach(window.gzqmenus,function(pmeun){
			panelmenu.push({
				html: pmeun.text ,
	            colspan: tbcolspan
			});
			Ext.Array.forEach(pmeun.menu,function(cmenu){
				 panelmenu.push({
					xtype : "button",text : cmenu.text,margin : '5 5 5 5',
				    width : 150,height : 50,handler : function(bbbtn){
				    	var pCenter = me.up("app-main").down("maincenter");
				    	Ext.gzqUtil.openMainMenu(pCenter,{
							id : cmenu.id,
							text : cmenu.text,
							module : cmenu.module
						});
				    }
				});
			});
			for(var iii = 0; iii < ( tbcolspan -  (pmeun.menu.length % tbcolspan) ) ; iii++ ){
				 panelmenu.push({xtype : 'label'});
			 }
		});
		me.items = panelmenu;
	    this.callParent();
	}

})