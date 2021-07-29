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
console.log("array length: " + gameCards.length);

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

        //create and add deck image (parrot):
        newImg = document.createElement("img");
        newImg.setAttribute("src", "images/front.png");

        newDivCard.appendChild(newImg);
        document.querySelector(".main-content").appendChild(newDivCard);
    }
}

/*
SID: armazenar o div por completo, talvez possa complicar
na hora de embaralhar as cartas, alternativa seria armazenar
apenas o caminho da imagem no array e gerar as divs por outra função. Entende?
 */