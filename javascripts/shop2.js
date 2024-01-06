//window risize
window.onresize = function () {
    location.reload();
}

//owl carousel
$(".carousel").owlCarousel({
    margin: 0,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 3,
            nav: true
        },
        600: {
            items: 4,
            nav: true
        },
        700: {
            items: 5,
            nav: true
        },
        1000: {
            items: 5,
            nav: true
        }
    }
});



//shoe color change
let sheo = document.querySelector('#sheochange');

//active
const sheos = document.querySelectorAll(".sheos");


function sheoColorChange(img, num) {
    sheo.src = img;

    var current = document.getElementsByClassName('sheoActive');

    current[0].className = current[0].className.replace(" sheoActive", "");

    sheos[num].className += " sheoActive";

}



//menu bar

let menu = document.querySelector('.fa-bars');
let menubar = document.querySelector('.menu-bar');
let a = true;
menu.addEventListener("click", () => {

    if (a == true) {
        menubar.style.height = "180px";
        menu.classList.replace("fa-bars", "fa-remove");
        a = false;
    } else {
        menubar.style.height = "0px";
        menu.classList.replace("fa-remove", "fa-bars");
        a = true;
    }

});

//side menu bar
let menubarside = document.querySelector('.menu-bar-side');
let b = true;
menubarside.addEventListener("click", () => {

    if (b == true) {
        menubarside.style.left = "0%";
        b = false;
    } else {
        menubarside.style.left = "-162px";
        b = true;
    }

});