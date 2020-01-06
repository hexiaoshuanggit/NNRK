/**自动生成的TreeModel，一模一样但显示的时候还是有点问题**/
Ext.define("app.view.basemrlclass.model.MrlTreeModel",{
	extend : 'Ext.data.TreeModel',
	idProperty : "id",
	identifier : {
		type : 'sequential',
		prefix : "TEMPID_",
		increment : 1,
		seed : 1
	},
	modelMainId : "t1.PID_",
	vosign : "basemrlclass",
	fields : [
	    {name:"id", type : "string",defaultValue : null, allowNull : true,persist : true},
	    {name:"leaf", type : "boolean",defaultValue : null, allowNull : true,persist : true},
	    {name:"parentId", type : "string", defaultValue : null, allowNull : true,persist : true},
	    {name:"code", type : "string" ,defaultValue : null, allowNull : true,persist : true},
	    {name:"name", type : "string" ,defaultValue : null, allowNull : true,persist : true},
	    {name:"remark", type : "string" , defaultValue : null, allowNull : true,persist : true}
	],
	proxy:{
		type: 'rest',
		api : {
            read: webContextValue  +  '/basemrlclass/subtree',
            update: webContextValue  + '/basemrlclass/updatess',
            create: webContextValue   +  '/basemrlclass/createss',
            destroy :  webContextValue  + '/basemrlclass/deletess'
        }
	}
});