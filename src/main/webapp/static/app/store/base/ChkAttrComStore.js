/**检测方式**/
Ext.define('app.store.base.ChkAttrComStore',{
	extend: 'Ext.data.Store',
	storeId : "basechkattrcomstoreId",
	 fields : [
	   {name: 'id', type: 'string'},
       {name: 'name', type: 'string'}
    ],
    data : [
		{"id":"定性", "name":"定性"},
		{"id":"定量", "name":"定量"}
    ]
});