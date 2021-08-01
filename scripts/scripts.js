const numberOfCards = askQuantity();
function askQuantity() {
    let howManyCards = 0;
    do {
        howManyCards = parseInt(prompt("Com quantas cartas você deseja jogar?"));
        console.log(typeof (howManyCards));
        console.log(howManyCards + ", fornecido");
    } while ((howManyCards % 2 !== 0) || !((howManyCards >= 4) && (howManyCards <= 14)));
    console.log(howManyCards + " continuar");

    return howManyCards;
}


//structure:
//  array element contains gifs and "content" of the card;
//      div contains ONE front img and ONE array element!


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
    console.log("allCards, original: " + allCards.toString());

    //shuffle full array of cards:
    allCards = allCards.sort(randomComparator);
    console.log("allCards, shuffled: " + allCards.toString());

    return allCards;
}
function randomComparator() {
    return Math.random() - 0.5;
}
const fixedCards = initializeAllCards();

function distributeCards() {
    let temporaryCards = [];
    temporaryCards.length = numberOfCards;
    console.log(fixedCards.toString());
    console.log(temporaryCards.toString());

    for (let i = 0; i < numberOfCards/2; i++) {
        temporaryCards[i] = fixedCards[i];
    }
    console.log(temporaryCards.toString());

    for (let j = numberOfCards/2; j < numberOfCards; j++) {
        temporaryCards[j] = temporaryCards[j % (numberOfCards/2)];
    }
    console.log(temporaryCards.toString());

    temporaryCards = temporaryCards.sort(randomComparator);

    return temporaryCards;
}
const gameCards = distributeCards();


//# of divs == # of cards: (the div contains the array element)
createCardSlots(numberOfCards);
function createCardSlots(quantity) {    //creates # of divs according to user input
    let newDivCard;
    let newImg;
    for (counter = 0; counter < quantity; counter++) {
        //create <div>:
        newDivCard = document.createElement("div");
        newDivCard.className = "card-slot";

        //newDivCard.setAttribute( ... )

        //create and add front <img> (parrot):
        newImg = document.createElement("img");
        //newImg.setAttribute("src", "images/front_deck.png");
        newImg.className = "default-deck-image";
        newDivCard.appendChild(newImg);

        //create and add back <img> (gif):
        newImg = document.createElement("img");
        newImg.setAttribute("src", gameCards[counter]);
        newImg.className = "bob";
        newDivCard.appendChild(newImg);

        //append card-slot-div to main-content div:
        document.querySelector(".main-content").appendChild(newDivCard);
    }
}

/*
SID: armazenar o div por completo, talvez possa complicar
na hora de embaralhar as cartas, alternativa seria armazenar
apenas o caminho da imagem no array e gerar as divs por outra função. Entende?
 */