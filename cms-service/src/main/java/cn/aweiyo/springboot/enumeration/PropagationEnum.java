package cn.aweiyo.springboot.enumeration;

/**
 * 事物传播行为类型枚举
 * 
 * @author aw
 *
 */
public enum PropagationEnum {
	REQUIRED, // 如果当前存在事务，则加入该事务；如果当前没有事务，则创建一个新的事务
	SUPPORTS, // 如果当前存在事务，则加入该事务；如果当前没有事务，则以非事务的方式继续运行。
	MANDATORY, // 如果当前存在事务，则加入该事务；如果当前没有事务，则抛出异常。
	REQUIRES_NEW, // 创建一个新的事务，如果当前存在事务，则把当前事务挂起。
	NOT_SUPPORTED, // 以非事务方式运行，如果当前存在事务，则把当前事务挂起。
	NEVER, // 以非事务方式运行，如果当前存在事务，则抛出异常。
	NESTED;// 如果当前存在事务，则创建一个事务作为当前事务的嵌套事务来运行；如果当前没有事务，则该取值等价于 REQUIRED 。
}
