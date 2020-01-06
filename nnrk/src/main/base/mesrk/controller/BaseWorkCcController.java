package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import mesrk.service.BaseWorkCCService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value="baseworkcc")
public class BaseWorkCcController extends ExtJsBaseController{
	
	@Resource
	public void setService(BaseWorkCCService baseWorkCCService) {
		this.extJsService = baseWorkCCService;
	}
	
}
