function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3) + 1;
    console.log(randomNumber);

    if (randomNumber === 1){
        console.log("Rock");
    } else if (randomNumber === 2) {
        console.log("Paper");
    } else if (randomNumber === 3){
        console.log("Scissor");
    }

}

computerPlay();
computerPlay();
computerPlay();
computerPlay();
computerPlay();
computerPlay();
computerPlay();
computerPlay();