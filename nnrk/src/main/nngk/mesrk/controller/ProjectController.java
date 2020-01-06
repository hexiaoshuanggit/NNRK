package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import mesrk.service.ProjectService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value = "project")
public class ProjectController extends ExtJsBaseController{

	
	private ProjectService projectService;
	
//	@RequestMapping(value="check",method=RequestMethod.POST)
//	@ResponseBody
//	public void check(String recId){
//		projectService.check(recId);
//	}
	
//	@RequestMapping(value="uncheck",method=RequestMethod.POST)
//	@ResponseBody
//	public void uncheck(String recId){
//		projectService.uncheck(recId);
//	}
	
	@Resource
	public void setService(ProjectService projectService) {
		this.extJsService = projectService;
		this.projectService = projectService;
	}
	
	
	
	
	
}
