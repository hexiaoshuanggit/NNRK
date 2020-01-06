/**物料控制码**/
Ext.define('app.store.base.ControllerCodeComStore',{
	extend: 'Ext.data.Store',
	storeId : "basecontrollercodecomstoreId",
	 fields : [
	   {name: 'id', type: 'int'},
       {name: 'name', type: 'string'}
    ],
    data : [
		{"id":1, "name":"批次件"},
		{"id":2, "name":"序列件"}
    ]
});