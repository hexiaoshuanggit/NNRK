package mesrk.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.entity.BaseEntityD;

@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "PROJECT_MODEL_MISSION")
public class ProjectModelMission extends BaseEntityD {
	private String sn;//总行号
	private Integer mainSn;//主行号
	private Integer childSn;//子行号
	private String mainId;//主表编号
	private String missionDefinitionId;//任务定义编号
	private String missionDefinitionName;//任务定义名
	private String  code;//表编号
	@FieldExt
	@Column(name = "CODE_")
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	@FieldExt
	@Column(name = "SN_")
	public String getSn() {
		return sn;
	}
	public void setSn(String sn) {
		this.sn = sn;
	}
	@FieldExt
	@Column(name = "MAIN_SN_")
	public Integer getMainSn() {
		return mainSn;
	}
	public void setMainSn(Integer mainSn) {
		this.mainSn = mainSn;
	}
	@FieldExt
	@Column(name = "CHILD_SN_")
	public Integer getChildSn() {
		return childSn;
	}
	public void setChildSn(Integer childSn) {
		this.childSn = childSn;
	}
	@FieldExt
	@Column(name = "MAIN_ID_")
	public String getMainId() {
		return mainId;
	}
	public void setMainId(String mainId) {
		this.mainId = mainId;
	}
	@FieldExt
	@Column(name = "MISSION_DEFINITION_ID_")
	public String getMissionDefinitionId() {
		return missionDefinitionId;
	}
	public void setMissionDefinitionId(String missionDefinitionId) {
		this.missionDefinitionId = missionDefinitionId;
	}
	@FieldExt
	@Column(name = "MISSION_DEFINITION_NAME_")
	public String getMissionDefinitionName() {
		return missionDefinitionName;
	}
	public void setMissionDefinitionName(String missionDefinitionName) {
		this.missionDefinitionName = missionDefinitionName;
	}
	
	
	
	

}
