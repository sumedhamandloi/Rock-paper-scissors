let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".selection");

let result = document.querySelector(".result-section");

let scoreU = document.querySelector("#your-score");
let scoreC = document.querySelector("#comp-score");

//Selection of userChoice + Game initiation
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

//Selection of computerChoice
let compSelection = () => {
    const arr = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    let output = arr[randIdx];
    return output;
}

//PlayGame
let playGame = (userChoice) => {
    const compChoice = compSelection();
    console.log(userChoice);
    console.log(compChoice);
    let decision = decideWin(userChoice, compChoice);
    displayRes(decision, compChoice, userChoice);
}

//Decide Winner
function decideWin (userChoice, compChoice) {
    let userWin = true;
    if(userChoice === compChoice) {
       console.log("It's a draw. Play Again.")
    } else {
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
    }
    return userWin;
}

//Display Result
function displayRes(userWin, compChoice, userChoice){
    if(userChoice === compChoice) {
        result.innerText = "It's a draw. Play again.";
        result.style.backgroundColor = "yellow";
        result.style.color = "black";
    } else {
        if(userWin === true) {
            result.style.backgroundColor = "green";
            result.innerText = `You win. Your ${userChoice} beats ${compChoice}.`;
            userScore++;
            scoreU.innerText = userScore;
        } else {
            result.style.backgroundColor = "red";
            result.innerText = `You lose. ${compChoice} beats your ${userChoice}.`;
            compScore++;
            scoreC.innerText = compScore;
        }
    }  
}

//Handle Score
let handleScore = () => {

}