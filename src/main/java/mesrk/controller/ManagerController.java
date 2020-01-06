package mesrk.controller;


import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import qgg.extjs.service.SystemReportService;
import qgg.gshiro.service.QggUserService;

@Controller
@RequestMapping(value="manager")
public class ManagerController {
	
	@Resource
	private QggUserService qggUserService;
	@Resource
	private SystemReportService systemReportService;
	
	@RequestMapping(value="login",method=RequestMethod.GET)
	public String login(){
		return "../login";
	}
	
	@RequestMapping(value="login",method=RequestMethod.POST)
	public String loginIn(String username,String password){
		qggUserService.loginIn(username, password);
		return "redirect:/manager/index";
	}
	
	@RequestMapping(value="index",method=RequestMethod.GET)
	public String index(){
		return "index";
	}
	
	@RequestMapping(value="logout",method=RequestMethod.GET)
	public String logout(){
		qggUserService.logout();
		return "redirect:/manager/login";
	}
	
	@RequestMapping(value={"changpwd"},method=RequestMethod.POST)
	@ResponseBody
	public void changePwd(String password){
		qggUserService.changePwdByUserName(qggUserService.getCurrentUserName() , password);
	}
	
	@RequestMapping(value="indexfull/{type}",method=RequestMethod.GET)
	public String indexfull(@PathVariable(value="type") String type,Model model){
		model.addAttribute("boardtype", type);
		return "indexfull";
	}
	
}
