/**查询条件关系**/
Ext.define('app.store.base.DocStatusComStore',{
	extend: 'Ext.data.Store',
	storeId : "basedocstatuscomstoreId",
	 fields : [
	   {name: 'id', type: 'int'},
	   {name: 'code', type: 'string'},
       {name: 'name', type: 'string'}
    ],
    data : [
		{"id":1, "name":"草稿" , "code" : "草稿"},
		{"id":2, "name":"已审核" , "code" : "已审核"}
    ]
});