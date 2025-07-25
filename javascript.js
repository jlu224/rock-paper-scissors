    console.log("Hello World");
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
            let chance = Math.floor(Math.random() * 100)
            if (chance >= 67) {
                console.log("Rock");
                return "rock";
            } else if (chance <= 34) {
                console.log("Paper");
                return "paper";
            } else {
                console.log("Scissors");
                return "scissors";
        };
    };

    function getHumanChoice() {
        return prompt("Rock, Paper, or Scissors?");
    }

    function playRound(humanChoice, computerChoice){
        if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
            console.log("You tied!");
            return "tie";
        } else {
            console.log("You chose " + humanChoice + " and the computer chose " + computerChoice)
            if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors"){
                console.log("You won!");
                humanScore++;
                return "win";
            } else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper"){
                console.log("You won!");
                humanScore++;
                return "win";
            } else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock"){
                console.log("You won!");
                humanScore++;
                return "win";
            } else {
                console.log("You lost!");
                computerScore++;
                return "loss";
            }
        }
    }

    function playGame(){
        for (let i = 0; i < 5; i++){
            let humanChoice = getHumanChoice();
            let computerChoice = getComputerChoice();
            playRound(humanChoice,computerChoice);
            console.log("The score is your " + humanScore + " to the computer's "+ computerScore);
        }
    }

    playGame();
