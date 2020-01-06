/**派工单状态**/
Ext.define('app.store.sdhc.DispatchStatusComStore',{
	extend: 'Ext.data.Store',
	storeId : "dispatchstatuscomstoreId",
	 fields : [
	   {name: 'id', type: 'int'},
       {name: 'name', type: 'string'},
       {name: 'code', type: 'string'}
    ],
    data : [
		{"id":1, "name":"未开工","code" : "未开工"},
		{"id":2, "name":"开工","code" : "开工"},
		{"id":3, "name":"暂停","code" : "暂停"},
		{"id":4, "name":"完工","code" : "完工"}
    ]
});