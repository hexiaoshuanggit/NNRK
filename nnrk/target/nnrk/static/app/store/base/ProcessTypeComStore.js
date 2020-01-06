/**加工类型**/
Ext.define('app.store.base.ProcessTypeComStore',{
	extend: 'Ext.data.Store',
	storeId : "baseprocesstypecomstoreId",
	 fields : [
	   {name: 'id', type: 'string'},
       {name: 'name', type: 'string'}
    ],
    data : [
		{"id":"自制", "name":"自制"},
		{"id":"外协", "name":"外协"}
    ]
});