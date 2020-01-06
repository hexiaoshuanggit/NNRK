/**检测结果类型**/
Ext.define('app.store.base.ChkResultComStore',{
	extend: 'Ext.data.Store',
	storeId : "basechkrstcomstoreId",
	 fields : [
	   {name: 'id', type: 'string'},
       {name: 'name', type: 'string'}
    ],
    data : [
		{"id":"合格", "name":"合格"},
		{"id":"不合格", "name":"不合格"},
		{"id":"NA", "name":"NA"}
    ]
});