//TODO: collect and store user input
    //TODO: use popup window to allow user to pick R,P, or S
    //TODO: store result in a variable called userChoice
    //TODO: EDGE CASE: what happens if the user picks another letter?
    //TODO: EDGE CASE: what happens if they use a lowercase letter

//TODO: randomly select computer choice, store in variable
    //TODO: possible choices include R, P, or S,
    //TODO: store in variable called compChoice

//TODO: compare user and computer choice
//TODO: display results of game
    // TODO: if user = rock and comp = scissors or user = scissors and comp = paper or user = paper and comp = rock, user wins
    // TODO: if user = rock and comp = paper or user = scissors and comp = roce or user = paper and comp = scissors, comp wins
    // TODO: if user = rock and comp = rock or user = scissors and comp = scissors or user = paper and comp = paper, tie

//TODO: display stats
    //TODO: track wins, losses and ties
    //TODO: display all three in one screen

//TODO: ask user if they want to play again
    //TODO: if they say yes, restart whole game
    //TODO: if they say no, stop doing anything


    
var userChoice;
    
var computer = {
    option: ["R", "P", "S"],
    compChoice: undefined,
}

var stats = {
    win: 0,
    loss: 0,
    tie: 0,
    playAgain: false,
}
    
function userInput() {
    while (!((userChoice === "R") || (userChoice === "P") || (userChoice === "S"))) {
    
        userChoice = prompt("ROCK PAPER SCISSORS\n" + 
                            "r - rock\n" +
                            "p - paper\n" +
                            "s - scisscors");
        userChoice = userChoice.toUpperCase();
    }
}

function chooseResult() {

    computer.compChoice = computer.option[Math.floor(Math.random() * computer.option.length)];

    if ((userChoice === "R" && computer.compChoice === "S") ||
        (userChoice === "P" && computer.compChoice === "R") ||
        (userChoice === "S" && computer.compChoice === "P")) {
            alert("CONGRATS! YOU HAVE BEATEN OUR MOST ADVANCED AI!");
            stats.win++;
    } else if ((userChoice === "R" && computer.compChoice === "P") ||
                (userChoice === "P" && computer.compChoice === "S") ||
                (userChoice === "S" && computer.compChoice === "R")) {
        alert("BOO! YOU LOST! TRY AGAIN?");
        stats.loss++;
    } else {
        alert("TIES ARE NOT ACCEPTABLE! TRY AGAIN!");
        stats.tie++;
    }
}

function generateStats() {
    stats.playAgain = confirm("YOUR STATS OF THE NIGHT!\n" +
    "Wins: " + stats.win + "\n" +
    "Losses: " + stats.loss + "\n" +
    "Ties: " + stats.tie  + "\n" +
    "Would you like to play again?");
    if (stats.playAgain === true) {
        userChoice = undefined;
        userInput();
        chooseResult();
        generateStats();
    } else {
        alert("Thank you playing!");
        return;
    }
}

alert("HELLO AND WELCOME! DO YOU WANT TO PLAY A GAME?");
userInput();
chooseResult();
generateStats();




