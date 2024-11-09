(function playGame() {
  const gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const gameBoardHTML = {};
  for (let i = 1; i <= 9; i++) {
    gameBoardHTML[`cell${i}`] = document.getElementById(`cell-${i}`);
  }
  const playGameButton = document.getElementById("play-game-button");
  playGameButton.addEventListener("click", function (event) {
    event.preventDefault();
    createPlayers();
  });
  function createPlayers() {
    const player1Name = document.getElementById("player-1-name").value;
    const player2Name = document.getElementById("player-2-name").value;
    const player1 = setPlayers(player1Name);
    const player2 = setPlayers(player2Name);
  }
  function setPlayers(name) {
    return {
      name: name,
    };
  }
  // let globalCounter = 0;
  // determineWin(players);
  // displayGameBoard(gameBoard, rows, globalCounter);
})();

function determineWin(players) {
  const player1 = players.player1;
  const player2 = players.player2;
  const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  for (let i = 0; i < winningCombinations.length; i++) {
    const combination = winningCombinations[i];

    for (let j = 0; j < combination.length; j++) {
      if (combination.every((val) => player1.includes(val))) {
        player1Wins();
        return;
      }
      if (combination.every((val) => player2.includes(val))) {
        player2Wins();
        return;
      }
    }
  }
}

function player1Wins() {
  console.log("Player 1 wins!");
}
function player2Wins() {
  console.log("Player 2 wins!");
}

// function displayGameBoard(board, rows, counter) {
//   const gameBoard = board;
//   let globalCounter = counter;
//   for (let i = 0; i < gameBoard.length; i++) {
//     for (let j = 0; j <= 2; j++) {
//       rows[`row${i + 1}`].innerHTML += gameBoard[globalCounter];
//       globalCounter++;
//     }
//   }
// }
