package mesrk.service;

import java.util.LinkedList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import mesrk.dao.BaseDeptDao;
import mesrk.dao.BaseEmployeeDao;
import mesrk.entity.BaseDept;
import mesrk.entity.BaseEmployee;
import qgg.extjs.exception.MessageInfoException;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class BaseDeptEmployeeService extends ExtJsServiceImp{
	
	@Resource
	private BaseDeptDao baseDeptDao;
	@Resource
	private BaseEmployeeDao baseEmployeeDao;
	
	@Override
	protected void updateSub(String subupdates, String voClsName) {
		List<BaseEmployee> entitys = parseSubUpdates(subupdates, BaseEmployee.class);
		for(BaseEmployee  entity : entitys) {
			update(entity);
		}
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		BaseDept entity = parseMainUpdate(mainupdates, mainId, BaseDept.class);
		update(entity);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		List<BaseEmployee> employees = json2list(subcreatess, BaseEmployee.class);
		for(BaseEmployee employee : employees) {
			employee.setDeptId(mainId);
			persist(employee);
		}
	}

	@Override
	protected String persistMain(String maincreatess) {
		BaseDept dept = json2vo(maincreatess, BaseDept.class);
		return save(dept);
	}
	
	
	//获取该用户的上级领导
	@Transactional(propagation = Propagation.REQUIRED)
	public String loadLeaderByEmployee(String empCodeOrNameOrId) {
		BaseEmployee bemp = baseEmployeeDao.findByCodeNameId(empCodeOrNameOrId);
		if(bemp == null) {
			throw new MessageInfoException("请先维护该用户的人事信息");
		}
		BaseDept bdept = baseDeptDao.findById(bemp.getDeptId());
		if( bdept == null) {
			throw new MessageInfoException("请先维护该用户的所属部门");
		}
		String leader = bdept.getHeader();
		if(StringUtils.isBlank(leader)) {
			throw new MessageInfoException(bemp.getName() +"所在部门未设置负责人");
		}
		return leader;
	}

	//获取部门下面的人员
	@Transactional(propagation = Propagation.REQUIRED)
	public List<String> queryEmployees(String dept) {
		BaseDept bdept = getDeptByCodeOrNameOrId(dept);
		if(bdept == null) { return null;}
		List<BaseEmployee> employees = baseEmployeeDao.querByDeptId(bdept.getId());
		List<String> users = new LinkedList<String>();
		for(BaseEmployee employee : employees ) {
			users.add(employee.getName());
		}
		return users;
	}
	
	//获取部门的负责人
	@Transactional(propagation = Propagation.REQUIRED)
	public String getDeptLeader(String dept) {
		BaseDept bdept = getDeptByCodeOrNameOrId(dept);
		if(bdept == null) { return null;}
		return bdept.getHeader();
	}
	
	//根据部门的Code 或 Name 或 Id 获取部门
	@Transactional(propagation = Propagation.REQUIRED)
	public BaseDept getDeptByCodeOrNameOrId(String dept) {
		return baseDeptDao.getDeptByCodeOrNameOrId(dept);
	}

}
