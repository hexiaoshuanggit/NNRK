package mesrk.entity;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.EditorComboboxExt;
import qgg.extjs.annotion.EditorTextExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.entity.BaseEntityDoc;

@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "BASE_PROCESSPARAM_")
@JsonIgnoreProperties(value= {"entrys"})
public class BaseProcessParam extends BaseEntityDoc{

	private String name;
	private String workCenterId;
	private String workCenterName;
	private String opId;
	private String opName;
	private String opCode;
	private String equipId;
	private String equipName;
	private String mrlId;
	private String mrlCode;
	private String mrlName;
	private String fqType; //频次类型(预留)
	private BigDecimal fqValue; //频次值
	
	private Set<BaseProcessParamEntry> entrys = new HashSet<BaseProcessParamEntry>();
	
	
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
	@Column(name = "WORKCENTER_ID_")
	public String getWorkCenterId() {
		return workCenterId;
	}
	public void setWorkCenterId(String workCenterId) {
		this.workCenterId = workCenterId;
	}
	
	@FieldExt
	@EditorComboboxExt(displayField = "name", store = "app.store.base.WorkCenterComStore", valueField = "name"
			,storeId="baseworkcenterstoreId",queryMode="local",allowBlank=false)
	@Column(name = "WORKCENTER_NAME_")
	public String getWorkCenterName() {
		return workCenterName;
	}
	public void setWorkCenterName(String workCenterName) {
		this.workCenterName = workCenterName;
	}
	
	@FieldExt
	@Column(name = "OP_ID_")
	public String getOpId() {
		return opId;
	}
	public void setOpId(String opId) {
		this.opId = opId;
	}
	
	@FieldExt
	@Column(name = "OP_NAME_")
	public String getOpName() {
		return opName;
	}
	public void setOpName(String opName) {
		this.opName = opName;
	}
	
	@FieldExt
	@EditorComboboxExt(displayField = "code", store = "app.store.base.OpComStore", valueField = "code"
		,storeId="baseopcomstoreId",queryMode="local",allowBlank=false)
	@Column(name = "OP_CODE_")
	public String getOpCode() {
		return opCode;
	}
	public void setOpCode(String opCode) {
		this.opCode = opCode;
	}
	
	@FieldExt
	@Column(name = "EQUIP_ID_")
	public String getEquipId() {
		return equipId;
	}
	public void setEquipId(String equipId) {
		this.equipId = equipId;
	}
	
	@FieldExt
	@EditorComboboxExt(displayField = "code", store = "app.store.base.EquipmentComStore", valueField = "code"
		,storeId="baseequipmentcomstoreId",queryMode="local",allowBlank = false)
	@Column(name = "EQUIP_NAME_")
	public String getEquipName() {
		return equipName;
	}
	public void setEquipName(String equipName) {
		this.equipName = equipName;
	}
	
	@FieldExt
	@Column(name = "MRL_ID_")
	public String getMrlId() {
		return mrlId;
	}
	public void setMrlId(String mrlId) {
		this.mrlId = mrlId;
	}
	
	@FieldExt
	@EditorTextExt(barCls="x-form-search-trigger",allowBlank = false)
	@Column(name = "MRL_CODE_")
	public String getMrlCode() {
		return mrlCode;
	}
	public void setMrlCode(String mrlCode) {
		this.mrlCode = mrlCode;
	}
	
	@FieldExt
	@Column(name = "MRL_NAME_")
	public String getMrlName() {
		return mrlName;
	}
	public void setMrlName(String mrlName) {
		this.mrlName = mrlName;
	}
	
	@Column(name = "FQ_TYPE_")
	public String getFqType() {
		return fqType;
	}
	public void setFqType(String fqType) {
		this.fqType = fqType;
	}
	
	@Column(name = "FQ_VALUE_")
	public BigDecimal getFqValue() {
		return fqValue;
	}
	public void setFqValue(BigDecimal fqValue) {
		this.fqValue = fqValue;
	}
	
	@Where(clause = "IS_DELETE_=0")
	@OneToMany(fetch=FetchType.LAZY,mappedBy="param")
	public Set<BaseProcessParamEntry> getEntrys() {
		return entrys;
	}
	public void setEntrys(Set<BaseProcessParamEntry> entrys) {
		this.entrys = entrys;
	}
	
	
}
