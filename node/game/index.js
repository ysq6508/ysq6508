// - 408  冯诺依曼
// - 获得用户的输入
// 后端的进程对象 process 程序运行的最小单元
// 运行任何一个程序都要有一个依赖冯诺依曼计算设备的process对象 
// 访问这个进程上的输入设备， on data 监听输入事件， enter 完成输入
// buffer 缓冲区 二进制流

/*
* @func 根据用户输入，输出赢或输
* @return win/lose
*/
const game = (action) => {
    const arr = ['rock', 'paper', 'scissors'];
    // 有输入，就要有输入校验
    if(arr.indexOf(action) === -1) {
        throw new Error('用户输入错误');
    }

    let computerAction;
    let random = Math.floor(Math.random() * 3) // [0,3)向下取整
    computerAction = arr[random];
    console.log('电脑出了' + computerAction);
    if (computerAction == action) {
        console.log('平局')
        return 0; // 平局
    } else if ( 
        (computerAction == 'rock' && action == 'scissors') ||
        (computerAction == 'scissors' && action == 'paper') || 
        (computerAction == 'paper' && action == 'rock')
    ) {
        console.log('你输了')
        return -1;
    } else {
        console.log('你赢了');
        return 1;
     }
}

let winCount = 0;

process.stdin.on('data', (buffer) => {   // stdin 标准输入 .on 监听事件
    // 存储和通信的底层是二进制
    // console.log(buffer);  // <Buffer 70 61 70 65 72 0d 0a>
    const action = buffer.toString().trim(); // trim() 去除首尾空格,因为有回车键
    // console.log(action, '------');

    // 独立的随机出拳业务 => 把它封装成函数
    // 接收用户的输入，直接输出结果
    const result = game(action)
    if(result == 1){
        winCount++;
        if(winCount == 3){
            console.log('不玩了');
            process.exit(0); // 退出进程
        }
    }
})  
