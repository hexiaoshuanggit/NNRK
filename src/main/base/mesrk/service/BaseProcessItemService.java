package mesrk.service;

import org.springframework.stereotype.Service;

import mesrk.entity.BaseProcessItem;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class BaseProcessItemService extends ExtJsServiceImp{

	@Override
	protected void updateSub(String subupdates, String voClsName) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		BaseProcessItem item = parseMainUpdate(mainupdates, mainId, BaseProcessItem.class);
		update(item);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		// TODO Auto-generated method stub
	}

	@Override
	protected String persistMain(String maincreatess) {
		BaseProcessItem item = json2vo(maincreatess, BaseProcessItem.class);
		return save(item);
	}

}
