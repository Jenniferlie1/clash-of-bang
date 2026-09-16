const troopCards = Array.from(document.querySelectorAll('.popular-troops .troop-card'));
let troopPositions = ['active', 'next', 'prev']; 

function rotateTroops(){
    troopPositions.unshift(troopPositions.pop());
    
    troopCards.forEach((card, index) => {
        card.className = `troop-card ${troopPositions[index]}`;
    });
}

setInterval(rotateTroops, 3000);

const updateCards = document.querySelectorAll('.latest-updates .update-card');
const dots = document.querySelectorAll('.dot');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 2; 
const totalUpdates = updateCards.length;

function updateManualCarousel(){
    updateCards.forEach((card, index) => {
        card.className = 'update-card hidden';
        dots[index].classList.remove('active');
    });

    let prevIndex = (currentIndex - 1 + totalUpdates) % totalUpdates;
    let nextIndex = (currentIndex + 1) % totalUpdates;

    updateCards[currentIndex].className = 'update-card active';
    updateCards[prevIndex].className = 'update-card prev';
    updateCards[nextIndex].className = 'update-card next';
    
    dots[currentIndex].classList.add('active');
}

if(rightArrow && leftArrow){
    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalUpdates;
        updateManualCarousel();
    });

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalUpdates) % totalUpdates;
        updateManualCarousel();
    });
}

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navActions = document.getElementById('nav-actions');

if (hamburger){
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navActions.classList.toggle('active');
    });
}