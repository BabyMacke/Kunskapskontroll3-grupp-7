// här importerar vi dessa funktioner för att kunna använda dem i render-game.js
import {MemoryCard} from "./memory-cards.js";
import {fetchApi} from "./api.js";

//en variabel som kollar om användaren har klickat eller inte
let hasClicked = false;
let lockCards = false;

//två variblar som representerar det första kortet och andra kortet som har klickats.
let firstCard, secondCard;

//en varibel som sparar poäng
let points = 0;
let pointCounter = document.querySelector('.points');
pointCounter.innerText = `Score: ${points}`;

//Här skapar vi en metod i prototypen som flip:ar korten
MemoryCard.prototype.flip = function(cardElement, protoInstance){
    // om disableCards är true, gå ut från funktionen direkt.
    if(lockCards) return;
    // om firstCard har klickats och är aktivt: gå ut ur funktionen.
    if(firstCard == cardElement) return;
    //en class med en flip animation togglas när man klickar på korten
    cardElement.classList.toggle('flip')
    if(!hasClicked){
        hasClicked = true;
        firstCard = cardElement;  
    } else{
        secondCard = cardElement;
        hasClicked = false;
        //kolla om korten matchar
        matchCard(protoInstance);
    }
}

//Här skapas en funktion som ska kolla om korten matchar eller inte.
function matchCard(protoInstance){
    if(firstCard.getAttribute('pair-id') === secondCard.getAttribute('pair-id')){
       removeCards(firstCard, secondCard, protoInstance);
       // ge ett poäng till poängräknaren
       points++;
       pointCounter.innerText = `Score: ${points}`;
       
       if (points === 12) endGame();
    } else{
        protoInstance.unFlip(lockCards, firstCard, secondCard);
    }
}

//här skapar vi en metod till konstruktorn i prototypen som unflip:ar korten.
MemoryCard.prototype.unFlip = function(){
    // lås de andra korten tills korten har vänts tillbaka
    lockCards = true;
    // vänd tillbaka korten efter en liten stund
    setTimeout(function(){
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockCards = false;
    }, 1500);
}

// Här skapar vi en funktion removeCards som tar bort eventlyssnare och gör korten osynliga. 
function removeCards(cardOne, cardTwo, protoInstance){
    // tar bort eventListenern
    cardOne.removeEventListener('click', function(){
        protoInstance.flip(cardOne, protoInstance);
    });
    cardTwo.removeEventListener('click', function(){
        protoInstance.flip(cardTwo, protoInstance);
    });
    //gör att korten inte längre är synliga efter 1 sek
    setTimeout(function(){
        cardOne.style.visibility = "hidden";
        cardTwo.style.visibility = "hidden";
    }, 1000);
}

//Här skapar vi en funktion som renderar ut korten till DOM:en.
function renderMemoryFunc(cardsStorer){
    let gridContainer = document.querySelector('.grid-container');
    for (let i = 0; i < cardsStorer.length; i++) {
        let cardContainer = document.createElement('div');
        let frontFace = document.createElement('img');
        let backFace = document.createElement('img');
        frontFace.src = cardsStorer[i].url;
        backFace.src = "img/apple.png"
        frontFace.alt = "card img"
        backFace.alt = "pepe img"
        cardContainer.setAttribute('pair-id', cardsStorer[i].id);
        cardContainer.classList.add('memory-card');
        frontFace.classList.add('front-face');
        backFace.classList.add('back-face');
        cardContainer.appendChild(frontFace);
        cardContainer.appendChild(backFace);
        gridContainer.appendChild(cardContainer);
        cardContainer.addEventListener('click', function(){
            cardsStorer[i].flip(cardContainer, cardsStorer[i]); 
       })        
    }
}

//här skapas en funktion som ska resetta spelet när spelet är slut.
function endGame(){
    setTimeout(() => {
    let cardContainer = document.querySelector('.grid-container');
    cardContainer.innerHTML = '';
    let h2 = document.querySelector('.points');
    points = 0;
    h2.textContent = `Score: ${points}`
    fetchApi();
    }, 1000);
    
}
export {renderMemoryFunc, points};