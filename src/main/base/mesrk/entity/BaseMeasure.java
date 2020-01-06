package mesrk.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.EditorComboboxExt;
import qgg.extjs.annotion.EditorTextExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.annotion.RecordBusinessUniExt;
import qgg.extjs.entity.BaseEntityD;

/**计量档案**/
@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "BASE_MEASURE")
public class BaseMeasure extends BaseEntityD{
	
	private String name;
	private String code;
	private String measureType;  //类型 维护在BaseCombox里面
	private Boolean isBasicUnit;   //是否基本单位
	private BigDecimal convertRate; //和基本单位的换算率
	private String remark;
	
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
	@EditorTextExt(allowBlank=false)
	@Column(name = "CODE_")
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	
	@FieldExt
	@EditorComboboxExt(displayField = "name", store = "app.store.base.MeasureTypeComStore", valueField = "name"
			,storeId="basemeasuretypestoreId",queryMode="local",forceSelection=true)
	@Column(name = "MEASURE_TYPE_")
	public String getMeasureType() {
		return measureType;
	}
	public void setMeasureType(String measureType) {
		this.measureType = measureType;
	}
	
	@FieldExt
	@Column(name = "IS_BASIC_UNIT_")
	public Boolean getIsBasicUnit() {
		return isBasicUnit;
	}
	public void setIsBasicUnit(Boolean isBasicUnit) {
		this.isBasicUnit = isBasicUnit;
	}
	
	@FieldExt
	@Column(name = "CONVER_RATE_")
	public BigDecimal getConvertRate() {
		return convertRate;
	}
	public void setConvertRate(BigDecimal convertRate) {
		this.convertRate = convertRate;
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
