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

const gameCards = [];
console.log("array length: " + gameCards.length);

createCardSlots(numberOfCards);

function createCardSlots(quantity) {
    let newDivCard;
    let newImg;
    for (counter = 0; counter < quantity; counter++) {
        //create <div>:
        newDivCard = document.createElement("div");
        newDivCard.className = "card";
        /*newDivCard.setAttribute("onclick", "functionToCall()");*/

        //create <img>:
        newImg = document.createElement("img");
        newImg.setAttribute("src", "images/front.png");
        
        //<img> inside <div> :
        newDivCard.appendChild(newImg);
        gameCards[counter] = newDivCard;
        
        //document.querySelector(".main-content").appendChild(newDivCard);

        document.querySelector(".main-content").appendChild(gameCards[counter]);
    }
}

/*
SID: Cara achei interessante a forma que você abordou o problema.
Acredito que armazenar o div por completo, talvez possa complicar
na hora de embaralhar as cartas, uma alternativa seria armazenar
apenas o caminho da imagem no array e gerar as divs por outra função. Entende?
 */

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