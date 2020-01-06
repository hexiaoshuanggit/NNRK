package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import mesrk.service.BaseProcessItemService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value="baseprocessitem")
public class BaseProcessItemController extends ExtJsBaseController{

	
	@Resource
	public void setService(BaseProcessItemService processItemService) {
		this.extJsService = processItemService;
	}
	
}
