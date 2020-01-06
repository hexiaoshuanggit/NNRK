Ext.define('app.store.base.MrlBomOpComStore',{
	extend: 'Ext.data.Store',
	autoLoad:false,
	pageSize : 1000,
	storeId : "basemrlbomopstoreId",
	 fields : [
	   {name: 'id', type: 'string'},
	   {name: 'code', type: 'string'},
       {name: 'name', type: 'string'}
    ],
   proxy:{
   	type: 'rest',
       api: {
           read: webContextValue + '/sys/readv/bomopcboView'
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