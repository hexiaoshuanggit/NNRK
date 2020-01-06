package mesrk.util;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.StringUtils;

/***
 * isPicture 判断是不是图片
 * isExcel 判断是不是excel
 * isWord 判断是不是word
 * @author Admin
 *
 */
public class FileUtilRK {
	
	//粗略判断是不是图片
	public static boolean isPicture(String fileName) {
		if(StringUtils.isBlank(fileName)) {
			return false;
		}
		String extension = FilenameUtils.getExtension(fileName);
		return ArrayUtils.contains(new String[] {"png","jpg","jpeg","bmp","gif"}, StringUtils.lowerCase(extension));
	}
	
	public static boolean isExcel(String fileName) {
		if(StringUtils.isBlank(fileName)) {
			return false;
		}
		String extension = FilenameUtils.getExtension(fileName);
		return ArrayUtils.contains(new String[] {"xlsx","xls"}, StringUtils.lowerCase(extension));
	}
	
	public static boolean isWord(String fileName) {
		if(StringUtils.isBlank(fileName)) {
			return false;
		}
		String extension = FilenameUtils.getExtension(fileName);
		return ArrayUtils.contains(new String[] {"docx","doc"}, StringUtils.lowerCase(extension));
	}
}
