package mesrk.service;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import mesrk.entity.BaseByteArray;
import mesrk.entity.BaseRouteLine;
import mesrk.entity.BaseRouteOperation;
import mesrk.entity.BaseRouteProduct;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class BaseRouteLineService extends ExtJsServiceImp{

	@Override
	protected void updateSub(String subupdates, String voClsName) {
		if(BaseRouteOperation.class.getName().equals(voClsName)) {
			List<BaseRouteOperation> ops = parseSubUpdates(subupdates, BaseRouteOperation.class);
			for(BaseRouteOperation op : ops ) {
				update(op);
			}
		}else if(BaseRouteProduct.class.getName().equals(voClsName) ) {
			List<BaseRouteProduct> prods = parseSubUpdates(subupdates, BaseRouteProduct.class);
			for(BaseRouteProduct prod : prods ) {
				update(prod);
			}
		}else if(BaseByteArray.class.getName().equals(voClsName) ) {
			List<BaseByteArray> files = parseSubUpdates(subupdates, BaseByteArray.class);
			for(BaseByteArray file :  files) {
				update(file);
			}
		}
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		BaseRouteLine entity = parseMainUpdate(mainupdates, mainId, BaseRouteLine.class);
		update(entity);
	}

	@Override
	protected void persistSub(String subcreatess, String mainId, String voClsName) {
		if(BaseRouteOperation.class.getName().equals(voClsName)) {
			List<BaseRouteOperation> ops = json2list(subcreatess, BaseRouteOperation.class);
			for(BaseRouteOperation op : ops) {
				op.setMainId(mainId);
				persist(op);
			}
		}else if(BaseRouteProduct.class.getName().equals(voClsName) ) {
			List<BaseRouteProduct> prods = json2list(subcreatess, BaseRouteProduct.class);
			for(BaseRouteProduct prod : prods) {
				prod.setLineId(mainId);
				persist(prod);
			}
		}
	}

	@Override
	protected String persistMain(String maincreatess) {
		BaseRouteLine line = json2vo(maincreatess, BaseRouteLine.class);
		return save(line);
	}

	@Transactional(propagation=Propagation.REQUIRED)
	public BaseRouteLine findByCodeOrName(String codeOrName) {
		if(StringUtils.isBlank(codeOrName)) {
			return null;
		}
		return getDao().createQuerySingle(BaseRouteLine.class, Restrictions.or(Restrictions.eq("code", codeOrName),Restrictions.eq("name", codeOrName)));
	}

}
