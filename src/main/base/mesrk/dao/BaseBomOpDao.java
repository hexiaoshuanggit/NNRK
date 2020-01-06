package mesrk.dao;

import org.springframework.stereotype.Repository;

import mesrk.entity.BaseBomOp;
import qgg.hbbase.dao.imp.BaseDaoImp;

@Repository
public class BaseBomOpDao extends BaseDaoImp<BaseBomOp>{

	public void syncFromKindde() {
		getCurrentSession().createSQLQuery("{Call dbo.BOM_KINDDLE()}").executeUpdate();
	}

}
