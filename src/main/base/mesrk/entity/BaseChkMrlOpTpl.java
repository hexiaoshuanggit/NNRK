package mesrk.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.EditorComboboxExt;
import qgg.extjs.annotion.EditorNumberExt;
import qgg.extjs.annotion.EditorTextExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.annotion.RecordBusinessUniExt;
import qgg.extjs.entity.BaseEntityDoc;

@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "BASE_CHK_MRLOPTPL")
@JsonIgnoreProperties(value= {"entrys"})
public class BaseChkMrlOpTpl extends BaseEntityDoc{
	
	private String name;
	private String mrlId;
	private String mrlName;
	private String mrlCode;
	private String mrlSpec;
	private String opId;
	private String opCode;
	private String opName;
	private BaseEnum chkType; //巡检  首检 尾检 复检
	private BaseEnum chkFqType;  //时间  数量
	private Integer chkFqValue; //检测频次值
	private Integer finishCount; //完工的累加次数
	
	private Set<BaseChkMrlOpTplEntry> entrys = new HashSet<BaseChkMrlOpTplEntry>();
	
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
	@Column(name = "MRL_ID_")
	public String getMrlId() {
		return mrlId;
	}
	public void setMrlId(String mrlId) {
		this.mrlId = mrlId;
	}
	
	@FieldExt
	@Column(name = "MRL_NAME_")
	public String getMrlName() {
		return mrlName;
	}
	public void setMrlName(String mrlName) {
		this.mrlName = mrlName;
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
	
	@FieldExt
	@Column(name = "MRL_SPEC_")
	public String getMrlSpec() {
		return mrlSpec;
	}
	public void setMrlSpec(String mrlSpec) {
		this.mrlSpec = mrlSpec;
	}
	
	@FieldExt
	@EditorComboboxExt(displayField = "name", store = "app.store.base.OpComStore", valueField = "id",storeId="baseopcomstoreId"
		,allowBlank=false,forceSelection=true,queryMode="local")
	@Column(name = "OP_ID_")
	public String getOpId() {
		return opId;
	}
	public void setOpId(String opId) {
		this.opId = opId;
	}
	
	@FieldExt
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
	@EditorComboboxExt(displayField = "name", store = "app.store.base.ChkTypeComStore", valueField = "name"
			,storeId="basechktypecomstoreId",queryMode="local",forceSelection=true,allowBlank=false)
	@Enumerated(EnumType.STRING)
	@Column(name = "CHK_TYPE_")
	public BaseEnum getChkType() {
		return chkType;
	}
	public void setChkType(BaseEnum chkType) {
		this.chkType = chkType;
	}
	
	@FieldExt
	@EditorComboboxExt(displayField = "name", store = "app.store.base.ChkFqTypeComStore", valueField = "name"
		,storeId="basechkfqtypecomstoreId",queryMode="local",forceSelection=true,allowBlank=false)
	@Enumerated(EnumType.STRING)
	@Column(name = "CHK_FQ_TYPE_")
	public BaseEnum getChkFqType() {
		return chkFqType;
	}
	public void setChkFqType(BaseEnum chkFqType) {
		this.chkFqType = chkFqType;
	}
	
	@FieldExt
	@EditorNumberExt(allowBlank=false,decimalPrecision=0)
	@Column(name = "CHK_FQ_VALUE_")
	public Integer getChkFqValue() {
		return chkFqValue;
	}
	public void setChkFqValue(Integer chkFqValue) {
		this.chkFqValue = chkFqValue;
	}
	
	@Column(name = "FINISH_COUNT_")
	public Integer getFinishCount() {
		return finishCount;
	}
	public void setFinishCount(Integer finishCount) {
		this.finishCount = finishCount;
	}
	
	@Where(clause = "IS_DELETE_=0")
	@OneToMany(fetch=FetchType.LAZY,mappedBy="baseChkMrlOpTpl")
	public Set<BaseChkMrlOpTplEntry> getEntrys() {
		return entrys;
	}
	public void setEntrys(Set<BaseChkMrlOpTplEntry> entrys) {
		this.entrys = entrys;
	}
	
	
}
