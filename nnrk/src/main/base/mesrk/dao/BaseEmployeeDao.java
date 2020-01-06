package mesrk.dao;

import java.util.List;

import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import mesrk.entity.BaseEmployee;
import qgg.hbbase.dao.imp.BaseDaoImp;

@Repository
public class BaseEmployeeDao extends BaseDaoImp<BaseEmployee>{

	@SuppressWarnings("unchecked")
	public List<BaseEmployee> querByDeptId(String deptId) {
		return getCriteria().add(Restrictions.eq("deptId", deptId)).list();
	}

	public BaseEmployee findByCodeNameId(String codeNameId) {
		return (BaseEmployee) getCriteria().add( Restrictions.or(  Restrictions.eq("code", codeNameId)
				,Restrictions.eq("name", codeNameId),  Restrictions.eq("id", codeNameId))).uniqueResult();
	}

}
