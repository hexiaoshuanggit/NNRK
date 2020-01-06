package mesrk.service;

import java.util.LinkedList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import mesrk.dao.ProjectModelMissionDao;
import mesrk.entity.ProjectModelMission;
import mesrk.dao.ProjectModelDao;
import mesrk.entity.ProjectModel;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class ProjectModelService extends ExtJsServiceImp {

	@Resource
	private ProjectModelDao baseTplDao;

	@Override
	protected void updateSub(String subupdates, String voClsName) {
		if (ProjectModelMission.class.getName().equals(voClsName)) {
			List<ProjectModelMission> entitys = parseSubUpdates(subupdates, ProjectModelMission.class);
			for (ProjectModelMission entity : entitys) {
				String sn=entity.getMainSn().toString()+"."+entity.getChildSn().toString();
				entity.setSn(sn);
				update(entity);
			}
		}
		// write subupdates code
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		ProjectModel entity = parseMainUpdate(mainupdates, mainId, ProjectModel.class);
		update(entity);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		if (ProjectModelMission.class.getName().equals(voClsName)) {
			List<ProjectModelMission> entrys = json2list(subcreatess, ProjectModelMission.class);
			for (ProjectModelMission entry : entrys) {
				entry.setMainId(mainId);
				String sn=entry.getMainSn().toString()+"."+entry.getChildSn().toString();
				entry.setSn(sn);
				persist(entry);
			}
		}
		// write subcreates code
	}

	@Override
	protected String persistMain(String maincreatess) {
		ProjectModel dept = json2vo(maincreatess, ProjectModel.class);
		return save(dept);
	}

}
