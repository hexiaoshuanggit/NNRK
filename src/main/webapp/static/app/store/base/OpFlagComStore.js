/**检测方式**/
Ext.define('app.store.base.OpFlagComStore',{
	extend: 'Ext.data.Store',
	storeId : "baseopflagcomstoreId",
	 fields : [
	   {name: 'id', type: 'int'},
       {name: 'name', type: 'string'}
    ],
    data : [
		{"id":1, "name":"开始"},
		{"id":4, "name":"中间"},
		{"id":7, "name":"结束"}
    ]
});