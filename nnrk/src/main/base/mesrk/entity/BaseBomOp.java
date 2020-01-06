package mesrk.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.EditorComboboxExt;
import qgg.extjs.annotion.EditorNumberExt;
import qgg.extjs.annotion.EditorTextExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.annotion.RecordBusinessUniExt;
import qgg.extjs.entity.BaseEntityDoc;

@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "BASE_BOMOP")
public class BaseBomOp extends BaseEntityDoc{
	
	private String name;
	private String mrlId;
	private String mrlCode;
	private String mrlName;
	private String mrlSpec;
	private BigDecimal mrlQty;
	private String mrlMeasure;
	private String routelineId;
	private String routelineName;
	private String version;
	private Boolean isDefault;
	
	
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
//	@EditorComboboxExt(displayField = "name", store = "app.store.base.MrlComStore", valueField = "id",storeId="basemrlcomstoreId"
//		,allowBlank=false,forceSelection=true,queryMode="local")
	@Column(name = "MRL_ID_")
	public String getMrlId() {
		return mrlId;
	}
	public void setMrlId(String mrlId) {
		this.mrlId = mrlId;
	}
	
	@FieldExt
	@EditorTextExt(allowBlank=false,barCls="x-form-search-trigger")
	@Column(name = "MRL_CODE_")
	public String getMrlCode() {
		return mrlCode;
	}
	public void setMrlCode(String mrlCode) {
		this.mrlCode = mrlCode;
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
	@Column(name = "MRL_SPEC_")
	public String getMrlSpec() {
		return mrlSpec;
	}
	public void setMrlSpec(String mrlSpec) {
		this.mrlSpec = mrlSpec;
	}
	
	@FieldExt
	@EditorNumberExt(allowBlank=false,decimalPrecision = 2)
	@Column(name = "MRL_QTY_")
	public BigDecimal getMrlQty() {
		return mrlQty;
	}
	public void setMrlQty(BigDecimal mrlQty) {
		this.mrlQty = mrlQty;
	}
	
	@FieldExt
	@EditorComboboxExt(displayField = "code", store = "app.store.base.MeasureComStore", valueField = "code"
		,queryMode="local",storeId="basemeasurestoreId")
	@Column(name = "MRL_MEASURE_")
	public String getMrlMeasure() {
		return mrlMeasure;
	}
	public void setMrlMeasure(String mrlMeasure) {
		this.mrlMeasure = mrlMeasure;
	}
	
	@FieldExt
	@Column(name = "ROUTELINE_ID_")
	public String getRoutelineId() {
		return routelineId;
	}
	public void setRoutelineId(String routelineId) {
		this.routelineId = routelineId;
	}
	
	@FieldExt
	@EditorTextExt(allowBlank=false,barCls="x-form-search-trigger")
	@Column(name = "ROUTELINE_NAME_")
	public String getRoutelineName() {
		return routelineName;
	}
	public void setRoutelineName(String routelineName) {
		this.routelineName = routelineName;
	}
	
	@FieldExt
	@Column(name = "VERSION_")
	public String getVersion() {
		return version;
	}
	public void setVersion(String version) {
		this.version = version;
	}
	
	@FieldExt
	@Column(name = "IS_DEFAULT_")
	public Boolean getIsDefault() {
		return isDefault;
	}
	public void setIsDefault(Boolean isDefault) {
		this.isDefault = isDefault;
	}
	
}
