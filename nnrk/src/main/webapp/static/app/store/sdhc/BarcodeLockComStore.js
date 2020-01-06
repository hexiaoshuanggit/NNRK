/**锁定，解锁条码**/
Ext.define('app.store.sdhc.BarcodeLockComStore',{
	extend: 'Ext.data.Store',
	storeId : "barcodelockcomstoreId",
	 fields : [
	   {name: 'id', type: 'string'},
       {name: 'name', type: 'string'}
    ],
    data : [
		{"id":"锁定", "name":"锁定"},
		{"id":"解锁", "name":"解锁"}
    ]
});