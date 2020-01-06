package mesrk.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.EditorComboboxExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.annotion.RecordBusinessUniExt;
import qgg.extjs.entity.BaseEntityD;

@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "BASE_ROUTE_OPERATION")
public class BaseRouteOperation extends BaseEntityD{
	
	private String mainId;
	private String opdefId;
	private String opName;
	private String opCode;
	private Integer opSeq;
	private Integer beginFlag; //起始标志(0开始/1结束/2中间/3单一节点)
	private BigDecimal cycleTime; //运行时间
	private BigDecimal prepareTime; //准备时间
	private BigDecimal queueTime; //排队时间
	private Boolean isMileStone;  //是否里程碑工序，前置工序未完工，当前工序禁止完工，默认0
	private Boolean   isEnforcement;// 是否强制工序，当前工序未完工，后续工序禁止开工，默认0
	private Boolean isTransfer;//是否自动转移，当前工序报完工，下工序自动开工
	private BaseEnum processType; //加工类型  自制/外协
	private Boolean isQaCheck; //是否质检
	private Integer chkMode; //质量模块检验模式 1,批次检；2，序列检 
	private String remark;
	private String equipCode;  //默认设备
	
	@Column(name = "MAIN_ID_")
	public String getMainId() {
		return mainId;
	}
	public void setMainId(String mainId) {
		this.mainId = mainId;
	}
	
	@FieldExt
	@Column(name = "OPDEF_ID_")
	public String getOpdefId() {
		return opdefId;
	}
	public void setOpdefId(String opdefId) {
		this.opdefId = opdefId;
	}
	
	@FieldExt
	@Column(name = "OP_NAME_")
	public String getOpName() {
		return opName;
	}
	public void setOpName(String opName) {
		this.opName = opName;
	}
	
	@FieldExt @RecordBusinessUniExt
	@Column(name = "OP_CODE_")
	public String getOpCode() {
		return opCode;
	}
	public void setOpCode(String opCode) {
		this.opCode = opCode;
	}
	
	@FieldExt
	@Column(name = "OP_SEQ_")
	public Integer getOpSeq() {
		return opSeq;
	}
	public void setOpSeq(Integer opSeq) {
		this.opSeq = opSeq;
	}
	
	@FieldExt
	@EditorComboboxExt(displayField = "name", store = "app.store.base.OpFlagComStore", valueField = "id",
		storeId="baseopflagcomstoreId",queryMode="local")
	@Column(name = "BEGIN_FLAG_")
	public Integer getBeginFlag() {
		return beginFlag;
	}
	public void setBeginFlag(Integer beginFlag) {
		this.beginFlag = beginFlag;
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
	
	@FieldExt
	@EditorComboboxExt(displayField = "name", store = "app.store.base.ProcessTypeComStore", valueField = "name",
			storeId="baseprocesstypecomstoreId",queryMode="local",forceSelection=true)
	@Enumerated(EnumType.STRING)
	@Column(name = "PROCESS_TYPE_")
	public BaseEnum getProcessType() {
		return processType;
	}
	public void setProcessType(BaseEnum processType) {
		this.processType = processType;
	}
	
	@FieldExt
	@Column(name = "IS_QACHECK_")
	public Boolean getIsQaCheck() {
		return isQaCheck;
	}
	public void setIsQaCheck(Boolean isQaCheck) {
		this.isQaCheck = isQaCheck;
	}
	
	@FieldExt
	@EditorComboboxExt(displayField = "text", store = "app.store.base.EquipmentComStore", valueField = "code"
	 	,queryMode="local",storeId="disequipmentcomstoreId")
	@Column(name = "EQUIP_CODE")
	public String getEquipCode() {
		return equipCode;
	}
	public void setEquipCode(String equipCode) {
		this.equipCode = equipCode;
	}
	
	//计算单位物料 该工序耗费的时间  (运行时间 + 准备时间 + 排队时间)
	public BigDecimal digitWorkTime() {
		BigDecimal totalTime = BigDecimal.ZERO;
		if( this.cycleTime != null) {
			totalTime = totalTime.add(this.cycleTime);
		}
		if(this.prepareTime != null) {
			totalTime = totalTime.add(this.prepareTime);
		}
		if(this.queueTime != null) {
			totalTime = totalTime.add(this.queueTime);
		}
		return totalTime;
	}
}
