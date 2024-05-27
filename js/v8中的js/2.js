var a = 2

function add(b,c) {
    var b = 10
    return b + c
}

function addAll(b,c) {
    var d = 10
    var res = add(b,c)
    return a + res + d
}

addAll(3,6)