player1Button = document.querySelector("#p1increase");
player2Button = document.querySelector("#p2increase");
player1PointDisplay = document.querySelector("#p1point");
player2PointDisplay = document.querySelector("#p2point");
resetButton = document.querySelector("#reset");
let player1Point = 0;
let player2Point = 0;
let isPlayer1Win = false;
let isPlayer2Win = false;

let isGameEnd = false; // will be true when one of the player reach the setted win point, then the score must be reset to continue

player1Button.addEventListener("click", () => {
    isPlayer1Win = checkWin(player1Point);
    // console.log("Player 1");
    if (isPlayer1Win || isPlayer2Win ? player1Point=player1Point : player1Point++);
    // console.log(player1Point);
    // const winPoint = document.querySelector('#winpoint option:checked').value;
    // console.log(winPoint);
    player1PointDisplay.innerText = `${player1Point}`;

    isPlayer1Win = checkWin(player1Point);
    if (isPlayer1Win) {
        // console.log("Win")
        player1PointDisplay.classList.add("winner");
        player2PointDisplay.classList.add("loser");
        resetButton.classList.add("reset_dominate");
    }
});
// ref: element.classList.contains(className);

player2Button.addEventListener("click", () => {
    // console.log("Player 2");
    isPlayer2Win = checkWin(player2Point);
    if (isPlayer2Win || isPlayer1Win ? player2Point=player2Point : player2Point++);
    player2PointDisplay.innerText = `${player2Point}`;

    isPlayer2Win = checkWin(player2Point);
    if (isPlayer2Win) {
        player1PointDisplay.classList.add("loser");
        player2PointDisplay.classList.add("winner");
        resetButton.classList.add("reset_dominate");
    }
});

resetButton.addEventListener('click', () => {
    player1PointDisplay.innerText = 0;
    player2PointDisplay.innerText = 0;
    player1PointDisplay.className = "";
    player2PointDisplay.className = "";
    resetButton.classList.remove("reset_dominate");
    isPlayer1Win = false;
    isPlayer2Win = false;
    player1Point = 0;
    player2Point = 0;
})

function checkWin(playerPoint) {
    const currentWinPoint = document.querySelector('#winpoint option:checked').value;

    if (playerPoint == currentWinPoint) {
        return true;
    } else {
        return false;
    }
}