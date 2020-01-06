package mesrk.service;

import java.util.List;



import javax.annotation.Resource;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import mesrk.dao.BaseByteArrayDao;
import mesrk.entity.BaseByteArray;
import mesrk.util.BaseUtils;
import mesrk.util.FileUtilRK;
import qgg.extjs.exception.MessageInfoException;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class BaseByteArrayService extends ExtJsServiceImp{

	@Resource
	private BaseByteArrayDao baseByteArrayDao;
	
	@Override
	protected void updateSub(String subupdates, String voClsName) {
		
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		
	}

	@Override
	protected String persistMain(String maincreatess) {
		return null;
	}

	//上传附件
	@Transactional(propagation=Propagation.REQUIRED)
	public void saveAttement(String recordId, byte[] bytes, String originalFilename,String name,String desc) {
		if(StringUtils.isBlank(recordId) || bytes == null) {
			throw new MessageInfoException("未捕获到附件相关信息");
		}
		BaseByteArray attement = new BaseByteArray();
		attement.setRecordId(recordId);
		attement.setBytes(bytes);
		attement.setName(name);
		attement.setDesc(desc);
		attement.setOriginalName(originalFilename);
		if(StringUtils.isBlank(name) ) {
			attement.setName(FilenameUtils.getBaseName(originalFilename));
		}
		int type = FileUtilRK.isPicture(originalFilename) ? 0 : 1;
		//判断后缀是不是图片
		attement.setType(type);
		persist(attement);
	}

	@Transactional(propagation=Propagation.REQUIRED)
	public BaseByteArray findById(String id) {
		return baseByteArrayDao.findById(id);
	}

	//复制粘贴一份出来给新的
	@Transactional(propagation=Propagation.REQUIRED)
	public void copy(String oldrecId, String newrecId) {
		List<BaseByteArray> bytearrays = baseByteArrayDao.queryByRecId(oldrecId);
		for(BaseByteArray  bytearray : bytearrays) {
			BaseByteArray newbyteArray = new BaseByteArray();
			BeanUtils.copyProperties(bytearray, newbyteArray, BaseUtils.ignoreProps1);
			newbyteArray.setRecordId(newrecId);
			baseByteArrayDao.persist(newbyteArray);
		}
	}

}
