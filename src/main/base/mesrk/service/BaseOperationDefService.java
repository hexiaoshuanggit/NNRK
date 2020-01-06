package mesrk.service;

import org.springframework.stereotype.Service;

import mesrk.entity.BaseOperationDef;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class BaseOperationDefService extends ExtJsServiceImp{

	@Override
	protected void updateSub(String subupdates, String voClsName) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		BaseOperationDef entity = parseMainUpdate(mainupdates, mainId, BaseOperationDef.class);
		update(entity);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected String persistMain(String maincreatess) {
		BaseOperationDef opdef = json2vo(maincreatess, BaseOperationDef.class);
		return save(opdef);
	}
	
}
