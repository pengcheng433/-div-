let div = document.createElement('div');
div.className = 'demo'
document.body.appendChild(div);
var flag = false;
var lastx;
var lasty;
div.onmousedown = function (e) {
    var lastx = e.clientX
    var lasty = e.clientY
    console.log(lastx);
    console.log(lasty);
    flag = true;
}
document.body.onmousemove = function (res) {
    if (flag === true) {
        console.log(res.clientX);
        console.log(res.clientY);

        var resultx = res.clientX - lastx;
        var resulty = res.clientY - lasty;

        var top = parseInt(div.style.top) || 0;
        var left = parseInt(div.style.left) || 0;

        var xianzhiy = top + resulty;
        var xianzhix = left + resultx;
        if (xianzhiy < 0) {
            xianzhiy = 0
        }
        if (xianzhix < 0) {
            xianzhix = 0
        }
        console.log("lientWidth")

        console.log(document.body.clientWidth)
        if (xianzhix > document.body.clientWidth) {
            xianzhix = document.body.clientWidth
        }

        div.style.top = xianzhiy + 'px';
        div.style.left = xianzhix + 'px';

        lastx = res.clientX;
        lasty = res.clientY;
    }
}
div.onmouseup = function () {
    flag = false;
}
