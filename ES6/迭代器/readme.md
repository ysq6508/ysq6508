# 遍历器 Iterater (迭代器)
- 是一个长这样的对象 必须包含value属性和done属性
{
    value: xx,
    done: false
}

1. js中有多种可以被称之为集合的数据结构 (arr, obj, set, map)

2. 我们希望某些数据结构是可以被迭代的，于是官方就打造了一个属性Iterator,
    并设定具有Iterator属性的数据结构就是可迭代的

3. 迭代器属性的值必须是一个对象，且对象中必须拥有next方法，该next每次被调用，
    就会返回一个新对象{done: false, calue: x}

4. 拥有迭代器属性的数据结构才可以被 for - of 遍历

5. for of 遍历的其实是某结构上的迭代器对象


# for of 的实现原理
