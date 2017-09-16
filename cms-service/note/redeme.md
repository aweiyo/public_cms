技术选型：
-   SpringBoot
-   MyBatis(持久层)
-   Redis(缓存)
-   Docker(通用容器)
-   ElasticSearch(搜索引擎)
-   Dubbo(分布式)
-   Maven(构建工具)
-   Git(版本控制)
-   JQuery(前端)
-   Swagger(接口调试)
-   Sonar(代码审查)
-   JUnit(测试)

环境：
-   Eclipse(Neon)
-   JDK1.8
-   Maven3.3
-   Mysql5.5

核心开发技术点：
1.  搭建起上述环境
2.  SpringBoot
3.  事物控制
4.	elasticsearch
5.  guava（与redis相似，做缓存用，google开源）
6.  redis
7.  zookeeper+dubbo实现分布式


将工程run的前提和步骤：
1.  满足上述环境
2.  搭建win或linux下的zookeeper环境。按照顺序依次将cms-api,cms-service,cms-app安装到本地仓库中。
3.  访问http://localhost:8088/login，若搭建成功会有成功提示语。
4.  建议.md文档的编写使用atom（推荐）或sublime编辑器。
