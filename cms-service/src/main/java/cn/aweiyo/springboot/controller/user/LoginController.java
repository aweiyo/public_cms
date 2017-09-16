package cn.aweiyo.springboot.controller.user;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;

@RestController
public class LoginController {
	
	@ApiOperation(value="登录", notes="根据账号密码后台登录")
	@RequestMapping("/login")
	public String login () {
		return "login";
	}
}
