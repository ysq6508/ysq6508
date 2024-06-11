function add(a,b) {
    if(arguments.length < 2){
        console.log('参数数量不够喔');
        return;
    }
    if(typeof a !== 'number' || typeof b !== 'number'){
        console.log('error');
        return;
    }
    return a+b;
}

console.log(add(1,2));