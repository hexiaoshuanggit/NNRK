package mesrk.handler;

import javax.servlet.ServletRequestEvent;

import javax.servlet.ServletRequestListener;
import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class MyRequestTrace implements ServletRequestListener{
	private static Logger logger = LogManager.getLogger(MyRequestTrace.class.getCanonicalName());
	public void requestDestroyed(ServletRequestEvent sre) {
		HttpServletRequest request = (HttpServletRequest)sre.getServletRequest();
		String contextPath = request.getContextPath();
		String url = request.getRequestURI();
		if(! url.startsWith (contextPath + "/static")){
			logger.debug( url + " : 销毁 ");
		}
	}

	public void requestInitialized(ServletRequestEvent sre) {
		HttpServletRequest request = (HttpServletRequest)sre.getServletRequest();
		String contextPath = request.getContextPath();
		String url = request.getRequestURI();
		if(! url.startsWith (contextPath + "/static")){
			logger.debug( url + " : 进入 ");
		}
	}

}
