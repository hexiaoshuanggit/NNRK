package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import mesrk.service.ProjectModelService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value = "projectmodel")
public class ProjectModelController extends ExtJsBaseController{

	
	private ProjectModelService projectmodelService;
	
//	@RequestMapping(value="check",method=RequestMethod.POST)
//	@ResponseBody
//	public void check(String recId){
//		projectmodelService.check(recId);
//	}
	
//	@RequestMapping(value="uncheck",method=RequestMethod.POST)
//	@ResponseBody
//	public void uncheck(String recId){
//		projectmodelService.uncheck(recId);
//	}
	
	@Resource
	public void setService(ProjectModelService projectmodelService) {
		this.extJsService = projectmodelService;
		this.projectmodelService = projectmodelService;
	}
	
}
