<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page isELIgnored="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="webContextValue" value="${pageContext.request.contextPath }"></c:set>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <link rel="shortcut icon" href="${webContextValue}/static/img/favicon.ico" type="image/x-icon" />
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta content="width=device-width,initial-scale-1.0" name="viewport">
	<meta content="IE=edge,chrome=1" http-equiv="X-UA-COMPATIBLE">
	<link href="${webContextValue}/static/css/login.css" rel="stylesheet" type="text/css">
	<title>苏达汇诚MES</title>
	<style type="text/css">
	
	
	</style>
</head>
<body>
	<div style="min-height: 500px;">
	<div class="login_box">
	      <div class="login_l_img"><img src="${webContextValue}/static/img/login-img.png"></div>
	      <div class="login">
	          <div class="login_logo"><a href="#"><img src="${webContextValue}/static/img/login_logo.png"></a></div>
	          <div class="login_name">
	               <p>苏达汇诚MES</p>
	          </div>
	          <form   action="${webContextValue}/manager/login"   method="post">
	              <input name="username"    placeholder="用户名"   autofocus="autofocus"	 type="text">
	              
				  <input name="password"   placeholder="密码"  type="password">
	              <input value="登录" style="width:100%;" type="submit">
	          </form>
	          <div class="text-danger">${qerror }</div>
	      </div>
	</div>
	</div>






</body>
</html>