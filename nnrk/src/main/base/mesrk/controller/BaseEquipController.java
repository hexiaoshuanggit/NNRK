package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import mesrk.service.BaseEquipService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value="baseequip")
public class BaseEquipController extends ExtJsBaseController{
	
	@Resource
	public void setService(BaseEquipService baseEquipService) {
		this.extJsService = baseEquipService;
	}
	
}
