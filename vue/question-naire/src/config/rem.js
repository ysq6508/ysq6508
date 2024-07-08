(function (doc, win) {
    let docEL = doc.documentElement // 根节点(整个html文档)
    let recalc = function () {
        let clientWidth = docEL.clientWidth // 设备宽度
        if (!clientWidth) return
        docEL.style.fontSize = 20 * (clientWidth / 320) + 'px'
    }

    doc.addEventListener('DOMContentLoaded', recalc) // recalc函数在DOM结构加载完成后立即执行
})(document, window)