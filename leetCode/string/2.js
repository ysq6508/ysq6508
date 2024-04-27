//判断一个字符串是不是回文

let str = 'abababa'

function isPalindrome(str){
    let arr = str.split('').reverse() //字符串以''为界切割转为数组再反转
    //数组再反转成字符串
    if(str.split('').join('') === arr.join('')){
        return true
    }
}

console.log(isPalindrome(str));