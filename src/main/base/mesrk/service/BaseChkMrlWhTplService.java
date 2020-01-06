package mesrk.service;

import java.util.List;

import javax.annotation.Resource;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.ArrayUtils;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import mesrk.dao.BaseChkMrlWhTplDao;
import mesrk.entity.BaseChkItem;
import mesrk.entity.BaseChkMrlWhTpl;
import mesrk.entity.BaseChkMrlWhTplEntry;
import mesrk.entity.BaseEnum;
import mesrk.util.BaseUtils;
import qgg.extjs.exception.MessageInfoException;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class BaseChkMrlWhTplService extends ExtJsServiceImp{

	@Resource
	private BaseChkMrlWhTplDao baseChkMrlWhTplDao;
	
	@Override
	protected void updateSub(String subupdates, String voClsName) {
		List<BaseChkMrlWhTplEntry> entrys = parseSubUpdates(subupdates, BaseChkMrlWhTplEntry.class);
		for(BaseChkMrlWhTplEntry  entry : entrys) {
			update(entry);
		}
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		BaseChkMrlWhTpl entity = parseMainUpdate(mainupdates, mainId, BaseChkMrlWhTpl.class);
		update(entity);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		List<BaseChkMrlWhTplEntry> entrys = json2list(subcreatess, BaseChkMrlWhTplEntry.class);
		for(BaseChkMrlWhTplEntry entry : entrys) {
			entry.setMainId(mainId);
			persist(entry);
		}
	}

	@Override
	protected String persistMain(String maincreatess) {
		BaseChkMrlWhTpl tpl = json2vo(maincreatess, BaseChkMrlWhTpl.class);
		return saveDoc(tpl,"MWH");
	}

	@Transactional(propagation=Propagation.REQUIRED)
	public void check(String recId) {
		BaseChkMrlWhTpl tpl = baseChkMrlWhTplDao.findById(recId);
		checkDoc(tpl);
	}

	@Transactional(propagation=Propagation.REQUIRED)
	public void uncheck(String recId) {
		BaseChkMrlWhTpl tpl = baseChkMrlWhTplDao.findById(recId);
		uncheckDoc(tpl);
	}
	
	//复制
	@Transactional(propagation=Propagation.REQUIRED)
	public void copy(String recId) {
		BaseChkMrlWhTpl tpl = baseChkMrlWhTplDao.findById(recId);
		BaseChkMrlWhTpl tplcopy = new BaseChkMrlWhTpl();
		BeanUtils.copyProperties(tpl, tplcopy,  ArrayUtils.add(BaseUtils.ignoreProps1, "entrys"));
		tplcopy.setName( tpl.getName() + "-copy" );
		String mainId = saveDoc(tplcopy,"MWH");
		
		for(BaseChkMrlWhTplEntry entry :  tpl.getEntrys() ) {
			BaseChkMrlWhTplEntry entrycopy = new BaseChkMrlWhTplEntry();
			BeanUtils.copyProperties(entry, entrycopy,  BaseUtils.ignoreProps1 );
			entrycopy.setMainId(mainId);
			persist(entrycopy);
		}
		
	}
	
	//出入库
	@Transactional(propagation=Propagation.REQUIRED)
	public void mrlWhOutIn(String mrlId,BaseEnum direction,String srcJson,Class<?> srcType,String ref1,String ref2 ) {
		List<BaseChkMrlWhTpl> whtpls = baseChkMrlWhTplDao.queryWithCheck(mrlId,direction,BaseEnum.数量);
		if(CollectionUtils.isEmpty(whtpls)) {return;}
		for(BaseChkMrlWhTpl whtpl : whtpls) {
			if(whtpl.getFinishCount() == null) {whtpl.setFinishCount(0);}
			if(whtpl.getChkFqValue() == null  ) {whtpl.setChkFqValue(1);}
			Integer currentCount =  whtpl.getFinishCount() + 1;
			whtpl.setFinishCount(currentCount );
		}
	}

	@Transactional(propagation=Propagation.REQUIRED)
	public void updateEntry(BaseChkItem chkItem) {
		List<BaseChkMrlWhTplEntry> entrys = getDao().createQueryList(BaseChkMrlWhTplEntry.class, Restrictions.eq("chkItemId", chkItem.getId()));
		for(BaseChkMrlWhTplEntry entry : entrys) {
			entry.setItemName(chkItem.getName());
			entry.setItemCode( chkItem.getCode());
			entry.setCboValues(chkItem.getCboValues());
			entry.setCheckAttr(chkItem.getCheckAttr());
			entry.setChkMeasure(chkItem.getChkMeasure());
			entry.setChkMethod(chkItem.getChkMethod());
			entry.setChkPosition(chkItem.getChkPosition());
			entry.setStandardVal(chkItem.getStandardVal());
			entry.setColMax(chkItem.getColMax());
			entry.setColMin(chkItem.getColMin());
			entry.setSpecMax(chkItem.getSpecMax());
			entry.setSpecMin(chkItem.getSpecMin());
			update(entry);
		}
	}

	@Override
	protected void beforeUpdates(String mainId) {
		BaseChkMrlWhTpl tpl = baseChkMrlWhTplDao.findById(mainId);
		if( isCheckDoc( tpl)) {
			throw new MessageInfoException("该单据已审核，不可修改");
		}
	}
	
}
