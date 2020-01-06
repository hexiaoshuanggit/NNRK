Ext.define('app.store.base.MrlRouteLineComStore',{
	extend: 'Ext.data.Store',
	autoLoad:false,
	pageSize : 200,
	storeId : "basemrlroutelinecomstoreId",
	 fields : [
	   {name: 'id', type: 'string'},
	   {name: 'code', type: 'string'},
       {name: 'name', type: 'string'},
       {name: 'routlineId' , type : 'string'}
    ],
   proxy:{
   	type: 'rest',
       api: {
           read: webContextValue + '/sys/readv/mrlroutelineCboView'
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