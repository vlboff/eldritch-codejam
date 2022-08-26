import difficulties from '../data/difficulties.js';
import ancientsData from '../data/ancients.js';
import blueCards from '../data/mythicCards/blue/index.js';
import brownCards from '../data/mythicCards/brown/index.js';
import greenCards from '../data/mythicCards/green/index.js';

const azathoth = document.querySelector('.azathoth');
const cthulthu = document.querySelector('.cthulthu');
const logSothoth = document.querySelector('.log-sothoth');
const shubNiggurath = document.querySelector('.shub-niggurath');

const levels = document.querySelector('.levels');

// Ancients cards
azathoth.addEventListener('click', () => {
    azathoth.classList.add('border');
    cthulthu.classList.remove('border');
    logSothoth.classList.remove('border');
    shubNiggurath.classList.remove('border');

    levels.style.visibility = `visible`;
    getNumberDots();
  });

cthulthu.addEventListener('click', () => {
    azathoth.classList.remove('border');
    cthulthu.classList.add('border');
    logSothoth.classList.remove('border');
    shubNiggurath.classList.remove('border');
    
    levels.style.visibility = `visible`;
    getNumberDots();
});

logSothoth.addEventListener('click', () => {
    azathoth.classList.remove('border');
    cthulthu.classList.remove('border');
    logSothoth.classList.add('border');
    shubNiggurath.classList.remove('border');
    
    levels.style.visibility = `visible`;
    getNumberDots();
});

shubNiggurath.addEventListener('click', () => {
    azathoth.classList.remove('border');
    cthulthu.classList.remove('border');
    logSothoth.classList.remove('border');
    shubNiggurath.classList.add('border');
    
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

const deckPlace = document.querySelector('deck-container'); 

veryLowBtn.addEventListener('click', () => {
    veryLowBtn.classList.add('border');
    lowBtn.classList.remove('border');
    middleBtn.classList.remove('border');
    highBtn.classList.remove('border');
    veryHighBtn.classList.remove('border');

    shuffle.style.visibility = `visible`;
    deckPlace.style.visibility = `hidden`;
  });

lowBtn.addEventListener('click', () => {
    veryLowBtn.classList.remove('border');
    lowBtn.classList.add('border');
    middleBtn.classList.remove('border');
    highBtn.classList.remove('border');
    veryHighBtn.classList.remove('border');

    shuffle.style.visibility = `visible`;
    deckPlace.style.visibility = `hidden`;
});

middleBtn.addEventListener('click', () => {
    veryLowBtn.classList.remove('border');
    lowBtn.classList.remove('border');
    middleBtn.classList.add('border');
    highBtn.classList.remove('border');
    veryHighBtn.classList.remove('border');

    shuffle.style.visibility = `visible`;
    deckPlace.style.visibility = `hidden`;
});

highBtn.addEventListener('click', () => {
    veryLowBtn.classList.remove('border');
    lowBtn.classList.remove('border');
    middleBtn.classList.remove('border');
    highBtn.classList.add('border');
    veryHighBtn.classList.remove('border');

    shuffle.style.visibility = `visible`;
    deckPlace.style.visibility = `hidden`;
});

veryHighBtn.addEventListener('click', () => {
    veryLowBtn.classList.remove('border');
    lowBtn.classList.remove('border');
    middleBtn.classList.remove('border');
    highBtn.classList.remove('border');
    veryHighBtn.classList.add('border');

    shuffle.style.visibility = `visible`;
    deckPlace.style.visibility = `hidden`;
});


function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//**********
// const lastCard = document.querySelector('.last-card');
// lastCard.style.background = `no-repeat center/cover url('${blueCards[0].cardFace}')`;
  

//   console.log(azathoth.classList.contains('border'));
//   console.log(ancientsData[0].firstStage.greenCards);
//   console.log(blueCards[0].cardFace);

//**************
const  firstGreenDot  = document.querySelector('.first-green');
const  firstBrownDot  = document.querySelector('.first-brown');
const  firstBlueDot  = document.querySelector('.first-blue');
const  secondGreenDot  = document.querySelector('.second-green');
const  secondBrownDot  = document.querySelector('.second-brown');
const  secondBlueDot  = document.querySelector('.second-blue');
const  thirdGreenDot  = document.querySelector('.third-green');
const  thirdBrownDot  = document.querySelector('.third-brown');
const  thirdBlueDot  = document.querySelector('.third-blue');

let ancientN = 0;

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
    ancientN = 0;
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
    ancientN = 1;
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
    ancientN = 2;
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
    ancientN = 3;
}
}

getNumberDots();

// main deck
function getMainDeck () {
    let firstBlueDeck = [];
    let secondBlueDeck = [];
    let thirdBlueDeck = [];

    function getBlueDecks () {
        for (let i = 0; i < ancientsData[ancientN].firstStage.blueCards; i++) {

            let n = getRandomNum (0, (blueCards.length - 1));

            firstBlueDeck.push(blueCards[n]);

            let temp = blueCards[n];
            blueCards[n] = blueCards[0];
            blueCards[0] = temp;
            blueCards.shift();
        }

        for (let j = 0; j < ancientsData[ancientN].secondStage.blueCards; j++) {

            let n = getRandomNum (0, (blueCards.length - 1));

            secondBlueDeck.push(blueCards[n]);

            let temp = blueCards[n];
            blueCards[n] = blueCards[0];
            blueCards[0] = temp;
            blueCards.shift();
        }

        for (let k = 0; k < ancientsData[ancientN].thirdStage.blueCards; k++) {
            
            let n = getRandomNum (0, (blueCards.length - 1));

            thirdBlueDeck.push(blueCards[n]);

            let temp = blueCards[n];
            blueCards[n] = blueCards[0];
            blueCards[0] = temp;
            blueCards.shift();
        }
    }
    getBlueDecks ();


    let firstBrownDeck = [];
    let secondBrownDeck = [];
    let thirdBrownDeck = [];

    function getBrownDecks () {
        for (let i = 0; i < ancientsData[ancientN].firstStage.brownCards; i++) {

            let n = getRandomNum (0, (brownCards.length - 1));

            firstBrownDeck.push(brownCards[n]);

            let temp = brownCards[n];
            brownCards[n] = brownCards[0];
            brownCards[0] = temp;
            brownCards.shift();
        }

        for (let j = 0; j < ancientsData[ancientN].secondStage.brownCards; j++) {

            let n = getRandomNum (0, (brownCards.length - 1));

            secondBrownDeck.push(brownCards[n]);

            let temp = brownCards[n];
            brownCards[n] = brownCards[0];
            brownCards[0] = temp;
            brownCards.shift();
        }

        for (let k = 0; k < ancientsData[ancientN].thirdStage.brownCards; k++) {
            
            let n = getRandomNum (0, (brownCards.length - 1));

            thirdBrownDeck.push(brownCards[n]);

            let temp = brownCards[n];
            brownCards[n] = brownCards[0];
            brownCards[0] = temp;
            brownCards.shift();
        }
    }
    getBrownDecks ();


    let firstGreenDeck = [];
    let secondGreenDeck = [];
    let thirdGreenDeck = [];

    function getGreenDecks () {
        for (let i = 0; i < ancientsData[ancientN].firstStage.greenCards; i++) {

            let n = getRandomNum (0, (greenCards.length - 1));

            firstGreenDeck.push(greenCards[n]);

            let temp = greenCards[n];
            greenCards[n] = greenCards[0];
            greenCards[0] = temp;
            greenCards.shift();
        }

        for (let j = 0; j < ancientsData[ancientN].secondStage.greenCards; j++) {

            let n = getRandomNum (0, (greenCards.length - 1));

            secondGreenDeck.push(greenCards[n]);

            let temp = greenCards[n];
            greenCards[n] = greenCards[0];
            greenCards[0] = temp;
            greenCards.shift();
        }

        for (let k = 0; k < ancientsData[ancientN].thirdStage.greenCards; k++) {
            
            let n = getRandomNum (0, (greenCards.length - 1));

            thirdGreenDeck.push(greenCards[n]);

            let temp = greenCards[n];
            greenCards[n] = greenCards[0];
            greenCards[0] = temp;
            greenCards.shift();
        }
    }
    getGreenDecks ();

    // let firstDeck = [].concat(firstGreenDeck, firstBrownDeck, firstBlueDeck);
    // let secondDeck = [].concat(secondGreenDeck, secondBrownDeck, secondBlueDeck);
    // let thirdDeck = [].concat(thirdGreenDeck, thirdBrownDeck, thirdBlueDeck);

    let firstDeck = [...firstGreenDeck, ...firstBrownDeck, ...firstBlueDeck];
    let secondDeck = [...secondGreenDeck, ...secondBrownDeck, ...secondBlueDeck];
    let thirdDeck = [...thirdGreenDeck, ...thirdBrownDeck, ...thirdBlueDeck];

    let mainDeck = [thirdDeck, secondDeck, firstDeck];
    return mainDeck;
}

// end main deck

const  deck  = document.querySelector('.deck');

shuffle.addEventListener('click', () => {
    deck.style.visibility = `visible`;

    // if (veryLowBtn.classList.contains('border') === true){               !!!!! Для уровней
    //     blueCards = blueCardsVL;
    //     brownCards = brownCardsVL;
    //     greenCards = greenCardsVL;
    // }
    getMainDeck ();

  });

let mainDeck = getMainDeck ();
const lastCard = document.querySelector('.last-card');

deck.addEventListener('click', () => {
    let url = '';

    if (mainDeck[2].length !== 0) {
        let n = getRandomNum (0, (mainDeck[2].length - 1));
        url = mainDeck[2][n];

        let temp = mainDeck[2][n];
        mainDeck[2][n] = mainDeck[2][0];
        mainDeck[2][0] = temp;

        mainDeck[2].shift();
    } else if (mainDeck[1].length !== 0) {
        let n = getRandomNum (0, (mainDeck[1].length - 1));
        url = mainDeck[1][n];

        let temp = mainDeck[1][n];
        mainDeck[1][n] = mainDeck[1][0];
        mainDeck[1][0] = temp;

        mainDeck[1].shift();
    } else if (mainDeck[0].length > 1) {
        let n = getRandomNum (0, (mainDeck[0].length - 1));
        url = mainDeck[0][n];

        let temp = mainDeck[0][n];
        mainDeck[0][n] = mainDeck[0][0];
        mainDeck[0][0] = temp;

        mainDeck[0].shift();
    } else if (mainDeck[0].length === 1) {
        deck.style.visibility = `hidden`;
        url = mainDeck[0][0];
    }

    lastCard.style.background = `no-repeat center/cover url('${url.cardFace}')`;
    console.log(mainDeck[2] === []);
});
