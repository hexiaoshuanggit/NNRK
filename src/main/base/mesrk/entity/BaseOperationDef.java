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
import qgg.extjs.entity.BaseEntityD;

@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "BASE_OPERATION_DEF_")
public class BaseOperationDef extends BaseEntityD{
	
	private String code;
	private String name;
	private BigDecimal cycleTime; //运行时间
	private BigDecimal prepareTime; //准备时间
	private BigDecimal queueTime; //排队时间
	private Boolean isMileStone;  //是否里程碑工序，前置工序未完工，当前工序禁止完工，默认0
	private Boolean   isEnforcement;// 是否强制工序，当前工序未完工，后续工序禁止开工，默认0
	private Boolean isTransfer;//是否自动转移，当前工序报完工，下工序自动开工
	private Integer chkMode; //质量模块检验模式 1,批次检；2，序列检
	private String remark;
	
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
	@Column(name = "CYCLE_TIME_")
	public BigDecimal getCycleTime() {
		return cycleTime;
	}
	public void setCycleTime(BigDecimal cycleTime) {
		this.cycleTime = cycleTime;
	}
	
	@FieldExt
	@Column(name = "PREPARE_TIME_")
	public BigDecimal getPrepareTime() {
		return prepareTime;
	}
	public void setPrepareTime(BigDecimal prepareTime) {
		this.prepareTime = prepareTime;
	}
	
	@FieldExt
	@Column(name = "QUEUE_TIME_")
	public BigDecimal getQueueTime() {
		return queueTime;
	}
	public void setQueueTime(BigDecimal queueTime) {
		this.queueTime = queueTime;
	}
	
	@FieldExt
	@Column(name = "IS_MILESTONE_")
	public Boolean getIsMileStone() {
		return isMileStone;
	}
	public void setIsMileStone(Boolean isMileStone) {
		this.isMileStone = isMileStone;
	}
	
	@FieldExt
	@Column(name = "IS_ENFORCEMENT_")
	public Boolean getIsEnforcement() {
		return isEnforcement;
	}
	public void setIsEnforcement(Boolean isEnforcement) {
		this.isEnforcement = isEnforcement;
	}
	
	@FieldExt
	@Column(name = "IS_TRANSFER_")
	public Boolean getIsTransfer() {
		return isTransfer;
	}
	public void setIsTransfer(Boolean isTransfer) {
		this.isTransfer = isTransfer;
	}
	
	@FieldExt
	@EditorComboboxExt(displayField = "name", store = "app.store.base.ChkModeComStore", valueField = "id"
			,queryMode="local",storeId="basechkmodecomstoreId")
	@Column(name = "CHK_MODE_")
	public Integer getChkMode() {
		return chkMode;
	}
	public void setChkMode(Integer chkMode) {
		this.chkMode = chkMode;
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
