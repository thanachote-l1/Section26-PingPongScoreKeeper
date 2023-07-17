player1Button = document.querySelector("#p1increase");
player2Button = document.querySelector("#p2increase");
player1PointDisplay = document.querySelector("#p1point");
player2PointDisplay = document.querySelector("#p2point");
reset = document.querySelector("#reset");
let player1Point = 0;
let player2Point = 0;

// var select = document.getElementById('winpoint');
// v   ar currentOpt = select.option[select.selectedIndex];

// winPoint = document.querySelector('#winpoint option:checked').value;

player1Button.addEventListener("click", () => {
    // console.log("Player 1");
    player1Point++;
    // console.log(player1Point);
    // const winPoint = document.querySelector('#winpoint option:checked').value;
    // console.log(winPoint);
    player1PointDisplay.innerText = `${player1Point}`;
    isThisPlayerWin = checkWin(player1Point);
    if (isThisPlayerWin) {
        // console.log("Win")
        player1PointDisplay.classList.add("winner")
        player2PointDisplay.classList.add("loser")
    }
});
// ref: element.classList.contains(className);

player2Button.addEventListener("click", () => {
    // console.log("Player 2");
});

function checkWin(playerPoint) {
    const currentWinPoint = document.querySelector('#winpoint option:checked').value;

    if (playerPoint == currentWinPoint) {
        return true;
    } else {
        return false;
    }
}