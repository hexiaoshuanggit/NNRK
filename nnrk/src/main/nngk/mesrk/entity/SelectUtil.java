package mesrk.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.Where;

import qgg.extjs.annotion.ClassExt;
import qgg.extjs.annotion.FieldExt;
import qgg.extjs.entity.BaseEntityD;

@Entity @ClassExt
@Where(clause = "IS_DELETE_=0")

public class SelectUtil extends BaseEntityD {
	
	private String name;//查询名
	@FieldExt
	@Column(name = "NAME_")
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	

}
