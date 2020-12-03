function shuffleArr(arr) {
    var currentIndex = arr.length, temporaryValue, randomIndex;
    // Medans det finns element att shuffla
    while (0 !== currentIndex) {
      // Välj ett element som är kvar
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // Byta plats med nuvarande element
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }
    return arr;
}

function doubler(arr) {
    // Skapa dubbletter från 12 till 24, båda får samma ID
    let doubledArr = [];
    for (let i = 0; i < arr.length; i++) {
        doubledArr.push(arr[i]);
        doubledArr.push(arr[i]);
    }
    return doubledArr;
}

export {shuffleArr, doubler};