const arr = [1,2,[3,4[5]]]

function flatten(arr) {
    arr.reduce((pre,item) => {
        return pre.concat(Array.isArray(item) ? flatten(item) : item)
    },[])
}