package mesrk.vo;

import java.util.Date;
import java.util.List;

import javax.persistence.Id;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.EditorTextAreaExt;
import qgg.extjs.annotion.FieldExt;

/***
 * 这个类主要用来生成ExtJS的Model (以qgg.activiti.vo.TaskVO 为准)
 * @author Admin
 */
@ClassExt
public class TaskVO {

	private String id;
	private Date dueDate;
	private String assignee;
	private Date createTime;
	private String delegationState;
	private String description;
	private String executionId;
	private String formKey;
	private String name;
	private String owner;
	private String processInstanceId;
	private String processDefinitionId;
	
	private String processDefinitionKey;
	private String businessKey;
	private List<String>  outgoings; //任务出走的选择线
	private String businessInputs;  //这个主要是将 formProperties 转换一下
	
	private String processInstanceTitle;  //流程实例的标题 (生成流程实例的时候写入)
	private String processInstanceDesc; //流程实例的标题 (生成流程实例的时候写入)
	private String processInstanceRemark; //流程实例的标题 (生成流程实例的时候写入)
	private String processInstanceRef1; //流程实例的扩展字段
	private String processInstanceRef2;  //流程实例的扩展字段
	
	@Id
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	@FieldExt
	public Date getDueDate() {
		return dueDate;
	}
	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}
	
	@FieldExt
	public String getAssignee() {
		return assignee;
	}
	public void setAssignee(String assignee) {
		this.assignee = assignee;
	}
	
	@FieldExt
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	
	@FieldExt
	public String getDelegationState() {
		return delegationState;
	}
	public void setDelegationState(String delegationState) {
		this.delegationState = delegationState;
	}
	
	@FieldExt
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	@FieldExt
	public String getExecutionId() {
		return executionId;
	}
	public void setExecutionId(String executionId) {
		this.executionId = executionId;
	}
	
	@FieldExt
	public String getFormKey() {
		return formKey;
	}
	public void setFormKey(String formKey) {
		this.formKey = formKey;
	}
	
	@FieldExt
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@FieldExt
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}
	
	@FieldExt
	public String getProcessInstanceId() {
		return processInstanceId;
	}
	public void setProcessInstanceId(String processInstanceId) {
		this.processInstanceId = processInstanceId;
	}
	
	@FieldExt
	public String getProcessDefinitionId() {
		return processDefinitionId;
	}
	public void setProcessDefinitionId(String processDefinitionId) {
		this.processDefinitionId = processDefinitionId;
	}
	
	@FieldExt
	public String getProcessDefinitionKey() {
		return processDefinitionKey;
	}
	public void setProcessDefinitionKey(String processDefinitionKey) {
		this.processDefinitionKey = processDefinitionKey;
	}
	
	@FieldExt
	public String getBusinessKey() {
		return businessKey;
	}
	public void setBusinessKey(String businessKey) {
		this.businessKey = businessKey;
	}
	
	@FieldExt
	public List<String> getOutgoings() {
		return outgoings;
	}
	public void setOutgoings(List<String> outgoings) {
		this.outgoings = outgoings;
	}
	
	@FieldExt
	public String getBusinessInputs() {
		return businessInputs;
	}
	public void setBusinessInputs(String businessInputs) {
		this.businessInputs = businessInputs;
	}
	
	@FieldExt
	public String getProcessInstanceTitle() {
		return processInstanceTitle;
	}
	public void setProcessInstanceTitle(String processInstanceTitle) {
		this.processInstanceTitle = processInstanceTitle;
	}
	
	@FieldExt
	@EditorTextAreaExt
	public String getProcessInstanceDesc() {
		return processInstanceDesc;
	}
	public void setProcessInstanceDesc(String processInstanceDesc) {
		this.processInstanceDesc = processInstanceDesc;
	}
	
	@FieldExt
	@EditorTextAreaExt
	public String getProcessInstanceRemark() {
		return processInstanceRemark;
	}
	public void setProcessInstanceRemark(String processInstanceRemark) {
		this.processInstanceRemark = processInstanceRemark;
	}
	
	@FieldExt
	public String getProcessInstanceRef1() {
		return processInstanceRef1;
	}
	public void setProcessInstanceRef1(String processInstanceRef1) {
		this.processInstanceRef1 = processInstanceRef1;
	}
	
	@FieldExt
	public String getProcessInstanceRef2() {
		return processInstanceRef2;
	}
	public void setProcessInstanceRef2(String processInstanceRef2) {
		this.processInstanceRef2 = processInstanceRef2;
	}
	
}
