Ext.define('app.store.base.MeasureTypeComStore',{
	extend: 'Ext.data.Store',
	autoLoad:true,
	pageSize : 1000,
	storeId : "basemeasuretypestoreId",
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
    	   "params[= t2.NAME_]" : "计量类型"
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