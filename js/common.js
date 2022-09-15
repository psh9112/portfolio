$('header').load('./inc.html header .top');
$('footer').load('./inc.html footer .bottom');


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = { x: 0, y: 0, dx: 0, dy: 0, a: 0, r: 50 };
let state = true;
function cursorFn() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = "rgb(128,23,27)";
    ctx.globalAlpha = 0.6;
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
    ctx.fill();

    requestAnimationFrame(cursorFn);

}
cursorFn();

window.addEventListener('mousemove', function (e) {
    c.x = e.clientX + 10;
    c.y = e.clientY;
    state = true;
});

window.addEventListener('mouseover', function (e) {
    if (e.target.tagName == 'A' || e.target.tagName == 'BUTTON' || e.target.tagName == 'IMG') {
        c.r = 50;
    } else {
        c.r = 20;
    }
});


// ================================== loding ==================================
$('aside,main,header').css('opacity','0');
setTimeout(function(){
    $('.loding-motion').fadeOut();
    $('aside,main,header').css('opacity','1');
},1000)


// window.addEventListener('load',function(){
//     $('.loding-motion').fadeOut();
// })

// ================================== loding end ==================================