// här importerar vi dessa funktioner för att kunna använda dem i memory-cards.js
import {shuffleArr, doubler} from "./shuffler-doubler.js";

//Här Skapar vi en memoryCard konstruktor.
function MemoryCard(_url, _id) {
    this.url = _url;
    this.id = _id;
}

//Här skapar vi en funktion som genererar memoryCard korten.
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
