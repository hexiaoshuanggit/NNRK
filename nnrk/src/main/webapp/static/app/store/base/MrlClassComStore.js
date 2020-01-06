Ext.define('app.store.base.MrlClassComStore',{
	extend: 'Ext.data.Store',
	autoLoad:true,
	pageSize : 1000,
	storeId : "basemrlclassstoreId",
	 fields : [
	   {name: 'id', type: 'string'},
	   {name: 'code', type: 'string'},
       {name: 'name', type: 'string'},
       {name: 'text', type: 'string'}
    ],
   proxy:{
   	type: 'rest',
       api: {
           read: webContextValue + '/sys/readv/mrlClassCboView'
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