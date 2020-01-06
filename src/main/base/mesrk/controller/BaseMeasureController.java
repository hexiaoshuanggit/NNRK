package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import mesrk.service.BaseMeasureService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value="basemeasure")
public class BaseMeasureController extends ExtJsBaseController{
	
	@Resource
	public void setService(BaseMeasureService baseMeasureService) {
		this.extJsService = baseMeasureService;
	}
	
}
