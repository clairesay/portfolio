// SLIDE CARDS

var slideArticle = document.getElementsByClassName('slide-article');
var slideCards = document.getElementsByClassName('slide-cards');
var slideFunctionBaseNumber = 0;


function slideCardFunction(number) {
    var slideCardsDiv = slideCards[number].getElementsByTagName('div');
    var slideWidth = slideCardsDiv[0].clientWidth;
    var next = document.getElementsByClassName('next')[number];
    var previous = document.getElementsByClassName('previous')[number];
        if (slideCards[number].scrollLeft < 50) {
            next.style.opacity = "1";
            next.style.visibility = "visible";
            previous.style.opacity = "0";
            previous.style.visibility = "hidden";
        } else if (slideCards[number].scrollLeft > (slideCardsDiv.length - 1)*slideWidth - 50) {
            next.style.opacity = "0";
            next.style.visibility = "hidden";
            previous.style.opacity = "1";
            previous.style.visibility = "visible";
        } else {
            next.style.opacity = "1";
            next.style.visibility = "visible";
            previous.style.opacity = "1";
            previous.style.visibility = "visible";
        }
}
function slideFunction(n, m) {
    var slideCardsDiv = slideCards[m].getElementsByTagName('div');
    var slideWidth = slideCardsDiv[0].clientWidth;
    slideFunctionBaseNumber += n;
    if (n > 0) {
        slideCards[m].scrollBy((slideWidth - 50), 0);

    } else if (n < 0) {

        slideCards[m].scrollBy((-slideWidth + 50), 0)
    }
}