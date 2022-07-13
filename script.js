
let rectPlace = document.querySelector('.rects__place');
let rectAddBtn = document.querySelector('.rectAdd');
let rectRemBtn = document.querySelector('.rectRem');
let customRectBtn = document.querySelector('.customRect');
let clearRectsBtn = document.querySelector('.rectClear');
let changeBg = document.querySelector('.changeBg');
let colorRectBtn = document.querySelector('.rectColor');
let move = false;
let offsetX, offsetY;
let curentRect;

let colors = ['green', 'blue', 'orange','gold','red','pink','aqua','lime'];

rectAddBtn.addEventListener('click', function (e) {
    let div = document.createElement('div');
    div.classList.add('rect');
    rectPlace.append(div); 
});

colorRectBtn.addEventListener('click', function (e) {
    let div = document.createElement('div');
    let randomColor = Math.floor(Math.random()*colors.length);
    div.classList.add('rect');
    rectPlace.append(div);
    div.style.borderColor = colors[randomColor];
});

customRectBtn.addEventListener('click', function(e) {
    let size = prompt('Enter a size of rect');
    let div = document.createElement('div');
    let randomColor = Math.floor(Math.random()*colors.length);
    div.classList.add('rect');
    rectPlace.append(div);
    div.style.borderColor = colors[randomColor];
    div.style.width = size + 'px';
    div.style.height = size + 'px';
});

rectRemBtn.addEventListener('click', function(e){
    let lastElem = document.querySelector('.rect:last-child');
    rectPlace.removeChild(lastElem);
});

clearRectsBtn.addEventListener('click', function(e) {
    let conf = confirm('Remove all rets ?');
    if (conf) {
        while(rectPlace.firstChild) {
            rectPlace.removeChild(rectPlace.firstChild);
        }
    }     
});

changeBg.addEventListener('click', function(e){
    let bgColor = prompt('Enter color');
    let body = document.querySelector('.wrapper');
    body.style.background = bgColor;
});
rectPlace.addEventListener('mousedown', function (e) {
    move = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    curentRect = e.target;
});

document.addEventListener('mousemove', function (e) {
    if(move) {
        curentRect.style.top = e.clientY - offsetY + 'px';
        curentRect.style.left = e.clientX - offsetX + 'px';
    }
});

document.addEventListener('mouseup',  function(e){
    move = false;
});

