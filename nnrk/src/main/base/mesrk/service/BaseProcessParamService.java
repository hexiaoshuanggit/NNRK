package mesrk.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import mesrk.dao.BaseProcessParamDao;
import mesrk.entity.BaseProcessParam;
import mesrk.entity.BaseProcessParamEntry;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class BaseProcessParamService extends ExtJsServiceImp{

	@Resource
	private BaseProcessParamDao baseProcessParamDao;
	
	@Override
	protected void updateSub(String subupdates, String voClsName) {
		List<BaseProcessParamEntry> entrys = parseSubUpdates(subupdates, BaseProcessParamEntry.class);
		for(BaseProcessParamEntry  entry : entrys) {
			update(entry);
		}
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		BaseProcessParam param = parseMainUpdate(mainupdates, mainId, BaseProcessParam.class);
		update(param);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		List<BaseProcessParamEntry> entrys = json2list(subcreatess, BaseProcessParamEntry.class);
		for(BaseProcessParamEntry entry : entrys) {
			entry.setMainId(mainId);
			persist(entry);
		}
	}

	@Override
	protected String persistMain(String maincreatess) {
		BaseProcessParam param = json2vo(maincreatess, BaseProcessParam.class);
		return saveDoc(param, "BASEPP");
	}

	@Transactional(propagation=Propagation.REQUIRED)
	public void check(String recId) {
		BaseProcessParam param = baseProcessParamDao.findById(recId);
		checkDoc(param);
	}

	@Transactional(propagation=Propagation.REQUIRED)
	public void uncheck(String recId) {
		BaseProcessParam param = baseProcessParamDao.findById(recId);
		uncheckDoc(param);
	}

	//查出已审核的工艺参数设定
	@Transactional(propagation=Propagation.REQUIRED)
	public List<BaseProcessParam> query(String mrlId, String opId, String equipId) {
		List<BaseProcessParam> params = baseProcessParamDao.queryProcessP(mrlId,opId,equipId);
		return params;
	}

}
