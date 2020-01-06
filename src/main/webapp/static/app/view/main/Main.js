/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'app.view.main.MainController',
        'app.view.main.MainModel',
        'app.ux.grid.column.Actiontextcolumn',
        "app.view.main.model.ReportModel"
    ],
    xtype: 'app-main',
    uses : ['app.view.main.region.Center'
                ,'app.view.main.region.Top'
                ,'app.view.main.region.Console'
                ,'app.view.main.region.Left'
                ,'app.ux.container.BaseContainer'
                ,'app.ux.grid.BaseMainGrid'
                ,'app.ux.window.BaseWindow'
                ,'app.ux.grid.BaseSubGrid'
                ,'app.ux.window.HistoryWindow'
                ,'app.ux.window.PopUpWin'
                ,'app.ux.window.PopUpGrid'
                ,'app.ux.window.FileUploadWindow'
     ],
	controller: 'main',
    viewModel: {
        type: 'main'
    },
    layout: {
        type: 'border'
    },
    items: [{
    	xtype : 'maintop',
    	id : "gzqfmmaintop",
		region : 'north' // 把他放在最顶上
	},{
		region : 'center', // 中间面版
		id : 'mymaincentertabpanel-id',
		xtype : 'maincenter'
	},{
		xtype : 'historywindow'
		,hidden : true
	}],
	listeners : {
		afterrender : function( container, eOpts ){
			
		}
	},
    initComponent : function() {
		Ext.setGlyphFontFamily('FontAwesome'); // 设置图标字体文件，只有设置了以后才能用glyph属性
		this.callParent(arguments);
	}
});
