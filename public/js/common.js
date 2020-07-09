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


//////////////////// PROJECT PROGRESS BAR ///////////////////////////

const distanceArray = [];
const differenceArray = [];
const previousPercentageArray = [];

const caseStudyTitle = document.getElementsByTagName('h4');
const progressStep = document.getElementsByClassName('progress-step');
const progressStepLabel = document.getElementsByClassName('progress-step-label')

for (var i = 0; i < caseStudyTitle.length; i ++) {
    function offset(el) {
        const elRect = el.getBoundingClientRect(),
        scrollT = window.pageYOffset || document.documentElement.scrollTop;
        return { top: elRect.top + scrollT }
    }
    const progressStepOffset = offset(caseStudyTitle[i]);

    distanceArray.push(progressStepOffset.top);
    if (i < caseStudyTitle.length - 1) {
        const progressStepOffsetPlus = offset(caseStudyTitle[i+1]);
        differenceArray.push(progressStepOffsetPlus.top - progressStepOffset.top);
    }
}  

const totalDifferenceArray = differenceArray.reduce((a, b) => a + b);

for (var m = 1; m < differenceArray.length; m ++) {
    // percentage is the %distance between this and the previous header
    // const percentage = differenceArray[m]/totalDifferenceArray*100;
    // for all of n is equal to m, n is greater than 0
    for (var n = m; n > 0; n --) {
        // add new numbers into the previous percentage array
        // push all of the percentage values
        previousPercentageArray.push(differenceArray[m - n]/totalDifferenceArray*100);
    
    }

    // if (sixHundredMode == true) {
    //     progressStepLabel[m].style.top = 0;
    //     progressStepLabel[m].style.left = previousPercentageArray.reduce((a, b) => a + b) + "%";
    // } else {
        progressStepLabel[m].style.top = previousPercentageArray.reduce((a, b) => a + b) + "%";
        // progressStepLabel[m].style.left = 0;
    // }

    previousPercentageArray.length = 0;
}



window.onscroll = function () {
    for (var j = 0; j < caseStudyTitle.length; j ++) {
        if ((window.scrollY + 100 > distanceArray[j]) && (window.scrollY + 100 < distanceArray[j + 1])) {
            progressStep[j].style.backgroundColor = "white";
            progressStep[j].style.transform = "scale(1.5)";
            progressStepLabel[j].style.fontWeight = "700";
            for (var k = 0; k < caseStudyTitle.length; k ++) {
                if ((k !== j) && (progressStep[k] !== undefined)) {
                    progressStep[k].style.transform = "scale(1)";
                    progressStep[k].style.backgroundColor = "#ffdd44";
                    progressStepLabel[k].style.fontWeight = "400";
                }
            }
        }
    }
}

function progressAnchor(n) {
    window.scrollTo(0, distanceArray[n] - 80)
};