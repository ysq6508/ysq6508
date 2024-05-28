// 可以创建一个可迭代的对象
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

var iterator = createIterator([1,2,3])  // 函数createIterator执行完被销毁后，其中的i会被闭包留下来

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


var arr = []
arr.iterator = createIterator();

var obj = {}
obj.a = createIterator();