package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import mesrk.service.BaseRouteLineService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value="baserouteline")
public class BaseRouteLineController extends ExtJsBaseController{
	
	
	
	@Resource
	public void setService(BaseRouteLineService baseRouteLineService) {
		this.extJsService = baseRouteLineService;
	}
	
}
