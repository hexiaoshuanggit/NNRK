Ext.define('app.store.sdhc.ChkDtPositionComStore',{
	extend: 'Ext.data.Store',
	autoLoad:true,
	pageSize : 100,
	storeId : "chkdtpositioncomstore",
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
    	   "params[= t2.NAME_]" : "检测位置"
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