package mesrk.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.entity.BaseEntityD;
@Entity
@ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "PROJECT_MODEL")
public class ProjectModel extends BaseEntityD {
	private String name;//任务模版名
	private String describe;//描述
	private String type;//类型
	
	private String  code;//表编号
	@FieldExt
	@Column(name = "CODE_")
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	@FieldExt
	@Column(name = "NAME_")
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@FieldExt
	@Column(name = "DESCRIBE_")
	public String getDescribe() {
		return describe;
	}
	public void setDescribe(String describe) {
		this.describe = describe;
	}
	@FieldExt
	@Column(name = "TYPE_")
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	

}
