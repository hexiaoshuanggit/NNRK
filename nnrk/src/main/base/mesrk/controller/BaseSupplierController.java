package mesrk.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import mesrk.service.BaseSupplierService;
import qgg.extjs.controller.ExtJsBaseController;

@Controller
@RequestMapping(value="basesupplier")
public class BaseSupplierController extends ExtJsBaseController{

	@Resource
	public void setService(BaseSupplierService baseSupplierService) {
		this.extJsService = baseSupplierService;
	}
}
