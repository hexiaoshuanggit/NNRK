package mesrk.service;

import java.util.LinkedList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import mesrk.dao.ProjectMissionDao;
import mesrk.entity.ProjectMission;
import mesrk.dao.ProjectDao;
import mesrk.entity.Project;
import qgg.extjs.service.imp.ExtJsServiceImp;
import qgg.extjs.util.ExtContext;

@Service
public class ProjectService extends ExtJsServiceImp {

	@Resource
	private ProjectDao baseTplDao;

	@Override
	protected void updateSub(String subupdates, String voClsName) {
		if (ProjectMission.class.getName().equals(voClsName)) {
			List<ProjectMission> entitys = parseSubUpdates(subupdates, ProjectMission.class);
			
			for (ProjectMission entity : entitys) {
				Integer mainSn=entity.getMianSn();
				Integer childSn=entity.getChildSn();
				String sn=mainSn.toString()+"."+childSn.toString();
				entity.setSn(sn);
				update(entity);
			}
		}
		// write subupdates code
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		Project entity = parseMainUpdate(mainupdates, mainId, Project.class);
		update(entity);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		if (ProjectMission.class.getName().equals(voClsName)) {
			List<ProjectMission> entrys = json2list(subcreatess, ProjectMission.class);
			for (ProjectMission entry : entrys) {
				Integer mainSn=entry.getMianSn();
				Integer childSn=entry.getChildSn();
				String sn="_"+mainSn.toString()+"."+childSn.toString();
				String loginName=ExtContext.getCurrentLoginName();
				if (loginName==null) {
					entry.setCreateUser(loginName);
				}
				entry.setSn(sn);
				entry.setMainId(mainId);
				persist(entry);
			}
		}
		// write subcreates code
	}

	@Override
	protected String persistMain(String maincreatess) {
		Project dept = json2vo(maincreatess, Project.class);
		String loginName=ExtContext.getCurrentLoginName();
		if (loginName==null) {
			dept.setCreateUser(loginName);
		}
		return save(dept);
	}

}
