Ext.define('app.store.base.SexComStore',{
	extend: 'Ext.data.Store',
	autoLoad:true,
	pageSize : 1000,
	storeId : "basesexstoreId",
	 fields : [
	   {name: 'id', type: 'string'},
	   {name: 'code', type: 'string'},
       {name: 'name', type: 'string'}
    ],
   proxy:{
   	type: 'rest',
       api: {
           read: webContextValue + '/basecombox/readv/comboxView'
       },
       extraParams : {
    	   "params[= t2.NAME_]" : "性别"
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