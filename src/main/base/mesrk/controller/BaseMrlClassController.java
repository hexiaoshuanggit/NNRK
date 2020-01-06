package mesrk.controller;

import java.util.List;

import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import gzq.utils.JsonUtils;
import mesrk.service.BaseMrlClassService;
import qgg.extjs.controller.ExtJsBaseController;
import qgg.extjs.vo.TreeRootExt;

@Controller
@RequestMapping(value="basemrlclass")
public class BaseMrlClassController extends ExtJsBaseController{

	private BaseMrlClassService baseMrlClassService;
	
	@RequestMapping(value="/subtree/{id}",method=RequestMethod.GET)
	public void subNodes(@PathVariable(value="id") String id,String expandFlag
			,HttpServletResponse response) {
		TreeRootExt trees = new TreeRootExt();
		if("root".equals(id)) {
			List<Map<String, Object>> datas  = baseMrlClassService.queryTopAll();
			trees.setChildren(datas);
			ajax4json(JsonUtils.obj2json(trees),response);
		}else if(StringUtils.isNotBlank(expandFlag) ){
			List<Map<String, Object>> datas  = baseMrlClassService.queryAll(id);
			trees.setChildren(datas);
			ajax4json(JsonUtils.obj2json(trees),response);
		}else {
			ajax4json(JsonUtils.obj2json(getEO("basemrlclass", id)),response);
		}
	}
	
	@Resource
	public void setService(BaseMrlClassService baseMrlClassService) {
		this.extJsService = baseMrlClassService;
		this.baseMrlClassService = baseMrlClassService;
	}
	
}
