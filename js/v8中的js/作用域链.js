function bar() {
    console.log(maName);
}

function foo() {
    var myName = 'Tom';
    bar();
}

var myName = 'Jerry';

foo()  // 打印出Jerry