const numberOfCards = askQuantity();    //# of cards for user to play with
function askQuantity() {
    let howManyCards = 0;
    do {
        howManyCards = parseInt(prompt("Com quantas cartas você deseja jogar?"));
    } while ((howManyCards % 2 !== 0) || !((howManyCards >= 4) && (howManyCards <= 14)));
    
    return howManyCards;
}

//structure:
//  array element contains gifs and "content" of the card;
//      div contains ONE front img and ONE array element!

const fixedCards = initializeAllCards();    //all 7 gifs available before starting
function initializeAllCards() {
    let allCards = [];
    allCards.length = 7;
    allCards[0] = "images/bobrossparrot.gif";
    allCards[1] = "images/explodyparrot.gif";
    allCards[2] = "images/fiestaparrot.gif";
    allCards[3] = "images/metalparrot.gif";
    allCards[4] = "images/revertitparrot.gif";
    allCards[5] = "images/tripletsparrot.gif";
    allCards[6] = "images/unicornparrot.gif";
    
    //shuffle full array of cards:
    allCards = allCards.sort(randomComparator);
    
    return allCards;
}
function randomComparator() {
    return Math.random() - 0.5;
}


const gameCards = distributeCards(numberOfCards);    //# of cards chosen, randomized
function distributeCards(quantity) {
    let temporaryCards = [];
    temporaryCards.length = quantity;
    
    for (let i = 0; i < quantity/2; i++) {
        temporaryCards[i] = fixedCards[i];
    }
    
    for (let j = quantity/2; j < quantity; j++) {
        temporaryCards[j] = temporaryCards[j % (quantity/2)];
    }
    
    temporaryCards = temporaryCards.sort(randomComparator);

    return temporaryCards;
}


//# of divs == # of cards: (the div contains the array element)
createCardSlots(numberOfCards);
function createCardSlots(quantity) {    //creates # of divs according to user input
    let newCardSlot;
    let newCardFrame;
    let newImg;

    for (i = 0; i < quantity; i++) {
        //create <div> card-slot:
        newCardSlot = document.createElement("div");
        newCardSlot.className = "card-slot";
        newCardSlot.setAttribute("onclick", "flipCard(this)");

        //create <div> card-frame (front):
        newCardFrame = document.createElement("div");
        newCardFrame.className = "card-frame front-up";

        //create and add front <img> (parrot):
        newImg = document.createElement("img");
        newImg.setAttribute("src", "images/front_deck.png");
        newCardFrame.appendChild(newImg);
        
        newCardSlot.appendChild(newCardFrame);

        //create <div> card-frame (back):
        newCardFrame = document.createElement("div");
        newCardFrame.className = "card-frame back-down";

        //create and add back <img> (gif):
        newImg = document.createElement("img");
        newImg.setAttribute("src", gameCards[i]);
        newCardFrame.appendChild(newImg);

        newCardSlot.appendChild(newCardFrame);


        //append card-frame to card-slot:
        document.querySelector(".main-container").appendChild(newCardSlot);
    }
}

function flipCard(element) {            
    let cardFront = element.querySelector(".front-up");
    let cardBack = element.querySelector(".back-down");
    if (cardFront !== null && cardBack !== null) {
        cardFront.classList.replace("front-up", "front-down");
        cardBack.classList.replace("back-down", "back-up");
        return;
    }

    cardFront = element.querySelector(".front-down");
    cardBack = element.querySelector(".back-up");
    if (cardFront !== null && cardBack !== null) {
        //element.classList.toggle("black-bg");
        cardFront.classList.replace("front-down", "front-up");
        cardBack.classList.replace("back-up", "back-down");
        return;
    }
}