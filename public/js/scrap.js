var allSlideCards = document.getElementsByClassName('slide-cards');
var slideCards = document.getElementsByClassName('slide-cards');
var totalSlideCards, slideCardImageWidth, scrollLimit;
var next = document.getElementsByClassName('next');
var previous = document.getElementsByClassName('previous');

for (var s = 0; s < slideCards.length; s ++) {
    //this.set of slide cards
    totalSlideCards = slideCards[s].getElementsByTagName('div');

    slideCardImageWidth = slideCards[s].getElementsByTagName('img')[0].clientWidth;
    scrollLimit = (totalSlideCards.length - 1)*slideCardImageWidth;

    next = document.getElementsByClassName('next')[s];
    previous = document.getElementsByClassName('previous')[s];
    ///// ACCOMMODATE FOR MORE THAN THI
    var slideFunctionBaseNumber = 0;

    slideCards[s].addEventListener('scroll', function () {
        if ((next !== undefined) && (previous !== undefined)) {
            if (this.scrollLeft < 50) {
                previous.style.visibility = "hidden";
                previous.style.opacity = "0";
                console.log('scroll left is less than 50')
            } else if (this.scrollLeft > scrollLimit - 50) {
                next.style.visibility = "hidden";
                next.style.opacity = "0";
                console.log('scroll left is at limit')
            } else {
                previous.style.visibility = "visible";
                previous.style.opacity = "1";
                next.style.visibility = "visible";
                next.style.opacity = "1";
                console.log('we in the middle')
            }
        }
    })
}


function slideFunction(n, m) {
    slideFunctionBaseNumber += n;
    if ((n > 0) && (slideFunctionBaseNumber > 0)) {
        allSlideCards[m].scrollBy(250, 0);
    } else if (n < 0) {
        allSlideCards[m].scrollBy(-200, 0)
    }
}



////////////////////////////////////////////
// ////////////////////////////////////////////////////////// IN CASE IT DOESNT WORK /////////////////
// // SCROLL CARDS
// var totalSlideCards = document.querySelectorAll('.slide-cards div');

// const slideCards = document.getElementsByClassName('slide-cards')[0];
// const slideCardImageWidth = document.querySelectorAll('.slide-cards img')[0].clientWidth;
// var scrollLimit = (totalSlideCards.length - 1)*slideCardImageWidth;


// ///// ACCOMMODATE FOR MORE THAN THIS
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




