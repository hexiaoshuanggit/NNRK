package mesrk.service;

import java.util.LinkedList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.ArrayUtils;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import mesrk.dao.BaseChkMrlOpTplDao;
import mesrk.entity.BaseChkItem;
import mesrk.entity.BaseChkMrlOpTpl;
import mesrk.entity.BaseChkMrlOpTplEntry;
import mesrk.entity.BaseEnum;
import mesrk.util.BaseUtils;
import qgg.extjs.exception.MessageInfoException;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class BaseChkMrlOpTplService extends ExtJsServiceImp{

	@Resource
	private BaseChkMrlOpTplDao chkmrlopTplDao;
	
	@Override
	protected void updateSub(String subupdates, String voClsName) {
		List<BaseChkMrlOpTplEntry> entrys =  parseSubUpdates(subupdates, BaseChkMrlOpTplEntry.class);
		for(BaseChkMrlOpTplEntry  entry : entrys) {
			update(entry);
		}
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		BaseChkMrlOpTpl entity = parseMainUpdate(mainupdates, mainId, BaseChkMrlOpTpl.class);
		update(entity);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		List<BaseChkMrlOpTplEntry> entrys = json2list(subcreatess, BaseChkMrlOpTplEntry.class);
		for(BaseChkMrlOpTplEntry  entry : entrys) {
			entry.setMainId(mainId);
			persist(entry);
		}
	}

	@Override
	protected String persistMain(String maincreatess) {
		BaseChkMrlOpTpl tpl = json2vo(maincreatess, BaseChkMrlOpTpl.class);
		return saveDoc(tpl,"MOP");
	}

	@Transactional(propagation=Propagation.REQUIRED)
	public void check(String recId) {
		BaseChkMrlOpTpl tpl = chkmrlopTplDao.findById(recId);
		checkDoc(tpl);
	}

	@Transactional(propagation=Propagation.REQUIRED)
	public void uncheck(String recId) {
		BaseChkMrlOpTpl tpl = chkmrlopTplDao.findById(recId);
		uncheckDoc(tpl);
	}
	
	//产品工序 完工 (只生成尾检)
	//srcJson 比如 工序条码的 json 
	//srcType 自定义 比如工序条码
	@Transactional(propagation=Propagation.REQUIRED)
	public void mrlOpFinsh(String mrlId,String opId,String srcJson,Class<?> srcType,String ref1,String ref2) {
		List<BaseChkMrlOpTpl> mrlopTpls = chkmrlopTplDao.query(mrlId,opId,BaseEnum.数量,BaseEnum.尾检);
		if(CollectionUtils.isEmpty(mrlopTpls)) {
			return;
		}
		for(BaseChkMrlOpTpl  mrlopTpl : mrlopTpls) {
			if(mrlopTpl.getFinishCount() == null) {mrlopTpl.setFinishCount(0);}
			if(mrlopTpl.getChkFqValue() == null  ) {mrlopTpl.setChkFqValue(1);}
			Integer currentCount =  mrlopTpl.getFinishCount() + 1;
			mrlopTpl.setFinishCount(currentCount );
		}
	}
	
	//首检  和 巡检
	@Transactional(propagation=Propagation.REQUIRED)
	public void mrlOpStart(String mrlId,String opId,String srcJson,Class<?> srcType,String ref1,String ref2) {
		List<BaseChkMrlOpTpl> mrlopTpls = new LinkedList<BaseChkMrlOpTpl>();
		
		List<BaseChkMrlOpTpl> sjoptpls = chkmrlopTplDao.query(mrlId,opId,BaseEnum.数量,BaseEnum.首检);
		if(CollectionUtils.isNotEmpty(sjoptpls)) {
			mrlopTpls.addAll(sjoptpls);
		}
		List<BaseChkMrlOpTpl> xjoptpls = chkmrlopTplDao.query(mrlId,opId,BaseEnum.数量,BaseEnum.巡检);
		if(CollectionUtils.isNotEmpty(xjoptpls)) {
			mrlopTpls.addAll(xjoptpls);
		}
		
		
		for(BaseChkMrlOpTpl  mrlopTpl : mrlopTpls) {
			if(mrlopTpl.getFinishCount() == null) {mrlopTpl.setFinishCount(0);}
			if(mrlopTpl.getChkFqValue() == null  ) {mrlopTpl.setChkFqValue(1);}
			Integer currentCount =  mrlopTpl.getFinishCount() + 1;
			mrlopTpl.setFinishCount(currentCount );
			if( ( currentCount % mrlopTpl.getChkFqValue()) == 0) {
			}
		}
	}
	
	
	//复制一份新的
	@Transactional(propagation=Propagation.REQUIRED)
	public void copy(String recId) {
		BaseChkMrlOpTpl tpl = chkmrlopTplDao.findById(recId);
		
		BaseChkMrlOpTpl tplcopy = new BaseChkMrlOpTpl();
		BeanUtils.copyProperties(tpl, tplcopy,  ArrayUtils.add(BaseUtils.ignoreProps1, "entrys"));
		tplcopy.setName( tpl.getName() + "-copy" );
		String mainId = saveDoc(tplcopy,"MOP");
		
		for(BaseChkMrlOpTplEntry entry :  tpl.getEntrys()) {
			BaseChkMrlOpTplEntry entrycopy = new BaseChkMrlOpTplEntry();
			BeanUtils.copyProperties(entry, entrycopy,  BaseUtils.ignoreProps1 );
			entrycopy.setMainId(mainId);
			persist(entrycopy);
		}
	}

	
	@Transactional(propagation=Propagation.REQUIRED)
	public void updateEntry(BaseChkItem chkItem) {
		List<BaseChkMrlOpTplEntry> entrys = getDao().createQueryList(BaseChkMrlOpTplEntry.class, Restrictions.eq("chkItemId", chkItem.getId()));
		for(BaseChkMrlOpTplEntry entry : entrys) {
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
		BaseChkMrlOpTpl tpl = chkmrlopTplDao.findById(mainId);
		if( isCheckDoc( tpl)) {
			throw new MessageInfoException("该单据已审核，不可修改");
		}
	}
	
}
