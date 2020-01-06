Ext.define('app.store.sdhc.OutStockDirectComStore',{
	extend: 'Ext.data.Store',
	storeId : "outstockdirectcomstoreId",
	 fields : [
	   {name: 'id', type: 'int'},
       {name: 'name', type: 'string'},
       {name: 'code', type: 'string'}
    ],
    data : [
		{"id":1, "name":"销售出库",code : "销售出库"},
		{"id":2, "name":"销售退货",code : "销售退货"}
    ]
});