package mesrk.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.ColumnExt;
import qgg.extjs.annotion.EditorComboboxExt;
import qgg.extjs.annotion.EditorTextExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.annotion.RecordBusinessUniExt;
import qgg.extjs.entity.BaseEntityD;

@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")
@Table(name = "BASE_EMPLOYEE")
public class BaseEmployee extends BaseEntityD{
	
	private String name;
	private String code;
	private String idNo;
	private String sex;
	private String nation;
	private Date birthday;       
	private String idAddress;  //身份证地址
	private String presentAddress; //现住地址
	private String bankCard; //银行卡号
	private String email;
	private String tel1;
	private String tel2;
	private String deptId;
	
	@FieldExt @RecordBusinessUniExt
	@ColumnExt(sortable=true)
	@EditorTextExt(allowBlank=false)  //前台添加unique校验
	@Column(name = "NAME_")
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@FieldExt
	@EditorTextExt(allowBlank=false) 
	@Column(name = "CODE_")
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	
	@FieldExt
	@Column(name = "ID_NO_")
	public String getIdNo() {
		return idNo;
	}
	public void setIdNo(String idNo) {
		this.idNo = idNo;
	}
	
	@FieldExt
	@EditorComboboxExt(displayField = "name", store = "app.store.base.SexComStore", valueField = "name"
			,forceSelection=true,queryMode="local",storeId="basesexstoreId")
	@Column(name = "SEX_")
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	
	@FieldExt
	@Column(name = "NATION_")
	public String getNation() {
		return nation;
	}
	public void setNation(String nation) {
		this.nation = nation;
	}
	
	@FieldExt
	@Column(name = "BIRTHDAY_")
	public Date getBirthday() {
		return birthday;
	}
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}
	
	@FieldExt
	@Column(name = "ID_ADDRESS_")
	public String getIdAddress() {
		return idAddress;
	}
	public void setIdAddress(String idAddress) {
		this.idAddress = idAddress;
	}
	
	@FieldExt
	@Column(name = "PRESENT_ADDRESS_")
	public String getPresentAddress() {
		return presentAddress;
	}
	public void setPresentAddress(String presentAddress) {
		this.presentAddress = presentAddress;
	}
	
	@FieldExt
	@Column(name = "BANK_CARD_")
	public String getBankCard() {
		return bankCard;
	}
	public void setBankCard(String bankCard) {
		this.bankCard = bankCard;
	}
	
	@FieldExt
	@EditorTextExt(emptyText="邮箱",vtype="email",vtypeText="请输入正确的邮箱")
	@Column(name = "EMAIL_")
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	@FieldExt
	@Column(name = "TEL1_")
	public String getTel1() {
		return tel1;
	}
	public void setTel1(String tel1) {
		this.tel1 = tel1;
	}
	
	@FieldExt
	@Column(name = "TEL2_")
	public String getTel2() {
		return tel2;
	}
	public void setTel2(String tel2) {
		this.tel2 = tel2;
	}
	
	@Column(name = "DEPT_ID_")
	public String getDeptId() {
		return deptId;
	}
	public void setDeptId(String deptId) {
		this.deptId = deptId;
	}
	
}
