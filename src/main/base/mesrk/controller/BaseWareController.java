package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import mesrk.service.BaseWareService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value="baseware")
public class BaseWareController extends ExtJsBaseController{

	
	@Resource
	public void setService(BaseWareService baseWareService) {
		this.extJsService = baseWareService;
	}
	
}
