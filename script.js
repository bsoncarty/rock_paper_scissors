function game() {
    let count = 0;
    let wins = 0;
    let losses = 0;
    let draws = 0;
    
    while (count < 5) {


        let userChoice = prompt("Choose either Rock, Paper, or Scissors:")

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
        console.log(userChoice);
        console.log(computerChoice);
        console.log(playRound(userChoice, computerChoice));
        console.log("Wins: " + wins + ", Losses: " + losses + ", Draws: " + draws);
        count++;
    }
}



console.log(game());


