package cn.aweiyo.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import cn.aweiyo.springboot.controller.UserController;

/**
 * Spring Boot 应用启动类
 *
 */
// Spring Boot 应用的标识
@SpringBootApplication
public class ClientApplication {

    public static void main(String[] args) {
        // 程序启动入口
        // 启动嵌入式的 Tomcat 并初始化 Spring 环境及其各 Spring 组件
    	SpringApplication.run(ClientApplication.class, args);
    }
}
