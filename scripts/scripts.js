let numberOfCards = 0;
askQuantity();
function askQuantity() {
    do {
        numberOfCards = parseInt(prompt("Com quantas cartas você deseja jogar?"));
        console.log(typeof(numberOfCards));
        console.log(numberOfCards + ", fornecido");
     } while ((numberOfCards % 2 !== 0) || !((numberOfCards >= 4) && (numberOfCards <= 14)));
    console.log(numberOfCards + " continuar");

}


//structure:
//  array element contains gifs and "content" of the card;
//      div contains ONE front img and ONE array element!

const gameCards = [];
let shuffledCards = [];
function randomComparator() {
    return Math.random() - 0.5;
}
function randomizeArrayofCards(quantity) {
    gameCards[0] = "images/bobrossparrot.gif";
    gameCards[1] = "images/explodyparrot.gif";
    gameCards[2] = "images/fiestaparrot.gif";
    gameCards[3] = "images/metalparrot.gif";
    gameCards[4] = "images/revertitparrot.gif";
    gameCards[5] = "images/tripletsparrot.gif";
    gameCards[6] = "images/unicornparrot.gif";
    console.log("before: " + gameCards.toString());
    
    //shuffling:
    shuffledCards = gameCards.sort(randomComparator);
    console.log("after: " + shuffledCards.toString());
}
randomizeArrayofCards();

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
        newImg.setAttribute("src", "images/front_deck.png");
        newImg.className = "default-deck-image";
        newDivCard.appendChild(newImg);

        //create and add back <img> (gif):
        newImg = document.createElement("img");
        newImg.setAttribute("src", "images/bobrossparrot.gif");
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