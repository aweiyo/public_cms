package cn.aweiyo.springboot.dubbo;

import com.alibaba.dubbo.config.annotation.Service;

@Service(version="1.0.0") 
public class CityDubboServiceImpl implements CityDubboService {

    public String findCityByName(String cityName) {
    	System.err.println("SpringBoot整合dubbo成功！");
        return cityName + ":SpringBoot整合dubbo成功！";
    }
}
