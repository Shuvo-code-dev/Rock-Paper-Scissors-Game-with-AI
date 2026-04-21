let score = 0;

function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors",];
    const aiChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = "";
    if (playerChoice === aiChoice) {
        result = "It's tie!🤝";
    } else if (
        (playerChoice === "rock" && aiChoice === "scissors") ||
        (playerChoice === "paper" && aiChoice === "rock") ||
        (playerChoice === "scissors" && aiChoice === "paper") 
    ) {
        result = `You win!`;
        score++;
    } else {
        result = `AI win!`;
        score--;
    }

    document.getElementById("result").innerHTML = `
        You chose: ${playerChoice} <br>
        AI chose: ${aiChoice} <br>
        <strong>${result}</strong>`;
    
    document.getElementById("score").innerText = `Score: ${score}`;
}