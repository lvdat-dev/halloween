header = document.querySelector('.header');
navbar = document.querySelector('.header__section__navbar');
menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menuBtn.classList.remove('fa-xmark');
    navbar.classList.remove('active');

    if(window.scrollY > 0) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
}

var dateOffset = (24*60*60*1000) * 2; //2days

let countDownDate = new Date().getTime() + dateOffset;

function countDown() {
    let now = new Date().getTime();
    let gap = countDownDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(() => {
    countDown();
}, 1000);