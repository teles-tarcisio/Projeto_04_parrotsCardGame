let numberOfCards;
do {
    numberOfCards = prompt("Com quantas cartas você deseja jogar?");
    console.log(numberOfCards + " repetir qtde cartas");
 } while (((numberOfCards % 2) !== 0) || (numberOfCards < 4) || (numberOfCards > 14)); 
console.log(numberOfCards + " continuar");