package mesrk.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Where;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.EditorComboboxExt;
import qgg.extjs.annotion.EditorTextExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.entity.BaseEntityD;

@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "BASE_MRL_CLASS")
public class BaseMrlClass extends BaseEntityD{
	
	private String name;
	private String code;
	private String parentId;
	private String remark;
	
	@FieldExt
	@EditorTextExt(allowBlank=false)
	@Column(name = "NAME_")
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@FieldExt
	@EditorTextExt(allowBlank=false)
	@Column(name = "CODE_")
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	
	@FieldExt
	@EditorComboboxExt(displayField = "text", store = "app.store.base.MrlClassComStore", valueField = "id"
			,queryMode="local",storeId="basemrlclassstoreId",forceSelection=true)
	@Column(name = "PID_")
	public String getParentId() {
		return parentId;
	}
	public void setParentId(String parentId) {
		this.parentId = parentId;
	}
	
	@FieldExt
	@Column(name = "REMARK_")
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	
	private Boolean leaf;

	@FieldExt
	@Transient
	public Boolean getLeaf() {
		return leaf;
	}
	
	public void setLeaf(Boolean leaf) {
		this.leaf = leaf;
	}
}
