package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import mesrk.service.BaseBomOpService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value = "basebomop")
public class BaseBomOpController extends ExtJsBaseController{

	
	private BaseBomOpService baseBomOpService;
	
	@RequestMapping(value="check",method=RequestMethod.POST)
	@ResponseBody
	public void check(String recId){
		baseBomOpService.check(recId);
	}
	
	@RequestMapping(value="uncheck",method=RequestMethod.POST)
	@ResponseBody
	public void uncheck(String recId){
		baseBomOpService.uncheck(recId);
	}
	
	@RequestMapping(value="syncerp",method=RequestMethod.POST)
	@ResponseBody
	public void syncerp() {
		baseBomOpService.syncFromKindde();
	}
	
	@Resource
	public void setService(BaseBomOpService baseBomOpService) {
		this.extJsService = baseBomOpService;
		this.baseBomOpService = baseBomOpService;
	}
	
}
