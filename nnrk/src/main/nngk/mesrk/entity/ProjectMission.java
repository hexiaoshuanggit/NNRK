package mesrk.entity;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.entity.BaseEntityD;

@Entity
@ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "PROJECT_MISSION")
public class ProjectMission extends BaseEntityD {
	private String mainId;//主表ID/
	private String sn;//总行号
	private Integer mianSn;//主行号
	private Integer childSn;//子行号
	private String missionName;//任务名
	private String describe;//描述
	private String principalUser;//负责人
	private String executorUser;//执行人
	private BigDecimal misFinishRate;//任务进度
	private String checkUser;//审批人
	private Date checkTime;//审批时间
	private Date planedStartTime;//计划开始时间
	private Date planedFinishTime;//计划结束时间
	private Date actualStartTime;//实际开始时间
	private Date actualFinishTime;//实际结束时间
	private String remake;//备注
	private boolean isPublic;//是否公开
	private Integer targetNumber;//目标数
	private Integer targetFinishNumber;//目标完成数
	private boolean isPostpone;//是否延期
	private Integer problemNumber;//问题数
	private Integer problemFinishNumber;//问题完成数
	private Integer accessoryNumber;//附件数
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
	@Column(name = "MAIN_ID_")
	public String getMainId() {
		return mainId;
	}
	public void setMainId(String mainId) {
		this.mainId = mainId;
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
	public Integer getMianSn() {
		return mianSn;
	}
	public void setMianSn(Integer mianSn) {
		this.mianSn = mianSn;
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
	@Column(name = "MISSION_NAME_")
	public String getMissionName() {
		return missionName;
	}
	public void setMissionName(String missionName) {
		this.missionName = missionName;
	}
	@FieldExt
	@Column(name = "DESCRIBE_")
	public String getDescribe() {
		return describe;
	}
	public void setDescribe(String describe) {
		this.describe = describe;
	}
	@FieldExt
	@Column(name = "PRINCIPAL_USER_")
	public String getPrincipalUser() {
		return principalUser;
	}
	public void setPrincipalUser(String principalUser) {
		this.principalUser = principalUser;
	}
	@FieldExt
	@Column(name = "EXECUTOR_USER_")
	public String getExecutorUser() {
		return executorUser;
	}
	public void setExecutorUser(String executorUser) {
		this.executorUser = executorUser;
	}
	
	
	@FieldExt
	@Column(name = "MIS_FINISH_RATE_")
	public BigDecimal getMisFinishRate() {
		return misFinishRate;
	}
	public void setMisFinishRate(BigDecimal misFinishRate) {
		this.misFinishRate = misFinishRate;
	}
	@FieldExt
	@Column(name = "CHECK_USER_")
	public String getCheckUser() {
		return checkUser;
	}
	public void setCheckUser(String checkUser) {
		this.checkUser = checkUser;
	}
	@FieldExt
	@Column(name = "CHECK_TIME_")
	public Date getCheckTime() {
		return checkTime;
	}
	public void setCheckTime(Date checkTime) {
		this.checkTime = checkTime;
	}
	@FieldExt
	@Column(name = "PLANED_START_TIME_")
	public Date getPlanedStartTime() {
		return planedStartTime;
	}
	public void setPlanedStartTime(Date planedStartTime) {
		this.planedStartTime = planedStartTime;
	}
	@FieldExt
	@Column(name = "PLANED_FINISH_TIME_")
	public Date getPlanedFinishTime() {
		return planedFinishTime;
	}
	public void setPlanedFinishTime(Date planedFinishTime) {
		this.planedFinishTime = planedFinishTime;
	}
	@FieldExt
	@Column(name = "ACTUAL_START_TIME_")
	public Date getActualStartTime() {
		return actualStartTime;
	}
	public void setActualStartTime(Date actualStartTime) {
		this.actualStartTime = actualStartTime;
	}
	@FieldExt
	@Column(name = "ACTUAL_FINISH_TIME_")
	public Date getActualFinishTime() {
		return actualFinishTime;
	}
	public void setActualFinishTime(Date actualFinishTime) {
		this.actualFinishTime = actualFinishTime;
	}
	@FieldExt
	@Column(name = "REMAKE_")
	public String getRemake() {
		return remake;
	}
	public void setRemake(String remake) {
		this.remake = remake;
	}
	@FieldExt
	@Column(name = "IS_PUBLIC_")
	public boolean isPublic() {
		return isPublic;
	}
	public void setPublic(boolean isPublic) {
		this.isPublic = isPublic;
	}
	@FieldExt
	@Column(name = "TARGET_NUMBER_")
	public Integer getTargetNumber() {
		return targetNumber;
	}
	public void setTargetNumber(Integer targetNumber) {
		this.targetNumber = targetNumber;
	}
	@FieldExt
	@Column(name = "TARGET_FINISH_NUMBER_")
	public Integer getTargetFinishNumber() {
		return targetFinishNumber;
	}
	public void setTargetFinishNumber(Integer targetFinishNumber) {
		this.targetFinishNumber = targetFinishNumber;
	}
	@FieldExt
	@Column(name = "IS_POSTPONE_")
	public boolean isPostpone() {
		return isPostpone;
	}
	public void setPostpone(boolean isPostpone) {
		this.isPostpone = isPostpone;
	}
	@FieldExt
	@Column(name = "PROBLEM_NUMBER_")
	public Integer getProblemNumber() {
		return problemNumber;
	}
	public void setProblemNumber(Integer problemNumber) {
		this.problemNumber = problemNumber;
	}
	@FieldExt
	@Column(name = "PROBLEM_FINISH_NUMBER_")
	public Integer getProblemFinishNumber() {
		return problemFinishNumber;
	}
	public void setProblemFinishNumber(Integer problemFinishNumber) {
		this.problemFinishNumber = problemFinishNumber;
	}
	
	@FieldExt
	@Column(name = "ACCESSORY_NUMBER_")
	public Integer getAccessoryNumber() {
		return accessoryNumber;
	}
	public void setAccessoryNumber(Integer accessoryNumber) {
		this.accessoryNumber = accessoryNumber;
	}
	
	
	

}
