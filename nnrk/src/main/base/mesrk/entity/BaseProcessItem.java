package mesrk.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.ColumnExt;
import qgg.extjs.annotion.EditorComboboxExt;
import qgg.extjs.annotion.EditorTextExt;
import qgg.extjs.annotion.ExcelExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.annotion.RecordBusinessUniExt;
import qgg.extjs.entity.BaseEntityD;

@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "BASE_PROCESS_ITEM")
public class BaseProcessItem extends BaseEntityD{
	
	private String code;
	private String name;
	private BaseEnum checkAttr;
	private BigDecimal standardVal;
	private BigDecimal colMin;
	private BigDecimal colMax;
	private BigDecimal specMin;
	private BigDecimal specMax;
	private BigDecimal upDeviation;  //上偏差  (估计不需要此字段,任务中才要)
	private BigDecimal lowDeviation; //下偏差 (估计不需要此字段,任务中才要)
	private String cboValues; //定性可选值, (逗号分隔)
	private String chkMethod; //检测方式, 人工检,仪器检
	private String chkPosition;
	private String chkMeasure;//CHK_MEASURE_
	private String remark;
	
	@FieldExt  @ColumnExt(sortable=true) @ExcelExt
	@EditorTextExt(allowBlank=false)
	@Column(name = "CODE_")
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	
	@FieldExt @ColumnExt(sortable=true) @RecordBusinessUniExt @ExcelExt
	@EditorTextExt(allowBlank=false)
	@Column(name = "NAME_")
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@FieldExt @ExcelExt
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
	
	@FieldExt @ExcelExt
	@Column(name = "STANDARD_VALUE_")
	public BigDecimal getStandardVal() {
		return standardVal;
	}
	public void setStandardVal(BigDecimal standardVal) {
		this.standardVal = standardVal;
	}
	
	@FieldExt @ExcelExt
	@Column(name = "COL_MIN_")
	public BigDecimal getColMin() {
		return colMin;
	}
	public void setColMin(BigDecimal colMin) {
		this.colMin = colMin;
	}
	
	@FieldExt @ExcelExt
	@Column(name = "COL_MAX_")
	public BigDecimal getColMax() {
		return colMax;
	}
	public void setColMax(BigDecimal colMax) {
		this.colMax = colMax;
	}
	
	@FieldExt @ExcelExt
	@Column(name = "SPEC_MIN_")
	public BigDecimal getSpecMin() {
		return specMin;
	}
	public void setSpecMin(BigDecimal specMin) {
		this.specMin = specMin;
	}
	
	@FieldExt @ExcelExt
	@Column(name = "SPEC_MAX_")
	public BigDecimal getSpecMax() {
		return specMax;
	}
	public void setSpecMax(BigDecimal specMax) {
		this.specMax = specMax;
	}
	
	@FieldExt @ExcelExt
	@EditorTextExt(emptyText="多个值以逗号分隔")
	@Column(name = "CBO_VALUES_")
	public String getCboValues() {
		return cboValues;
	}
	public void setCboValues(String cboValues) {
		this.cboValues = cboValues;
	}
	
	@FieldExt @ExcelExt
	@Column(name = "CHK_POSITION_")
	public String getChkPosition() {
		return chkPosition;
	}
	public void setChkPosition(String chkPosition) {
		this.chkPosition = chkPosition;
	}
	
	@FieldExt @ExcelExt
	@EditorComboboxExt(displayField = "code", store = "app.store.base.MeasureComStore", valueField = "code"
		,queryMode="local",storeId="basemeasurestoreId",forceSelection=true)
	@Column(name = "CHK_MEASURE_")
	public String getChkMeasure() {
		return chkMeasure;
	}
	public void setChkMeasure(String chkMeasure) {
		this.chkMeasure = chkMeasure;
	}
	
	@FieldExt @ExcelExt
	@Column(name = "UP_DEVIATION_")
	public BigDecimal getUpDeviation() {
		return upDeviation;
	}
	public void setUpDeviation(BigDecimal upDeviation) {
		this.upDeviation = upDeviation;
	}
	
	@FieldExt @ExcelExt
	@Column(name = "LOW_DEVIATION_")
	public BigDecimal getLowDeviation() {
		return lowDeviation;
	}
	public void setLowDeviation(BigDecimal lowDeviation) {
		this.lowDeviation = lowDeviation;
	}
	
	@FieldExt @ExcelExt
	@Column(name = "CHK_METHODE_")
	public String getChkMethod() {
		return chkMethod;
	}
	public void setChkMethod(String chkMethod) {
		this.chkMethod = chkMethod;
	}
	
	@FieldExt @ExcelExt
	@Column(name = "REMARK_")
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	
	
}
