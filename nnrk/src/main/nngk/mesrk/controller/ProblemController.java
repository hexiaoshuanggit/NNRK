package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import mesrk.service.ProblemService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value = "problem")
public class ProblemController extends ExtJsBaseController{

	
	private ProblemService problemService;
	
//	@RequestMapping(value="check",method=RequestMethod.POST)
//	@ResponseBody
//	public void check(String recId){
//		problemService.check(recId);
//	}
	
//	@RequestMapping(value="uncheck",method=RequestMethod.POST)
//	@ResponseBody
//	public void uncheck(String recId){
//		problemService.uncheck(recId);
//	}
	
	
	
	@Resource
	public void setService(ProblemService problemService) {
		this.extJsService = problemService;
		this.problemService = problemService;
	}
	
}
