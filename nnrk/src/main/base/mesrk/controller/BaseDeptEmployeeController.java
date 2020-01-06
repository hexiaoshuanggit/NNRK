package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import mesrk.service.BaseDeptEmployeeService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value="basedeptemp")
public class BaseDeptEmployeeController extends ExtJsBaseController{
	
	
	
	@Resource
	public void setService(BaseDeptEmployeeService baseDeptEmployeeService) {
		this.extJsService = baseDeptEmployeeService;
	}
}
