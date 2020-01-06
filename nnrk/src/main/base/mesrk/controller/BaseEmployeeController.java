package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import mesrk.service.BaseEmployeeService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value = "baseemployee")
public class BaseEmployeeController extends ExtJsBaseController{
	
	
	
	@Resource
	public void setService(BaseEmployeeService baseEmployeeService) {
		this.extJsService = baseEmployeeService;
	}
}
