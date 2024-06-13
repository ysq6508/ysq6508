// console.log(1);
// new Promise((resolve, reject) => {
//   console.log(2);
//   resolve()
// })
// .then(() => {
//   console.log(3);
// })
// .then(() => {
//   console.log(4);
// })
// setTimeout(() => {
//   console.log(5);
// })
// console.log(6);

console.log(1);
new Promise((resolve, reject) => {
    console.log(2);
    resolve()
  })
  .then(() => {
    console.log(3);         
    setTimeout(() => {
      console.log(4);
    })
  })
  setTimeout(() => {
    console.log(5);
    setTimeout(() => {
      console.log(6);
    })
  })
