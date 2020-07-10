//////////////// DYNAMICALLY CREATING PROGRESS BAR LINKS //////////////////////

const caseStudyTitle = document.getElementsByTagName('h4');

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
