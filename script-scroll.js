// ------для плавной прокрутки------

let scr = document.querySelector('.scroll');
let content = document.querySelector('.content');

window.onscroll = function () {
    if (window.pageYOffset > 300) {
        scr.classList.add('scroll-2');
    }
    else {
        scr.classList.remove('scroll-2');
    }
}

scr.onclick = function () {
    content.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })

}