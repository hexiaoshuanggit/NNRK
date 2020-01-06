package mesrk.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.EditorComboboxExt;
import qgg.extjs.annotion.EditorTextExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.entity.BaseEntityD;

@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "BASE_WARELOCATION_")
public class BaseWareLocation  extends BaseEntityD{

	private String mainId;
	private String code;
	private String name;
	private String remark;
	private BaseEnum status; //启用,停用 
	
	@Column(name = "MAIN_ID_")
	public String getMainId() {
		return mainId;
	}
	public void setMainId(String mainId) {
		this.mainId = mainId;
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
	@EditorTextExt(allowBlank=false)
	@Column(name = "NAME_")
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@FieldExt
	@Column(name = "REMARK_")
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	
	@FieldExt
	@EditorComboboxExt(displayField = "name", store = "app.store.base.WareStatusComStore", valueField = "name"
		,allowBlank=false,queryMode="local",storeId="basewarestatuscomstoreId")
	@Enumerated(EnumType.STRING)
	@Column(name = "STATUS_")
	public BaseEnum getStatus() {
		return status;
	}
	public void setStatus(BaseEnum status) {
		this.status = status;
	}
	
}
