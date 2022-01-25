function computerPlay() {
    let randomNumber = Math.round(Math.random() * 100);
    let generator = randomNumber % 3;
    if(generator === 1) return 'rock';
    else if(generator === 2) return 'paper';
    else return 'scissor';
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') 
            return ['It\'s a draw', 0];
        if (computerSelection === 'paper') 
            return ['You lose! ' + computerSelection + ' beats ' + playerSelection, -1];
        if (computerSelection === 'scissor')
            return ['You win! ' + playerSelection + ' beats ' + computerSelection, 1];
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'paper') 
            return ['It\'s a draw', 0];
        if (computerSelection === 'scissor') 
            return ['You lose! ' + computerSelection + ' beats ' + playerSelection, -1];
        if (computerSelection === 'rock')
            return ['You win! ' + playerSelection + ' beats ' + computerSelection, 1];
    }

    if (playerSelection === 'scissor') {
        if (computerSelection === 'scissor') 
            return ['It\'s a draw', 0];
        if (computerSelection === 'rock') 
            return ['You lose! ' + computerSelection + ' beats ' + playerSelection, -1];
        if (computerSelection === 'paper')
            return ['You win! ' + playerSelection + ' beats ' + computerSelection, 1];
    }
}

let playerScore = 0, computerScore = 0;

function newGame() {
    playerScore = 0;
    computerScore = 0;
    const playerDiv = document.querySelector('.player-score');
    const computerDiv = document.querySelector('.computer-score');

    playerDiv.textContent = "Player: " + playerScore;
    computerDiv.textContent = "Computer: " + computerScore;

    const resultDiv = document.querySelector('.result');
    resultDiv.textContent = '';
}

function updateScore(e) {
    let playerChoice = e.target.id;
    let computerChoice = computerPlay();
    let result = playRound(playerChoice, computerChoice);
    let outputMsg = result[0];

    if(result[1] == 1)
        playerScore++;
    else if (result[1] == -1)
        computerScore++;
    const playerDiv = document.querySelector('.player-score');
    const computerDiv = document.querySelector('.computer-score');

    playerDiv.textContent = "Player: " + playerScore;
    computerDiv.textContent = "Computer: " + computerScore;

    if(playerScore === 5)
        outputMsg = 'PLAYER DEFEATS COMPUTER!!';
    else if (computerScore === 5)
        outputMsg = 'COMPUTER DEFEATS PLAYER!!';

    const resultDiv = document.querySelector('.result');
    resultDiv.textContent = outputMsg;
}

function buttonCallback(button) {
    button.addEventListener('click', updateScore);
}

const buttons = document.querySelectorAll('.icons > button');
buttons.forEach(buttonCallback);

const newgame = document.querySelector('#new-game');
newgame.addEventListener('click', newGame);

/*
function Game() {
    let gameCount = 5, playerScore = 0, computerScore = 0;
    for(let i = 0; i < gameCount; i++) {
        let playerSelection = prompt("your choice? ");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result[0]);
        if(result[1] == 1)
            playerScore++;
        else if (result[1] == -1)
            computerScore++;
    }
    console.log('Your score: ' + playerScore);
    console.log('Computer Score: ' + computerScore);
    if(playerScore > computerScore)
        console.log("YOU WON! CONGRATS!");
    else if (playerScore < computerScore)
        console.log("YOU LOST!");
    else
        console.log("IT'S A DRAW");
}
*/