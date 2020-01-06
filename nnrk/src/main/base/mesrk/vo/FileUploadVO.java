package mesrk.vo;

import org.springframework.web.multipart.commons.CommonsMultipartFile;

public class FileUploadVO {
	private String name;
	private String desc;
	private CommonsMultipartFile  file;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public CommonsMultipartFile getFile() {
		return file;
	}
	public void setFile(CommonsMultipartFile file) {
		this.file = file;
	}
}
