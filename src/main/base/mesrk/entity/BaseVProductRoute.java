package mesrk.entity;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.FieldExt;

/*
 *
 */
//产品 - 工艺路线视图
@Entity @ClassExt
@Table(name = "BASE_V_PRODROUTE")
public class BaseVProductRoute {
	
	private String id;
	private String mrlId;
	private String mrlName;
	private String mrlCode;
	private String mrlSpec;
	private Boolean isDefault;
	private String remark;
	
	private String lineId;
	private String lineCode;
	private String lineName;
	private String lineVersion;
	private String lineRemark;
	
	@FieldExt
	@Id
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	@FieldExt
	public String getMrlId() {
		return mrlId;
	}
	public void setMrlId(String mrlId) {
		this.mrlId = mrlId;
	}
	
	@FieldExt
	public String getMrlName() {
		return mrlName;
	}
	public void setMrlName(String mrlName) {
		this.mrlName = mrlName;
	}
	
	@FieldExt
	public String getMrlCode() {
		return mrlCode;
	}
	public void setMrlCode(String mrlCode) {
		this.mrlCode = mrlCode;
	}
	
	@FieldExt
	public String getMrlSpec() {
		return mrlSpec;
	}
	public void setMrlSpec(String mrlSpec) {
		this.mrlSpec = mrlSpec;
	}
	
	@FieldExt
	public Boolean getIsDefault() {
		return isDefault;
	}
	public void setIsDefault(Boolean isDefault) {
		this.isDefault = isDefault;
	}
	
	@FieldExt
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	
	@FieldExt
	public String getLineId() {
		return lineId;
	}
	public void setLineId(String lineId) {
		this.lineId = lineId;
	}
	
	@FieldExt
	public String getLineCode() {
		return lineCode;
	}
	public void setLineCode(String lineCode) {
		this.lineCode = lineCode;
	}
	
	@FieldExt
	public String getLineName() {
		return lineName;
	}
	public void setLineName(String lineName) {
		this.lineName = lineName;
	}
	
	@FieldExt
	public String getLineVersion() {
		return lineVersion;
	}
	public void setLineVersion(String lineVersion) {
		this.lineVersion = lineVersion;
	}
	
	@FieldExt
	public String getLineRemark() {
		return lineRemark;
	}
	public void setLineRemark(String lineRemark) {
		this.lineRemark = lineRemark;
	}
	
}
