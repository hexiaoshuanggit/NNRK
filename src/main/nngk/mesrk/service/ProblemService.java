package mesrk.service;

import java.util.LinkedList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import mesrk.dao.ProblemDao;
import mesrk.entity.Problem;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class ProblemService extends ExtJsServiceImp{
	
	@Resource
	private ProblemDao baseTplDao;
	
	@Override
	protected void updateSub(String subupdates, String voClsName) {
		//write subupdates code
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		Problem entity = parseMainUpdate(mainupdates, mainId, Problem.class);
		update(entity);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		//write subcreates code
	}

	@Override
	protected String persistMain(String maincreatess) {
		Problem dept = json2vo(maincreatess, Problem.class);
		return save(dept);
	}

}
