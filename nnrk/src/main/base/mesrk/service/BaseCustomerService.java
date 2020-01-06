package mesrk.service;

import org.springframework.stereotype.Service;

import mesrk.entity.BaseCustomer;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class BaseCustomerService extends ExtJsServiceImp{

	@Override
	protected void updateSub(String subupdates, String voClsName) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		BaseCustomer cust = parseMainUpdate(mainupdates, mainId, BaseCustomer.class);
		update(cust);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected String persistMain(String maincreatess) {
		BaseCustomer cust = json2vo(maincreatess, BaseCustomer.class);
		return save(cust);
	}


}
