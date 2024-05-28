
function createIterator(items) {
    var i = 0;
    return {
        next: function() {
            var done = i >= items.length;
            var value = !done ? items[i++] : undefined

            return {
                done:done,
                value:value
            }
         }
    }
}
/*

var iterator = createIterator([1,2,3])  // 函数createIterator执行完被销毁后，其中的i会被闭包留下来

for(let value of iterator){
    console.log(value); // 报错
}

*/

/*

const obj = {
    value: 1
}

obj[Symbol.iterator] = function() {
    return createIterator([1,2,3])
}

for(let value of obj) {                 // 对象里没有Symbol.iterator的属性，所以迭代没有意义
    console.log(value); 
}  // 1 2 3

*/

