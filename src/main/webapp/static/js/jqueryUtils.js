(function(jQuery) {
	jQuery.gzq = jQuery.gzq || {};
	/*验证银行卡*/
	jQuery.gzq.validateBankCard = function(bankCard){
		return /\d{16,19}/.test(bankCard)
	}
	/*验证18位身份证*/
	jQuery.gzq.validateIdCard = function(idCard) {
		if(idCard.length == 15){
			return true;
		}
		if (idCard.length == 18) {
			var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10,
					5, 8, 4, 2); // 将前17位加权因子保存在数组里
			var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); // 这是除以11后，可能产生的11位余数、验证码，也保存成数组
			var idCardWiSum = 0; // 用来保存前17位各自乖以加权因子后的总和
			for (var i = 0; i < 17; i++) {
				idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
			}
			var idCardMod = idCardWiSum % 11;// 计算出校验码所在数组的位置
			var idCardLast = idCard.substring(17);// 得到最后一位身份证号码
			// 如果等于2，则说明校验码是10，身份证号码最后一位应该是X
			if (idCardMod == 2 && (idCardLast == "X" || idCardLast == "x")) {
				return true;
			} else if(idCardLast == idCardY[idCardMod]){
				// 用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
				return true;
			}
		}
		return false;
	}
	jQuery.gzq.notifycation = function(options){
		var configs = $.extend({},{
			text : 'Hello',
			type : 'alert',
			timeout : 3000,
			closeWith : ['click'],
			layout : 'center',
			theme : 'defaultTheme'
		},options);
		var n = noty(configs);
	}
})(jQuery);