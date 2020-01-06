Ext.define('app.view.main.model.ReportModel',{
	extend:'Ext.data.Model',
	fields:[
		{name: 'id', type: 'string' },
		{name: 'reportName', type: 'string' },
		{name: 'reportUrl', type: 'string' },
		{name: 'reportModule', type: 'string' },
		{name: 'createTime', type: 'string' },
		{name: 'createUser', type: 'string' },
		{name: 'updateTime', type: 'string' },
		{name: 'updateUser', type: 'string' },
		{name: 'reference1', type: 'string' },
		{name: 'reference2', type: 'string' },
		{name: 'reference3', type: 'string' },
		{name: 'reference4', type: 'string' }
	],
	idProperty:'id',
	proxy:{
		type: 'rest',
        api: {
            read: webContextValue + '/sys/reportinit'
        },
        reader: {
            type: 'json',
            root: 'datas',
            totalProperty: 'totalRecord'
        }
	}
});