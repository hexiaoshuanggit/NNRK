/**
 * 系统界面的主区域,是一个tabpanel,可以有多个tab页面，用来放置各个模块。
 */
Ext.define('app.view.main.region.Center', {
	extend : 'Ext.tab.Panel',
	alias : 'widget.maincenter',

	closeAction : 'hide',
	autoDestroy : false,
	tabPosition : 'top',
	items : [{
		xtype : 'myerpconsole'
	}],
	initComponent : function() {
	    this.callParent();
	}

})