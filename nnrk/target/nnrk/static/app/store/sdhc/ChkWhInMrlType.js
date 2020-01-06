Ext.define('app.store.sdhc.ChkWhInMrlType',{
	extend: 'Ext.data.Store',
	storeId : "chkwhinmrltypecomstoreId",
	 fields : [
	   {name: 'id', type: 'int'},
       {name: 'name', type: 'string'},
       {name: 'code', type: 'string'}
    ],
    data : [
		{"id":1, "name":"样品",code : "样品"},
		{"id":2, "name":"普通",code : "普通"}
    ]
});