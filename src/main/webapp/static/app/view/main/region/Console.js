/**
 * 控制台
 */
Ext.define('app.view.main.region.Console', {
	extend : 'Ext.container.Container',
	alias : 'widget.myerpconsole',
	title : '控制台',
	glyph : 0xf015,closable: false,
	layout: {type: 'hbox',align: 'stretch'},
	initComponent : function() {
		var me = this;
		me.items = [];
		me.callParent(arguments);
	}
})