//获取白底容器和彩色容器
var speed = document.querySelector('.speed')
var speedbar = document.querySelector('.speedBar')
var video = document.querySelector('.video')
//在白色容器上监听鼠标的移动
//获取到鼠标移动的距离
//根据鼠标移动的距离来设计彩色容器的高度
speed.addEventListener('mousemove',function(e) {
    console.log(e.pageY);//鼠标Y轴坐标
    var y = e.pageY - speed.getBoundingClientRect().top//.offsetTop获取到浏览器顶部的距离
    var percent = y / speed.offsetHeight
    var height = Math.round(percent*100) + '%' //四舍五入
    //console.log(y);
    //用js修改speedbar容器高度
    speedbar.style.height = height
    var min = 0.4
    var max = 4
    var playSpeed = percent*(max-min) + min

    console.log(playSpeed);

    speedbar.textContent = playSpeed.toFixed(2) + 'x'
    video.playbackRate = playSpeed
})

//console.log(speed)