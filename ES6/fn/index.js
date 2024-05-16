function foo(...args) {
    //arguments为一个关键字，用于接受所有参数
    console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }
    console.log(arguments[0]); // 1
    console.log(args); // [ 1, 2, 3 ]
}
foo(1,2,3)

