Ext.define('app.store.base.EmployeeComStore',{
	extend: 'Ext.data.Store',
	autoLoad:true,
	pageSize : 2000,
	storeId : "baseemployeecomstoreId",
	 fields : [
	   {name: 'id', type: 'string'},
	   {name: 'code', type: 'string'},
       {name: 'name', type: 'string'}
    ],
   proxy:{
   	type: 'rest',
       api: {
           read: webContextValue + '/sys/readv/emplpyeecboView'
       },
       extraParams : {
    	   
       },
       reader: {
           type: 'json',
           root: 'datas',
           totalProperty: 'totalRecord'
       },
       listeners:{
        	exception:function(proxy,response,options){}
       }
   }
});