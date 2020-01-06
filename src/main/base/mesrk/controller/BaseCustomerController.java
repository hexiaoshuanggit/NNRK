package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import mesrk.service.BaseCustomerService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value="basecustomer")
public class BaseCustomerController extends ExtJsBaseController{
	
	@Resource
	public void setService(BaseCustomerService baseCustomerService) {
		this.extJsService = baseCustomerService;
	}
}
