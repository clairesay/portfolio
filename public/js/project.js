//////////////// DYNAMICALLY CREATING PROGRESS BAR LINKS //////////////////////

const caseStudyTitle = document.getElementsByTagName('h2');

for (var h = 0; h < caseStudyTitle.length - 1; h ++) {
    const progressBar = document.getElementById('progress-bar');
    
    const initProgressStepLabel = document.createElement('a')
    initProgressStepLabel.setAttribute('class', 'progress-step-label');
    initProgressStepLabel.setAttribute('onclick', 'progressAnchor(' + h + ')');

    const initProgressStep = document.createElement('div');
    initProgressStep.setAttribute('class', 'progress-step');
    
    const initProgressStepLabelText = document.createElement('p');
    initProgressStepLabelText.innerHTML = caseStudyTitle[h].innerHTML;


    initProgressStepLabel.appendChild(initProgressStep);
    initProgressStepLabel.appendChild(initProgressStepLabelText);
    progressBar.appendChild(initProgressStepLabel);
}


document.getElementsByClassName('progress-step-label')[0].style.top = '-0.75em';


//////////////////// PROJECT PROGRESS BAR ///////////////////////////

const distanceArray = [];
const differenceArray = [];
const previousPercentageArray = [];


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
        if ((window.scrollY + 100 > distanceArray[j]) && (window.scrollY + 75 < distanceArray[j + 1])) {
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

// else if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
//     progressStep[caseStudyTitle.length].style.backgroundColor = "white";
//     progressStep[caseStudyTitle.length].style.transform = "scale(1.5)";
//     progressStepLabel[caseStudyTitle.length].style.fontWeight = "700";
//     for (var k = 0; k < caseStudyTitle.length; k ++) {
//         if ((k !== j) && (progressStep[k] !== undefined)) {
//             progressStep[k].style.transform = "scale(1)";
//             progressStep[k].style.backgroundColor = "#ffdd44";
//             progressStepLabel[k].style.fontWeight = "400";
//         }
//     }
// }

// /////////////////////////////// RESTORE THIS ////////////////////////////////////////

// var totalSlideCards = document.querySelectorAll('.slide-cards div');


// const slideCards = document.getElementsByClassName('slide-cards')[0];
// const slideCardImageWidth = document.querySelectorAll('.slide-cards img')[0].clientWidth;
// var scrollLimit = (totalSlideCards.length - 1)*slideCardImageWidth;

// var next = document.getElementById('next');
// var previous = document.getElementById('previous');

// var slideFunctionBaseNumber = 0;
// previous.style.visibility = "hidden";

// slideCards.addEventListener('scroll', function () {
//     if (slideCards.scrollLeft < 50) {
//         previous.style.visibility = "hidden";
//         previous.style.opacity = "0";
//     } else if (slideCards.scrollLeft > scrollLimit - 50) {
//         next.style.visibility = "hidden";
//         next.style.opacity = "0";
//     } else {
//         previous.style.visibility = "visible";
//         previous.style.opacity = "1";
//         next.style.visibility = "visible";
//         next.style.opacity = "1";
//     }
// }) 

// function slideFunction(n) {
//     slideFunctionBaseNumber += n;
//     if (n > 0) {
//         slideCards.scrollBy(200, 0);
//     } else if (n < 0) {
//         slideCards.scrollBy(-200, 0)
//     }
// }

// //////////////////////////// RESTORE THIS //////////////////////////////////


// ///////////// IMAGE ZOOM IN /////////////////////////
const allImages = document.querySelectorAll('img.zoom');
const modal = document.getElementById('modal');
const modalImage = document.querySelectorAll('#modal img')[0];
const modalButton = document.querySelectorAll('#modal button')[0];

var modalToggle = false;
var zoomToggle;

// listen for all the images with class zoom
//if clicked, display image modal enabling zoom in
for (var p = 0; p < allImages.length; p++) {
    allImages[p].addEventListener('click', function () {
        modal.style.visibility = "visible";
        modal.style.opacity = "1";
        modalImage.style.opacity = "1";
        modalButton.style.opacity = "1";
        modalImage.setAttribute('src', this.src);

        document.getElementsByTagName('body')[0].style.overflow = "hidden";

        buttonPosition();

        modalToggle = true;
        zoomToggle = localStorage.setItem('zoomToggle', 'false')
        modalImage.style.cursor = "zoom-in"
    })
}

window.addEventListener('resize', function() {
        modalImage.style.left = '';
        modalImage.style.maxWidth = 80 + 'vw';
        modalImage.style.maxHeight = 80 + 'vh';
        buttonStyle('off');
        buttonPosition();
        modalImage.style.cursor = "zoom-in"
        zoomToggle = localStorage.setItem('zoomToggle', 'false');
})

modal.addEventListener('click', function(event) {
        // general view (zoomed out)
        if (localStorage.getItem('zoomToggle') === 'true') {
            modalImage.style.maxWidth = 80 + 'vw';
            modalImage.style.maxHeight = 80 + 'vh';
            buttonStyle('off');
            buttonPosition();
        }

        var isClickInside = modalImage.contains(event.target);

        // if user clicks outside the modalImage
        if ((!isClickInside) && (window.getComputedStyle(modal).visibility === "visible") && (modalToggle = true)) {
            
            document.getElementsByTagName('body')[0].style.overflow = "auto";

            modal.style.visibility = "hidden";
            modal.style.opacity = "0";
            modalImage.style.opacity = "0";
            modalButton.style.opacity = "0"

            modalImage.setAttribute('src', '')
            modalToggle = false;

            modalImage.style.left = '';
            buttonStyle('off');
            zoomToggle = localStorage.setItem('zoomToggle', 'false');
            modalImage.style.cursor = "zoom-in"

        // else if user clicks inside the modalImage and the image is zoomed out
        } else if ((isClickInside) && (localStorage.getItem('zoomToggle') === 'false')) {
            
            buttonPosition('special');
            buttonStyle('on');

            modalImage.style.maxWidth = modalImage.naturalWidth + 'px';
            modalImage.style.maxHeight = 100 + '%';
            modalImage.style.cursor = "zoom-out"

            // BUTTONS

            if (modalImage.clientWidth > window.innerWidth) {
                modalImage.style.left = '0';
            }

            zoomToggle = localStorage.setItem('zoomToggle', 'true');

        //else if user clicks inside the modalImage and the image is zoomed in
        } else if ((isClickInside) && (localStorage.getItem('zoomToggle') === 'true')) {
            modalImage.style.maxWidth = '80vw';
            modalImage.style.maxHeight = '80vh';
            modalImage.style.left = '';

            buttonPosition();

            zoomToggle = localStorage.setItem('zoomToggle', 'false');
            buttonStyle('off');
            modalImage.style.cursor = "zoom-in"
        }
});

// Setting the style for the buttons
function buttonStyle(state) {
    if (state == 'on') {
        modalButton.style.backgroundColor = '#555555';
        modalButton.style.border = '2px solid white';
        modalButton.style.color = "white";
        modalImage.setAttribute('class','in')
        modalImage.removeAttribute('class', 'out')

    } else if (state == 'off'){
        modalButton.style.backgroundColor = 'transparent';
        modalButton.style.border = 'none';
        modalButton.style.color = 'white';
        buttonPosition();
        modalImage.setAttribute('class','out')
        modalImage.removeAttribute('class', 'in')
    }
}

// Setting the position of the button 
function buttonPosition(state) {
    var buttonTop = (window.innerHeight - modalImage.clientHeight)/2;
    var buttonRight = (window.innerWidth - modalImage.clientWidth)/2;
    modalButton.style.top = 'calc(' + buttonTop + 'px - 2.5em)';
    modalButton.style.right = 'calc(' + buttonRight + 'px - 1em)';

    if (state == 'special') {
        console.log('yes')
        modalButton.style.top = 15 + 'px';
        modalButton.style.right = 15 + 'px';

    }
}





