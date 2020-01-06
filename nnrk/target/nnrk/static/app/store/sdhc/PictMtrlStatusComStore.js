Ext.define('app.store.sdhc.PictMtrlStatusComStore',{
	extend: 'Ext.data.Store',
	storeId : "pickmtrlstatuscomstoreId",
	 fields : [
	   {name: 'id', type: 'int'},
       {name: 'name', type: 'string'},
       {name: 'code', type: 'string'}
    ],
    data : [
		{"id":1, "name":"未确认",code : "未确认"},
		{"id":2, "name":"已确认",code : "已确认"}
    ]
});