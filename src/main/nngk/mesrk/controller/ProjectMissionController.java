package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import mesrk.service.ProjectMissionService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value = "projectmission")
public class ProjectMissionController extends ExtJsBaseController{

	
	private ProjectMissionService projectmissionService;
	
//	@RequestMapping(value="check",method=RequestMethod.POST)
//	@ResponseBody
//	public void check(String recId){
//		projectmissionService.check(recId);
//	}
	
//	@RequestMapping(value="uncheck",method=RequestMethod.POST)
//	@ResponseBody
//	public void uncheck(String recId){
//		projectmissionService.uncheck(recId);
//	}
	
	@Resource
	public void setService(ProjectMissionService projectmissionService) {
		this.extJsService = projectmissionService;
		this.projectmissionService = projectmissionService;
	}
	
}
