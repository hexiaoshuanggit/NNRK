Ext.define('app.store.base.RouteLineOpComStore',{
	extend: 'Ext.data.Store',
	autoLoad:false,
	pageSize : 100,
	storeId : "baseroutelineopcomstoreId",
	 fields : [
	   {name: 'id', type: 'string'},
	   {name: 'opdefId', type: 'string'},
	   {name: 'code', type: 'string'},
       {name: 'name', type: 'string'},
       {name: 'text', type: 'string'}
    ],
   proxy:{
   	type: 'rest',
       api: {
           read: webContextValue + '/sys/readv/routeLineOpCboView'
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