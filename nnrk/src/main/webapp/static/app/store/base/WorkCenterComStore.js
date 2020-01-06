Ext.define('app.store.base.WorkCenterComStore',{
	extend: 'Ext.data.Store',
	autoLoad:true,
	pageSize : 1000,
	storeId : "baseworkcenterstoreId",
	 fields : [
	   {name: 'id', type: 'string'},
	   {name: 'code', type: 'string'},
       {name: 'name', type: 'string'}
    ],
   proxy:{
   	type: 'rest',
       api: {
           read: webContextValue + '/sys/readv/workCenterView'
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