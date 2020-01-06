jQuery.restful = (function (){
	return {
		delresource : function(resturl,callback){
			 noty({
		            text        : "<br><br> 你确认删除吗？<br> 删除后无法恢复 <br><br>",
		            type        : 'warning',
		            dismissQueue: true,
		            layout      : 'center',
		            theme       : 'bootstrapTheme',
		            modal : true,
		            buttons     : [
                       {  addClass: 'btn btn-primary btn-xs', text: '确定', onClick: function ($noty) {
                    	   jQuery.ajax({
               				url : resturl,
               				type:'DELETE',
               				success: function(result) {
               					if(!callback){
               						window.location.reload();
               					}else{
               						$noty.close();
               						callback();
               					}
               			    },
               			    error  : function(){
               			    	alert('操作失败');
               			    	$noty.close();
               			    }
               			  });
                       }
                       },
                       {addClass: 'btn btn-danger btn-xs', text: '取消', onClick: function ($noty) {
                           $noty.close();
                       }
                       }
                   ]
		    });
			
		}
	}
})(jQuery);