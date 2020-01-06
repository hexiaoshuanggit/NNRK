Ext.define('app.view.main.model.MessageModel',{
	extend:'Ext.data.Model',
	fields:[
		{name: 'id', type: 'string' },
		{name: 'userId', type: 'string' ,allowNull : true},
		{name: 'content', type: 'string' ,allowNull : true},
		{name: 'messagepalnId', type: 'string' ,allowNull : true},
		{name: 'moduleText', type: 'string' ,allowNull : true},
		{name: 'module', type: 'string' ,allowNull : true},
		{name: 'recordId', type: 'string' ,allowNull : true},
		{name: 'level', type: 'int',allowNull : true },
		{name: 'createTime', type: 'date' ,allowNull : true},
		{name: 'closeTime', type: 'date' ,allowNull : true},
		{name: 'desc', type: 'string' ,allowNull : true},
		{name: 'reference1', type: 'string',allowNull : true },
		{name: 'reference2', type: 'string' ,allowNull : true},
		{name: 'reference3', type: 'string' ,allowNull : true},
		{name: 'reference4', type: 'string',allowNull : true },
		{name: 'reference5', type: 'string',allowNull : true }
	],
	idProperty:'id',
	proxy:{
		type: 'rest',
        api: {
            read: webContextValue + '/sys/readv/messageinfosView'
        },
        reader: {
            type: 'json',
            root: 'datas',
            totalProperty: 'totalRecord'
        }
	}
});