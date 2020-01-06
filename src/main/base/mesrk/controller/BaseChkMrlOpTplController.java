package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import mesrk.service.BaseChkMrlOpTplService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value="basechkmrloptpl")
public class BaseChkMrlOpTplController extends ExtJsBaseController{
	
	private BaseChkMrlOpTplService baseChkMrlOpTplService;
	
	@RequestMapping(value="check",method=RequestMethod.POST)
	@ResponseBody
	public void check(String recId){
		baseChkMrlOpTplService.check(recId);
	}
	
	@RequestMapping(value="uncheck",method=RequestMethod.POST)
	@ResponseBody
	public void uncheck(String recId){
		baseChkMrlOpTplService.uncheck(recId);
	}
	
	@RequestMapping(value="copy",method=RequestMethod.POST)
	@ResponseBody
	public void copy(String recId){
		baseChkMrlOpTplService.copy(recId);
	}
	
	@Resource
	public void setService(BaseChkMrlOpTplService baseChkMrlOpTplService) {
		this.extJsService = baseChkMrlOpTplService;
		this.baseChkMrlOpTplService = baseChkMrlOpTplService;
	}
	
}
