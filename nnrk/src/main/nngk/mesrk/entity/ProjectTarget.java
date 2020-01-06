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
@Table(name = "PROJECT_TARGET")
public class ProjectTarget extends BaseEntityD {
	private String mainId;//主表编号
	private String name;//项目目标名
	private String describe;//描述
	private String principalUser;//负责人
	private String executorUser;//执行人
	private boolean isPublic;//是否公开
	private Date planedStartTime;//计划开始时间
	private Date planedFinishTime;//计划完成时间
	private Date actualStartTime;//实际开始时间
	private Date actualFinishTime;//实际完成时间
	private String remake;//备注
	private String status;//状态
	private Integer resultNumber;//结果数
	private Integer resultFinishNumber;//结果完成数
	private BigDecimal score;//得分
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
	@Column(name = "NAME_")
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	@Column(name = "IS_PUBLIC_")
	public boolean isPublic() {
		return isPublic;
	}
	public void setPublic(boolean isPublic) {
		this.isPublic = isPublic;
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
	@Column(name = "STATUS_")
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	@FieldExt
	@Column(name = "RESULT_NUMBER_")
	public Integer getResultNumber() {
		return resultNumber;
	}
	public void setResultNumber(Integer resultNumber) {
		this.resultNumber = resultNumber;
	}
	@FieldExt
	@Column(name = "RESULT_FINISH_NUMBER_")
	public Integer getResultFinishNumber() {
		return resultFinishNumber;
	}
	public void setResultFinishNumber(Integer resultFinishNumber) {
		this.resultFinishNumber = resultFinishNumber;
	}
	@FieldExt
	@Column(name = "SCORE_")
	public BigDecimal getScore() {
		return score;
	}
	public void setScore(BigDecimal score) {
		this.score = score;
	}
	
	
	

}
