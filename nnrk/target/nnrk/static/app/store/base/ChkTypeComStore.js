/**检测方式**/
Ext.define('app.store.base.ChkTypeComStore',{
	extend: 'Ext.data.Store',
	storeId : "basechktypecomstoreId",
	 fields : [
	   {name: 'id', type: 'string'},
       {name: 'name', type: 'string'}
    ],
    data : [
		{"id":"巡检", "name":"巡检"},
		{"id":"首检", "name":"首检"},
		{"id":"尾检", "name":"尾检"},
		{"id":"复检", "name":"复检"}
    ]
});