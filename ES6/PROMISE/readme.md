# 异步
js是单线程的，一次只能执行一个任务
遇到需要耗时的任务，那就先挂起，先执行不耗时的代码，等到不耗时的代码执行完了，v8腾出手了，再执行耗时的代码


# 同步
不需要耗时的函数


# 回调
- 嵌套过深，一旦出现问题很难排查


# Promise
1. then((res) => {})   res是promise中resolve(xx)出来的值
2. catch((err) => {})   err是promise中reject(xx)出来的值

