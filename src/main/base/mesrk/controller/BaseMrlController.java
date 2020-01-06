package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import mesrk.service.BaseMrlService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value="basemrl")
public class BaseMrlController extends ExtJsBaseController{
	
	@Resource
	public void setService(BaseMrlService baseMrlService) {
		this.extJsService = baseMrlService;
	}
	
}
