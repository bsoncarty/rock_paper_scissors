
let count = 0;
let wins = 0;
let losses = 0;
let draws = 0;

function game() {

    while (count < 5) {

        let computerChoice = computerPlay();
        function computerPlay() {
            let random = ["rock", "paper", "scissors"];
            return (random[Math.floor(Math.random() * random.length)]);
        }

        function playRound(userChoice, computerChoice) {
            if (userChoice.toLowerCase() === "rock" && computerChoice === "rock") {
                draws += 1;
                return "Draw"
            } else if (userChoice.toLowerCase() === "rock" && computerChoice === "paper") {
                losses += 1;
                return "You lose, paper beats rock."
            } else if (userChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
                wins += 1;
                return "You win! Rock beats scissors!"
            } else if (userChoice.toLowerCase() === "paper" && computerChoice === "rock") {
                wins += 1;
                return "You win! Paper beats rock!"
            } else if (userChoice.toLowerCase() === "paper" && computerChoice === "paper") {
                draws += 1;
                return "Draw"
            } else if (userChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
                losses += 1;
                return "You lose, scissors beats paper."
            } else if (userChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
                losses += 1;
                return "You lose, rock beats scissors."
            } else if (userChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
                wins += 1;
                return "You win! Scissors beats paper!"
            } else if (userChoice.toLowerCase() === "scissors" && computerChoice === "scissors") {
                draws += 1;
                return "Draw"
            }

        }
        console.log('You chose ' + userChoice);
        console.log('The computer chose ' + computerChoice);
        console.log(playRound(userChoice, computerChoice));
        console.log("Wins: " + wins + ", Losses: " + losses + ", Draws: " + draws);
        count++;
        break;
    }
    if (count == 5) {
        if (wins > losses) {
            console.log('You beat the computer!');
        } else if (losses > wins) {
            console.log('You lost to the computer');
        } else if (draws > wins && draws > losses || wins == losses) {
            console.log('You tied the computer this game');
        }
    }
}


let userScore = 0;
let computerScore = 0;
let userScore_div = document.getElementById('user-score');
let computerScore_div = document.getElementById('computer-score');
let scoreboard_div = document.querySelector('.scoreboard');
let result_div = document.querySelector('.result');

let rock_div = document.getElementById('r');
let paper_div = document.getElementById('p');
let scissors_div = document.getElementById('s');


rock_div.addEventListener('click', function () {
    userChoice = 'rock';
    game();
});

paper_div.addEventListener('click', function () {
    userChoice = 'paper';
    game();
});

scissors_div.addEventListener('click', function () {
    userChoice = 'scissors';
    game();
});




