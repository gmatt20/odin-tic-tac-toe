(function initProgram() {
  const gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const gameBoardHTML = {};
  for (let i = 1; i <= 9; i++) {
    const cell = document.getElementById(`cell-${i}`);
    gameBoardHTML[`cell${i}`] = cell;
    cell.addEventListener("click", startGame);
  }
  const playGameButton = document.getElementById("play-game-button");
  playGameButton.addEventListener("click", function (event) {
    event.preventDefault();
    const player1Name = document.getElementById("player-1-name").value;
    const player2Name = document.getElementById("player-2-name").value;

    const player1 = createPlayers(player1Name);
    const player2 = createPlayers(player2Name);

    startGame(player1, player2);

    determineWin(player1, player2);
  });
  function createPlayers(name1, name2) {
    const player1 = setPlayers(name1);
    const player2 = setPlayers(name2);
    return {
      player1,
      player2,
    };
  }
  function setPlayers(name) {
    return {
      name: name,
    };
  }
  // let globalCounter = 0;
  // displayGameBoard(gameBoard, rows, globalCounter);

  // function choice() {
  //   console.log("worked");
  // }

  function startGame(player1Moves, player2Moves) {
    player1 = player1Moves;
    player2 = player2Moves;
    console.log(`${player1.name}'s turn`);
  }

  function determineWin(player1Move, player2Move) {
    const player1 = player1Move;
    const player2 = player2Move;
    console.log("worked");
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
})();
