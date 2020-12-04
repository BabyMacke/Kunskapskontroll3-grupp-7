import {shuffleArr, doubler} from "./shuffler-doubler.js";

function MemoryCard(_url, _id) {
    this.url = _url;
    this.id = _id;
}

/* MemoryCard.prototype.flip = function(matchCard, lockCards, hasClicked, firstCard, secondCard){
    console.log('pepe')
    // om disableCards är true, gå ut från funktionen direkt.
    if(lockCards) return;
    // om firstCard har klickats och är aktivt: gå ut ur funktionen.
    if(firstCard == this) return;

    //en class med en flip animation togglas när man klickar på korten
    this.classList.toggle('flip')

    if(!hasClicked){
        hasClicked = true;
        firstCard = this;
       
    } else{
        secondCard = this;
        hasClicked = false;
        //kolla om korten matchar
        matchCard();
    }
}

MemoryCard.prototype.unFlip = function(lockCards, firstCard, secondCard){
    // lås de andra korten tills korten har vänts tillbaka
    lockCards = true;
    // vänd tillbaka korten efter en liten stund
    setTimeout(function(){
        firstCard.classList.toggle('flip');
        secondCard.classList.toggle('flip');

        lockCards = false;
    }, 1500);
} */

function generateCards(resArr) {
    // Skapa dubbletter 12 -> 24
    let doubledArr = doubler(resArr);
    // Loopar igenom doubledArr och skapar ett konstruktor objekt id och url
    let imgsData = []; 
    for (let i = 0; i < doubledArr.length; i++) {
        const url = `https://live.staticflickr.com/${doubledArr[i].server}/${doubledArr[i].id}_${doubledArr[i].secret}_q.jpg;`;
        const card = new MemoryCard(url, doubledArr[i].id);
        imgsData.push(card);
    }
    // Shufflar ordningen
    let shuffledArr = shuffleArr(imgsData);
    return shuffledArr;    
}
export {MemoryCard, generateCards};
