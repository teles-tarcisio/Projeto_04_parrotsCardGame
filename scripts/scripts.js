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


createCard(numberOfCards);
function createCard(quantity) {
    let newDivCard;
    let newImg;
    for (counter = 0; counter < quantity; counter++) {
        console.log("counter: " + counter);
        newDivCard = document.createElement("div");
        newDivCard.className = "card";
        //newDivCard.setAttribute("onclick", "createCard()");
        newImg = document.createElement("img");
        newImg.setAttribute("src", "images/front.png");
        newDivCard.appendChild(newImg);
        document.querySelector(".main-content").appendChild(newDivCard);
        console.log(document.querySelector(".main-content").childNodes);        
    }
    
}





/*
function flip(card) {
    card.classList.toggle("black-bg");
    if (!card.classList.contains("frente")) {
        card.classList.add("frente");
        card.classList.add("verso2");
    }
    else if (card.classList.contains("verso")) {
        card.classList.remove("verso");
        card.classList.add
        card.classList.add("frente");
    }
}
*/