package mesrk.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import mesrk.dao.BaseEmployeeDao;
import mesrk.entity.BaseEmployee;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class BaseEmployeeService extends ExtJsServiceImp{

	@Resource
	private BaseEmployeeDao baseEmployeeDao;

	@Override
	protected void updateSub(String subupdates, String voClsName) {
		
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		BaseEmployee employee = parseMainUpdate(mainupdates, mainId, BaseEmployee.class);
		update(employee);
	}


	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		
	}

	@Override
	protected String persistMain(String maincreatess) {
		BaseEmployee employee = json2vo(maincreatess, BaseEmployee.class);
		return save(employee);
	}

}
