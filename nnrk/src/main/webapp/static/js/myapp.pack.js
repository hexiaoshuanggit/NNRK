Ext.define("app.ux.ButtonTransparent",{extend:"Ext.button.Button",alias:"widget.buttontransparent",disableMouseOver:false,initComponent:function(){if(!this.listeners){this.listeners={}}Ext.apply(this.listeners,{mouseout:function(){this.setTransparent(document.getElementById(this.id))},mouseover:function(c){var a=document.getElementById(this.id);if(!c.disableMouseOver){a.style.backgroundImage="";a.style.backgroundColor="";a.style.borderColor=""}else{a.style.borderColor=""}},afterrender:function(){this.setTransparent(document.getElementById(this.id))}});this.callParent(arguments)},setTransparent:function(a){a.style.backgroundImage="inherit";a.style.backgroundColor="inherit";a.style.borderColor="transparent"}});
Ext.define("app.ux.UiServer",{statics:{getinfosfast:function(a){return this.getRemoteInfos(a)},getinfos:function(c,d){var b=d.vosign;if(!b){console.error("no vosign");return false}var a=this.getRemoteInfos(b);c.set(b+"ServerSource",a)},getRemoteInfos:function(b){var a=null;Ext.Ajax.request({url:window.webContextValue+"/sys/extjsinfos/"+b,method:"GET",async:false,success:function(c){var d=c.responseText;a=Ext.JSON.decode(d)}});return a}}});
Ext.define("app.ux.ModelFactory",{statics:{getModelQueryDef:function(a,d,c){var f=a.modelinfos;var b="view."+f.modelName;var e=f.modelinfo;if(Ext.ClassManager.get(b)){return Ext.ClassManager.get(b)}else{return Ext.define(b,{extend:"Ext.data.Model",idProperty:e.idProperty,identifier:e.identifier,fields:e.fields,proxy:{type:"rest",api:{read:webContextValue+d},extraParams:c,reader:{type:"json",rootProperty:"datas",totalProperty:"totalRecord"},listeners:{exception:function(i,g,h){Ext.gzqUtil.requestMessageProcess(i,g)}}}})}},getModelDef:function(c,d){var b=d.vosign;var f=c.get(b+"ServerSource").modelinfos;var e=f.modelinfo;var a=f.modelName;if(Ext.ClassManager.get(a)){return Ext.ClassManager.get(a)}else{return Ext.define(a,{extend:"Ext.data.Model",idProperty:e.idProperty,identifier:e.identifier,fields:e.fields,modelMainId:d.modelMainId,vosign:b,getNameValue:d.getNameValue,proxy:{type:"rest",api:d.api,extraParams:d.extraParams,reader:{type:"json",rootProperty:"datas",totalProperty:"totalRecord"},listeners:{exception:function(i,g,h){Ext.gzqUtil.requestMessageProcess(i,g)}}}})}}}});
Ext.define("app.ux.FormFieldsFactory",{statics:{getItems:function(c,b){var a=b.vosign;var d=c.get(a+"ServerSource").formInfos;Ext.Array.each(d.inputs,function(e){if(e.readOnly){e.labelStyle="color:gray; "}if(!e.listeners){e.listeners={}}Ext.apply(e.listeners,{keydown:function(g,h,f){Ext.gzqUtil.gformnavigator(g,h,f)}});if(e.xtype=="combobox"){Ext.gzqUtil.initComboboxfromremote(e)}});return d.inputs}}});
Ext.define("app.ux.ColumnsFactory",{statics:{getColumnsfast:function(b){var a=b.columnInfos;var c=a.columns;this.processcolumns(c);return c},getColumns:function(d,c){var b=c.vosign;var a=d.get(b+"ServerSource").columnInfos;var e=a.columns;this.processcolumns(e);return e},processcolumns:function(a){Ext.Array.each(a,function(b){if(b.renderer){b.renderer=Ext.util.Format[b.renderer]}if(b.xtype=="numbercolumn"){if(b.summaryRenderer){b.summaryRenderer=Ext.util.Format[b.summaryRenderer]}}if(b.xtype=="checkcolumn"){if(!b.editorable){Ext.apply(b,{processEvent:function(c){if(c=="click"){return false}}})}}else{if(b.editorable&&b.editor){if(!b.editor.listeners){b.editor.listeners={}}Ext.apply(b.editor.listeners,{keydown:function(d,f,c){Ext.gzqUtil.ggridnavigator(d,f,c)}});if(b.editor.xtype=="combobox"){Ext.gzqUtil.initComboboxfromremote(b.editor)}}}})}}});
Ext.gzqUtil=new Object();Ext.gzqUtil=(function(){function j(m,q,s,r){var n=q.indexOf(s.column);var o=n+1;var v=false;while(!v&&o<q.length&&m){v=m.startEdit(r,q[o]);o++}if(v){return true}else{var p=s.up("grid");var w=p.getStore().indexOf(r);var u=p.getStore().getAt(w+1);if(u){if(q.length==1){var t=new Ext.util.DelayedTask(j,this,[m,q,q[0],u]);t.delay(200)}else{j(m,q,q[0],u)}}}}function g(m){if(m==null){return true}for(var n in m){if(m.hasOwnProperty(n)){return false}}return true}function b(m){var n=m.getStore();var o=n.getModel();return o.create().vosign}function i(m){var n={};if(m&&m.length>0){Ext.Array.forEach(m,function(o,r,s){var q="subupdates["+b(o)+"]";var p=e(o);if(p){n[q]=p}})}return n}function h(m){var n={};if(m&&m.length>0){Ext.Array.forEach(m,function(o,r,s){var q="subcreatess["+b(o)+"]";var p=f(o);if(p){n[q]=p}})}return n}function f(m){var n=[];var p=m.getStore();var q=p.getModel();var o=[];Ext.Array.forEach(q.getFields(),function(t,r,s){if(!t.persist){o.push(t.name)}});Ext.Array.forEach(p.getNewRecords(),function(t,r,s){var u=t.getData();Ext.Array.forEach(o,function(v,w,x){delete u[v]});n.push(u)});if(n.length==0){return null}return Ext.JSON.encode(n)}function e(m){var o=[];var p=m.getStore();var q=p.getModel();var n=[];Ext.Array.forEach(q.getFields(),function(t,r,s){if(!t.persist){n.push(t.name)}});Ext.Array.forEach(p.getUpdatedRecords(),function(u,s,t){var r=u.getChanges();Ext.Array.forEach(n,function(v,w,x){delete r[v]});r[u.getIdProperty()]=u.getId();o.push(r)});if(o.length==0){return null}return Ext.JSON.encode(o)}function a(n,m){Ext.create("Ext.ux.window.Notification",{position:"br",cls:"ux-notification-light",iconCls:"ux-notification-icon-information",closable:true,title:n,html:"<div style='padding:10px 5px;min-width:200px;min-height:100px;'>"+m+"</div>",slideInDuration:300,slideBackDuration:800,autoCloseDelay:2500}).show()}function k(n,m){Ext.create("Ext.ux.window.Notification",{position:"br",cls:"ux-notification-light",iconCls:"ux-notification-icon-information",closable:true,title:n,html:"<div style='padding:10px 5px;min-width:200px;min-height:100px;'>"+m+"</div>",slideInDuration:300,slideBackDuration:800,autoCloseDelay:5000}).show()}function c(n,p){var o=n.getRecord();if(!o){console.error("this form is not load data , please sure ");return false}if(o.getId().startsWith("TEMPID_")){if(!p){console.error("no id,no data ,please check your data");return false}}else{p=o.getId()}var m=Ext.ClassManager.get(o.entityName);m.load(p,{scope:this,callback:function(q,r,u){if(r.success){try{var s=Ext.decode(r._response.responseText);n.getForm().reset(true);n.loadRecord(Ext.create(o.entityName,s))}catch(t){Ext.MessageBox.alert("服务器错误","重新加载数据失败")}}else{Ext.MessageBox.alert("未知错误","加载失败")}}})}function d(m){if(m&&m.length>0){Ext.Array.forEach(m,function(n,o,p){n.getStore().load()})}}function l(m,n){if(!n){return false}Ext.Array.each(m.fields,function(q,o,p){if(n.hasOwnProperty(q.name)){if(q.persist){m.set(q.name,n[q.name])}}})}return{fenthDatasFromRemotebySync:function(m){var n=null;Ext.Ajax.request({url:m.url,method:"GET",async:false,params:m.params,success:function(o){var p=o.responseText;n=Ext.JSON.decode(p)}});return n},initComboboxfromremote:function(o){if(o.xtype!="combobox"){throw"this xtype is not combobox, now is "+o.xtype}var n=o;if(n.queryMode=="remote"){n.pageSize=1}if(n.storeId){var m=Ext.data.StoreManager.lookup(n.storeId);if(m){n.store=m}else{n.store=Ext.create(n.store,{storeId:n.storeId})}}else{n.store=Ext.create(n.store,{storeId:"storeId"+new Date().getTime()})}},getInputHtml:function(o,n){var m=document.createElement("input");m.type="hidden";m.value=n;m.name=o;return m},initstoreQueryParmas:function(m,n){var p=n.query("textfield[queryparam]");if(p&&p.length>0){Ext.Array.forEach(p,function(s,q,r){s.on("keydown",function(u,v,t){if(v.getKey()==Ext.EventObject.ENTER){console.log(" ENTER btn click ..... ");m.load()}})})}m.on("beforeload",function(r,q,s){if(p&&p.length>0){Ext.Array.forEach(p,function(w,u,v){delete r.proxy.extraParams[w.queryparam];if(w.getValue()){var t=w.getValue();r.proxy.extraParams[w.queryparam]=t}})}});var o=n.down("button[ref=querybtn]");if(o){o.on("click",function(q,s,r){m.currentPage=1;m.load()})}},initEditorColumns2grid:function(o){var m=[];var n=o.columns;Ext.Array.each(n,function(p){if(p.editor&&p.editor.enableKeyEvents){p.editor.selectOnFocus=true;m.push(p)}});o.editorcolumns=m;if(o.editorcolumns.length>0){o.on("beforeedit",function(r,q,p){o.lasteditorrecord=q.record})}},reloadFormRec:function(m){c(m)},msgShow:function(n,m){a(n,m)},msgShowLong:function(n,m){k(n,m)},createSingleStore:function(o,n){var m=Ext.data.StoreManager.lookup(n);if(m){return m}else{return Ext.create(o,{storeId:n})}},gopenHistory:function(m){var n=Ext.getCmp("historywin20170118");n.modifyId=m.getId();if(m&&!m.getId().startsWith("TEMPID_")){n.show()}else{a("提示","没有历史记录")}},gswitchwin4record:function(n){var u=n.up("window[ref=mymainwin]");var t=u.down("form[ref=mainform]");var q=t.getRecord();if(!q||q.getId().startsWith("TEMPID_")){a("提示","新增状态无法获取上下记录");return false}var s=u.up("container[ref=mymaincontainer]").down("grid[ref=mymaingrid]");var o=s.getStore();var m=o.indexOf(q);if(m==-1){a("提示","该记录可能刚保存，暂时无法获取");return false}var r=-1;if(n.ref=="prevrecord"){r=m-1}else{if(n.ref=="nextrecord"){r=m+1}}if(r<0||r>=o.count()){a("提示","没有更多数据了");return false}var p=o.getAt(r);s.fireEvent("actioncolumnclick",s,p,"show")},gwinformIsModify:function(n){var o=n.down("form[ref=mainform]");var q=o.getRecord();if(!q||q.getId().startsWith("TEMPID_")){Ext.MessageBox.alert("提示","你现在即为新增状态,注意保存数据");throw"please save your new datas"}else{if(q&&!q.getId().startsWith("TEMPID_")){o.updateRecord();if(q.dirty){Ext.MessageBox.alert("提示","你已修改数据,注意保存数据");throw"please save your datas"}}}var m=n.query("gridpanel[ref=mysubgrid]");var p=false;if(m&&m.length>0){Ext.Array.forEach(m,function(r,s,t){if(r.getStore().getModifiedRecords().length>0){Ext.MessageBox.alert("提示","请先保存表格中数据");throw"please save your grid datas";return false}})}},gwinform4continueadd:function(o){var m=o.up("window[ref=mymainwin]");this.gwinformIsModify(m);var n=m.up("container[ref=mymaincontainer]").down("grid[ref=mymaingrid]").down("buttontransparent[ref=add]");n.fireEvent("click",n)},gclearsubgrids:function(m){if(m&&m.length>0){Ext.Array.forEach(m,function(n,o,p){var q=n.getStore();q.currentPage=1;q.mainIdValue=null;q.removeAll();q.commitChanges()})}},gwinform4save:function(o,t,r){var w=o.up("window[ref=mymainwin]");var v=w.down("form[ref=mainform]");if(!v.getForm().isValid()){return false}var p=w.query("gridpanel[ref=mysubgrid]");var q=v.getRecord();v.updateRecord();if(q&&!q.getId().startsWith("TEMPID_")){l(q,r);var y={};var s=null;if(q.dirty){s=q.getChanges();Ext.apply(y,{mainupdate:Ext.JSON.encode(s),})}var u=h(p);var n=i(p);Ext.apply(y,u);Ext.apply(y,n);if(!g(y)){Ext.apply(y,{mainId:q.getId()});o.setDisabled(true);Ext.Ajax.request({url:q.proxy.api.update,params:y,method:"PUT",success:function(z,A){o.setDisabled(false);if(s){c(v)}d(p);a("操作成功","更新成功")},failure:function(){o.setDisabled(false);a("操作失败","更新未成功，请重试")}})}}else{l(q,t);var m=q.getData();Ext.Array.each(q.fields,function(B,z,A){if(!B.persist){delete m[B.name]}});var x={};Ext.apply(x,{maincreate:Ext.JSON.encode(m)});Ext.apply(x,h(p));o.setDisabled(true);Ext.Ajax.request({url:q.proxy.api.create,params:x,method:"POST",success:function(z,B){o.setDisabled(false);var A=z.responseText.replace(/\"/g,"");c(v,A);if(p&&p.length>0){Ext.Array.forEach(p,function(C,D,E){C.getStore().mainIdValue=A})}d(p);a("操作成功","创建成功")},failure:function(){o.setDisabled(false);a("操作失败","创建未成功，请重试")}})}},requestMessageProcess:function(o,m,n){if(o&&m){var p=o.reader.getResponseData(m);if(!p.success){a("操作失败","数据操作失败")}}},gformnavigator:function(p,t,m){if(t.getKey()==Ext.EventObject.ENTER){var s=p.up("form");var r=s.getForm().getFields();var n=r.indexOf(p);var q=n+1;var o=r.getAt(q);if(o){o.focus()}else{s.focus()}}},ggridnavigator:function(s,t,u){var q=s.up("grid");var m=q.findPlugin("cellediting");var r=q.lasteditorrecord;if(!r){throw"error no last  eidt record"}if(t.ctrlKey&&t.getKey()==Ext.EventObject.UP){var z=q.getStore().indexOf(r);var y=q.getStore().getAt(z-1);if(y){m.startEdit(y,s.column)}}else{if(t.ctrlKey&&t.getKey()==Ext.EventObject.DOWN){var z=q.getStore().indexOf(r);var x=q.getStore().getAt(z+1);if(x){m.startEdit(x,s.column)}}else{if(t.ctrlKey&&t.getKey()==Ext.EventObject.LEFT){var p=q.editorcolumns;if(p&&p.length>0){var n=p.indexOf(s.column);var o=n-1;var w=false;while(!w&&o>=0){w=m.startEdit(r,p[o]);o--}}}else{if((t.getKey()==Ext.EventObject.ENTER)||(t.ctrlKey&&t.getKey()==Ext.EventObject.RIGHT)){var p=q.editorcolumns;if(t.getKey()==Ext.EventObject.ENTER&&(s.xtype=="combobox"||s.xtype=="combo")){var v=new Ext.util.DelayedTask(j,this,[m,p,s,r]);v.delay(250)}else{j(m,p,s,r)}}}}}},ggrid4del:function(p,q){var m=p.getSelectionModel().getSelection();var n=m.length;if(n<1){Ext.MessageBox.alert("未选择数据","请选择你要删除的数据")}else{var o="";if(n==1){if(m[0].getNameValue()){o=" 『"+m[0].getNameValue()+"』 吗?"}else{o="1条记录,删除后无法恢复"}}else{if(m[0].getNameValue()){o="<ol>";Ext.Array.each(m,function(r){o+="<li>"+r.getNameValue()+"</li>"});o+="</ol>";o="以下 "+n+" 条记录吗?"+o}else{o=n+"条记录,删除后无法恢复"}}Ext.MessageBox.confirm("确认?","你将删除"+o,function(r){if(r=="yes"){var t=p.getStore();var u=[];var v=[];Ext.Array.each(m,function(w){if(w&&!w.getId().startsWith("TEMPID_")){u.push(w.getId())}else{v.push(w)}});if(v.length>0){t.remove(v)}if(u.length>0){var s=t.getModel().create().vosign;Ext.Ajax.request({url:t.proxy.api.destroy+"/"+s+"/"+u.join(),async:false,method:"DELETE",timeout:60000,success:function(w,x){if(q){q()}t.load()},failure:function(w,x){Ext.MessageBox.alert("数据删除提示","对不起，删除失败，请确认是否允许删除")}})}}})}}}})();
if(Ext.util&&Ext.util.Format){Ext.apply(Ext.util.Format,{gnumbersumRenderer:function(c,a,b){return"<strong>"+Ext.util.Format.number(c,"0,000.00")+"</strong>"},gcolumnCboRenderer:function(b,a,e,i,c,h,f){var d=this.getColumns()[c];var g=d.getEditor(e);if(b&&g){if(g.xtype=="combo"||g.xtype=="combobox"){return g.getRawValue()}}else{if(!b&&g){return g.lastValue}}return b},gmonetaryRenderer:function(g,b,e,f,d,c,a){if(g){b.style="color:"+(g>0?"blue":"red")+";";return Ext.util.Format.number(g,"0,000.0000")}else{return""}},gdateRenderer:function(g,b,e,f,d,c,a){b.style="color:#a40;";return Ext.util.Format.date(g,"Y-m-d")},gfloatRenderer:function(g,b,e,f,d,c,a){b.style="color:"+(g>0?"blue":"red")+";";return g==0?"":g},gintRenderer:function(g,b,e,f,d,c,a){b.style="color:"+(g>0?"blue":"red")+";";return g==0?"":g},gpercentRenderer:function(b,a,c){b=b*100;var e=b>100?100:b;e=e<0?0:e;var d=parseInt(e*2.55).toString(16);if(d.length==1){d="0"+d}return Ext.String.format('<div><div style="float:left;border:1px solid #008000;height:15px;width:100%;"><div style="float:left;text-align:center;width:100%;color:blue;">{0}%</div><div style="background: #FAB2{2};width:{1}%;height:13px;"></div></div></div>',b,e,d)}})};
Ext.define("Ext.ux.window.Notification",{extend:"Ext.window.Window",alias:"widget.uxNotification",cls:"ux-notification-window",autoClose:true,autoHeight:true,plain:false,draggable:false,shadow:false,focus:Ext.emptyFn,manager:null,useXAxis:false,position:"br",spacing:6,paddingX:30,paddingY:10,slideInAnimation:"easeIn",slideBackAnimation:"bounceOut",slideInDuration:1500,slideBackDuration:1000,hideDuration:500,autoCloseDelay:7000,stickOnClick:true,stickWhileHover:true,isHiding:false,isFading:false,destroyAfterHide:false,closeOnMouseOut:false,xPos:0,yPos:0,statics:{defaultManager:{el:null}},initComponent:function(){var a=this;if(Ext.isDefined(a.corner)){a.position=a.corner}if(Ext.isDefined(a.slideDownAnimation)){a.slideBackAnimation=a.slideDownAnimation}if(Ext.isDefined(a.autoDestroyDelay)){a.autoCloseDelay=a.autoDestroyDelay}if(Ext.isDefined(a.autoHideDelay)){a.autoCloseDelay=a.autoHideDelay}if(Ext.isDefined(a.autoHide)){a.autoClose=a.autoHide}if(Ext.isDefined(a.slideInDelay)){a.slideInDuration=a.slideInDelay}if(Ext.isDefined(a.slideDownDelay)){a.slideBackDuration=a.slideDownDelay}if(Ext.isDefined(a.fadeDelay)){a.hideDuration=a.fadeDelay}a.position=a.position.replace(/c/,"");a.updateAlignment(a.position);a.setManager(a.manager);a.callParent(arguments)},onRender:function(){var a=this;a.callParent(arguments);a.el.hover(function(){a.mouseIsOver=true},function(){a.mouseIsOver=false;if(a.closeOnMouseOut){a.closeOnMouseOut=false;a.close()}},a)},updateAlignment:function(a){var b=this;switch(a){case"br":b.paddingFactorX=-1;b.paddingFactorY=-1;b.siblingAlignment="br-br";if(b.useXAxis){b.managerAlignment="bl-br"}else{b.managerAlignment="tr-br"}break;case"bl":b.paddingFactorX=1;b.paddingFactorY=-1;b.siblingAlignment="bl-bl";if(b.useXAxis){b.managerAlignment="br-bl"}else{b.managerAlignment="tl-bl"}break;case"tr":b.paddingFactorX=-1;b.paddingFactorY=1;b.siblingAlignment="tr-tr";if(b.useXAxis){b.managerAlignment="tl-tr"}else{b.managerAlignment="br-tr"}break;case"tl":b.paddingFactorX=1;b.paddingFactorY=1;b.siblingAlignment="tl-tl";if(b.useXAxis){b.managerAlignment="tr-tl"}else{b.managerAlignment="bl-tl"}break;case"b":b.paddingFactorX=0;b.paddingFactorY=-1;b.siblingAlignment="b-b";b.useXAxis=0;b.managerAlignment="t-b";break;case"t":b.paddingFactorX=0;b.paddingFactorY=1;b.siblingAlignment="t-t";b.useXAxis=0;b.managerAlignment="b-t";break;case"l":b.paddingFactorX=1;b.paddingFactorY=0;b.siblingAlignment="l-l";b.useXAxis=1;b.managerAlignment="r-l";break;case"r":b.paddingFactorX=-1;b.paddingFactorY=0;b.siblingAlignment="r-r";b.useXAxis=1;b.managerAlignment="l-r";break}},getXposAlignedToManager:function(){var a=this;var b=0;if(a.manager&&a.manager.el&&a.manager.el.dom){if(!a.useXAxis){return a.el.getLeft()}else{if(a.position=="br"||a.position=="tr"||a.position=="r"){b+=a.manager.el.getAnchorXY("r")[0];b-=(a.el.getWidth()+a.paddingX)}else{b+=a.manager.el.getAnchorXY("l")[0];b+=a.paddingX}}}return b},getYposAlignedToManager:function(){var b=this;var a=0;if(b.manager&&b.manager.el&&b.manager.el.dom){if(b.useXAxis){return b.el.getTop()}else{if(b.position=="br"||b.position=="bl"||b.position=="b"){a+=b.manager.el.getAnchorXY("b")[1];a-=(b.el.getHeight()+b.paddingY)}else{a+=b.manager.el.getAnchorXY("t")[1];a+=b.paddingY}}}return a},getXposAlignedToSibling:function(a){var b=this;if(b.useXAxis){if(b.position=="tl"||b.position=="bl"||b.position=="l"){return(a.xPos+a.el.getWidth()+a.spacing)}else{return(a.xPos-b.el.getWidth()-b.spacing)}}else{return b.el.getLeft()}},getYposAlignedToSibling:function(a){var b=this;if(b.useXAxis){return b.el.getTop()}else{if(b.position=="tr"||b.position=="tl"||b.position=="t"){return(a.yPos+a.el.getHeight()+a.spacing)}else{return(a.yPos-b.el.getHeight()-a.spacing)}}},getNotifications:function(b){var a=this;if(!a.manager.notifications[b]){a.manager.notifications[b]=[]}return a.manager.notifications[b]},setManager:function(a){var b=this;b.manager=a;if(typeof b.manager=="string"){b.manager=Ext.getCmp(b.manager)}if(!b.manager){b.manager=b.statics().defaultManager;if(!b.manager.el){b.manager.el=Ext.getBody()}}if(typeof b.manager.notifications=="undefined"){b.manager.notifications={}}},beforeShow:function(){var a=this;if(a.stickOnClick){if(a.body&&a.body.dom){Ext.fly(a.body.dom).on("click",function(){a.cancelAutoClose();a.addCls("notification-fixed")},a)}}if(a.autoClose){a.task=new Ext.util.DelayedTask(a.doAutoClose,a);a.task.delay(a.autoCloseDelay)}a.el.setX(-10000);a.el.setOpacity(1)},afterShow:function(){var b=this;b.callParent(arguments);var a=b.getNotifications(b.managerAlignment);if(a.length){b.el.alignTo(a[a.length-1].el,b.siblingAlignment,[0,0]);b.xPos=b.getXposAlignedToSibling(a[a.length-1]);b.yPos=b.getYposAlignedToSibling(a[a.length-1])}else{b.el.alignTo(b.manager.el,b.managerAlignment,[(b.paddingX*b.paddingFactorX),(b.paddingY*b.paddingFactorY)],false);b.xPos=b.getXposAlignedToManager();b.yPos=b.getYposAlignedToManager()}Ext.Array.include(a,b);b.el.animate({from:{x:b.el.getX(),y:b.el.getY()},to:{x:b.xPos,y:b.yPos,opacity:1},easing:b.slideInAnimation,duration:b.slideInDuration,dynamic:true})},slideBack:function(){var c=this;var b=c.getNotifications(c.managerAlignment);var a=Ext.Array.indexOf(b,c);if(!c.isHiding&&c.el&&c.manager&&c.manager.el&&c.manager.el.dom&&c.manager.el.isVisible()){if(a){c.xPos=c.getXposAlignedToSibling(b[a-1]);c.yPos=c.getYposAlignedToSibling(b[a-1])}else{c.xPos=c.getXposAlignedToManager();c.yPos=c.getYposAlignedToManager()}c.stopAnimation();c.el.animate({to:{x:c.xPos,y:c.yPos},easing:c.slideBackAnimation,duration:c.slideBackDuration,dynamic:true})}},cancelAutoClose:function(){var a=this;if(a.autoClose){a.task.cancel()}},doAutoClose:function(){var a=this;if(!(a.stickWhileHover&&a.mouseIsOver)){a.close()}else{a.closeOnMouseOut=true}},removeFromManager:function(){var c=this;if(c.manager){var b=c.getNotifications(c.managerAlignment);var a=Ext.Array.indexOf(b,c);if(a!=-1){Ext.Array.erase(b,a,1);for(;a<b.length;a++){b[a].slideBack()}}}},hide:function(){var a=this;if(a.isHiding){if(!a.isFading){a.callParent(arguments);a.isHiding=false}}else{a.isHiding=true;a.isFading=true;a.cancelAutoClose();if(a.el){a.el.fadeOut({opacity:0,easing:"easeIn",duration:a.hideDuration,remove:a.destroyAfterHide,listeners:{afteranimate:function(){a.isFading=false;a.removeCls("notification-fixed");a.removeFromManager();a.hide(a.animateTarget,a.doClose,a)}}})}}return a},destroy:function(){var a=this;if(!a.hidden){a.destroyAfterHide=true;a.hide(a.animateTarget,a.doClose,a)}else{a.callParent(arguments)}}});
!function(d,c){"function"==typeof define&&define.amd?define([],c):"undefined"!=typeof module&&module.exports?module.exports=c():d.ReconnectingWebSocket=c()}(this,function(){function b(v,u,t){function a(e,d){var f=document.createEvent("CustomEvent");return f.initCustomEvent(e,!1,!1,d),f}var s={debug:!1,automaticOpen:!0,reconnectInterval:1000,maxReconnectInterval:30000,reconnectDecay:1.5,timeoutInterval:2000};t||(t={});for(var r in s){this[r]="undefined"!=typeof t[r]?t[r]:s[r]}this.url=v,this.reconnectAttempts=0,this.readyState=WebSocket.CONNECTING,this.protocol=null;var p,q=this,o=!1,n=!1,m=document.createElement("div");m.addEventListener("open",function(c){q.onopen(c)}),m.addEventListener("close",function(c){q.onclose(c)}),m.addEventListener("connecting",function(c){q.onconnecting(c)}),m.addEventListener("message",function(c){q.onmessage(c)}),m.addEventListener("error",function(c){q.onerror(c)}),this.addEventListener=m.addEventListener.bind(m),this.removeEventListener=m.removeEventListener.bind(m),this.dispatchEvent=m.dispatchEvent.bind(m),this.open=function(c){p=new WebSocket(q.url,u||[]),c||m.dispatchEvent(a("connecting")),(q.debug||b.debugAll)&&console.debug("ReconnectingWebSocket","attempt-connect",q.url);var g=p,f=setTimeout(function(){(q.debug||b.debugAll)&&console.debug("ReconnectingWebSocket","connection-timeout",q.url),n=!0,g.close(),n=!1},q.timeoutInterval);p.onopen=function(){clearTimeout(f),(q.debug||b.debugAll)&&console.debug("ReconnectingWebSocket","onopen",q.url),q.protocol=p.protocol,q.readyState=WebSocket.OPEN,q.reconnectAttempts=0;var e=a("open");e.isReconnect=c,c=!1,m.dispatchEvent(e)},p.onclose=function(j){if(clearTimeout(h),p=null,o){q.readyState=WebSocket.CLOSED,m.dispatchEvent(a("close"))}else{q.readyState=WebSocket.CONNECTING;var i=a("connecting");i.code=j.code,i.reason=j.reason,i.wasClean=j.wasClean,m.dispatchEvent(i),c||n||((q.debug||b.debugAll)&&console.debug("ReconnectingWebSocket","onclose",q.url),m.dispatchEvent(a("close")));var h=q.reconnectInterval*Math.pow(q.reconnectDecay,q.reconnectAttempts);setTimeout(function(){q.reconnectAttempts++,q.open(!0)},h>q.maxReconnectInterval?q.maxReconnectInterval:h)}},p.onmessage=function(d){(q.debug||b.debugAll)&&console.debug("ReconnectingWebSocket","onmessage",q.url,d.data);var e=a("message");e.data=d.data,m.dispatchEvent(e)},p.onerror=function(d){(q.debug||b.debugAll)&&console.debug("ReconnectingWebSocket","onerror",q.url,d),m.dispatchEvent(a("error"))}},1==this.automaticOpen&&this.open(!1),this.send=function(c){if(p){return(q.debug||b.debugAll)&&console.debug("ReconnectingWebSocket","send",q.url,c),p.send(c)}throw"INVALID_STATE_ERR : Pausing to reconnect websocket"},this.close=function(d,c){"undefined"==typeof d&&(d=1000),o=!0,p&&p.close(d,c)},this.refresh=function(){p&&p.close()}}return b.prototype.onopen=function(){},b.prototype.onclose=function(){},b.prototype.onconnecting=function(){},b.prototype.onmessage=function(){},b.prototype.onerror=function(){},b.debugAll=!1,b.CONNECTING=WebSocket.CONNECTING,b.OPEN=WebSocket.OPEN,b.CLOSING=WebSocket.CLOSING,b.CLOSED=WebSocket.CLOSED,b});
function qgggetuuid(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(d){var b=Math.random()*16|0,a=d=="x"?b:(b&3|8);return a.toString(16)})}function qgggetCookie(a){if(document.cookie.length>0){c_start=document.cookie.indexOf(a+"=");if(c_start!=-1){c_start=c_start+a.length+1;c_end=document.cookie.indexOf(";",c_start);if(c_end==-1){c_end=document.cookie.length}return unescape(document.cookie.substring(c_start,c_end))}}return""}function qggsetCookie(b,c,a){var d=new Date();d.setDate(d.getDate()+a);document.cookie=b+"="+escape(c)+((a==null)?"":";expires="+d.toGMTString())+";path="+window.webContextValue};
(function(){var b=null;var a=null;function c(){var d=qgggetuuid();if(window.location.protocol=="http:"){a="ws://"+window.location.host+window.webContextValue+"/chat/"+d}else{a="wss://"+window.location.host+window.webContextValue+"/chat/"+d}b=new ReconnectingWebSocket(a);b.onopen=function(){console.log(" ===  websocket open..  ");qggsetCookie("qggwebsocketconn",d,null)};b.onmessage=function(e){console.log(" ===  websocket message..  ");Ext.gzqUtil.msgShowLong("提示",e.data)};b.onclose=function(e){console.error(" ===  websocket colse..  ")};b.onerror=function(e){console.error(" ===   websocket error..  ")}}c()})();