const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restart');
const statusText = document.getElementById('status');

var currentPlayer = 'X';
let gameOver = false;

const winningLines = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

function clickCell(cell) { 

    if (cell.textContent !== "" || gameOver) {
        return;
    }

    cell.textContent = currentPlayer;

    if (checkWinner()) { 

        statusText.textContent = "Player " + currentPlayer + " wins!";
        gameOver = true;

    } else if (isBoardFull()) {

        statusText.textContent = "It's a Draw!";
        gameOver = true;

    } else {

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusText.textContent = "Player " + currentPlayer + "'s turn";

    }
}

function checkWinner() {

    for (const line of winningLines) {

        const a = cells[line[0]].textContent;
        const b = cells[line[1]].textContent;
        const c = cells[line[2]].textContent;

        if (a === currentPlayer && 
            b === currentPlayer && 
            c === currentPlayer) {

            return true;
        }
    }

    return false;
}

function isBoardFull() {

    for (const cell of cells) {

        if (cell.textContent === "") {
            return false;
        }
    }

    return true;
}

// Add click event to every cell
for (const cell of cells) {

    cell.addEventListener('click', () => clickCell(cell));

}

// Restart button
restartButton.addEventListener('click', () => {

    alert('Game will Restart');
    location.reload();

});