//品质部人员
Ext.define('app.store.base.EmployeeChkComStore',{
	extend: 'Ext.data.Store',
	autoLoad:true,
	pageSize : 200,
	storeId : "baseemployeechkcomstoreId",
	 fields : [
	   {name: 'id', type: 'string'},
	   {name: 'code', type: 'string'},
       {name: 'name', type: 'string'}
    ],
   proxy:{
   	type: 'rest',
       api: {
           read: webContextValue + '/sys/readv/empchkcboView'
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