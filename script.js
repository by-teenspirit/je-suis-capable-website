const track = document.querySelector('.track');
const cards = Array.from(document.querySelectorAll('.card-container'));
const cardWidth = cards[0].offsetWidth;
const trackWidth = cardWidth * cards.length;
const container = document.querySelector('.carousel-container');
const nav = document.querySelector('.nav');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentPosition = 0;

// Set the width of the track based on the total width of the cards
track.style.width = `${trackWidth}px`;

// Move the track to show the current position
function updatePosition() {
    track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
}

// Move to the next card
function nextCard() {
    currentPosition++;
    if (currentPosition > cards.length - 1) {
        currentPosition = 0;
    }
    updatePosition();
}

// Move to the previous card
function prevCard() {
    currentPosition--;
    if (currentPosition < 0) {
        currentPosition = cards.length - 1;
    }
    updatePosition();
}

// Add event listeners to the prev and next buttons
prevBtn.addEventListener('click', prevCard);
nextBtn.addEventListener('click', nextCard);



// For the second carousel

const slider = document.querySelector('.works-slider');
const leftArrow = document.querySelector('.prev-works');
const indicatorParents = document.querySelector('.works-carousel ul');
const rightArrow = document.querySelector('.next-works');
var articleIndex = 0;

function setIndex() {
    document.querySelector('.works-carousel .selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (articleIndex) * -16.7 + '%)';

}

document.querySelectorAll('.works-carousel li').forEach(function(indicator, ind) {
    indicator.addEventListener('click', function() {
        articleIndex = ind;
        setIndex();
        indicator.classList.add('selected');

    })
})

leftArrow.addEventListener('click', function() {
    articleIndex = (articleIndex > 0) ? articleIndex - 1 : 0;
    indicatorParents.children[articleIndex].classList.add('selected');
    setIndex();
});

rightArrow.addEventListener('click', function() {
    articleIndex = (articleIndex < 5) ? articleIndex + 1 : 5;
    indicatorParents.children[articleIndex].classList.add('selected');
    setIndex();
});