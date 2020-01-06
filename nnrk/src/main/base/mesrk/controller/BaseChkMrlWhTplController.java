package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import mesrk.service.BaseChkMrlWhTplService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value="basechkmrlwhtpl")
public class BaseChkMrlWhTplController extends ExtJsBaseController{

	private BaseChkMrlWhTplService baseChkMrlWhTplService;
	
	@RequestMapping(value="check",method=RequestMethod.POST)
	@ResponseBody
	public void check(String recId){
		baseChkMrlWhTplService.check(recId);
	}
	
	@RequestMapping(value="uncheck",method=RequestMethod.POST)
	@ResponseBody
	public void uncheck(String recId){
		baseChkMrlWhTplService.uncheck(recId);
	}
	
	@RequestMapping(value="copy",method=RequestMethod.POST)
	@ResponseBody
	public void copy(String recId){
		baseChkMrlWhTplService.copy(recId);
	}
	
	@Resource
	public void setService(BaseChkMrlWhTplService baseChkMrlWhTplService) {
		this.extJsService = baseChkMrlWhTplService;
		this.baseChkMrlWhTplService = baseChkMrlWhTplService;
	}
	
}
