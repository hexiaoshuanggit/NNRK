/**
 * 系统主页的顶部区域，主要放置系统名称，菜单，和一些快捷按钮
 */
Ext.define('app.view.main.region.Top', {
	extend : 'Ext.toolbar.Toolbar',
	alias : 'widget.maintop', // 定义了这个组件的xtype类型为maintop
	uses : [ 'app.ux.ButtonTransparent', 'app.view.main.menu.ButtonMainMenu' ],
	defaults : {
		xtype : 'buttontransparent'
	},
	style : 'background-color : white',
	height : 35,
			
	initComponent : function() {
		var me = this;
		
		Ext.Ajax.request({  
            url : window.webContextValue + '/sys/menus',
            async : false,
            success : function(response) {  
            	var resptext = response.responseText;
            	var chulihou = resptext.replace(/\"menu\":\[\]/g, "handler:'onMainMenuClick'");
                var texts = Ext.JSON.decode(chulihou);
                window.gzqmenus = texts;
            }  
        });
		
		var topbars = [{
			xtype : 'buttonmainmenu',
			tooltip : '菜单',id : 'mybuttonmainmenu-btnId'
		},{
			xtype : 'label',
			bind : {
				text : '{system.name}' // text值绑定到system.name
			},
			style : 'font-size:20px;color:black;'
		}];
		me.items = topbars;
		me.items = me.items.concat (['->',{
			xtype : 'label',
			style : 'color:black;font-size:16px;',
			bind : {text : ' {user.name}'}
		},{
				glyph : 0xf021,
				tooltip : "刷新控制台",
				handler : function(btn) {
					var mconsole = Ext.getCmp("mymaincentertabpanel-id").down(
							"myerpconsole");
					mconsole.down("sdhcindexboardpanel2").refresh();
				}
		},{
				glyph : 0xf044,
				tooltip : "打开我的任务",
				handler : function(busbtn) {
					try {
						var btn = Ext.getCmp("mybuttonmainmenu-btnId").down(
								"[module=acttaskperson.Acttaskperson]");
						var pCenter = busbtn.up("app-main").down("maincenter");
						var newTab = Ext.gzqUtil.openMainMenu(pCenter, {
							id : btn.id,
							text : btn.text,
							module : btn.module
						});
					} catch (e) {
					}
				}
		}, {
				glyph : 0xf084,
				tooltip : "修改密码",
				handler : 'onChangePwdClick'
		}, {
				tooltip : "注销",
				href : webContextValue + '/manager/logout',
				hrefTarget : "_self",
				glyph : 0xf011
		} ]);
		me.callParent(arguments);
	}
});