Ext.define('app.view.sdhcqsboard.component.SdhcQsBoardPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.sdhcqsboardpanel',
	requires : ['app.view.sdhcqsboard.component.SdhcQsBoardPanel1'
		            ,'app.view.sdhcqsboard.component.SdhcQsBoardPanel2'],
	layout: "border",
	listeners:{
		afterrender : function( me, eOpts ){
			Ext.gzqUtil.initstoreQueryParmas(me.down("sdhcqsboardpanel1").pbstore,me.down("panel[ref=northPan]"));
			Ext.gzqUtil.initstoreQueryParmas(me.down("sdhcqsboardpanel2").down("sdhcqsboardchart2").pbstore,me.down("panel[ref=northPan]"));
			Ext.gzqUtil.initstoreQueryParmas(me.down("sdhcqsboardpanel2").down("sdhcqsboardchart3").pbstore,me.down("panel[ref=northPan]"));
		}
	},
	initComponent : function() {
		var me = this;
		Ext.MyExtJsHelper.initComboboxDatas("baseqsworkcenterstoreId","app.store.base.WorkCenterComStore");
		Ext.getStore("baseqsworkcenterstoreId").on("load",function(store,records, successful, eOpts){
			me.down("combobox[ref=qsboardwc]").setValue(records[0].get("name"));
			me.down("sdhcqsboardpanel1").pbstore.load();
			me.down("sdhcqsboardpanel2").down("sdhcqsboardchart2").pbstore.load();
			me.down("sdhcqsboardpanel2").down("sdhcqsboardchart3").pbstore.load();
		})
		
        me.items = [{
	   		 xtype : 'label',region:'north',height: 45,margin: '0 0 1 1',
	   		text : '质量看板', // text值绑定到system.name
	   		style : 'font-size:38px;color:white;background-color : #16365C;text-align:center;padding-top:13px;'
	   	 },{
	   		 xtype : 'panel',region:'north',ref:"northPan",
	      		 tbar: ['','',{
	      			 xtype : "combobox",ref : "qsboardwc",
	      			 fieldLabel : "工作中心 ",queryMode: 'local',
	      			 displayField: 'name',valueField: 'name',
	      			 labelWidth : 60,width : 200,
	      			 enableKeyEvents:true,
	      			 store : Ext.data.StoreManager.lookup("baseqsworkcenterstoreId"),
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
	      		},'->',{
		   			xtype : "buttontransparent",
		   			ref : "querybtn",hidden:true,
		   			text : "查询",glyph : 0xf002
		   		 }]
	   	 },{
	   		xtype : "sdhcqsboardpanel1",region: 'north',height: 278,border : true
	   		,bodyStyle:'border-width: 0 0 2px 0;border-style: solid;border-color: #16365C;',
	   	 },{
	   		xtype : "sdhcqsboardpanel2",region: 'center'
	   	 }];
	    this.callParent();
	}

})