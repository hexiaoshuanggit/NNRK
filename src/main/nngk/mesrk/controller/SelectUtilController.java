package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import mesrk.service.SelectUtilService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value = "selectutil")
public class SelectUtilController extends ExtJsBaseController{

	
	private SelectUtilService selectutilService;
	
//	@RequestMapping(value="check",method=RequestMethod.POST)
//	@ResponseBody
//	public void check(String recId){
//		selectutilService.check(recId);
//	}
	
//	@RequestMapping(value="uncheck",method=RequestMethod.POST)
//	@ResponseBody
//	public void uncheck(String recId){
//		selectutilService.uncheck(recId);
//	}
	
	@Resource
	public void setService(SelectUtilService selectutilService) {
		this.extJsService = selectutilService;
		this.selectutilService = selectutilService;
	}
	
}
