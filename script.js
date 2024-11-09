// function Gameboard(name) {
//   const player = name;

//   return function () {
//     let game = [];
//   };
// }
// const player1 = Gameboard("Matt");
// player1();
// console.log(player1);
// const gameBoard = [
//   "O", "X", "O",
//   "O", "X", "O",
//   "O", "X", "O"];
(function playGame() {
  const players = {
    player1: [9, 6, 3],
    player2: [6, 8, 4],
  };
  determineWin(players);
})();

let gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const rows = {
  row1: document.querySelector(".row-1"),
  row2: document.querySelector(".row-2"),
  row3: document.querySelector(".row-3"),
};
let globalCounter = 0;
console.log(gameBoard);

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

    let isWinningCombination = false;
    for (let j = 0; j < combination.length; j++) {
      if (player1.includes(combination[j])) {
        console.log(j);
        isWinningCombination = true;
        break;
      }
    }

    if (isWinningCombination) {
      console.log("winner!");
      return;
    }
  }
  // if (player1.includes(1) && player1.includes(2) && player1.includes(3)) {
  //   console.log("winner!");
  // } else if (
  //   player1.includes(4) &&
  //   player1.includes(5) &&
  //   player1.includes(6)
  // ) {
  //   console.log("winner!");
  // } else if (
  //   player1.includes(7) &&
  //   player1.includes(8) &&
  //   player1.includes(9)
  // ) {
  //   console.log("winner!");
  // } else if (
  //   player1.includes(1) &&
  //   player1.includes(4) &&
  //   player1.includes(7)
  // ) {
  //   console.log("winner!");
  // } else if (
  //   player1.includes(2) &&
  //   player1.includes(5) &&
  //   player1.includes(8)
  // ) {
  //   console.log("winner!");
  // } else if (
  //   player1.includes(3) &&
  //   player1.includes(6) &&
  //   player1.includes(9)
  // ) {
  //   console.log("winner!");
  // } else if (
  //   player1.includes(1) &&
  //   player1.includes(5) &&
  //   player1.includes(9)
  // ) {
  //   console.log("winner!");
  // } else if (
  //   player1.includes(3) &&
  //   player1.includes(5) &&
  //   player1.includes(7)
  // ) {
  //   console.log("winner!");
  // }
}

for (let i = 0; i < gameBoard.length; i++) {
  // rows[`row${i + 1}`].innerHTML += gameBoard[i];
  for (let j = 0; j <= 2; j++) {
    // rows[`row${j}`].innerHTML += gameBoard[i];
    rows[`row${i + 1}`].innerHTML += gameBoard[globalCounter];
    globalCounter++;
  }
}
// if(gameBoard[0] ==)
