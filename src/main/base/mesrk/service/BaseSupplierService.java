package mesrk.service;

import org.springframework.stereotype.Service;

import mesrk.entity.BaseSupplier;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class BaseSupplierService extends ExtJsServiceImp{

	@Override
	protected void updateSub(String subupdates, String voClsName) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		BaseSupplier entity = parseMainUpdate(mainupdates, mainId, BaseSupplier.class);
		update(entity);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected String persistMain(String maincreatess) {
		BaseSupplier supp = json2vo(maincreatess, BaseSupplier.class);
		return save(supp);
	}

}
