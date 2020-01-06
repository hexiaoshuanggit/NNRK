package mesrk.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.entity.BaseEntityD;

@Entity@ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "PROJECT_TEAM")
public class ProjectTeam extends  BaseEntityD {
	private String employeeID;//员工ID
	private String mainId;//主ID
	private String name;//项目人员名
	private String department;//部门
	private String gender;//性别
	private String work;//工作安排
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
	@Column(name = "EMPLOYEE_ID_")
	public String getEmployeeID() {
		return employeeID;
	}
	public void setEmployeeID(String employeeID) {
		this.employeeID = employeeID;
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
	@Column(name = "DEPARTMENT_")
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	@FieldExt
	@Column(name = "GENDER_")
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	@FieldExt
	@Column(name = "WORK_")
	public String getWork() {
		return work;
	}
	public void setWork(String work) {
		this.work = work;
	}
	

}
