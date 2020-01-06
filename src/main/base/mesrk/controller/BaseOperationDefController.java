package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import mesrk.service.BaseOperationDefService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value="baseopdef")
public class BaseOperationDefController extends ExtJsBaseController{
	
	@Resource
	public void setService(BaseOperationDefService baseOperationDefService) {
		this.extJsService = baseOperationDefService;
	}
	
}
