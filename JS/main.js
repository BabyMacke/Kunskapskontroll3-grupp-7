const key = 'b9f8285a5b770fe763736df90c7f8be3';
let searchText = 'animal';

const url = `https://www.flickr.com/services/rest/?api_key=${key}&method=flickr.photos.search&text=${searchText}&format=json&nojsoncallback=1&per_page=12&page=1`;

fetch(url).then(function(response){
    console.log(response);
    return response.json();
}
).then(function(data){
    console.log(data.photos.photo);
    getImgUrl(data.photos.photo) 
})

// här ska vi pussla ihop bild URL:en.
function getImgUrl(photoObject){
    let size = 'q';
    for (let i = 0; i < photoObject.length; i++) {
        console.log(photoObject[i]);  
        let imgUrl = `https://live.staticflickr.com/${photoObject[i].server}/${photoObject[i].id}_${photoObject[i].secret}_${size}.jpg`;
        console.log(imgUrl);
    }

    console.log(imgUrl);
    displayImg(imgUrl);
}

// för att visa bilden
function displayImg(url){
    let img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
}