var arr = [1,4,3,6,8,4,0]

function bubbleSort(arr){
    const len = arr.length
    for(let i = 0; i < len;i++){
        for(let j = i + 1;j < len;j++){
            if(arr[i] > arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    console.log(arr);
}
bubbleSort(arr)

