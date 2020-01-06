package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import mesrk.service.BaseComboxService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value="basecombox")
public class BaseComboxController extends ExtJsBaseController{
	
	@Resource
	public void setService(BaseComboxService baseComboxService) {
		this.extJsService = baseComboxService;
	}
	
}
