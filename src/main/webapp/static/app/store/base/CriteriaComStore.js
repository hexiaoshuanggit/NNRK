/**查询条件关系**/
Ext.define('app.store.base.CriteriaComStore',{
	extend: 'Ext.data.Store',
	storeId : "basecriteriacomstoreId",
	 fields : [
	   {name: 'id', type: 'int'},
	   {name: 'code', type: 'string'},
       {name: 'name', type: 'string'}
    ],
    data : [
		{"id":1, "name":"等于" , "code" : "="},
		{"id":2, "name":"不等于" , "code" : "<>"},
		{"id":3, "name":"大于等于" , "code" : ">="},
		{"id":4, "name":"小于等于" , "code" : "<="},
		{"id":5, "name":"大于" , "code" : ">"},
		{"id":6, "name":"小于" , "code" : "<"},
		{"id":7, "name":"包含" , "code" : "like"},
		{"id":8, "name":"左包含" , "code" : "like%"},
		{"id":9, "name":"右包含" , "code" : "%like"}
    ]
});