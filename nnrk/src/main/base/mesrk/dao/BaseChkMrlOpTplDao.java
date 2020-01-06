package mesrk.dao;

import java.util.List;

import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import mesrk.entity.BaseChkMrlOpTpl;
import mesrk.entity.BaseEnum;
import qgg.hbbase.dao.imp.BaseDaoImp;

@Repository
public class BaseChkMrlOpTplDao extends BaseDaoImp<BaseChkMrlOpTpl>{

	@SuppressWarnings("unchecked")
	public List<BaseChkMrlOpTpl> query(String mrlId, String opId, BaseEnum chkFqType) {
		return getCriteria().add(Restrictions.eq("mrlId", mrlId)).add(Restrictions.eq("opId", opId))
		    .add(Restrictions.eq("chkFqType", chkFqType)).add(Restrictions.eq("docStatus", "已审核")).list();
	}
	
	
	@SuppressWarnings("unchecked")
	public List<BaseChkMrlOpTpl> query(String mrlId, String opId, BaseEnum chkFqType,BaseEnum chkType) {
		return getCriteria().add(Restrictions.eq("mrlId", mrlId)).add(Restrictions.eq("opId", opId))
		    .add(Restrictions.eq("chkFqType", chkFqType))
		    .add(Restrictions.eq("chkType", chkType)  )
		    .add(Restrictions.eq("docStatus", "已审核")).list();
	}

}
