package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import mesrk.service.BaseProcessParamService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value="baseprocessparam")
public class BaseProcessParamController extends ExtJsBaseController{

	private BaseProcessParamService paramService;
	
	@RequestMapping(value="check",method=RequestMethod.POST)
	@ResponseBody
	public void check(String recId){
		paramService.check(recId);
	}
	
	@RequestMapping(value="uncheck",method=RequestMethod.POST)
	@ResponseBody
	public void uncheck(String recId){
		paramService.uncheck(recId);
	}
	
	@Resource
	public void setService(BaseProcessParamService paramService) {
		this.extJsService = paramService;
		this.paramService = paramService;
	}
	
}
