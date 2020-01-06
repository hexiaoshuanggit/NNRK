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
@Table(name = "PROJECT_DEFINITION")
public class ProjectDefinition extends BaseEntityD {
	private String projectCode;//项目编号
	private String projectName;//项目名
	private String companyName;//公司名
	private String projectLeade;//项目负责人
	private String phone;//电话
	private Date startTime;//开始时间
	private Date finishTime;//结束时间
	private String type;//项目类型
    private Date docDate;//填表时间
    private String projectPurpose;//项目意义
    private String projectObjectives;//项目目标
    private String projectResources;//项目使用资源用
    private String projectConditions;//项目工作条件
    private String problemAndSolution;//问题与解决方法
    private String status;//状态
    
    @FieldExt
	@Column(name = "PROJECT_CODE_")
	public String getProjectCode() {
		return projectCode;
	}
    
	public void setProjectCode(String projectCode) {
		this.projectCode = projectCode;
	}
	@FieldExt
	@Column(name = "PROJECT_NAME_")
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	@FieldExt
	@Column(name = "COMPANY_NAME_")
	public String getCompanyName() {
		return companyName;
	}
	
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	@FieldExt
	@Column(name = "PROJECT_LEADE_")
	public String getProjectLeade() {
		return projectLeade;
	}
	public void setProjectLeade(String projectLeade) {
		this.projectLeade = projectLeade;
	}
	@FieldExt
	@Column(name = "PHONE_")
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
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
	@Column(name = "FINISH_TIME_")
	public Date getFinishTime() {
		return finishTime;
	}
	public void setFinishTime(Date finishTime) {
		this.finishTime = finishTime;
	}
	@FieldExt
	@Column(name = "TYPE_")
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	@FieldExt
	@Column(name = "DOC_DATE_")
	public Date getDocDate() {
		return docDate;
	}
	public void setDocDate(Date docDate) {
		this.docDate = docDate;
	}
	@FieldExt
	@Column(name = "PROJECT_PURPOSE_")
	public String getProjectPurpose() {
		return projectPurpose;
	}
	public void setProjectPurpose(String projectPurpose) {
		this.projectPurpose = projectPurpose;
	}
	@FieldExt
	@Column(name = "PROJECT_OBJECTIVES_")
	public String getProjectObjectives() {
		return projectObjectives;
	}
	public void setProjectObjectives(String projectObjectives) {
		this.projectObjectives = projectObjectives;
	}
	@FieldExt
	@Column(name = "PROJECT_RESOURCES_")
	public String getProjectResources() {
		return projectResources;
	}
	public void setProjectResources(String projectResources) {
		this.projectResources = projectResources;
	}
	@FieldExt
	@Column(name = "PROJECT_CONDITIONS_")
	public String getProjectConditions() {
		return projectConditions;
	}
	public void setProjectConditions(String projectConditions) {
		this.projectConditions = projectConditions;
	}
	@FieldExt
	@Column(name = "PROBLEM_AND_SOLUTION_")
	public String getProblemAndSolution() {
		return problemAndSolution;
	}
	public void setProblemAndSolution(String problemAndSolution) {
		this.problemAndSolution = problemAndSolution;
	}	
	@FieldExt
	@Column(name = "STATUS_")
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
    
    

}
