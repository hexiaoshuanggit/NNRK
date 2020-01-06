﻿Ext.define("app.view.main.Main",{extend:"Ext.container.Container",requires:["app.view.main.MainController","app.view.main.MainModel","app.ux.grid.column.Actiontextcolumn","app.view.main.model.ReportModel"],xtype:"app-main",uses:"app.view.main.region.Center app.view.main.region.Top app.view.main.region.Console app.view.main.region.Left app.ux.container.BaseContainer app.ux.grid.BaseMainGrid app.ux.window.BaseWindow app.ux.grid.BaseSubGrid app.ux.window.HistoryWindow app.ux.window.PopUpWin app.ux.window.PopUpGrid app.ux.window.FileUploadWindow app.view.main.sdhc.IndexBoardPanel app.view.main.sdhc.IndexBoardPanel2".split(" "),controller:"main",viewModel:{type:"main"},layout:{type:"border"},items:[{xtype:"maintop",id:"gzqfmmaintop",region:"north"},{region:"center",id:"mymaincentertabpanel-id",xtype:"maincenter"},{xtype:"historywindow",hidden:!0}],listeners:{afterrender:function(a,b){}},initComponent:function(){Ext.setGlyphFontFamily("FontAwesome");this.callParent(arguments)}});Ext.define("app.view.main.MainController",{extend:"Ext.app.ViewController",requires:["Ext.window.MessageBox"],alias:"controller.main",control:{"app-main":{afterrender:function(a,b){Ext.MyExtJsHelper.initComboboxDatas("baseopcomstoreId","app.store.base.OpComStore");Ext.MyExtJsHelper.initComboboxDatas("baseemployeecomstoreId","app.store.base.EmployeeComStore");Ext.MyExtJsHelper.initComboboxDatas("basedocstatuscomstoreId","app.store.base.DocStatusComStore");Ext.MyExtJsHelper.initComboboxDatas("basechktypecomstoreId","app.store.base.ChkTypeComStore");Ext.MyExtJsHelper.initComboboxDatas("basechktypecomstore2Id","app.store.base.ChkTypeComStore2");Ext.MyExtJsHelper.initComboboxDatas("baseewarelocationId","app.store.base.WareLocationComStore")}},"app-main basecontainer[ref\x3dmymaincontainer] basewindow[ref\x3dmymainwin] form textfield[name\x3ddocStatus]":{change:function(a,b,c,d){if(c=a.up("basewindow[ref\x3dmymainwin]").down("buttontransparent[ref\x3ddoccheck]"))c["\u8349\u7a3f"==b?"enable":"disable"]();if(a=a.up("basewindow[ref\x3dmymainwin]").down("buttontransparent[ref\x3ddocuncheck]"))a["\u5df2\u5ba1\u6838"==b?"enable":"disable"]()}},"app-main maintop buttonmainmenu menu":{afterrender:function(a,b){for(var c=document.getElementById(a.id),d=c.querySelectorAll("div.x-menu-item-glyph"),e=0;e<d.length;e++)d[e].style.color="#0000CD";c=c.getElementsByTagName("span");for(e=0;e<c.length;e++)c[e].style.color="blue"}}},onChangePwdClick:function(a,b,c){var d=Ext.create("widget.window",{title:"\u5bc6\u7801\u4fee\u6539",width:300,height:150,layout:{type:"table",columns:1},padding:"10 5 10 5",items:[{xtype:"textfield",fieldLabel:"\u65b0\u5bc6\u7801",labelWidth:60,inputType:"password",allowBlank:!1,minLength:6},{xtype:"button",text:"\u4fee\u6539",handler:function(a){a=a.previousSibling("textfield");a.validate()&&Ext.Ajax.request({url:window.webContextValue+"/manager/changpwd",method:"POST",params:{password:a.getValue()},success:function(a){Ext.MessageBox.alert("\u5bc6\u7801\u4fee\u6539","\u4fee\u6539\u6210\u529f");d.hide()}})}}]});d.show()},onMainMenuClick:function(a,b,c){b=a.up("app-main").down("maincenter");Ext.gzqUtil.openMainMenu(b,{id:a.id,text:a.text,module:a.module})}});Ext.define("app.view.main.MainModel",{extend:"Ext.app.ViewModel",alias:"viewmodel.main",data:{name:"app",system:{name:"\u82cf\u8fbe\u6c47\u8bdaMES",version:"2019",iconUrl:""},user:{company:"EVERISE ",department:"\u8d22\u52a1\u90e8",name:window.lognUserName},service:{email:"2322818268@qq.com",copyright:"2322818268"}},constructor:function(){this.callParent(arguments)},getMenus:function(){return this.get("systemMenu")},updateTaskcount:function(a){var b=a.up("app-main").down("mmessagegrid").getStore();b.load();b=b.getCount();a.setText("\x3cspan class\x3d'fa fa-commenting-o' style\x3d'font-size:16px;'\x3e\x3c/span\x3e\x26nbsp;\x3cspan style\x3d'color:red;font-size:12px;'\x3e("+b+")\x3c/span\x3e")}});Ext.define("app.view.main.comp.MessageGrid",{extend:"Ext.grid.Panel",alias:"widget.mmessagegrid",initComponent:function(){this.columns=[{xtype:"rownumberer"},{text:"\u6d88\u606f\u5206\u7c7b",dataIndex:"moduleText",align:"center",width:100},{text:"\u6d88\u606f\u5185\u5bb9",dataIndex:"content",align:"center",width:300},{text:"\u5904\u7406\u7ea7\u522b",dataIndex:"level",align:"center",width:90},{text:"\u521b\u5efa\u65e5\u671f",dataIndex:"createTime",align:"center",width:110},{text:"\u5173\u95ed\u65e5\u671f",dataIndex:"closeTime",align:"center",width:110}];this.model=Ext.ClassManager.get("app.view.main.model.MessageModel");this.store=Ext.create("Ext.data.Store",{model:this.model,autoLoad:!0,pageSize:500});this.callParent(arguments)}});Ext.define("app.view.main.comp.MessageWin",{extend:"Ext.window.Window",alias:"widget.mmessagewin",requires:["app.view.main.comp.MessageGrid"],closeAction:"hide",bodyStyle:"padding : 1px 1px 0",layout:"fit",modal:!0,width:800,height:500,title:"\u6211\u7684\u6d88\u606f",listeners:{show:function(a,b){}},initComponent:function(){this.dockedItems=[{xtype:"toolbar",style:"background-color : #DBEAF9",items:[],dock:"top"}];this.items=[{xtype:"mmessagegrid"}];this.callParent(arguments)}});Ext.define("app.view.main.comp.ReportGrid",{extend:"Ext.grid.Panel",alias:"widget.reportgrid",border:0,columnLines:!0,forceFit:!0,initComponent:function(){this.columns=[{xtype:"rownumberer"},{text:"\u62a5\u8868\u540d\u79f0",dataIndex:"reportName",align:"center",renderer:function(a,b,c,d,e,f,g){b.style="color:blue;font-size:15px;";return a}},{text:"\u67e5\u770b",dataIndex:"id",align:"center",renderer:function(a,b,c){a=c.get("reportUrl")+"\x26realation\x3d"+window.loginUserEntity;return Ext.String.format('\x3ca href\x3d"{0}" target\x3d"_blank"\x3e\u62a5\u8868\u67e5\u770b\x3c/a\x3e',a)}}];this.model=Ext.ClassManager.get("app.view.main.model.ReportModel");this.store=Ext.create("Ext.data.Store",{model:this.model,autoLoad:!0,pageSize:100});this.callParent(arguments)}});Ext.define("app.view.main.comp.TaskGrid",{extend:"Ext.grid.Panel",alias:"widget.consoletaskgrid",border:0,forceFit:!0,initComponent:function(){this.columns=[{xtype:"rownumberer"}];var a=app.ux.UiServer.getinfosfast("taskvo");this.columns=this.columns.concat(app.ux.ColumnsFactory.getColumnsfast(a));this.model=app.ux.ModelFactory.getModelFast(a,{extraParams:{},api:{read:webContextValue+"/actusertask/mytask",destroy:webContextValue+"/actusertask/deletess"}});this.store=Ext.create("Ext.data.Store",{model:this.model,autoLoad:!0,pageSize:200});this.callParent(arguments)}});Ext.define("app.view.main.menu.ButtonMainMenu",{extend:"app.ux.ButtonTransparent",alias:"widget.buttonmainmenu",text:"\u83dc\u5355",glyph:61818,listeners:{afterrender:function(a,b){}},initComponent:function(){this.menu=window.gzqmenus;this.callParent()}});Ext.define("app.view.main.model.MessageModel",{extend:"Ext.data.Model",fields:[{name:"id",type:"string"},{name:"userId",type:"string",allowNull:!0},{name:"content",type:"string",allowNull:!0},{name:"messagepalnId",type:"string",allowNull:!0},{name:"moduleText",type:"string",allowNull:!0},{name:"module",type:"string",allowNull:!0},{name:"recordId",type:"string",allowNull:!0},{name:"level",type:"int",allowNull:!0},{name:"createTime",type:"date",allowNull:!0},{name:"closeTime",type:"date",allowNull:!0},{name:"desc",type:"string",allowNull:!0},{name:"reference1",type:"string",allowNull:!0},{name:"reference2",type:"string",allowNull:!0},{name:"reference3",type:"string",allowNull:!0},{name:"reference4",type:"string",allowNull:!0},{name:"reference5",type:"string",allowNull:!0}],idProperty:"id",proxy:{type:"rest",api:{read:webContextValue+"/sys/readv/messageinfosView"},reader:{type:"json",root:"datas",totalProperty:"totalRecord"}}});Ext.define("app.view.main.model.ReportModel",{extend:"Ext.data.Model",fields:[{name:"id",type:"string"},{name:"reportName",type:"string"},{name:"reportUrl",type:"string"},{name:"reportModule",type:"string"},{name:"createTime",type:"string"},{name:"createUser",type:"string"},{name:"updateTime",type:"string"},{name:"updateUser",type:"string"},{name:"reference1",type:"string"},{name:"reference2",type:"string"},{name:"reference3",type:"string"},{name:"reference4",type:"string"}],idProperty:"id",proxy:{type:"rest",api:{read:webContextValue+"/sys/reportinit"},reader:{type:"json",root:"datas",totalProperty:"totalRecord"}}});Ext.define("app.view.main.region.Bottom",{extend:"Ext.toolbar.Toolbar",alias:"widget.mainbottom",uses:["app.ux.ButtonTransparent"],defaults:{xtype:"buttontransparent"},style:"background-color : #f6f5ec;",items:[{bind:{text:"\u4f7f\u7528\u5355\u4f4d:{user.company}"},glyph:61687},{bind:{text:"\u7528\u6237:{user.name}"},glyph:61447},"-\x3e",{bind:{hidden:"{!service.email}",text:"\u6280\u672f\u652f\u6301:{service.email}"}},{bind:{text:"\u00a9{service.copyright}"}}]});Ext.define("app.view.main.region.Center",{extend:"Ext.tab.Panel",alias:"widget.maincenter",closeAction:"hide",autoDestroy:!1,tabPosition:"top",items:[{xtype:"myerpconsole"}],initComponent:function(){this.callParent()}});Ext.define("app.view.main.region.Console",{extend:"Ext.container.Container",alias:"widget.myerpconsole",title:"\u63a7\u5236\u53f0",glyph:61461,closable:!1,layout:{type:"hbox",align:"stretch"},initComponent:function(){this.items=[{xtype:"sdhcindexboardpanel",margin:"0 0 0 1",flex:1},{xtype:"sdhcindexboardpanel2",flex:1,margin:"0 0 0 1"}];this.callParent(arguments)}});Ext.define("app.view.main.region.Left",{extend:"Ext.panel.Panel",alias:"widget.mainmenuregion",glyph:61641,title:"\u7cfb\u7edf\u83dc\u5355",layout:{type:"accordion",animate:!0},initComponent:function(){this.items=[];var a=this.up("app-main").getViewModel().get("systemMenu"),b;for(b in a){var c=a[b],d={menuAccordion:!0,xtype:"panel",title:c.text,glyph:c.glyph,bodyStyle:{padding:"10px"},dockedItems:[{dock:"left",xtype:"toolbar",items:[]}]},e;for(e in c.items){var f=c.items[e];d.dockedItems[0].items.push({xtype:"buttontransparent",text:this.addSpace(f.text,10),glyph:f.glyph,module:f.module,moduleId:f.moduleId,handler:"onMainMenuClick"})}this.items.push(d)}this.callParent(arguments)},addSpace:function(a,b){for(var c=a,d=a.length;d<b;d++)c+="\u3000";return c}});Ext.define("app.view.main.region.Top",{extend:"Ext.toolbar.Toolbar",alias:"widget.maintop",uses:["app.ux.ButtonTransparent","app.view.main.menu.ButtonMainMenu"],defaults:{xtype:"buttontransparent"},style:"background-color : white",height:35,initComponent:function(){Ext.Ajax.request({url:window.webContextValue+"/sys/menus",async:!1,success:function(a){a=a.responseText.replace(/\"menu\":\[\]/g,"handler:'onMainMenuClick'");a=Ext.JSON.decode(a);window.gzqmenus=a}});this.items=[{xtype:"buttonmainmenu",tooltip:"\u83dc\u5355",id:"mybuttonmainmenu-btnId",hidden:!0},{xtype:"image",height:30, minWidth:60 ,src:window.webContextValue+"/static/img/logo_2.png"}].concat(window.gzqmenus);this.items=this.items.concat(["-\x3e",{xtype:"label",style:"color:black;font-size:16px;",bind:{text:" {user.name}"}},{glyph:61473,tooltip:"\u5237\u65b0\u63a7\u5236\u53f0",handler:function(a){Ext.getCmp("mymaincentertabpanel-id").down("myerpconsole").down("sdhcindexboardpanel2").refresh()}},{glyph:61508,tooltip:"\u6253\u5f00\u6211\u7684\u4efb\u52a1",handler:function(a){try{var b=Ext.getCmp("mybuttonmainmenu-btnId").down("[module\x3dacttaskperson.Acttaskperson]"),c=a.up("app-main").down("maincenter");Ext.gzqUtil.openMainMenu(c,{id:b.id,text:b.text,module:b.module})}catch(d){}}},{glyph:61572,tooltip:"\u4fee\u6539\u5bc6\u7801",handler:"onChangePwdClick"},{tooltip:"\u6ce8\u9500",href:webContextValue+"/manager/logout",hrefTarget:"_self",glyph:61457}]);this.callParent(arguments)}});Ext.define("app.view.main.sdhc.IndexBoardPanel",{extend:"Ext.panel.Panel",alias:"widget.sdhcindexboardpanel",requires:["app.view.main.sdhc.QsBoardChart1","app.view.sdhcqsboard.component.SdhcQsBoardChart2"],layout:"anchor",border:0,listeners:{afterrender:function(a,b){Ext.gzqUtil.initstoreQueryParmas(a.down("qsboardchart1").pbstore,a.down("toolbar"));Ext.gzqUtil.initstoreQueryParmas(a.down("sdhcqsboardchart2").pbstore,a.down("toolbar"))}},initComponent:function(){var a=this;Ext.MyExtJsHelper.initComboboxDatas("baseconsoleworkcenterstoreId","app.store.base.WorkCenterComStore");a.tbar=["-\x3e",{xtype:"combobox",ref:"qsboardwc",fieldLabel:"\u5de5\u4f5c\u4e2d\u5fc3 ",queryMode:"local",displayField:"name",valueField:"name",labelWidth:60,width:200,store:Ext.data.StoreManager.lookup("baseconsoleworkcenterstoreId"),queryparam:"params[\x3d workCenterName]",listeners:{select:function(a,c,d){a=a.up("panel").down("buttontransparent[ref\x3dquerybtn]");a.fireEvent("click",a)}}},"",{xtype:"textfield",fieldLabel:"\u5e74",labelWidth:15,width:75,enableKeyEvents:!0,value:Ext.Date.format(new Date,"Y"),queryparam:"params[\x3d year]"},{xtype:"combobox",fieldLabel:"\u6708",queryMode:"local",displayField:"name",valueField:"name",value:Ext.Date.format(new Date,"n"),labelWidth:15,width:70,enableKeyEvents:!0,store:[[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12]],queryparam:"params[\x3d month]"},{xtype:"buttontransparent",ref:"querybtn",text:"\u67e5\u8be2",hidden:!0,glyph:61442}];Ext.getStore("baseconsoleworkcenterstoreId").on("load",function(b,c,d,e){a.down("combobox[ref\x3dqsboardwc]").setValue(c[0].get("name"));a.down("qsboardchart1").pbstore.load();a.down("sdhcqsboardchart2").pbstore.load()});a.items=[{xtype:"qsboardchart1",anchor:"100% 50%"},{xtype:"sdhcqsboardchart2",anchor:"100% 50%"}];this.callParent()}});Ext.define("app.view.main.sdhc.IndexBoardPanel2",{extend:"Ext.panel.Panel",alias:"widget.sdhcindexboardpanel2",requires:["app.view.main.model.ReportModel","app.view.main.comp.ReportGrid","app.view.main.comp.TaskGrid"],layout:{type:"vbox"},listeners:{afterrender:function(a,b){}},refresh:function(){this.down("consoletaskgrid").getStore().load();this.down("reportgrid").getStore().load()},initComponent:function(){this.items=[{xtype:"consoletaskgrid",width:"100%",flex:1},{xtype:"reportgrid",width:"100%",flex:1}];this.callParent()}});Ext.define("app.view.main.sdhc.ProductBoardChart2",{extend:"Ext.panel.Panel",alias:"widget.productboardchart2",layout:"fit",initComponent:function(){this.pbuiserverinfos=app.ux.UiServer.getinfosfast("sdhcdispatchboard2");this.pbmodel=app.ux.ModelFactory.getModelFast(this.pbuiserverinfos,{extraParams:{},api:{read:webContextValue+"/baseworkcc/reade/sdhcdispatchboard2"}});this.pbstore=Ext.create("Ext.data.Store",{model:this.pbmodel,autoLoad:!1,pageSize:200});this.items=[{xtype:"chart",store:this.pbstore,animate:!0,series:[{type:"pie",angleField:"rate",label:{field:"status",display:"outside",calloutLine:!0},showInLegend:!0,highlight:!0,tips:{trackMouse:!0,renderer:function(a,b){this.setTitle(a.get("status")+": "+a.get("rate")+"%")}}}]}];this.callParent()}});Ext.define("app.view.main.sdhc.QsBoardChart1",{extend:"Ext.panel.Panel",alias:"widget.qsboardchart1",layout:"fit",style:"border:1px",initComponent:function(){this.pbuiserverinfos=app.ux.UiServer.getinfosfast("sdhcqsboard");this.pbmodel=app.ux.ModelFactory.getModelFast(this.pbuiserverinfos,{extraParams:{},api:{read:webContextValue+"/baseworkcc/reade/sdhcqsboard"}});this.pbstore=Ext.create("Ext.data.Store",{model:this.pbmodel,autoLoad:!1,pageSize:200});this.items=[{xtype:"chart",store:this.pbstore,animate:!0,legend:{position:"right",boxStrokeWidth:0,labelFont:"12px Helvetica"},axes:[{type:"Numeric",position:"left",fields:["prodRate"],title:"\u6708\u6210\u54c1\u7387",label:{renderer:function(a){return a+"%"}},grid:!0,minimum:90,maximum:100},{type:"Category",position:"bottom",fields:["week"],grid:!0,calculateCategoryCount:!1}],series:[{type:"line",highlight:!0,axis:"left",title:"\u5468",xField:"week",yField:"prodRate",style:{opacity:.8},tips:{trackMouse:!0,style:"background: #FFF",height:20,renderer:function(a,b){this.setTitle(a.get("week")+":"+a.get("prodRate")+"%")}}}]}];this.callParent()}});