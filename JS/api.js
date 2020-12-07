// här importerar vi dessa funktioner för att kunna använda dem i api.js
import {generateCards} from "./memory-cards.js";
import {renderMemoryFunc} from "./render-game.js"; 

//deklarerar variabler för att kunna bygga om URL:en.
const key = 'b9f8285a5b770fe763736df90c7f8be3';
const searchTheme = 'Fruits';
const x = 1;
const url = `https://www.flickr.com/services/rest/?api_key=${key}&method=flickr.photos.search&text=${searchTheme}&format=json&nojsoncallback=1&per_page=12&page=1&sort=relevance`;

//Här skapar vi en fetch som hämtar data med hjälp av API:et. 
function fetchApi(){
    fetch(url).then(function(response){
        return response.json();
    }
    ).then(function(data){
        const imgArr = data.photos.photo;
        //Vi hämtar ut fotona och skickar med det till generateCards funktionen som i sin tur skickar det vidare till renderMemoryFunc. 
        renderMemoryFunc(generateCards(imgArr));
    }
    // Felhantering.
    ).catch(function(error){
        const errorMsg = document.createElement('h2');
        errorMsg.textContent = 'Något blev fel. Det kan vara så att Flickr ligger nere eller att du behöver refresha sidan';
    })
}
fetchApi();//Här e vår startpunkt i programmet.

export {x, fetchApi};