package mesrk.dao;

import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import mesrk.entity.BaseDept;
import qgg.hbbase.dao.imp.BaseDaoImp;

@Repository
public class BaseDeptDao extends BaseDaoImp<BaseDept>{

	public BaseDept getDeptByCodeOrNameOrId(String dept) {
		return (BaseDept) getCriteria().add( Restrictions.or(Restrictions.eq("name", dept) , 
				Restrictions.eq("code", dept) 
				,Restrictions.eq("name", dept)) ).uniqueResult();
	}

}
