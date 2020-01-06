package mesrk.service;

import java.math.BigDecimal;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import gzq.utils.release.StringUtilRK;
import mesrk.dao.BaseBomOpDao;
import mesrk.entity.BaseBomOp;
import mesrk.entity.BaseBomOpEntry;
import qgg.extjs.exception.MessageInfoException;
import qgg.extjs.service.imp.ExtJsServiceImp;
import qgg.extjs.util.ExtContext;

@Service
public class BaseBomOpService extends ExtJsServiceImp{

	@Resource
	private BaseBomOpDao baseBomOpDao;
	
	
	@Override
	protected void beforeDelete(String id, String voStr) {
		//删除主表的时候顺便把子表也删除了
		if(BaseBomOp.class.getName().equals( voStr ) ) {
			List<BaseBomOpEntry> entrys = getDao().createQueryList(BaseBomOpEntry.class, Restrictions.eq("mainId", id));
			if(CollectionUtils.isNotEmpty(entrys)) {
				for(BaseBomOpEntry entiyD : entrys) {
					entiyD.setIsDelete(true);
					entiyD.setDeleteTime(StringUtilRK.getCurrentTime());
					entiyD.setDeleteUser(ExtContext.getCurrentLoginName());
					update(entiyD);
				}
			}
		}
	}

	@Override
	protected void updateSub(String subupdates, String voClsName) {
		List<BaseBomOpEntry> entrys = parseSubUpdates(subupdates, BaseBomOpEntry.class);
		for( BaseBomOpEntry entry : entrys) {
			update(entry);
		}
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		BaseBomOp bomop = parseMainUpdate(mainupdates, mainId, BaseBomOp.class);
		update(bomop);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		List<BaseBomOpEntry> entrys = json2list(subcreatess, BaseBomOpEntry.class);
		for(BaseBomOpEntry entry :  entrys) {
			if(entry.getMrlQty() == null ) {entry.setMrlQty(BigDecimal.ZERO);}
			entry.setMainId(mainId);
			persist(entry);
		}
	}

	@Override
	protected String persistMain(String maincreatess) {
		BaseBomOp bomop = json2vo(maincreatess, BaseBomOp.class);
		return saveDoc(bomop,"BOMOP");
	}
	
	
	@Transactional(propagation=Propagation.REQUIRED)
	public void check(String recId) {
		BaseBomOp bomop = baseBomOpDao.findById(recId);
		checkDoc(bomop);
	}

	@Transactional(propagation=Propagation.REQUIRED)
	public void uncheck(String recId) {
		BaseBomOp bomop = baseBomOpDao.findById(recId);
		uncheckDoc(bomop);
	}
	
	@Transactional(propagation=Propagation.REQUIRED)
	public BaseBomOp findByCode(String code) {
		if(StringUtils.isBlank(code)) {
			return null;
		}
		return getDao().createQuerySingle(BaseBomOp.class, Restrictions.eq("code", code));
	}

	//从金蝶ERP同步BOM
	@Transactional(propagation=Propagation.REQUIRED)
	public void syncFromKindde() {
		baseBomOpDao.syncFromKindde();
	}

	@Override
	protected void beforeUpdates(String mainId) {
		BaseBomOp bomop = baseBomOpDao.findById(mainId);
		if(isCheckDoc(bomop)) {
			throw new MessageInfoException("该BOM工序已审核，不可修改");
		}
	}
	
	
}
