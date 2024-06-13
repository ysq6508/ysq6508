console.log('script start');

async function async1() {
  await async2()    // await会将后续的代码阻塞进微任务队列
  console.log('async1 end');
}
async function async2() {
  console.log('async2 end');
}
async1()
setTimeout(function() {
  console.log('setTimeout');
}, 0)
new Promise(function(resolve, reject) {
  console.log('promise');
  resolve()
})
.then(() => {
  console.log('then1');
})
.then(() => {
  console.log('then2');
})
console.log('script end');