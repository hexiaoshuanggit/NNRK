package mesrk.dao;

import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import mesrk.entity.BaseEquipment;
import qgg.hbbase.dao.imp.BaseDaoImp;

@Repository
public class BaseEquipmentDao extends BaseDaoImp<BaseEquipment>{

	public BaseEquipment findByCode(String code) {
		return (BaseEquipment) getCriteria().add(Restrictions.eq("code", code)).uniqueResult();
	}

}
