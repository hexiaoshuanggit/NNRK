package mesrk.service;

import java.util.LinkedList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import mesrk.dao.MissionDefinitionDao;
import mesrk.entity.MissionDefinition;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class MissionDefinitionService extends ExtJsServiceImp{
	
	@Resource
	private MissionDefinitionDao baseTplDao;
	
	@Override
	protected void updateSub(String subupdates, String voClsName) {
		//write subupdates code
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		MissionDefinition entity = parseMainUpdate(mainupdates, mainId, MissionDefinition.class);
		update(entity);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		//write subcreates code
	}

	@Override
	protected String persistMain(String maincreatess) {
		MissionDefinition dept = json2vo(maincreatess, MissionDefinition.class);
		return save(dept);
	}

}
