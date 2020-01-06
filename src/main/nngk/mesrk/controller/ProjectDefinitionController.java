package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import mesrk.service.ProjectDefinitionService;
import qgg.extjs.controller.ExtJsBaseController;
import qgg.extjs.vo.ListView;
import qgg.extjs.vo.ParamsGet;

@Controller
@RequestMapping(value = "projectdefinition")
public class ProjectDefinitionController extends ExtJsBaseController{

	
	private ProjectDefinitionService projectdefinitionService;
	
	
	
	
//	@RequestMapping(value="check",method=RequestMethod.POST)
//	@ResponseBody
//	public void check(String recId){
//		projectdefinitionService.check(recId);
//	}
	
//	@RequestMapping(value="uncheck",method=RequestMethod.POST)
//	@ResponseBody
//	public void uncheck(String recId){
//		projectdefinitionService.uncheck(recId);
//	}




	@Resource
	public void setService(ProjectDefinitionService projectdefinitionService) {
		this.extJsService = projectdefinitionService;
		this.projectdefinitionService = projectdefinitionService;
	}
	
}
