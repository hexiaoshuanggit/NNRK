/**
 * 显示在顶部的按钮菜单，可以切换至标准菜单，菜单树
 */
Ext.define('app.view.main.menu.ButtonMainMenu', {
//			extend : 'app.view.main.menu.ButtonTransparent',
	        extend : 'app.ux.ButtonTransparent',
			alias : 'widget.buttonmainmenu',

			text : '菜单',
			glyph : 0xf17a,
			listeners : {
				afterrender : function(btn,eopts){
					
				}
			},
			initComponent : function() {
				var me = this;
				me.menu = window.gzqmenus;
				this.callParent();
			}
			
		})