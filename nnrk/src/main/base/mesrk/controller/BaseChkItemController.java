package mesrk.controller;

import java.io.IOException;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import mesrk.service.BaseChkItemService;
import qgg.extjs.controller.ExtJsBaseController;
import qgg.extjs.vo.FormSubmitReturnVO;

@Controller
@RequestMapping(value="basechkitem")
public class BaseChkItemController extends ExtJsBaseController{
	
	private BaseChkItemService baseChkItemService;
	
	@RequestMapping(value="uploadorder",method=RequestMethod.POST)
	@ResponseBody
	public FormSubmitReturnVO uploadorder(@RequestParam("mkorderxls") CommonsMultipartFile  mkorderxls) throws IOException {
		if(mkorderxls == null || mkorderxls.isEmpty() ) {
			return new FormSubmitReturnVO(false,"");
		}
		baseChkItemService.importFromExcel(mkorderxls.getInputStream() );
		return new FormSubmitReturnVO(true,"");
	}
	
	/***
	 * 将检测模板中引用该检测项，更新到最新数据
	 */
	@RequestMapping(value="synctpl",method=RequestMethod.POST)
	@ResponseBody
	public void syncTpl(String recId) {
		baseChkItemService.syncTpl(recId);
	}
	
	@Resource
	public void setService(BaseChkItemService baseChkItemService) {
		this.extJsService = baseChkItemService;
		this.baseChkItemService = baseChkItemService;
	}
}
