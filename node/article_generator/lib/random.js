export function randomInt(min, max) {
    const n = Math.random()
    return Math.floor(min * (1 - n) + max * n)
}

// let lastPicked = null // 不优雅
// export function randomPick(arr) {
//     let picked = null
//     do {
//         const index = randomInt(0, arr.length)
//         picked = arr[index]
//     } while (picked === lastPicked)
//     lastPicked = picked
//     return picked
// }

// export function randomPick(arr) {
//     arr = [...arr]
//     const len = arr.length
//     const index = randomInt(0, arr.length)
//     [arr[index], arr[len]] = [arr[len], arr[index]]
//     return arr[index]
// }

export function createRandomPicker(arr) {
    arr = [...arr]
    function randomPick() {
        const len = arr.length - 1
        const index = randomInt(0, len);
        [arr[index], arr[len]] = [arr[len], arr[index]]
        return arr[index]
    }
    randomPick() // 放弃第一次结果
    return randomPick
}