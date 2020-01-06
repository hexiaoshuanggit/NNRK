Ext.define('app.view.main.sdhc.IndexBoardPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.sdhcindexboardpanel',
	requires : ['app.view.main.sdhc.QsBoardChart1',
		            'app.view.sdhcqsboard.component.SdhcQsBoardChart2'],
	layout: "anchor",border: 0,
	listeners:{
		afterrender : function( me, eOpts ){
			Ext.gzqUtil.initstoreQueryParmas(me.down("qsboardchart1").pbstore,me.down("toolbar"));
			Ext.gzqUtil.initstoreQueryParmas(me.down("sdhcqsboardchart2").pbstore,me.down("toolbar"));
		}
	},
	initComponent : function() {
		var me = this;
		Ext.MyExtJsHelper.initComboboxDatas("baseconsoleworkcenterstoreId","app.store.base.WorkCenterComStore");
		me.tbar = ['->',{
			xtype : "combobox",ref : "qsboardwc",
 			 fieldLabel : "工作中心 ",queryMode: 'local',
 			 displayField: 'name',valueField: 'name',
 			 labelWidth : 60,width : 200,
// 			 enableKeyEvents:true,
 			 store : Ext.data.StoreManager.lookup("baseconsoleworkcenterstoreId"),
 			 queryparam : "params[= workCenterName]",
 			 listeners:{
				select : function( combo, record, eOpts ){
					var querybtn = combo.up("panel").down("buttontransparent[ref=querybtn]");
					querybtn.fireEvent("click",querybtn);
				}
			}
		},'',{
  			xtype : "textfield",
  			fieldLabel : "年",labelWidth : 15,width : 75,
  			enableKeyEvents : true,value : Ext.Date.format(new Date(), 'Y'),
  			queryparam : "params[= year]"
  		},{
  			xtype : "combobox",fieldLabel : "月",queryMode: 'local',
  			displayField: 'name',valueField: 'name',value : Ext.Date.format(new Date(), 'n'),
  			labelWidth : 15,width : 70,
  			enableKeyEvents:true,
  			store : [ [1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12]],
  			queryparam : "params[= month]"
  		},{xtype : "buttontransparent",ref : "querybtn",
			text : "查询", hidden : true,glyph : 0xf002
		}];
		Ext.getStore("baseconsoleworkcenterstoreId").on("load",function(store,records, successful, eOpts){
			me.down("combobox[ref=qsboardwc]").setValue(records[0].get("name"));
			me.down("qsboardchart1").pbstore.load();
			me.down("sdhcqsboardchart2").pbstore.load();
		});
        me.items = [{
	   		 xtype : "qsboardchart1",anchor : '100% 50%'
	   	 },{
	   		xtype : "sdhcqsboardchart2",anchor : '100% 50%'
	   	 }];
	    this.callParent();
	}

})