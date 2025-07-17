    console.log("Hello World");

    function getComputerChoice() {
            let chance = Math.floor(Math.random() * 100)
            if (chance >= 67) {
                console.log("Rock");
                return "Rock";
            } else if (chance <= 34) {
                console.log("Paper");
                return "Paper";
            } else {
                console.log("Scissors");
                return "Scissors";
        };
    };
    getComputerChoice();