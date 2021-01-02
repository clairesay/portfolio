const allProjects = document.getElementsByClassName('nav-link')[0];
const hearts = document.getElementsByClassName('nav-link')[3];
const collaborate = document.getElementsByClassName('nav-link')[2];
const conservation = document.getElementsByClassName('nav-link')[4];
const stay = document.getElementsByClassName('nav-link')[5];
const contactMe = document.getElementsByClassName('nav-link')[6];

//checking for the path name
const path = window.location.pathname;
const page = path.split("/").pop();

//highlighting the text to show the current page displayed
if (page.includes('3d-hearts')) {
    hearts.style.fontWeight = "800";
} else if (page.includes('collaborate')) {
    collaborate.style.fontWeight = "800";
} else if (page.includes('conservation')) {
    conservation.style.fontWeight = "800";
} else if (page.includes('stay')) {
    stay.style.fontWeight = "800";
} else if (page.includes('contact-me')) {
    contactMe.style.fontWeight = "800";
}

///////////////////// ALL PROJECTS /////////////////////////
const captionP = document.querySelectorAll('figcaption p');

//////////////////// TOP DROP SHADOW ////////////////////////////
const header = document.getElementsByTagName('header')[0];
const dropDown = document.getElementById('drop-down');

const body = document.getElementsByTagName('div')[0];

window.addEventListener('scroll', function headerShadow() {
    if ((window.scrollY > 5) && (header.classList.contains('white'))) {
        header.style.boxShadow = "0 4px 2px -2px #fafafa"
    } else if ((window.scrollY > 5) && (header.classList.contains('yellow'))) {
        header.style.boxShadow = "0 4px 2px -2px #e7ca4a"
    } else {
        header.style.boxShadow = "0 4px 2px -2px transparent"
    }
})

const addBefore = document.getElementById('add-before');

dropDown.addEventListener('mouseenter', function () {
    addBefore.style.opacity = "1"
})

dropDown.addEventListener('mouseleave', function () {

    addBefore.style.opacity = "0"
})

////////////////////// EMAIL ADDRESS COPYING ///////////////////////////////

var copyTip = document.getElementsByClassName('copy');
var copyText = document.querySelectorAll('.email-address ~ textarea')[0];

function copyTextFunction(n) {

    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand('copy');

    copyTip[n].innerHTML = "Copied"
}

function copyTextEnd(n) {
    setTimeout(
        function() {
            copyTip[n].innerHTML = "Copy"
        } , 200);
}

//////////////////// WINDOW GO ////////////////////

function go(link) {
    window.location.href = link;
}
