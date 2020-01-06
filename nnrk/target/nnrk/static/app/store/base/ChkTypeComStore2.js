/**检测方式**/
Ext.define('app.store.base.ChkTypeComStore2',{
	extend: 'Ext.data.Store',
	storeId : "basechktypecomstore2Id",
	 fields : [
	   {name: 'id', type: 'string'},
       {name: 'name', type: 'string'}
    ],
    data : [
		{"id":"入库检", "name":"入库检"},
		{"id":"出库检", "name":"出库检"}
    ]
});