/**检测频次类型 (时间，数量 等等)**/
Ext.define('app.store.base.ChkFqTypeComStore',{
	extend: 'Ext.data.Store',
	storeId : "basechkfqtypecomstoreId",
	 fields : [
	   {name: 'id', type: 'string'},
       {name: 'name', type: 'string'}
    ],
    data : [
		{"id":"数量", "name":"数量"}
    ]
});