import difficulties from '../data/difficulties.js';
import ancientsData from '../data/ancients.js';
import blueCards from '../data/mythicCards/blue/index.js';
import brownCards from '../data/mythicCards/brown/index.js';
import greenCards from '../data/mythicCards/green/index.js';
import blueLowCards from '../data/mythicCards/blue/blue_low.js';
import brownLowCards from '../data/mythicCards/brown/brown_low.js';
import greenLowCards from '../data/mythicCards/green/green_low.js';


const azathoth = document.querySelector('.azathoth');
const cthulthu = document.querySelector('.cthulthu');
const logSothoth = document.querySelector('.log-sothoth');
const shubNiggurath = document.querySelector('.shub-niggurath');

const levels = document.querySelector('.levels');

// Ancients cards
azathoth.addEventListener('click', () => {
    azathoth.classList.add('border');

    azathoth.style.transform = `scale(1.15)`;
    cthulthu.style.width = `0`;
    cthulthu.style.margin = `0`;
    logSothoth.style.width = `0`;
    logSothoth.style.margin = `0`;
    shubNiggurath.style.width = `0`;
    shubNiggurath.style.margin = `0`;

    levels.style.visibility = `visible`;
    getNumberDots();
  });

cthulthu.addEventListener('click', () => {

    cthulthu.classList.add('border');
    
    cthulthu.style.transform = `scale(1.15)`;
    azathoth.style.width = `0`;
    azathoth.style.margin = `0`;
    logSothoth.style.width = `0`;
    logSothoth.style.margin = `0`;
    shubNiggurath.style.width = `0`;
    shubNiggurath.style.margin = `0`;
    
    levels.style.visibility = `visible`;
    getNumberDots();
});

logSothoth.addEventListener('click', () => {

    logSothoth.classList.add('border');

    logSothoth.style.transform = `scale(1.15)`;
    azathoth.style.width = `0`;
    azathoth.style.margin = `0`;
    cthulthu.style.width = `0`;
    cthulthu.style.margin = `0`;
    shubNiggurath.style.width = `0`;
    shubNiggurath.style.margin = `0`;
    
    levels.style.visibility = `visible`;
    getNumberDots();
});

shubNiggurath.addEventListener('click', () => {
    
    shubNiggurath.classList.add('border');

    shubNiggurath.style.transform = `scale(1.15)`;
    azathoth.style.width = `0`;
    azathoth.style.margin = `0`;
    cthulthu.style.width = `0`;
    cthulthu.style.margin = `0`;
    logSothoth.style.width = `0`;
    logSothoth.style.margin = `0`;
    
    levels.style.visibility = `visible`;
    getNumberDots();
});

// Level buttons
const veryLowBtn = document.querySelector('.very-low');
const lowBtn = document.querySelector('.low');
const middleBtn = document.querySelector('.middle');
const highBtn = document.querySelector('.high');
const veryHighBtn = document.querySelector('.very-high');

const shuffle = document.querySelector('.shuffle');

const deckPlace = document.querySelector('.deck-container'); 

veryLowBtn.addEventListener('click', () => {
    veryLowBtn.classList.add('border');
    lowBtn.classList.remove('border');
    middleBtn.classList.remove('border');
    highBtn.classList.remove('border');
    veryHighBtn.classList.remove('border');

    shuffle.style.visibility = `visible`;
    deck.style.visibility = `hidden`;
    dotsContainer.style.visibility = `hidden`;
    lastCard.style.visibility = `hidden`;
  });

lowBtn.addEventListener('click', () => {
    veryLowBtn.classList.remove('border');
    lowBtn.classList.add('border');
    middleBtn.classList.remove('border');
    highBtn.classList.remove('border');
    veryHighBtn.classList.remove('border');

    shuffle.style.visibility = `visible`;
    deck.style.visibility = `hidden`;
    dotsContainer.style.visibility = `hidden`;
    lastCard.style.visibility = `hidden`;
});

middleBtn.addEventListener('click', () => {
    veryLowBtn.classList.remove('border');
    lowBtn.classList.remove('border');
    middleBtn.classList.add('border');
    highBtn.classList.remove('border');
    veryHighBtn.classList.remove('border');

    shuffle.style.visibility = `visible`;
    deck.style.visibility = `hidden`;
    dotsContainer.style.visibility = `hidden`;
    lastCard.style.visibility = `hidden`;
});

highBtn.addEventListener('click', () => {
    veryLowBtn.classList.remove('border');
    lowBtn.classList.remove('border');
    middleBtn.classList.remove('border');
    highBtn.classList.add('border');
    veryHighBtn.classList.remove('border');

    shuffle.style.visibility = `visible`;
    deck.style.visibility = `hidden`;
    dotsContainer.style.visibility = `hidden`;
    lastCard.style.visibility = `hidden`;
});

veryHighBtn.addEventListener('click', () => {
    veryLowBtn.classList.remove('border');
    lowBtn.classList.remove('border');
    middleBtn.classList.remove('border');
    highBtn.classList.remove('border');
    veryHighBtn.classList.add('border');

    shuffle.style.visibility = `visible`;
    deck.style.visibility = `hidden`;
    dotsContainer.style.visibility = `hidden`;
    lastCard.style.visibility = `hidden`;
});


function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const  firstGreenDot  = document.querySelector('.first-green');
const  firstBrownDot  = document.querySelector('.first-brown');
const  firstBlueDot  = document.querySelector('.first-blue');
const  secondGreenDot  = document.querySelector('.second-green');
const  secondBrownDot  = document.querySelector('.second-brown');
const  secondBlueDot  = document.querySelector('.second-blue');
const  thirdGreenDot  = document.querySelector('.third-green');
const  thirdBrownDot  = document.querySelector('.third-brown');
const  thirdBlueDot  = document.querySelector('.third-blue');

function getNumberDots () {

    if (azathoth.classList.contains('border') === true) {
        firstGreenDot.textContent = `${ancientsData[0].firstStage.greenCards}`;
        firstBrownDot.textContent = `${ancientsData[0].firstStage.brownCards}`;
        firstBlueDot.textContent = `${ancientsData[0].firstStage.blueCards}`;
        secondGreenDot.textContent = `${ancientsData[0].secondStage.greenCards}`;
        secondBrownDot.textContent = `${ancientsData[0].secondStage.brownCards}`;
        secondBlueDot.textContent = `${ancientsData[0].secondStage.blueCards}`;
        thirdGreenDot.textContent = `${ancientsData[0].thirdStage.greenCards}`;
        thirdBrownDot.textContent = `${ancientsData[0].thirdStage.brownCards}`;
        thirdBlueDot.textContent = `${ancientsData[0].thirdStage.blueCards}`;
    } else if (cthulthu.classList.contains('border') === true) {
        firstGreenDot.textContent = `${ancientsData[1].firstStage.greenCards}`;
        firstBrownDot.textContent = `${ancientsData[1].firstStage.brownCards}`;
        firstBlueDot.textContent = `${ancientsData[1].firstStage.blueCards}`;
        secondGreenDot.textContent = `${ancientsData[1].secondStage.greenCards}`;
        secondBrownDot.textContent = `${ancientsData[1].secondStage.brownCards}`;
        secondBlueDot.textContent = `${ancientsData[1].secondStage.blueCards}`;
        thirdGreenDot.textContent = `${ancientsData[1].thirdStage.greenCards}`;
        thirdBrownDot.textContent = `${ancientsData[1].thirdStage.brownCards}`;
        thirdBlueDot.textContent = `${ancientsData[1].thirdStage.blueCards}`;
    } else if (logSothoth.classList.contains('border') === true) {
        firstGreenDot.textContent = `${ancientsData[2].firstStage.greenCards}`;
        firstBrownDot.textContent = `${ancientsData[2].firstStage.brownCards}`;
        firstBlueDot.textContent = `${ancientsData[2].firstStage.blueCards}`;
        secondGreenDot.textContent = `${ancientsData[2].secondStage.greenCards}`;
        secondBrownDot.textContent = `${ancientsData[2].secondStage.brownCards}`;
        secondBlueDot.textContent = `${ancientsData[2].secondStage.blueCards}`;
        thirdGreenDot.textContent = `${ancientsData[2].thirdStage.greenCards}`;
        thirdBrownDot.textContent = `${ancientsData[2].thirdStage.brownCards}`;
        thirdBlueDot.textContent = `${ancientsData[2].thirdStage.blueCards}`;
    } else if (shubNiggurath.classList.contains('border') === true) {
        firstGreenDot.textContent = `${ancientsData[3].firstStage.greenCards}`;
        firstBrownDot.textContent = `${ancientsData[3].firstStage.brownCards}`;
        firstBlueDot.textContent = `${ancientsData[3].firstStage.blueCards}`;
        secondGreenDot.textContent = `${ancientsData[3].secondStage.greenCards}`;
        secondBrownDot.textContent = `${ancientsData[3].secondStage.brownCards}`;
        secondBlueDot.textContent = `${ancientsData[3].secondStage.blueCards}`;
        thirdGreenDot.textContent = `${ancientsData[3].thirdStage.greenCards}`;
        thirdBrownDot.textContent = `${ancientsData[3].thirdStage.brownCards}`;
        thirdBlueDot.textContent = `${ancientsData[3].thirdStage.blueCards}`;
    }

}

getNumberDots();

// main deck
function getMainDeck () {
    let newBlueCards = [];
    let newBrownCards = [];
    let newGreenCards = [];

    if (middleBtn.classList.contains('border') === true) {
    newBlueCards = [].concat(blueCards);
    newBrownCards = [].concat(brownCards);
    newGreenCards = [].concat(greenCards);
    } else if (lowBtn.classList.contains('border') === true) {
    newBlueCards = [].concat(blueLowCards);
    newBrownCards = [].concat(brownLowCards);
    newGreenCards = [].concat(greenLowCards);
    }
    
    let ancientN = 0;
    if (azathoth.classList.contains('border') === true) {
        ancientN = 0;
    } else if (cthulthu.classList.contains('border') === true) {
        ancientN = 1;
    } else if (logSothoth.classList.contains('border') === true) {
        ancientN = 2;
    } else if (shubNiggurath.classList.contains('border') === true) {
        ancientN = 3;
    }
    console.log(ancientN);
    let firstBlueDeck = [];
    let secondBlueDeck = [];
    let thirdBlueDeck = [];

    function getBlueDecks () {
        for (let i = 0; i < ancientsData[ancientN].firstStage.blueCards; i++) {

            let n = getRandomNum (0, (newBlueCards.length - 1));

            firstBlueDeck.push(newBlueCards[n]);

            let temp = newBlueCards[n];
            newBlueCards[n] = newBlueCards[0];
            newBlueCards[0] = temp;
            newBlueCards.shift();
        }

        for (let j = 0; j < ancientsData[ancientN].secondStage.blueCards; j++) {

            let n = getRandomNum (0, (newBlueCards.length - 1));

            secondBlueDeck.push(newBlueCards[n]);

            let temp = newBlueCards[n];
            newBlueCards[n] = newBlueCards[0];
            newBlueCards[0] = temp;
            newBlueCards.shift();
        }

        for (let k = 0; k < ancientsData[ancientN].thirdStage.blueCards; k++) {
            
            let n = getRandomNum (0, (newBlueCards.length - 1));

            thirdBlueDeck.push(newBlueCards[n]);

            let temp = newBlueCards[n];
            newBlueCards[n] = newBlueCards[0];
            newBlueCards[0] = temp;
            newBlueCards.shift();
        }
    }
    getBlueDecks ();


    let firstBrownDeck = [];
    let secondBrownDeck = [];
    let thirdBrownDeck = [];

    function getBrownDecks () {
        for (let i = 0; i < ancientsData[ancientN].firstStage.brownCards; i++) {

            let n = getRandomNum (0, (newBrownCards.length - 1));

            firstBrownDeck.push(newBrownCards[n]);

            let temp = newBrownCards[n];
            newBrownCards[n] = newBrownCards[0];
            newBrownCards[0] = temp;
            newBrownCards.shift();
        }

        for (let j = 0; j < ancientsData[ancientN].secondStage.brownCards; j++) {

            let n = getRandomNum (0, (newBrownCards.length - 1));

            secondBrownDeck.push(newBrownCards[n]);

            let temp = newBrownCards[n];
            newBrownCards[n] = newBrownCards[0];
            newBrownCards[0] = temp;
            newBrownCards.shift();
        }

        for (let k = 0; k < ancientsData[ancientN].thirdStage.brownCards; k++) {
            
            let n = getRandomNum (0, (newBrownCards.length - 1));

            thirdBrownDeck.push(newBrownCards[n]);

            let temp = newBrownCards[n];
            newBrownCards[n] = newBrownCards[0];
            newBrownCards[0] = temp;
            newBrownCards.shift();
        }
    }
    getBrownDecks ();


    let firstGreenDeck = [];
    let secondGreenDeck = [];
    let thirdGreenDeck = [];

    function getGreenDecks () {
        for (let i = 0; i < ancientsData[ancientN].firstStage.greenCards; i++) {

            let n = getRandomNum (0, (newGreenCards.length - 1));

            firstGreenDeck.push(newGreenCards[n]);

            let temp = newGreenCards[n];
            newGreenCards[n] = newGreenCards[0];
            newGreenCards[0] = temp;
            newGreenCards.shift();
        }

        for (let j = 0; j < ancientsData[ancientN].secondStage.greenCards; j++) {

            let n = getRandomNum (0, (newGreenCards.length - 1));

            secondGreenDeck.push(newGreenCards[n]);

            let temp = newGreenCards[n];
            newGreenCards[n] = newGreenCards[0];
            newGreenCards[0] = temp;
            newGreenCards.shift();
        }

        for (let k = 0; k < ancientsData[ancientN].thirdStage.greenCards; k++) {
            
            let n = getRandomNum (0, (newGreenCards.length - 1));

            thirdGreenDeck.push(newGreenCards[n]);

            let temp = newGreenCards[n];
            newGreenCards[n] = newGreenCards[0];
            newGreenCards[0] = temp;
            newGreenCards.shift();
        }
    }
    getGreenDecks ();

    let firstDeck = [...firstGreenDeck, ...firstBrownDeck, ...firstBlueDeck];
    let secondDeck = [...secondGreenDeck, ...secondBrownDeck, ...secondBlueDeck];
    let thirdDeck = [...thirdGreenDeck, ...thirdBrownDeck, ...thirdBlueDeck];

    let mainDeck = [thirdDeck, secondDeck, firstDeck];
    return mainDeck;
    
}

// end main deck


const lastCard = document.querySelector('.last-card');
const  deck  = document.querySelector('.deck');
const  dotsContainer  = document.querySelector('.current-state');

shuffle.addEventListener('click', () => {
    getNumberDots ();

    deck.style.visibility = `visible`;
    dotsContainer.style.visibility = `visible`;
    lastCard.style.visibility = `hidden`;
 

    // if (veryLowBtn.classList.contains('border') === true){               !!!!! Для уровней
    //     blueCards = blueCardsVL;
    //     brownCards = brownCardsVL;
    //     greenCards = greenCardsVL;
    // }
    
    let mainDeck = getMainDeck ();
    console.log (mainDeck);

    deck.addEventListener('click', () => {

        lastCard.style.visibility = `visible`;
    
        
        function getUrl () {
    
            let url = '';
        
            if (mainDeck[2].length !== 0) {
                let n = getRandomNum (0, (mainDeck[2].length - 1));
                url = mainDeck[2][n];
        
                if (url.color === 'green') {
                    firstGreenDot.textContent = `${Number(firstGreenDot.textContent) - 1}`;
                } else if (url.color === 'brown') {
                    firstBrownDot.textContent = `${Number(firstBrownDot.textContent) - 1}`;
                } else if (url.color === 'blue') {
                    firstBlueDot.textContent = `${Number(firstBlueDot.textContent) - 1}`;
                }
        
                let temp = mainDeck[2][n];
                mainDeck[2][n] = mainDeck[2][0];
                mainDeck[2][0] = temp;
        
                mainDeck[2].shift();
            } else if (mainDeck[1].length !== 0) {
                let n = getRandomNum (0, (mainDeck[1].length - 1));
                url = mainDeck[1][n];
        
                if (url.color === 'green') {
                    secondGreenDot.textContent = `${Number(secondGreenDot.textContent) - 1}`;
                } else if (url.color === 'brown') {
                    secondBrownDot.textContent = `${Number(secondBrownDot.textContent) - 1}`;
                } else if (url.color === 'blue') {
                    secondBlueDot.textContent = `${Number(secondBlueDot.textContent) - 1}`;
                }
        
                let temp = mainDeck[1][n];
                mainDeck[1][n] = mainDeck[1][0];
                mainDeck[1][0] = temp;
        
                mainDeck[1].shift();
            } else if (mainDeck[0].length > 1) {
                let n = getRandomNum (0, (mainDeck[0].length - 1));
                url = mainDeck[0][n];
        
                if (url.color === 'green') {
                    thirdGreenDot.textContent = `${Number(thirdGreenDot.textContent) - 1}`;
                } else if (url.color === 'brown') {
                    thirdBrownDot.textContent = `${Number(thirdBrownDot.textContent) - 1}`;
                } else if (url.color === 'blue') {
                    thirdBlueDot.textContent = `${Number(thirdBlueDot.textContent) - 1}`;
                }
        
                let temp = mainDeck[0][n];
                mainDeck[0][n] = mainDeck[0][0];
                mainDeck[0][0] = temp;
        
                mainDeck[0].shift();
            } else if (mainDeck[0].length === 1) {
                deck.style.visibility = `hidden`;
                url = mainDeck[0][0];
        
                if (url.color === 'green') {
                    thirdGreenDot.textContent = `${Number(thirdGreenDot.textContent) - 1}`;
                } else if (url.color === 'brown') {
                    thirdBrownDot.textContent = `${Number(thirdBrownDot.textContent) - 1}`;
                } else if (url.color === 'blue') {
                    thirdBlueDot.textContent = `${Number(thirdBlueDot.textContent) - 1}`;
                }
            }
        
            lastCard.style.background = `no-repeat center/cover url('${url.cardFace}')`;
        }
        getUrl ();
    });
  });










