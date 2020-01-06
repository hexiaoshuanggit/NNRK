package mesrk.entity;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.entity.BaseEntityD;

@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "ACCESSORY_DEFINITION")
public class AccessoryDefinition extends BaseEntityD {
	private String code;//附件定义编号
    private String name;//附件定义名名
    private String accessory;//附件
    private String describe;//附件定义描述
    
   
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
	@Column(name = "ACCESSORY_")
	public String getAccessory() {
		return accessory;
	}
	public void setAccessory(String accessory) {
		this.accessory = accessory;
	}
	@FieldExt
	@Column(name = "DESCRIBE_")
	public String getDescribe() {
		return describe;
	}
	public void setDescribe(String describe) {
		this.describe = describe;
	}
	
	   
	   
	}
