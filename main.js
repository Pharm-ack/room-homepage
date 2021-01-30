const hambugarBtn = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function togglebtn() {
    navList.classList.toggle('show');
}

hambugarBtn.addEventListener('click', togglebtn)

const closemenu = document.getElementsByClassName('closebtn');

function closeFunction() {
    remove.classList('show');
}

closemenu.addEventListener('click', closeFunction)


var slider_img = document.getElementById('slider');
var images = ['desktop-image-hero-1.jpg', 'desktop-image-hero-2.jpg', 'desktop-image-hero-3.jpg'];
var i = 0;

function prev() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}

function next() {
    if (i >= images.length -1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute('src', 'images/' + images[i]);
}