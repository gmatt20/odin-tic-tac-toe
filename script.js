(function playGame() {
  let gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const rows = {
    row1: document.querySelector(".row-1"),
    row2: document.querySelector(".row-2"),
    row3: document.querySelector(".row-3"),
  };
  const players = {
    player1: [2, 1, 3],
    player2: [3, 8, 4],
  };
  let globalCounter = 0;
  determineWin(players);
  displayGameBoard(gameBoard, rows, globalCounter);
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

    let isWinningCombination = true;
    for (let j = 0; j < combination.length; j++) {
      if (!player1.includes(combination[j])) {
        isWinningCombination = false;
        break;
      }
      // else if (player2.includes(combination[j])) {
      //   isWinningCombination = true;
      //   break;
      // }
    }

    if (isWinningCombination) {
      console.log("winner!");
      return;
    }
  }
}

function displayGameBoard(board, rows, counter) {
  const gameBoard = board;
  let globalCounter = counter;
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j <= 2; j++) {
      rows[`row${i + 1}`].innerHTML += gameBoard[globalCounter];
      globalCounter++;
    }
  }
}
