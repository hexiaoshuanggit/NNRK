/**查询框类型**/
Ext.define('app.store.base.CriteriaTypeComStore',{
	extend: 'Ext.data.Store',
	storeId : "basecriteriatypecomstoreId",
	 fields : [
	   {name: 'id', type: 'int'},
	   {name: 'code', type: 'string'},
       {name: 'name', type: 'string'}
    ],
    data : [
		{"id":1, "name":"文本框" , "code" : "textfield"},
		{"id":2, "name":"日期" , "code" : "datefield"},
		{"id":3, "name":"下拉框" , "code" : "combobox"},
		{"id":4, "name":"数字" , "code" : "numberfield"}
    ]
});