// let data = null
// function getData() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             data = [1, 2, 3]
//             resolve();
//         }, 1000)
//     })
   
// }
// function another() {
//     console.log(data);
// }

// getData().then(() => {
//     another()
// })

let data = null
function getData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            data = [1, 2, 3]
            resolve();
        }, 1000)
    })
   
}

function another() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            data.push(4)
            resolve()
        }, 1000)
    })   
}

function another2() {
    console.log(data);
}

async function foo() {
    await getData()
    await another()
    another2()
}
foo()