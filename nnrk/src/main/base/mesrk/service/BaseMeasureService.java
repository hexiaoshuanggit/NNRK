package mesrk.service;

import org.springframework.stereotype.Service;

import mesrk.entity.BaseMeasure;
import qgg.extjs.service.imp.ExtJsServiceImp;

@Service
public class BaseMeasureService extends ExtJsServiceImp{

	@Override
	protected String persistMain(String maincreatess) {
		BaseMeasure measure = json2vo(maincreatess, BaseMeasure.class);
		return save(measure);
	}

	@Override
	protected void persistSub(String arg0, String arg1, String arg2) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected void updateMain(String mainupdates, String mainId) {
		BaseMeasure entity = parseMainUpdate(mainupdates, mainId, BaseMeasure.class);
		update(entity);
	}

	@Override
	protected void updateSub(String arg0, String arg1) {
		// TODO Auto-generated method stub
		
	}

}
