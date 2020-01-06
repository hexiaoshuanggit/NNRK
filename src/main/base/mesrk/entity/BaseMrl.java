package mesrk.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.EditorComboboxExt;
import qgg.extjs.annotion.EditorTextExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.annotion.RecordBusinessUniExt;
import qgg.extjs.entity.BaseEntityD;

@JsonIgnoreProperties(value= {"mrlClass"})
@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "BASE_MRL")
public class BaseMrl extends BaseEntityD{
	
	private String code;
	private String name;
	private String foreignName; //外文名
	private String externalCode; //外部编码
	private String model; //型号
	private String rawMrl; //材质
	private String specification;  //规格
	private String breed; //品牌
	private Integer controlCode; //控制码(1批次件/2序列件/4标准件)
	private Integer chkBatch; //检验批量
	private String packManner;  //包装方式
	private String packSpecification; //包装规格
	private String drawing; //图号
	private String drawingVer; //图纸版本
	private String mrlClassId; //所属物料分类
	private String mrlClassName; //物料分类名称
	private String priMeasure;  //主计量单位 (实际存放了code)
	private String auxMeasure; //辅计量单位 (实际存放了code)
//	private BigDecimal convertRate; //主辅换算率
	private BigDecimal length; //长度
	private BigDecimal width; //宽度
	private BigDecimal height; //高度
	private BigDecimal volume; //体积
	private BigDecimal netWeight; //重量
	private BigDecimal grossWeight;  //毛重
	private Boolean isCritical; //是否关键件
	private Boolean isSuit; //是否成套
	private Boolean isQualityChk;  //是否质检
	private String remark;  //备注
	private BigDecimal fwidth; //幅宽   ， 数量 = 幅宽*长度/1000
	
	private BaseMrlClass mrlClass;
	
	@FieldExt @RecordBusinessUniExt
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
	@Column(name = "FOREIGN_NAME")
	public String getForeignName() {
		return foreignName;
	}
	public void setForeignName(String foreignName) {
		this.foreignName = foreignName;
	}
	
	@FieldExt
	@Column(name = "EXTERNAL_CODE_")
	public String getExternalCode() {
		return externalCode;
	}
	public void setExternalCode(String externalCode) {
		this.externalCode = externalCode;
	}
	
	@FieldExt
	@Column(name = "MODEL_")
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	
	@FieldExt
	@Column(name = "SPECIFICATION_")
	public String getSpecification() {
		return specification;
	}
	public void setSpecification(String specification) {
		this.specification = specification;
	}
	
	@FieldExt
	@Column(name = "RAW_MRL_")
	public String getRawMrl() {
		return rawMrl;
	}
	public void setRawMrl(String rawMrl) {
		this.rawMrl = rawMrl;
	}
	
	@FieldExt
	@Column(name = "BREED_")
	public String getBreed() {
		return breed;
	}
	public void setBreed(String breed) {
		this.breed = breed;
	}
	
	@FieldExt
	@EditorComboboxExt(displayField = "name", store = "app.store.base.ControllerCodeComStore", valueField = "id"
			,queryMode="local",storeId="basecontrollercodecomstoreId",forceSelection=true)
	@Column(name = "CONTROL_CODE_")
	public Integer getControlCode() {
		return controlCode;
	}
	public void setControlCode(Integer controlCode) {
		this.controlCode = controlCode;
	}
	
	@FieldExt
	@Column(name = "CHK_BATCH_")
	public Integer getChkBatch() {
		return chkBatch;
	}
	public void setChkBatch(Integer chkBatch) {
		this.chkBatch = chkBatch;
	}
	
	@FieldExt
	@Column(name = "PACK_MANNER_")
	public String getPackManner() {
		return packManner;
	}
	public void setPackManner(String packManner) {
		this.packManner = packManner;
	}
	
	@FieldExt
	@Column(name = "PACK_SPECIFICATION_")
	public String getPackSpecification() {
		return packSpecification;
	}
	public void setPackSpecification(String packSpecification) {
		this.packSpecification = packSpecification;
	}
	
	@FieldExt
	@Column(name = "DRAWING_")
	public String getDrawing() {
		return drawing;
	}
	public void setDrawing(String drawing) {
		this.drawing = drawing;
	}
	
	@FieldExt
	@Column(name = "DRAWING_VER_")
	public String getDrawingVer() {
		return drawingVer;
	}
	public void setDrawingVer(String drawingVer) {
		this.drawingVer = drawingVer;
	}
	
	@FieldExt
	@EditorComboboxExt(displayField = "text", store = "app.store.base.MrlClassComStore", valueField = "id"
	,queryMode="local",storeId="basemrlclassstoreId",forceSelection=true)
	@Column(name = "MRLCLASS_ID_")
	public String getMrlClassId() {
		return mrlClassId;
	}
	public void setMrlClassId(String mrlClassId) {
		this.mrlClassId = mrlClassId;
	}
	
	@FieldExt(persist=false)
	@Column(name = "MRLCLASS_NAME_")
	public String getMrlClassName() {
		return mrlClassName;
	}
	public void setMrlClassName(String mrlClassName) {
		this.mrlClassName = mrlClassName;
	}
	
	@FieldExt
	@EditorComboboxExt(displayField = "code", store = "app.store.base.MeasureComStore", valueField = "code"
		,queryMode="local",storeId="basemeasurestoreId",forceSelection=true)
	@Column(name = "PRI_MEASURE_")
	public String getPriMeasure() {
		return priMeasure;
	}
	public void setPriMeasure(String priMeasure) {
		this.priMeasure = priMeasure;
	}
	
	@FieldExt
	@EditorComboboxExt(displayField = "code", store = "app.store.base.MeasureComStore", valueField = "code"
	    ,queryMode="local",storeId="basemeasurestoreId",forceSelection=true)
	@Column(name = "AUX_MEASURE_")
	public String getAuxMeasure() {
		return auxMeasure;
	}
	public void setAuxMeasure(String auxMeasure) {
		this.auxMeasure = auxMeasure;
	}
	
//	@FieldExt
//	@Column(name = "CONVERT_RATE_")
//	public BigDecimal getConvertRate() {
//		return convertRate;
//	}
//	public void setConvertRate(BigDecimal convertRate) {
//		this.convertRate = convertRate;
//	}
	
	@FieldExt
	@Column(name = "LENGTH_")
	public BigDecimal getLength() {
		return length;
	}
	public void setLength(BigDecimal length) {
		this.length = length;
	}
	
	@FieldExt
	@Column(name = "WIDTH_")
	public BigDecimal getWidth() {
		return width;
	}
	public void setWidth(BigDecimal width) {
		this.width = width;
	}
	
	@FieldExt
	@Column(name = "HEIGHT_")
	public BigDecimal getHeight() {
		return height;
	}
	public void setHeight(BigDecimal height) {
		this.height = height;
	}
	
	@FieldExt
	@Column(name = "VOLUME_")
	public BigDecimal getVolume() {
		return volume;
	}
	public void setVolume(BigDecimal volume) {
		this.volume = volume;
	}
	
	@FieldExt
	@Column(name = "NET_WEIGHT_")
	public BigDecimal getNetWeight() {
		return netWeight;
	}
	public void setNetWeight(BigDecimal netWeight) {
		this.netWeight = netWeight;
	}
	
	@FieldExt
	@Column(name = "GROSS_WEIGHT_")
	public BigDecimal getGrossWeight() {
		return grossWeight;
	}
	public void setGrossWeight(BigDecimal grossWeight) {
		this.grossWeight = grossWeight;
	}
	
	@FieldExt
	@Column(name = "IS_CRITICAL_")
	public Boolean getIsCritical() {
		return isCritical;
	}
	public void setIsCritical(Boolean isCritical) {
		this.isCritical = isCritical;
	}
	
	@FieldExt
	@Column(name = "IS_SUIT_")
	public Boolean getIsSuit() {
		return isSuit;
	}
	public void setIsSuit(Boolean isSuit) {
		this.isSuit = isSuit;
	}
	
	@FieldExt
	@Column(name = "IS_QUALITY_CHK_")
	public Boolean getIsQualityChk() {
		return isQualityChk;
	}
	public void setIsQualityChk(Boolean isQualityChk) {
		this.isQualityChk = isQualityChk;
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
	@Column(name = "FWIDTH")
	public BigDecimal getFwidth() {
		return fwidth;
	}
	public void setFwidth(BigDecimal fwidth) {
		this.fwidth = fwidth;
	}
	
	@ManyToOne
	@JoinColumn(name = "MRLCLASS_ID_",insertable = false,updatable = false)
	public BaseMrlClass getMrlClass() {
		return mrlClass;
	}
	public void setMrlClass(BaseMrlClass mrlClass) {
		this.mrlClass = mrlClass;
	}
	
	
}
