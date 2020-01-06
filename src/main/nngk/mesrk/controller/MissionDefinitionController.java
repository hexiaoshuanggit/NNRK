package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import mesrk.service.MissionDefinitionService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value = "missiondefinition")
public class MissionDefinitionController extends ExtJsBaseController{

	
	private MissionDefinitionService missiondefinitionService;
	
//	@RequestMapping(value="check",method=RequestMethod.POST)
//	@ResponseBody
//	public void check(String recId){
//		missiondefinitionService.check(recId);
//	}
	
//	@RequestMapping(value="uncheck",method=RequestMethod.POST)
//	@ResponseBody
//	public void uncheck(String recId){
//		missiondefinitionService.uncheck(recId);
//	}
	
	@Resource
	public void setService(MissionDefinitionService missiondefinitionService) {
		this.extJsService = missiondefinitionService;
		this.missiondefinitionService = missiondefinitionService;
	}
	
}
