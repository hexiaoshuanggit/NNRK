package mesrk.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.EditorComboboxExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.entity.BaseEntityD;

@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "BASE_PROCESSPARAM_ENTRY_")
@JsonIgnoreProperties(value= {"param"})
public class BaseProcessParamEntry extends BaseEntityD{
	
	private String mainId;
	private String chkItemId;
	private Integer lineNum;
	private String itemCode;
	private String itemName;
	
	private BaseEnum checkAttr;
	private BigDecimal standardVal;
	private BigDecimal colMin;
	private BigDecimal colMax;
	private BigDecimal specMin;
	private BigDecimal specMax;
	private String cboValue; 
	private String chkPosition;
	private String chkMeasure;//CHK_MEASURE_
	private String chkMethod; //检测方式, 人工检,仪器检
	
	private BaseProcessParam param;
	
	@Column(name = "MAIN_ID_")
	public String getMainId() {
		return mainId;
	}
	public void setMainId(String mainId) {
		this.mainId = mainId;
	}
	
	@FieldExt
	@Column(name = "CHKITEM_ID_")
	public String getChkItemId() {
		return chkItemId;
	}
	public void setChkItemId(String chkItemId) {
		this.chkItemId = chkItemId;
	}
	
	@FieldExt
	@Column(name = "LINE_NUM_")
	public Integer getLineNum() {
		return lineNum;
	}
	public void setLineNum(Integer lineNum) {
		this.lineNum = lineNum;
	}
	
	@FieldExt
	@Column(name = "CITEM_CODE_")
	public String getItemCode() {
		return itemCode;
	}
	public void setItemCode(String itemCode) {
		this.itemCode = itemCode;
	}
	
	@FieldExt
	@Column(name = "CITEM_NAME_")
	public String getItemName() {
		return itemName;
	}
	public void setItemName(String itemName) {
		this.itemName = itemName;
	}
	
	@FieldExt
	@EditorComboboxExt(displayField = "name", store = "app.store.base.ChkAttrComStore", valueField = "name"
			,storeId="basechkattrcomstoreId",queryMode="local",forceSelection=true,allowBlank=false)
	@Enumerated(EnumType.STRING)
	@Column(name = "CHECK_ATTR_")
	public BaseEnum getCheckAttr() {
		return checkAttr;
	}
	public void setCheckAttr(BaseEnum checkAttr) {
		this.checkAttr = checkAttr;
	}
	
	@FieldExt
	@Column(name = "STANDARD_VALUE_")
	public BigDecimal getStandardVal() {
		return standardVal;
	}
	public void setStandardVal(BigDecimal standardVal) {
		this.standardVal = standardVal;
	}
	
	@FieldExt
	@Column(name = "COL_MIN_")
	public BigDecimal getColMin() {
		return colMin;
	}
	public void setColMin(BigDecimal colMin) {
		this.colMin = colMin;
	}
	
	@FieldExt
	@Column(name = "COL_MAX_")
	public BigDecimal getColMax() {
		return colMax;
	}
	public void setColMax(BigDecimal colMax) {
		this.colMax = colMax;
	}
	
	@FieldExt
	@Column(name = "SPEC_MIN_")
	public BigDecimal getSpecMin() {
		return specMin;
	}
	public void setSpecMin(BigDecimal specMin) {
		this.specMin = specMin;
	}
	
	@FieldExt
	@Column(name = "SPEC_MAX_")
	public BigDecimal getSpecMax() {
		return specMax;
	}
	public void setSpecMax(BigDecimal specMax) {
		this.specMax = specMax;
	}
	
	@FieldExt
	@Column(name = "CBO_VALUES_")
	public String getCboValue() {
		return cboValue;
	}
	public void setCboValue(String cboValue) {
		this.cboValue = cboValue;
	}
	
	@FieldExt
	@Column(name = "CHK_POSITION_")
	public String getChkPosition() {
		return chkPosition;
	}
	public void setChkPosition(String chkPosition) {
		this.chkPosition = chkPosition;
	}
	
	@FieldExt
	@EditorComboboxExt(displayField = "code", store = "app.store.base.MeasureComStore", valueField = "code"
		,queryMode="local",storeId="basemeasurestoreId",forceSelection=true)
	@Column(name = "CHK_MEASURE_")
	public String getChkMeasure() {
		return chkMeasure;
	}
	public void setChkMeasure(String chkMeasure) {
		this.chkMeasure = chkMeasure;
	}
	
	@FieldExt
	@Column(name = "CHK_METHODE_")
	public String getChkMethod() {
		return chkMethod;
	}
	public void setChkMethod(String chkMethod) {
		this.chkMethod = chkMethod;
	}
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "MAIN_ID_",insertable = false,updatable = false)
	public BaseProcessParam getParam() {
		return param;
	}
	public void setParam(BaseProcessParam param) {
		this.param = param;
	}
	
}
