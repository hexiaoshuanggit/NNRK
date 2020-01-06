package mesrk.dao;

import java.util.List;


import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import mesrk.entity.BaseByteArray;
import qgg.hbbase.dao.imp.BaseDaoImp;

@Repository
public class BaseByteArrayDao extends BaseDaoImp<BaseByteArray>{

	@SuppressWarnings("unchecked")
	public List<BaseByteArray> queryByRecId(String oldrecId) {
		return getCriteria().add(Restrictions.eq("recordId", oldrecId)).list();
	}

}
