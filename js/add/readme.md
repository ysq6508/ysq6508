js函数，两数相加

## 函数收集参数
    curry(fn)
    - 使用es5
        函数里有一个 arguments，从arguments[1] -> arguments[arguments.length - 1]
    - 使用es6
        让我们代码运行简洁 ...args rest运算符
        curry(fn, ...args)
    - 问题是什么？
        即使使用了箭头函数(arrow function)，又去使用了es5里的arguments，那么还是无法解决这个问题。
        箭头函数里没有arguments  应该用rest运算符
        
