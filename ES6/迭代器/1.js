const colors = ['red','green','blue','pink']

/*
for(var i = 0;i < colors.length;i++){
    // console.log(colors[i]);
    for(var j = i + 1;j < colors.length;j++){
        if(colors[j] === colors[i])break;
    }
    
}
*/

for(let item of colors) {
    console.log(item);
}

