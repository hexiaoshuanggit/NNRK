package mesrk.service;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import mesrk.entity.BaseWorkCell;
import mesrk.entity.BaseWorkCenter;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class BaseWorkCCService extends ExtJsServiceImp{

	@Override
	protected void updateSub(String subupdates, String voClsName) {
		List<BaseWorkCell> entitys = parseSubUpdates(subupdates, BaseWorkCell.class);
		for(BaseWorkCell entity : entitys) {
			update(entity);
		}
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		BaseWorkCenter entity = parseMainUpdate(mainupdates, mainId, BaseWorkCenter.class);
		update(entity);
	} 

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		List<BaseWorkCell> cells = json2list(subcreatess, BaseWorkCell.class);
		for(BaseWorkCell cell : cells) {
			cell.setMainId(mainId);
			persist(cell);
		}
	}

	@Override
	protected String persistMain(String maincreatess) {
		BaseWorkCenter wc = json2vo(maincreatess, BaseWorkCenter.class);
		return save(wc);
	}

	@Transactional(propagation=Propagation.REQUIRED)
	public BaseWorkCenter findByCodeOrName(String codeOrName) {
		if(StringUtils.isBlank(codeOrName)) {
			return null;
		}
		return getDao().createQuerySingle(BaseWorkCenter.class, Restrictions.or(Restrictions.eq("code", codeOrName), Restrictions.eq("name", codeOrName)) );
	}

}
