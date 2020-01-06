package mesrk.dao;

import java.util.List;

import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import mesrk.entity.BaseChkMrlWhTpl;
import mesrk.entity.BaseEnum;
import qgg.hbbase.dao.imp.BaseDaoImp;

@Repository
public class BaseChkMrlWhTplDao extends BaseDaoImp<BaseChkMrlWhTpl>{

	//查找已审核的模版
	@SuppressWarnings("unchecked")
	public List<BaseChkMrlWhTpl> queryWithCheck(String mrlId, BaseEnum direction,BaseEnum chkFqType) {
		return getCriteria().add(Restrictions.eq("mrlId", mrlId)).add(Restrictions.eq("direction", direction))
			.add(Restrictions.eq("chkFqType", chkFqType)).add(Restrictions.eq("docStatus", "已审核")).list();
	}

}
