package cn.aweiyo.springboot.dubbo;


/**
 * 城市业务 Dubbo 服务层
 *
 */
public interface CityDubboService {

    /**
     * 根据城市名称，查询城市信息
     * @param cityName
     */
    String findCityByName(String cityName);
}
