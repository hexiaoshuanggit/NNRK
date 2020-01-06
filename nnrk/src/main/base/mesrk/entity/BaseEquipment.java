package mesrk.entity;

import java.util.Date;

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
import qgg.extjs.annotion.RecordBusinessUniExt;
import qgg.extjs.entity.BaseEntityD;

@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "BASE_EQUIPMENT")
public class BaseEquipment extends BaseEntityD{
	
	private String name;
	private String code;
	private String model;
	private String workCenterId;
	private String supplier;
	private String maker;
	private String serialNo;
	private Date buyDate;
	private Date makeDate;
	private Date useDate;
	private BaseEnum useStatus; //使用状态   未使用，已使用
	private Integer runStatus; //运行状态  
	private String mainId;
	
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
	@EditorComboboxExt(displayField = "name", store = "app.store.base.WorkCellComStore", valueField = "id"
			,queryMode="local",storeId="baseworkcellstoreId",forceSelection=true)
	@Column(name = "WORKCENTER_ID_")
	public String getWorkCenterId() {
		return workCenterId;
	}
	public void setWorkCenterId(String workCenterId) {
		this.workCenterId = workCenterId;
	}
	
	@FieldExt
	@Column(name = "SUPPILER_")
	public String getSupplier() {
		return supplier;
	}
	public void setSupplier(String supplier) {
		this.supplier = supplier;
	}
	
	@FieldExt
	@Column(name = "MAKER_")
	public String getMaker() {
		return maker;
	}
	public void setMaker(String maker) {
		this.maker = maker;
	}
	
	@FieldExt
	@Column(name = "SERIAL_NO_")
	public String getSerialNo() {
		return serialNo;
	}
	public void setSerialNo(String serialNo) {
		this.serialNo = serialNo;
	}
	
	@FieldExt
	@Column(name = "BUY_DATE_")
	public Date getBuyDate() {
		return buyDate;
	}
	public void setBuyDate(Date buyDate) {
		this.buyDate = buyDate;
	}
	
	@FieldExt
	@Column(name = "MAKE_DATE_")
	public Date getMakeDate() {
		return makeDate;
	}
	public void setMakeDate(Date makeDate) {
		this.makeDate = makeDate;
	}
	
	@FieldExt
	@Column(name = "USE_DATE_")
	public Date getUseDate() {
		return useDate;
	}
	public void setUseDate(Date useDate) {
		this.useDate = useDate;
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
	@Enumerated(EnumType.STRING)
	@Column(name = "USE_STATUS_")
	public BaseEnum getUseStatus() {
		return useStatus;
	}
	public void setUseStatus(BaseEnum useStatus) {
		this.useStatus = useStatus;
	}
	
	@FieldExt
	@Column(name = "RUN_STATUS_")
	public Integer getRunStatus() {
		return runStatus;
	}
	public void setRunStatus(Integer runStatus) {
		this.runStatus = runStatus;
	}
	
	@Column(name = "MAIN_ID_")
	public String getMainId() {
		return mainId;
	}
	public void setMainId(String mainId) {
		this.mainId = mainId;
	}
}
