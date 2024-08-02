let obj = {
    a: 1,
    b: 'b',
    c: true,
    d: undefined,
    e: null,
    f: Symbol(1),
    g: 123n,
    h: {
        n: 10
    }
}
obj.h.n = obj.h

