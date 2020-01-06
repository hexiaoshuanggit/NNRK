package mesrk.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.entity.BaseEntityD;

@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "PROBLEM")
public class Problem extends BaseEntityD {
	private String projectMissionId;//任务编号 4028d04c6f468d23016f468f2b5e0003 
	private String projectMissionName;//任务名
	private String name;//问题名
	private String describe;//问题描述
	private String reason;//问题原因
	private String principalUser;//负责人
	private String executorUser;//执行
	private Date executorTime;//执行时间
	private Date solveTime;//解决时间
	private String status;//状态
	private String solution;//解决方案
	private String remake;//备注
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
	@Column(name = "PROJECT_MISSION_ID_")
	public String getProjectMissionId() {
		return projectMissionId;
	}
	public void setProjectMissionId(String projectMissionId) {
		this.projectMissionId = projectMissionId;
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
	@Column(name = "REASON_")
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
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
	@Column(name = "EXECUTOR_TIME_")
	public Date getExecutorTime() {
		return executorTime;
	}
	public void setExecutorTime(Date executorTime) {
		this.executorTime = executorTime;
	}
	@FieldExt
	@Column(name = "SOLVE_TIME_")
	public Date getSolveTime() {
		return solveTime;
	}
	public void setSolveTime(Date solveTime) {
		this.solveTime = solveTime;
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
	@Column(name = "SOLUTION_")
	public String getSolution() {
		return solution;
	}
	public void setSolution(String solution) {
		this.solution = solution;
	}
	@FieldExt
	@Column(name = "REMAKE_")
	public String getRemake() {
		return remake;
	}
	public void setRemake(String remake) {
		this.remake = remake;
	}
	
	
	

	
	

}

