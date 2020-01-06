package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import mesrk.service.SystemCriterionService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value = "syscriterion")
public class SystemCriterionController extends ExtJsBaseController{

	
	@Resource
	public void setService(SystemCriterionService systemCriterionService) {
		this.extJsService = systemCriterionService;
	}
	
}
