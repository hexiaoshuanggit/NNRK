package mesrk.util;

import java.util.Date;


import gzq.utils.release.DateUtilRK;

public class BaseUtils {
	
	public static String[] ignoreProps1 = 
			new String[] {"id","docCode","docDate","docStatus","checkTime","checkUser","createUser","createTime","updateUser","updateUser","readonly1","readonly2","readonly3"};
	
	public static String[] ignoreProps2 = 
			new String[] {"id","docCode","docDate","docStatus","checkTime","checkUser","createUser","createTime","updateUser","updateUser"
					,"readonly1","readonly2","readonly3","ref1","ref2","ref3","ref4","ref5"
					,"redundant1","redundant2","redundant3","redundant4","redundant5","redundant6","redundant7","redundant8"};
	
	
	public static long differMinute(String beginTime,String endTime) {
		Date start = DateUtilRK.parseDate(beginTime);
		Date end = DateUtilRK.parseDate(endTime);
		long between = (end.getTime() - start .getTime())/1000;
		long min = between/60;
		return min;
	}
}
