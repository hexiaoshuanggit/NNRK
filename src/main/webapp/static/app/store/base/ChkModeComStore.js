/**检测方式**/
Ext.define('app.store.base.ChkModeComStore',{
	extend: 'Ext.data.Store',
	storeId : "basechkmodecomstoreId",
	 fields : [
	   {name: 'id', type: 'int'},
       {name: 'name', type: 'string'}
    ],
    data : [
		{"id":1, "name":"批次检"},
		{"id":2, "name":"序列检"}
    ]
});