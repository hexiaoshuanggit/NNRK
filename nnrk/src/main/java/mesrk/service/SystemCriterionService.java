package mesrk.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import qgg.extjs.dao.SystemCriterionDao;
import qgg.extjs.entity.SystemCriterion;
import qgg.extjs.entity.SystemCriterionEntry;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class SystemCriterionService extends ExtJsServiceImp{

	@Resource
	private SystemCriterionDao systemCriterionDao;
	
	@Override
	protected void updateSub(String subupdates, String voClsName) {
		List<SystemCriterionEntry> entrys = parseSubUpdates(subupdates, SystemCriterionEntry.class);
		for(SystemCriterionEntry entry : entrys ) {
			update(entry);
		}
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		parseMainUpdate(mainupdates, mainId, SystemCriterion.class);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		List<SystemCriterionEntry> entrys = json2list(subcreatess, SystemCriterionEntry.class);
		for(SystemCriterionEntry entry : entrys) {
			entry.setMainId(mainId);
			persist(entry);
		}
	}

	@Override
	protected String persistMain(String maincreatess) {
		SystemCriterion criterions = json2vo(maincreatess, SystemCriterion.class);
		systemCriterionDao.save(criterions);
		return criterions.getId();
	}

}
