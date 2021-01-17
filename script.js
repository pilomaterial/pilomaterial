let boxes = document.querySelectorAll('.min');
let pop_up = document.querySelector('.pop-up');
let big = document.querySelector('.big');


for (let min of boxes) {

    function popActive() {
        pop_up.classList.add('pop-up-activ');


        let img = document.createElement('img');
        img.className = "img-image";
        big.append(img);
        img.src = min.src;

    }

    function popClose() {
        pop_up.classList.remove('pop-up-activ');
        let img = document.querySelector('.img-image');

        img.remove(img);
    }

    min.onclick = popActive;
    pop_up.onclick = popClose;
}



