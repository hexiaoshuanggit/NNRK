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
@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "PROJECT")
public class Project extends BaseEntityD {
	private String proDefinitionId;//项目定义id
	private String name;//项目名
	private String describe;//项目描述
	private String  status;//项目状态
	private String principalUser;//负责人
	private String department;//部门
	private BigDecimal proFinishRate;//项目进度
	private String checkUser;//审批人
	private Date checkTime;//审批时间 PRINIPAL_USER_
	private String  code;//表编号
	private Date finishTime;
	private Date startTime;
	
	@FieldExt
	@Column(name = "FINISH_TIME_")
	public Date getFinishTime() {
		return finishTime;
	}
	public void setFinishTime(Date finishTime) {
		this.finishTime = finishTime;
	}
	@FieldExt
	@Column(name = "START_TIME_")
	public Date getStartTime() {
		return startTime;
	}
	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}
	@FieldExt
	@Column(name = "CODE_")
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	@FieldExt
	@Column(name = "PRO_DEFINITION_ID_")
	public String getProDefinitionId() {
		return proDefinitionId;
	}
	public void setProDefinitionId(String proDefinitionId) {
		this.proDefinitionId = proDefinitionId;
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
	@Column(name = "STATUS_")
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
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
	@Column(name = "DEPARTMENT_")
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	@FieldExt
	@Column(name = "PRO_FINISH_RATE_")
	public BigDecimal getProFinishRate() {
		return proFinishRate;
	}
	public void setProFinishRate(BigDecimal proFinishRate) {
		this.proFinishRate = proFinishRate;
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
	
	

}
