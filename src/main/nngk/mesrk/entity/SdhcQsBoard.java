package mesrk.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.FieldExt;

//质量看板视图
@Entity @ClassExt
@Table(name = "SDHC_QS_BOARD")
public class SdhcQsBoard {
	
	private Integer id;
	private String workCenterName;
	private Integer year;
	private Integer month;
	private String week;
	private BigDecimal prodRate; //成品率
	private String ref1;
	private String ref2;
	private BigDecimal ref3;
	
	@Id
	@Column(name = "ID_",insertable=false,updatable=false)
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	@FieldExt
	@Column(name = "WORKCENTER_NAME_")
	public String getWorkCenterName() {
		return workCenterName;
	}
	public void setWorkCenterName(String workCenterName) {
		this.workCenterName = workCenterName;
	}
	
	@FieldExt
	@Column(name = "YEAR_")
	public Integer getYear() {
		return year;
	}
	public void setYear(Integer year) {
		this.year = year;
	}
	
	@FieldExt
	@Column(name = "MONTH_")
	public Integer getMonth() {
		return month;
	}
	public void setMonth(Integer month) {
		this.month = month;
	}
	
	@FieldExt
	@Column(name = "WEEK_")
	public String getWeek() {
		return week;
	}
	public void setWeek(String week) {
		this.week = week;
	}
	
	@FieldExt
	@Column(name = "PROD_RATE_")
	public BigDecimal getProdRate() {
		return prodRate;
	}
	public void setProdRate(BigDecimal prodRate) {
		this.prodRate = prodRate;
	}
	
	@FieldExt
	@Column(name = "REF1_")
	public String getRef1() {
		return ref1;
	}
	public void setRef1(String ref1) {
		this.ref1 = ref1;
	}
	
	@FieldExt
	@Column(name = "REF2_")
	public String getRef2() {
		return ref2;
	}
	public void setRef2(String ref2) {
		this.ref2 = ref2;
	}
	
	@FieldExt
	@Column(name = "REF3_")
	public BigDecimal getRef3() {
		return ref3;
	}
	public void setRef3(BigDecimal ref3) {
		this.ref3 = ref3;
	}
	
}
