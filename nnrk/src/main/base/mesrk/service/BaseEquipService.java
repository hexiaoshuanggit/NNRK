package mesrk.service;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import mesrk.dao.BaseEquipmentDao;
import mesrk.entity.BaseEnum;
import mesrk.entity.BaseEquipType;
import mesrk.entity.BaseEquipment;
import qgg.extjs.exception.MessageInfoException;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class BaseEquipService extends ExtJsServiceImp{

	@Resource
	private BaseEquipmentDao baseEquipmentDao;
	
	@Override
	protected void updateSub(String subupdates, String voClsName) {
		List<BaseEquipment> entitys = parseSubUpdates(subupdates, BaseEquipment.class); 
		for(BaseEquipment entity : entitys) {
			update(entity);
		}
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		BaseEquipType entity = parseMainUpdate(mainupdates, mainId, BaseEquipType.class); 
		update(entity);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		List<BaseEquipment> equipments = json2list(subcreatess, BaseEquipment.class);
		for(BaseEquipment equipment : equipments) {
			equipment.setMainId(mainId);
			persist(equipment);
		}
	}

	@Override
	protected String persistMain(String maincreatess) {
		BaseEquipType etype = json2vo(maincreatess, BaseEquipType.class);
		return save(etype);
	}
	
	//释放被占用的设备
	@Transactional(propagation = Propagation.REQUIRED)
	public void disposeEquipment(String equipment,String source) {
		if(StringUtils.isBlank(equipment)) {
			return ;
		}
		BaseEquipment equip = baseEquipmentDao.findByCode(equipment);
		if( equip == null) {
			return;
		}
		if(!BaseEnum.已使用.equals(equip.getUseStatus() ) ) {
			return;
		}
		//当已使用，并且和锁定来源一致时候释放该设备
		if( source.equals( equip.getRedundant1() )) {
			equip.setRedundant1(null);
			equip.setUseStatus( BaseEnum.未使用 );
			update(equip);
		}
		
	}
	
	//锁定被占用的设备
	@Transactional(propagation = Propagation.REQUIRED)
	public void lockEquipment(String equipment,String source) {
		BaseEquipment equip = baseEquipmentDao.findByCode(equipment);
		if(equip == null) {
			throw new MessageInfoException("未找到该设备：" + equipment);
		}
		if(BaseEnum.已使用.equals(equip.getUseStatus() ) ) {
			throw new MessageInfoException( String.format("%s此设备已被占用,%s", equipment, equip.getRedundant1()) );
		}
		equip.setUseStatus( BaseEnum.已使用 );
		equip.setRedundant1(source);
		update(equip);
	}

}
