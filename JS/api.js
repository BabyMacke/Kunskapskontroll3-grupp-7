import {generateCards} from "./memory-cards.js";
import {renderMemoryFunc} from "./renderfunc.js";

const key = 'b9f8285a5b770fe763736df90c7f8be3';
let searchTheme = 'Fruits';

const url = `https://www.flickr.com/services/rest/?api_key=${key}&method=flickr.photos.search&text=${searchTheme}&format=json&nojsoncallback=1&per_page=12&page=1`;

fetch(url).then(function(response){
    return response.json();
}
).then(function(data){
    const imgArr = data.photos.photo;
    renderMemoryFunc(generateCards(imgArr));
}
// Felhantering.
).catch(function(error){
    
    let errorMsg = document.createElement('h2');
    errorMsg.textContent = 'Något blev fel. Det kan vara så att Flickr ligger nere eller att du behöver refresha sidan';
})
