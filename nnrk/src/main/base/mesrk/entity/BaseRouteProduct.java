package mesrk.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.annotion.RecordBusinessUniExt;
import qgg.extjs.entity.BaseEntity;

@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "BASE_ROUTE_PRODUCT")
public class BaseRouteProduct extends BaseEntity{
	
	private String lineId;
	private String mrlId;
	private String mrlName;
	private String mrlCode;
	private String mrlSpec;
	private Boolean isDefault;
	private String remark;
	
	@Column(name = "LINE_ID_")
	public String getLineId() {
		return lineId;
	}
	public void setLineId(String lineId) {
		this.lineId = lineId;
	}
	
	@FieldExt
	@Column(name = "MRL_ID_")
	public String getMrlId() {
		return mrlId;
	}
	public void setMrlId(String mrlId) {
		this.mrlId = mrlId;
	}
	
	@FieldExt @RecordBusinessUniExt
	@Column(name = "MRL_NAME_")
	public String getMrlName() {
		return mrlName;
	}
	public void setMrlName(String mrlName) {
		this.mrlName = mrlName;
	}
	
	@FieldExt
	@Column(name = "MRL_CODE_")
	public String getMrlCode() {
		return mrlCode;
	}
	public void setMrlCode(String mrlCode) {
		this.mrlCode = mrlCode;
	}
	
	@FieldExt
	@Column(name = "MRL_SPEC_")
	public String getMrlSpec() {
		return mrlSpec;
	}
	public void setMrlSpec(String mrlSpec) {
		this.mrlSpec = mrlSpec;
	}
	
	@FieldExt
	@Column(name = "IS_DEFAULT_")
	public Boolean getIsDefault() {
		return isDefault;
	}
	public void setIsDefault(Boolean isDefault) {
		this.isDefault = isDefault;
	}
	
	@FieldExt
	@Column(name = "REMARK_")
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	
}
