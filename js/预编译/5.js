function test(a, b) {
    console.log(a);  // 1
    c = 0
    var c;
    a = 3
    b = 2
    console.log(b); // 2
    function b() {}
    console.log(b); // 2
}
test(1)