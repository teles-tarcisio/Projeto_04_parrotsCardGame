let numberOfCards = 0;
do {
    numberOfCards = prompt("Com quantas cartas você quer jogar?");
} while ((numberOfCards%2 === 0) && (numberOfCards >= 4) && (numberOfCards <= 14)) 
console.log(numberOfCards);