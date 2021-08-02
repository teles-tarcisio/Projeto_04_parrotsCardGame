const numberOfCards = askQuantity();    //# of cards for user to play with
function askQuantity() {
    let howManyCards = 0;
    do {
        howManyCards = parseInt(prompt("Com quantas cartas você deseja jogar?"));
    } while ((howManyCards % 2 !== 0) || !((howManyCards >= 4) && (howManyCards <= 14)));

    return howManyCards;
}

//structure:
//  array element contains parrot gifs;
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

    for (let i = 0; i < quantity / 2; i++) {
        temporaryCards[i] = fixedCards[i];
    }

    for (let j = quantity / 2; j < quantity; j++) {
        temporaryCards[j] = temporaryCards[j % (quantity / 2)];
    }

    temporaryCards = temporaryCards.sort(randomComparator);

    return temporaryCards;
}


//# of divs == # of cards:
createCardSlots(numberOfCards);
function createCardSlots(quantity) {    //creates # of divs according to user input
    let newCardSlot;
    let newCardFrame;
    let newImg;

    for (i = 0; i < quantity; i++) {
        //create <div> card-slot:
        newCardSlot = document.createElement("div");
        newCardSlot.className = "card-slot unmatched";
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

function howManyFlipped(element) {
    //element is qS(".card-slot")
    //element.parentElement is ".main-container"

    //flippedCardsList is a nodelist with ".back-up"
    let flippedCardsList = element.parentElement.querySelectorAll(".unmatched .back-up");
    let flippedQuantity = parseInt(flippedCardsList.length);
    return (flippedQuantity);
}

let totalMoves = 0;
function flipCard(element) {    //element = qS(".card-slot")     
    let cardFront = element.querySelector(".front-down");
    let cardBack = element.querySelector(".back-up");

    //step 0: check if card is already matched:
    if (element.classList.contains("matched")) {
        return;
    }
    else if (element.classList.contains("unmatched")) {

        //step 1: check if card is flipped: 
        if ((cardFront !== null) && (cardBack !== null)) { //card has backside UP
            cardFront.classList.replace("front-down", "front-up");
            cardBack.classList.replace("back-up", "back-down");
            return;
        }

        //step 2: if card is not flipped, check qtty:
        if (howManyFlipped(element) <= 1) {
            //2.1: qtty < 2, flip card
            cardFront = element.querySelector(".front-up");
            cardBack = element.querySelector(".back-down");
            if ((cardFront !== null) && (cardBack !== null)) {
                cardFront.classList.replace("front-up", "front-down");
                cardBack.classList.replace("back-down", "back-up");
            }
        }
        if (howManyFlipped(element) === 2) {
            //2.2: qtty == 2, check if pair matches

            if (checkPair(element)) {
                totalMoves++;
                checkVictory();            
                return;
            }
            else {
                console.log("call setTimeout and unflip cards");
                setTimeout(clearFlipped, 1000);
                totalMoves++;
                return;
            }
        }
    }
}


function checkPair(element) {   //element = qS(".card-slot")
    let flippedCardsList = element.parentElement.querySelectorAll(".unmatched .back-up");
    if (flippedCardsList[0].innerHTML === flippedCardsList[1].innerHTML) {
        flippedCardsList[0].parentElement.classList.replace("unmatched", "matched");
        flippedCardsList[0].parentElement.removeAttribute("onclick");
        flippedCardsList[1].parentElement.classList.replace("unmatched", "matched");
        flippedCardsList[1].parentElement.removeAttribute("onclick");

        return true;
    }
    else {
        return false;
    }

}

function checkVictory() {
    let allUnmatched = document.querySelectorAll(".unmatched");
    let allMatched = document.querySelectorAll(".matched");
    if ((allUnmatched.length === 0) && (allMatched.length === numberOfCards)) {
        alert("Você ganhou em " + totalMoves + " jogadas!");
    }
}


function clearFlipped() {
    let allFlippedUnmatched = document.querySelectorAll(".unmatched .card-frame");
    for (let i = 0; i < allFlippedUnmatched.length; i++) {
        allFlippedUnmatched[i].classList.replace("back-up", "back-down");
        allFlippedUnmatched[i].classList.replace("front-down", "front-up");
    } 
}