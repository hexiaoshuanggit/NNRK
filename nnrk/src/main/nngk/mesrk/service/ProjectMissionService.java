package mesrk.service;

import java.util.LinkedList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import mesrk.dao.ProjectTargetDao;
import mesrk.entity.ProjectTarget;
import mesrk.dao.TargetResultDao;
import mesrk.entity.TargetResult;
import mesrk.dao.ProjectMissionDao;
import mesrk.entity.ProjectMission;
import qgg.extjs.service.imp.ExtJsServiceImp;
import qgg.extjs.util.ExtContext;

@Service
public class ProjectMissionService extends ExtJsServiceImp {

	@Resource
	private ProjectMissionDao baseTplDao;

	@Override
	protected void updateSub(String subupdates, String voClsName) {
//		ExtContext.getCurrentLoginName();
		
		if (ProjectTarget.class.getName().equals(voClsName)) {
			List<ProjectTarget> entitys = parseSubUpdates(subupdates, ProjectTarget.class);
			for (ProjectTarget entity : entitys) {
				update(entity);
			}
		}
		if (TargetResult.class.getName().equals(voClsName)) {
			List<TargetResult> entitys = parseSubUpdates(subupdates, TargetResult.class);
			for (TargetResult entity : entitys) {
				update(entity);
			}
		}
		// write subupdates code
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		ProjectMission entity = parseMainUpdate(mainupdates, mainId, ProjectMission.class);
		update(entity);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		if (ProjectTarget.class.getName().equals(voClsName)) {
			List<ProjectTarget> entrys = json2list(subcreatess, ProjectTarget.class);
			for (ProjectTarget entry : entrys) {
				entry.setMainId(mainId);
				persist(entry);
			}
		}
		if (TargetResult.class.getName().equals(voClsName)) {
			List<TargetResult> entrys = json2list(subcreatess, TargetResult.class);
			for (TargetResult entry : entrys) {
				entry.setMainId(mainId);
				persist(entry);
			}
		}
		// write subcreates code
	}

	@Override
	protected String persistMain(String maincreatess) {
		ProjectMission dept = json2vo(maincreatess, ProjectMission.class);
		
		return save(dept);
	}

}
