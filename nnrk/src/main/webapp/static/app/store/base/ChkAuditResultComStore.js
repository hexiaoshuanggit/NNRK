/**检测审核结果类型**/
Ext.define('app.store.base.ChkAuditResultComStore',{
	extend: 'Ext.data.Store',
	storeId : "basechkauditrstcomstoreId",
	 fields : [
	   {name: 'id', type: 'string'},
       {name: 'name', type: 'string'}
    ],
    data : [
		{"id":"返工", "name":"返工"},
		{"id":"让步接收", "name":"让步接收"},
		{"id":"工废", "name":"工废"},
		{"id":"料废", "name":"料废"},
		{"id":"降级", "name":"降级"},
		{"id":"退货", "name":"退货"},
		{"id":"特采", "name":"特采"}
    ]
});