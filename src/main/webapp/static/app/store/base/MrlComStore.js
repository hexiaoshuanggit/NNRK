Ext.define('app.store.base.MrlComStore',{
	extend: 'Ext.data.Store',
	autoLoad:true,
	pageSize : 5000,
	storeId : "basemrlcomstoreId",
	 fields : [
	   {name: 'id', type: 'string'},
	   {name: 'code', type: 'string'},
       {name: 'name', type: 'string'},
       {name: 'text', type: 'string'},
       {name: 'spec', type: 'string'},
       {name: 'measure', type: 'string'}
    ],
   proxy:{
   	type: 'rest',
       api: {
           read: webContextValue + '/sys/readv/mrlCboView'
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