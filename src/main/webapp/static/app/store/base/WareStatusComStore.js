/**检测频次类型**/
Ext.define('app.store.base.WareStatusComStore',{
	extend: 'Ext.data.Store',
	storeId : "basewarestatuscomstoreId",
	 fields : [
	   {name: 'id', type: 'string'},
       {name: 'name', type: 'string'}
    ],
    data : [
		{"id":"启用", "name":"启用"},
		{"id":"停用", "name":"停用"}
    ]
});