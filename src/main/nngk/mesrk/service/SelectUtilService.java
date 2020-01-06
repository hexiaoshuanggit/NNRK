package mesrk.service;

import java.util.LinkedList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import mesrk.dao.SelectUtilDao;
import mesrk.entity.SelectUtil;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class SelectUtilService extends ExtJsServiceImp{
	
	@Resource
	private SelectUtilDao baseTplDao;
	
	@Override
	protected void updateSub(String subupdates, String voClsName) {
		//write subupdates code
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		SelectUtil entity = parseMainUpdate(mainupdates, mainId, SelectUtil.class);
		update(entity);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		//write subcreates code
	}

	@Override
	protected String persistMain(String maincreatess) {
		SelectUtil dept = json2vo(maincreatess, SelectUtil.class);
		return save(dept);
	}

}
