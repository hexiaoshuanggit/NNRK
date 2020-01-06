package mesrk.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import mesrk.dao.BaseComboxDao;
import mesrk.dao.BaseComboxEntryDao;
import mesrk.entity.BaseCombox;
import mesrk.entity.BaseComboxEntry;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class BaseComboxService extends ExtJsServiceImp{
	@Resource
	private BaseComboxDao baseComboxDao;
	@Resource
	private BaseComboxEntryDao baseComboxEntryDao;
	
	@Override
	protected void updateSub(String subupdates, String voClsName) {
		List<BaseComboxEntry> entrys = parseSubUpdates(subupdates, BaseComboxEntry.class);
		for(BaseComboxEntry entry :  entrys) {
			update(entry);
		}
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		BaseCombox entity = parseMainUpdate(mainupdates, mainId, BaseCombox.class);
		update(entity);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		List<BaseComboxEntry> entrys = json2list(subcreatess, BaseComboxEntry.class);
		for(BaseComboxEntry entry :  entrys) {
			entry.setMainId(mainId);
			persist(entry);
		}
	}

	@Override
	protected String persistMain(String maincreatess) {
		BaseCombox vo = json2vo(maincreatess, BaseCombox.class);
		return save(vo);
	}

}
