const allProjects = document.getElementsByClassName('nav-link')[0];
const contactMe = document.getElementsByClassName('nav-link')[1];

//checking for the path name
const path = window.location.pathname;
const page = path.split("/").pop();

//highlighting the text to show the current page displayed
if (page.includes('all-projects')) {
    allProjects.style.fontWeight = "800";
} else if (page.includes('contact-me')) {
    contactMe.style.fontWeight = "800";
}

///////////////////// ALL PROJECTS /////////////////////////
const captionP = document.querySelectorAll('figcaption p');

//////////////////// TOP DROP SHADOW ////////////////////////////
const header = document.getElementsByTagName('header')[0];
const dropDown = document.getElementById('drop-down');
// const allProjects = document.getElementsByClassName('nav-link')[0];
const body = document.getElementsByTagName('div')[0];

window.addEventListener('scroll', function headerShadow() {
    if ((window.scrollY > 5) && (header.classList.contains('white'))) {
        header.style.boxShadow = "0 4px 2px -2px #e7e7e7"
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


// if (dropDown.classList.contains('white')) {
//     dropDown.style.boxShadow = "0 0px 5px #e7e7e7"

// } else if (dropDown.classList.contains('yellow')) {
//     dropDown.style.boxShadow = "0 0px 5px #e7ca4a"

// }

////////////////// MEDIA QUERY SET ////////////////////////////
// var sixHundredMode;
// function mediaQueryChecker(x) {
//     if (x.matches) { // If media query matches
//       document.body.style.backgroundColor = "yellow";
//       sixHundredMode = true;
//     } else {
//       document.body.style.backgroundColor = "pink";
//       sixHundredMode = false;
//     }
//     console.log(sixHundredMode);
// }
  
// const mediaSixHundred = window.matchMedia("(max-width: 600px)");
// mediaQueryChecker(mediaSixHundred); // Call listener function at run time
// mediaSixHundred.addListener(mediaQueryChecker); // Attach listener function on state changes

////////////////////// EMAIL ADDRESS COPYING ///////////////////////////////

const emailAddress = document.getElementsByClassName('email-address')[0];
const copyTip = document.getElementsByClassName('copy')[0];
const copyText = document.querySelectorAll('.email-address ~ textarea')[0];

emailAddress.addEventListener('click', function () {

    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand('copy');

    copyTip.innerHTML = "Copied"
})

emailAddress.addEventListener('mouseout', function() {
    setTimeout(function() {
        copyTip.innerHTML = "Copy"
    }, 200)
})
