package mesrk.service;

import java.io.InputStream;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import mesrk.dao.BaseChkItemDao;
import mesrk.entity.BaseChkItem;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class BaseChkItemService extends ExtJsServiceImp{
	
	@Resource
	private BaseChkMrlOpTplService chkMrlOpTplService;
	@Resource
	private BaseChkMrlWhTplService chkMrlWhTplService;
	@Resource
	private BaseChkItemDao chkItemDao;
	
	@Override
	protected void updateSub(String subupdates, String voClsName) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		BaseChkItem entity = parseMainUpdate(mainupdates, mainId, BaseChkItem.class);
		update(entity);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected String persistMain(String maincreatess) {
		BaseChkItem item = json2vo(maincreatess, BaseChkItem.class);
		return save(item);
	}

	@Transactional(propagation=Propagation.REQUIRED)
	public void importFromExcel(InputStream excel) {
		List<BaseChkItem> datas = importDatasFromExcel(excel, 2, BaseChkItem.class);
		for(BaseChkItem data : datas) {
			save(data);
		}
	}

	@Transactional(propagation=Propagation.REQUIRED)
	public void syncTpl(String recId) {
		BaseChkItem chkItem = chkItemDao.findById(recId);
		chkMrlOpTplService.updateEntry(chkItem);
		chkMrlWhTplService.updateEntry(chkItem);
	}
	
	

}
