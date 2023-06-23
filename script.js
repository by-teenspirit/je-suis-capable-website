// Pour le card slider

const carousel = document.querySelector(".caroussel");
const arrowBtns = document.querySelectorAll(".wrapper .icon img");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false,
    startX, startScrollLeft;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insérer des copies des dernières cartes au début du carousel pour le scroll infini
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll le caroussel à droite et à gauche avec les boutons
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});
 // Fonction drag sur les images
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return; // si false, recommencer ici
    // on update la position du scroll en fonction du mouvement du curseur
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // Si le caroussel est au début, scroll à la fin
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // Si la caroussel est à la fin, scroll au début
    else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
 

// Pour le caroussel
const cards = Array.from(document.querySelectorAll('.card-container'));
const nav = document.querySelector('.nav');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentPosition = 0;

// Aller à la carte suivante
function nextCard() {
    currentPosition++;
    if (currentPosition > cards.length - 1) {
        currentPosition = 0;
    }
    updatePosition();
}

// Aller à la carte précédente
function prevCard() {
    currentPosition--;
    if (currentPosition < 0) {
        currentPosition = cards.length - 1;
    }
    updatePosition();
}
prevBtn.addEventListener('click', prevCard);
nextBtn.addEventListener('click', nextCard);

// Pour que les flèches et le menu en-dessous se suivent

const slider = document.querySelector('.works-slider');
const leftArrow = document.querySelector('.prev-works');
const indicatorParents = document.querySelector('.works-carousel ul');
const rightArrow = document.querySelector('.next-works');
var articleIndex = 0;

// Quand on clique sur la flèche, on déplace en même temps le sélecteur sur le menu 
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

// SWITCH MODE
 // function to set a given theme/color-scheme
 function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = true;
    }
})();

function changeImage() {
    var image = document.getElementById('myImage');
    if (localStorage.getItem('theme') === 'theme-dark') {
        image.src = "assets/img/assedea-white.png";
    } else {
        image.src = "assets/img/assedea-black.png";
    }
}

// SCROLL REVEAL
ScrollReveal().reveal('.header', { duration: 2000 });

ScrollReveal().reveal(".scaleUp", {
    duration: 4000,
    scale: 0.85
  });
  
ScrollReveal().reveal(".slide-right", {
    duration: 2000,
    origin: "left",
    distance: "300px",
    easing: "ease-in-out"
  });

  ScrollReveal().reveal(".slide-left", {
    duration: 2000,
    origin: "right",
    distance: "300px",
    easing: "ease-in-out"
  });