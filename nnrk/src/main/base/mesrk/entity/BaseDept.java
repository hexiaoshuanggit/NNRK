package mesrk.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Where;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.EditorTextExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.annotion.RecordBusinessUniExt;
import qgg.extjs.entity.BaseEntityD;

@JsonIgnoreProperties(value= {"parentDept"})
@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "BASE_DEPT")
public class BaseDept extends BaseEntityD{
	
	private String name;
	private String code;
	private String tel;
	private String header;
	private String parent;
	private String remark;
	private Integer lineNum;
	
	private BaseDept parentDept;
	
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
	@Column(name = "CODE_")
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	
	@FieldExt
	@Column(name = "TEL_")
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	
	@FieldExt
	@EditorTextExt(allowBlank=false)
	@Column(name = "HEADER_")
	public String getHeader() {
		return header;
	}
	public void setHeader(String header) {
		this.header = header;
	}
	
	@FieldExt
	@Column(name = "PARENT_")
	public String getParent() {
		return parent;
	}
	public void setParent(String parent) {
		this.parent = parent;
	}
	
	@FieldExt
	@Column(name = "REMARK_")
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	
	@FieldExt
	@Column(name = "LINE_NUM_")
	public Integer getLineNum() {
		return lineNum;
	}
	public void setLineNum(Integer lineNum) {
		this.lineNum = lineNum;
	}
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="PARENT_",insertable=false,updatable=false)
	public BaseDept getParentDept() {
		return parentDept;
	}
	public void setParentDept(BaseDept parentDept) {
		this.parentDept = parentDept;
	}
	
	@FieldExt(persist=false)
	@Transient
	public String getParentDeptName() {
		if( parentDept != null) {
			return parentDept.getName();
		}
		return "";
	}
}
