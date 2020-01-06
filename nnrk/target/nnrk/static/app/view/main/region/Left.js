/**
 * 左边的菜单区域，可以放树形菜单或折叠菜单
 * 作废，暂时没有用到该left
 */
Ext.define('app.view.main.region.Left', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.mainmenuregion',
	glyph : 0xf0c9,
	title : '系统菜单',
	layout : {
		type : 'accordion',
		animate : true
	},
	initComponent : function() {
		this.items = [];
		var menus = this.up('app-main').getViewModel().get('systemMenu');
		
		for (var i in menus) {
			var menugroup = menus[i];
			var accpanel = {
				menuAccordion : true,
				xtype : 'panel',
				title : menugroup.text,
				glyph : menugroup.glyph,
				bodyStyle : {
					padding : '10px'
				},
				dockedItems : [{
					dock : 'left',
					xtype : 'toolbar',
					items : []
				}]
			};
			for (var j in menugroup.items) {
				var menumodule = menugroup.items[j];
				accpanel.dockedItems[0].items.push({
					xtype : 'buttontransparent',
					text : this.addSpace(menumodule.text, 10),
					glyph : menumodule.glyph,
					module : menumodule.module,
					moduleId : menumodule.moduleId,
					handler : 'onMainMenuClick'
				});
			}
			this.items.push(accpanel);
		}
		this.callParent(arguments);
	},
	
	addSpace : function(text, len) {
		var result = text;
		for (var i = text.length; i < len; i++) {
			result += '　';
		}
		return result;
	}

})