package cn.aweiyo.springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.dubbo.config.annotation.Reference;

import cn.aweiyo.springboot.dubbo.CityDubboService;

@Controller
public class UserController {

	@Reference(version = "1.0.0")
    private CityDubboService cityDubboService;
	
	@RequestMapping("/login")
    @ResponseBody
	public String printDemo(){
		return cityDubboService.findCityByName("aweiyo");
	}
}
