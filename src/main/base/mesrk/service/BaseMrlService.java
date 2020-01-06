package mesrk.service;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import mesrk.dao.BaseMrlDao;
import mesrk.entity.BaseMrl;
import qgg.extjs.exception.MessageInfoException;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class BaseMrlService extends ExtJsServiceImp{

	@Resource
	private BaseMrlDao baseMrlDao;
	
	@Override
	protected void updateSub(String subupdates, String voClsName) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		BaseMrl entity = parseMainUpdate(mainupdates, mainId, BaseMrl.class);
		update(entity);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected String persistMain(String maincreatess) {
		BaseMrl mrl = json2vo(maincreatess, BaseMrl.class);
		return save(mrl);
	}

	@Transactional(propagation=Propagation.REQUIRED)
	public BaseMrl findByCodeOrId(String codeOrId) {
		if(StringUtils.isEmpty(codeOrId)) {
			return null;
		}
		BaseMrl bmrl = baseMrlDao.findByCode(codeOrId);
		if(bmrl != null) {return bmrl;}
		return baseMrlDao.findById(codeOrId);
//		return baseMrlDao.findByCodeOrId(codeOrId);
	}

	@Transactional(propagation=Propagation.REQUIRED)
	public BaseMrl loadByCodeOrId(String codeOrId) {
		BaseMrl bmrl = findByCodeOrId(codeOrId);
		if(bmrl == null) {
			throw new MessageInfoException("未找到相关物料:" + codeOrId);
		}
		return bmrl;
	}
}
