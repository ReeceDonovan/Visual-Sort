let items = [];
let itemSizes = [];
let numItems;
let board = document.getElementById("arrayBoard");

function generateBoard() {
  board.innerHTML = "";
  for (i = 0; i < numItems; i++) {
    itemSizes[i] = Math.floor(Math.random() * numItems - 1) + 1;
    items[i] = document.createElement("div");
    board.appendChild(items[i]);
    items[i].style =
      " margin:0% 0.1%; background-color:blue; width: " +
      (100 / numItems - 2 * 0.1) +
      "%; height: " +
      itemSizes[i] +
      "%;";
  }
}

function updateBoard() {
  numItems = 50;
  generateBoard();
}

window.onload = updateBoard();
