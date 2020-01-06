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
@Table(name = "BASE_WARE_")
public class BaseWare extends BaseEntityD{
	
	private String code;
	private String name;
	private String address;
	private String principal; //负责人
	private String tel;
	private String remark;
	private BaseEnum status; //启用,停用 
	
	private Boolean isStockMgr; //是否启用库位管理
	
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
	@Column(name = "ADDRESS_")
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	@FieldExt
	@Column(name = "PRINCIPAL_")
	public String getPrincipal() {
		return principal;
	}
	public void setPrincipal(String principal) {
		this.principal = principal;
	}
	
	@FieldExt
	@Column(name = "TEL_")
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
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
	
	@FieldExt
	@Column(name = "FIsStockMgr")
	public Boolean getIsStockMgr() {
		return isStockMgr;
	}
	public void setIsStockMgr(Boolean isStockMgr) {
		this.isStockMgr = isStockMgr;
	}
	
	
}
