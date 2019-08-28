let html = document.documentElement;
let calcRem = function() {
    let w = html.clientWidth;
    if (w < 320) {
        html.style.fontSize = '10px';
    } else if (w <= 640) {
        html.style.fontSize = w / 32 + 'px';
    } else {
        html.style.fontSize = '20px';
    }
    // console.log('w=' + w + '  fontsize=' + html.style.fontSize);
}
calcRem();
window.onresize = function() {
    calcRem();
}