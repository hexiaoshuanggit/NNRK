package mesrk.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import mesrk.dao.BaseMrlClassDao;
import mesrk.entity.BaseMrlClass;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class BaseMrlClassService extends ExtJsServiceImp{

	@Resource
	private BaseMrlClassDao baseMrlClassDao;
	
	@Override
	protected void updateSub(String subupdates, String voClsName) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		BaseMrlClass entity = parseMainUpdate(mainupdates, mainId, BaseMrlClass.class);
		update(entity);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		
	}

	@Override
	protected String persistMain(String maincreatess) {
		BaseMrlClass mrlClass = json2vo(maincreatess, BaseMrlClass.class);
		return save(mrlClass);
	}

	//获取Tree最上层的物料分类
	@Transactional(propagation=Propagation.REQUIRED)
	public List<Map<String, Object>> queryTopAll() {
		String sql = baseMrlClassDao.getSqlByNamedQuery("mrlClassTreeView");
		sql = sql + " and t1.PID_ is null order by t1.CODE_";
		return baseMrlClassDao.queryBySql(sql);
	}

	//获取Tree下一级的物料分类
	@Transactional(propagation=Propagation.REQUIRED)
	public List<Map<String, Object>> queryAll(String mainId) {
		String sql = baseMrlClassDao.getSqlByNamedQuery("mrlClassTreeView");
		sql = sql + " and t1.PID_='" + mainId+"' order by t1.CODE_";
		return baseMrlClassDao.queryBySql(sql);
	}

}
