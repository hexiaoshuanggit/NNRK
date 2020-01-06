package mesrk.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.EditorTextExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.annotion.RecordBusinessUniExt;
import qgg.extjs.entity.BaseEntityD;

/***
 * 专门用来存放基础下拉框表
 * @author Admin
 *
 */
@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "BASE_COMBOX")
public class BaseCombox extends BaseEntityD{
	
	private String name;
	private String type;
	private String desc;
	
	@FieldExt @RecordBusinessUniExt
	@EditorTextExt(allowBlank=false)
	@Column(name = "NAME_")
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@FieldExt
	@Column(name = "TYPE_")
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	@FieldExt
	@Column(name = "DESC_")
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
}
