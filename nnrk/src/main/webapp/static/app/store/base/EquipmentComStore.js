Ext.define('app.store.base.EquipmentComStore',{
	extend: 'Ext.data.Store',
	autoLoad:true,
	pageSize : 1000,
	storeId : "baseequipmentcomstoreId",
	 fields : [
	   {name: 'id', type: 'string'},
	   {name: 'code', type: 'string'},
       {name: 'name', type: 'string'},
       {name: 'text', type: 'string'}
    ],
   proxy:{
   	type: 'rest',
       api: {
           read: webContextValue + '/sys/readv/equipmentCboView'
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