package mesrk.service;

import java.util.LinkedList;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import mesrk.dao.ProjectTeamDao;
import mesrk.entity.ProjectTeam;
import mesrk.dao.ProjectDefinitionDao;
import mesrk.entity.ProjectDefinition;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class ProjectDefinitionService extends ExtJsServiceImp {

	@Resource
	private ProjectDefinitionDao baseTplDao;

	
	
	
	@Override
	protected void updateSub(String subupdates, String voClsName) {
		if (ProjectTeam.class.getName().equals(voClsName)) {
			List<ProjectTeam> entitys = parseSubUpdates(subupdates, ProjectTeam.class);
			for (ProjectTeam entity : entitys) {
				update(entity);
			}
		}
		// write subupdates code
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		ProjectDefinition entity = parseMainUpdate(mainupdates, mainId, ProjectDefinition.class);
		update(entity);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		if (ProjectTeam.class.getName().equals(voClsName)) {
			List<ProjectTeam> entrys = json2list(subcreatess, ProjectTeam.class);
			for (ProjectTeam entry : entrys) {
				entry.setMainId(mainId);
				persist(entry);
			}
		}
		// write subcreates code
	}

	@Override
	protected String persistMain(String maincreatess) {
		ProjectDefinition dept = json2vo(maincreatess, ProjectDefinition.class);
		return save(dept);
	}

}
