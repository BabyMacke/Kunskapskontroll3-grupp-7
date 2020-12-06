import {matchCard, lockCards, hasClicked, firstCard, secondCard} from "./game.js";
import {MemoryCard} from "./memory-cards.js";


let cardsArr = [];
function renderMemoryFunc(cardsStorer){
    let gridContainer = document.querySelector('.grid-container');
    console.log(gridContainer)
    for (let i = 0; i < cardsStorer.length; i++) {
        let cardContainer = document.createElement('div');
        let frontFace = document.createElement('img');
        let backFace = document.createElement('img');
        frontFace.src = cardsStorer[i].url;
        backFace.src = "img/pepe.png"
        frontFace.alt = "card img"
        backFace.alt = "pepe img"
        frontFace.setAttribute('pair-id', cardsStorer[i].id);
        cardContainer.classList.add('memory-card');
        frontFace.classList.add('front-face');
        backFace.classList.add('back-face');
        cardContainer.appendChild(frontFace);
        cardContainer.appendChild(backFace);
        gridContainer.appendChild(cardContainer);

       /*  cardContainer.addEventListener('click', MemoryCard.flip(matchCard, lockCards, hasClicked, firstCard, secondCard)); */
       cardContainer.addEventListener('click', function(e){
           console.log(e.target)
       }); 

        cardsArr.push(cardContainer);
        
        
    }
}

export {renderMemoryFunc, cardsArr};
