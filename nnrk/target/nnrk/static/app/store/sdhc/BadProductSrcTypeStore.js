Ext.define('app.store.sdhc.BadProductSrcTypeStore',{
	extend: 'Ext.data.Store',
	storeId : "badproductsrctypestoreId",
	 fields : [
	   {name: 'id', type: 'int'},
       {name: 'name', type: 'string'},
       {name: 'code', type: 'string'}
    ],
    data : [
		{"id":1, "name":"来料检验",code : "来料检验"},
		{"id":2, "name":"过程检验",code : "过程检验"},
		{"id":3, "name":"出库检验",code : "出库检验"}
    ]
});