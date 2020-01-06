/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('app.view.main.MainModel', {
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.main',
	data : {
		name : 'app',
		// 系统信息
		system : {
			name : '富丽华MES',
			version : '2019',
			iconUrl : ''
		},
		// 用户单位信息和用户信息
		user : {
			company : 'EVERISE ',
			department : '财务部',
			name : window.lognUserName
		},
		// 服务单位和服务人员信息
		service : {
			email : '2322818268@qq.com',
			copyright : '2322818268'
		}
	},
	
	constructor : function() {  
		var me = this;  
	    this.callParent(arguments);  
	},
	
	getMenus : function() {
		return this.get('systemMenu');
	},
	
	updateTaskcount : function(btn){
//		var taskcount = Ext.MyExtJsHelper.fenthDateSyncRemote({
//			url : window.webContextValue + '/sys/readv/messageinfosView',
//			params : {}
//		});
		var messagestore = btn.up("app-main").down("mmessagegrid").getStore();
		messagestore.load();
		var msglength = messagestore.getCount(); // messagestore.findBy("closeTime",null);
		var msg = "<span class='fa fa-commenting-o' style='font-size:16px;'></span>&nbsp;<span style='color:red;font-size:12px;'>(" + msglength + ")</span>";
		btn.setText(msg);
//		this.set("user.taskcount",msg);   不知为何用MVVM 不会更新bind的数据   vertical-align: super;
	}

});