Ext.define("app.view.sdhcqsboard.component.SdhcQsBoardGrid", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.sdhcqsboardgrid',
    forceFit : true,
    viewConfig : {
    	getRowClass: function(record, rowIndex, rowParams, store){
            return  "gridsdhcqs";
        }
    },
    initComponent: function () {
        var me = this;
        me.columns = [];
        var uiserverinfos = me.up("sdhcqsboardpanel1").pbuiserverinfos;
        me.columns = me.columns.concat ( app.ux.ColumnsFactory.getColumnsfast(uiserverinfos)  );
        Ext.Array.forEach(me.columns,function(item){
        	item.align = "center";
        	item.style = {
        			color : 'white',
        			fontSize : "25px",
        			lineHeight : "35px",
        			backgroundColor:"#16365C"
        	}
        })
        me.store = me.up("sdhcqsboardpanel1").pbstore;
        me.callParent(arguments);
    }
});
