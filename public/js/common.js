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