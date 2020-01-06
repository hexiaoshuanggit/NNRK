<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@ page isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<c:set var="serverIp" value= '${pageContext.request.serverName }:${pageContext.request.serverPort }'></c:set>
<c:set var="webContextValue" value="${pageContext.request.contextPath }"></c:set>
<html lang="zh-CN">
	<head>
	    <meta charset="UTF-8">
	    <meta content="width=device-width,initial-scale-1.0" name="viewport">
	    <meta content="IE=edge,chrome=1" http-equiv="X-UA-COMPATIBLE">
	    <title>南农项目管理</title>
	    <link rel="shortcut icon" href="${webContextValue}/static/img/favicon.ico" type="image/x-icon" />
	    <script type="text/javascript">
	    	
		    if (window.history && window.history.pushState) {
	            history.pushState(null, null, document.URL);
	            window.addEventListener('popstate',  function () {
	                history.pushState(null, null, document.URL);
	            });
	    	}
		    
		    window.cryreportUrl = "http://192.168.150.88:8010/";
	    	window.webContextValue = "${webContextValue}";
	    	window.reportUrl = "http://${serverIp}/birt/frameset?__report=";
	    	window.lognUserName = '<shiro:principal property="userName"></shiro:principal>';
	    	window.loginUserId = '<shiro:principal property="id"></shiro:principal>';
	    	
	    	function myStopevent(e){
	    		if ( e && e.stopPropagation ){ 
				   e.stopPropagation(); //因此它支持W3C的stopPropagation()方法 
			    }else{ 
				    window.event.cancelBubble = true; //否则，我们需要使用IE的方式来取消事件冒泡 
			    }
			    if(e.preventDefault){
				   e.preventDefault();
			    }else{
				   window.event.returnValue = false;
			   }
	    	}
	    	
	    	document.onkeydown = function (e){
	    		var currKey=0,e=e||event;
	    	   currKey=e.keyCode||e.which||e.charCode;
	    	   var altflag = e.altKey;
	    	}
	    	
	    </script>
	    <link type="text/css" rel="stylesheet"  href="${webContextValue }/static/css/font-awesome.min.css">
	    <link type="text/css" rel="stylesheet"  href="${webContextValue }/static/ext/resources/ext-theme-neptune/ext-theme-neptune-all.css"> 
	    <link type="text/css" rel="stylesheet"  href="${webContextValue }/static/ext/resources/ext-charts-all.css"> 
	    
	    <link type="text/css" rel="stylesheet"  href="${webContextValue }/static/css/index.css">
	    
	    <script type="text/javascript"  src="${webContextValue }/static/ext/ext-all.js"></script>
	    <script type="text/javascript"  src="${webContextValue }/static/ext/local/ext-locale-zh_CN.js"></script>
	    <script type="text/javascript" src="${webContextValue }/static/js/reconnecting-websocket.min.js"></script>
	    <script type="text/javascript"  src="${webContextValue }/static/ext/ext-charts.js"></script>
	    <script type="text/javascript" src="${webContextValue }/static/js/ext-rk.js"></script>
	    
	</head>
    <body>
    </body>
</html>
