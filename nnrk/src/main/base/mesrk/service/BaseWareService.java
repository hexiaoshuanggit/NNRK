package mesrk.service;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import mesrk.dao.BaseWareDao;
import mesrk.dao.BaseWareLocationDao;
import mesrk.entity.BaseWare;
import mesrk.entity.BaseWareLocation;
import qgg.extjs.exception.MessageInfoException;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class BaseWareService extends ExtJsServiceImp{

	@Resource
	private BaseWareDao wareDao;
	@Resource
	private BaseWareLocationDao locationDao;
	
	@Override
	protected String persistMain(String maincreatess) {
		BaseWare ware = json2vo(maincreatess, BaseWare.class);
		return save(ware);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		List<BaseWareLocation> warelocations = json2list(subcreatess, BaseWareLocation.class);
		for(BaseWareLocation location :  warelocations) {
			location.setMainId(mainId);
			persist(location);
		}
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		BaseWare ware = parseMainUpdate(mainupdates, mainId, BaseWare.class);
		update(ware);
	}

	@Override
	protected void updateSub(String subupdates, String voClsName) {
		List<BaseWareLocation> locations = parseSubUpdates(subupdates, BaseWareLocation.class);
		for(BaseWareLocation  location : locations) {
			update(location);
		}
	}

	@Transactional(propagation=Propagation.REQUIRED)
	public BaseWareLocation findLocationById(String locationId) {
		if(StringUtils.isEmpty(locationId)) {
			return null;
		}
		return locationDao.findById(locationId);
	}

	@Transactional(propagation=Propagation.REQUIRED)
	public String getLocationNameById(String locationId) {
		if(StringUtils.isEmpty(locationId)) {
			return null;
		}
		BaseWareLocation loction = locationDao.findById(locationId);
		if(loction == null) {
			return null;
		}
		return loction.getName();
	}
	
	@Transactional(propagation=Propagation.REQUIRED)
	public String loadWareNameById(String wareId) {
		if(StringUtils.isBlank(wareId) ) {
			throw new MessageInfoException("仓库参数错误");
		}
		BaseWare ware = wareDao.findById(wareId);
		if(ware == null ) {
			throw new MessageInfoException("未找到仓库信息");
		}
		return	ware.getName();
	}

	@Transactional(propagation=Propagation.REQUIRED)
	public String getWareNameById(String wareId) {
		if(StringUtils.isBlank(wareId) ) {
			return null;
		}
		BaseWare ware = wareDao.findById(wareId);
		if(ware == null) {
			return null;
		}
		return ware.getName();
	}

}
