package mesrk.dao;

import java.util.List;

import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import mesrk.entity.BaseProcessParam;
import qgg.hbbase.dao.imp.BaseDaoImp;

@Repository
public class BaseProcessParamDao extends BaseDaoImp<BaseProcessParam>{

	@SuppressWarnings("unchecked")
	public List<BaseProcessParam> queryProcessP(String mrlId, String opId, String equipId) {
		return getCriteria().add(Restrictions.eq("mrlId", mrlId)).add(Restrictions.eq("opId", opId))
		     .add(Restrictions.eq("equipId", equipId)).add(Restrictions.eq("docStatus", "已审核")).list();
	}

}
