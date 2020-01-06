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
@Table(name = "TARGET_RESULT")
public class TargetResult extends BaseEntityD {
	private String mainId;//目标ID
	private String name;//目标结果名
	private String describe;//结果描述
	private String principalUser;//负责人
	private boolean isPublic;//是否公开
	private Date finishTime;//完成时间
	private BigDecimal principalGende;//负责人评分
	private BigDecimal leadeGende;//领导评分
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
	@Column(name = "IS_PUBLIC_")
	public boolean isPublic() {
		return isPublic;
	}
	public void setPublic(boolean isPublic) {
		this.isPublic = isPublic;
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
	@Column(name = "PRINCIPAL_GENDE_")
	public BigDecimal getPrincipalGende() {
		return principalGende;
	}
	public void setPrincipalGende(BigDecimal principalGende) {
		this.principalGende = principalGende;
	}

	@FieldExt
	@Column(name = "LEADE_GENDE_")
	public BigDecimal getLeadeGende() {
		return leadeGende;
	}
	public void setLeadeGende(BigDecimal leadeGende) {
		this.leadeGende = leadeGende;
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
