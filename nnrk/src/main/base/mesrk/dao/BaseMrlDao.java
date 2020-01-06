package mesrk.dao;

import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import mesrk.entity.BaseMrl;
import qgg.hbbase.dao.imp.BaseDaoImp;

@Repository
public class BaseMrlDao extends BaseDaoImp<BaseMrl>{

	public BaseMrl findByCode(String mrlCode) {
		return (BaseMrl) getCriteria().add(Restrictions.or( Restrictions.eq("code",mrlCode))).uniqueResult();
	}

//	public BaseMrl findByCodeOrId(String codeOrId) {
//		return (BaseMrl) getCriteria().add(Restrictions.or( Restrictions.eq("code", codeOrId),  Restrictions.eq("id", codeOrId) )).uniqueResult();
//	}

}
