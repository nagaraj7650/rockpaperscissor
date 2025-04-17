let userScore = 0;
let compScore = 0;
let rounds = 3;  // Default to 3 rounds
let currentRound = 1;

let comp_score = document.getElementById("comp-score");
let user_score = document.getElementById("user-score");
let winnerText = document.getElementById("winnerText");
let compchoose = document.getElementById("computerchose");
let resetgame = document.getElementById("reset");

const choices = document.querySelectorAll(".choice");
const compChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let compRandom = Math.floor(Math.random() * 3);
    return options[compRandom];
};

const playGame = (choiceClicked, compChoice) => {
    console.log("user choice: ", choiceClicked);
    console.log("comp choice:", compChoice);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        if (currentRound > rounds) {
            winnerText.innerText = userScore > compScore ? "You win!" : (userScore < compScore ? "Computer wins!" : "It's a tie!");
            return; // Stop the game if max rounds are reached
        }

        let choiceClicked = choice.getAttribute("id");
        let comp = compChoice();

        console.log("user choice: ", choiceClicked);
        console.log("comp choice:", comp);

        if (choiceClicked === "scissors" && comp === "rock") {
            winnerText.innerText = "Rock beats scissors and computer wins";
            compScore++;
            comp_score.innerText = `${compScore}`;
            compchoose.innerText = `computer chose ${comp}`;
        } else if (choiceClicked === "rock" && comp === "paper") {
            winnerText.innerText = "Paper beats rock and computer wins";
            compScore++;
            comp_score.innerText = `${compScore}`;
            compchoose.innerText = `computer chose ${comp}`;
        } else if (choiceClicked === "paper" && comp === "scissors") {
            winnerText.innerText = "Scissors beats paper and computer wins";
            compScore++;
            comp_score.innerText = `${compScore}`;
            compchoose.innerText = `computer chose ${comp}`;
        } else if (choiceClicked === "rock" && comp === "scissors") {
            winnerText.innerText = "Rock beats scissors and you win";
            userScore++;
            user_score.innerText = `${userScore}`;
            compchoose.innerText = `computer chose ${comp}`;
        } else if (choiceClicked === "paper" && comp === "rock") {
            winnerText.innerText = "Paper beats rock and you win";
            userScore++;
            user_score.innerText = `${userScore}`;
            compchoose.innerText = `computer chose ${comp}`;
        } else if (choiceClicked === "scissors" && comp === "paper") {
            winnerText.innerText = "Scissors beats paper and you win";
            userScore++;
            user_score.innerText = `${userScore}`;
            compchoose.innerText = `computer chose ${comp}`;
        } else {
            winnerText.innerText = "It's a tie";
            compchoose.innerText = `computer chose ${comp}`;
        }

        currentRound++;
        if (currentRound > rounds) {
            winnerText.innerText = userScore > compScore ? "You win!" : (userScore < compScore ? "Computer wins!" : "It's a tie!");
        }
    });
});

function resetGame() {
    userScore = 0;
    compScore = 0;
    currentRound = 1; // Reset rounds to 1
    user_score.innerText = "0";
    comp_score.innerText = "0";
    winnerText.innerText = "Start again";
    compchoose.innerText = "";
}

resetgame.addEventListener("click", resetGame);

// Game mode selector (example)
const gameModeSelector = document.createElement("select");
gameModeSelector.innerHTML = `
    <option value="3">3 Rounds</option>
    <option value="5">5 Rounds</option>
    <option value="7">7 Rounds</option>
`;
document.body.insertBefore(gameModeSelector, document.querySelector(".scorecard"));

gameModeSelector.addEventListener("change", (e) => {
    rounds = parseInt(e.target.value);
    currentRound = 1;
    userScore = 0;
    compScore = 0;
    user_score.innerText = "0";
    comp_score.innerText = "0";
    winnerText.innerText = `Game set to ${rounds} rounds. Start the game!`;
});
