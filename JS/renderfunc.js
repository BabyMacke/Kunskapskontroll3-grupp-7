function renderMemoryFunc(cardsStorer){
    let gridContainer = document.querySelector('.grid-container');
    for (let i = 0; i < cardsStorer.length; i++) {
        let memoryCard = document.createElement('img');
        memoryCard.src = cardsStorer[i].url;
        
        memoryCard.setAttribute('pair-id', cardsStorer[i].id);
        console.log(memoryCard);
        memoryCard.classList.add('cards');
        gridContainer.appendChild(memoryCard);
    }
}
export {renderMemoryFunc};
