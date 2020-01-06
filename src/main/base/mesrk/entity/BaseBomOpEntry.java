package mesrk.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.ColumnExt;
import qgg.extjs.annotion.EditorComboboxExt;
import qgg.extjs.annotion.EditorNumberExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.annotion.RecordBusinessUniExt;
import qgg.extjs.entity.BaseEntityD;

@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "BASE_BOMOP_ENTRY")
public class BaseBomOpEntry extends BaseEntityD{
	
	private String mainId;
	private Integer lineNum;
	private String mrlId;
	private String mrlCode;
	private String mrlName;
	private BigDecimal mrlQty;
	private String mrlMeasure;
	private String mrlSpec;
	private String opdefId;
	private String opCode;
	private String opName;
//	private Integer beginFlag; //起始标志(0开始/1结束/2中间/3单一节点)
//	private BigDecimal cycleTime; //运行时间
//	private BigDecimal prepareTime; //准备时间
//	private BigDecimal queueTime; //排队时间
//	private Boolean isMileStone;  //是否里程碑工序，前置工序未完工，当前工序禁止完工，默认0
//	private Boolean   isEnforcement;// 是否强制工序，当前工序未完工，后续工序禁止开工，默认0
//	private Boolean isTransfer;//是否自动转移，当前工序报完工，下工序自动开工
//	private Integer chkMode; //质量模块检验模式 1,批次检；2，序列检 
	private String remark;
	
	@Column(name = "MAIN_ID_")
	public String getMainId() {
		return mainId;
	}
	public void setMainId(String mainId) {
		this.mainId = mainId;
	}
	
	@FieldExt @RecordBusinessUniExt
	@Column(name = "LINE_NUM_")
	public Integer getLineNum() {
		return lineNum;
	}
	public void setLineNum(Integer lineNum) {
		this.lineNum = lineNum;
	}
	
	@FieldExt
	@Column(name = "MRL_ID_")
	public String getMrlId() {
		return mrlId;
	}
	public void setMrlId(String mrlId) {
		this.mrlId = mrlId;
	}
	
	@FieldExt @RecordBusinessUniExt
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
	
	@FieldExt @ColumnExt(render = "gmonetaryRenderer")
	@EditorNumberExt(decimalPrecision = 4)
	@Column(name = "MRL_QTY_")
	public BigDecimal getMrlQty() {
		return mrlQty;
	}
	public void setMrlQty(BigDecimal mrlQty) {
		this.mrlQty = mrlQty;
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
	@Column(name = "OPDEF_ID_")
	public String getOpdefId() {
		return opdefId;
	}
	public void setOpdefId(String opdefId) {
		this.opdefId = opdefId;
	}
	
	@FieldExt
	@EditorComboboxExt(displayField = "text", store = "app.store.base.RouteLineOpComStore", valueField = "code",storeId="baseroutelineopcomstoreId"
  		,queryMode="local")
	@Column(name = "OP_CODE_")
	public String getOpCode() {
		return opCode;
	}
	public void setOpCode(String opCode) {
		this.opCode = opCode;
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
	@Column(name = "REMARK_")
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	
	
	
}
