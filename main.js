let numItemsInput = document.getElementById("i_num");
let numItems = numItemsInput.value;
let genBtn = document.getElementById("i_gen");
let speedInput = document.getElementById("i_speed");
let algoBtns = document.querySelectorAll(".algorithms button");

let items = [];
let itemSizes = [];
let board = document.getElementById("arrayBoard");

genBtn.addEventListener("click", generateBoard);
numItemsInput.addEventListener("input", updateBoard);

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
  numItems = numItemsInput.value;
  generateBoard();
}

window.onload = updateBoard();

for (let i = 0; i < algoBtns.length; i++) {
  algoBtns[i].addEventListener("click", runSort);
}

function runSort() {
  switch (this.innerHTML) {
    case "Merge":
      Merge();
      break;
    case "Quick":
      Quick();
      break;
    case "Selection":
      Selection();
      break;
    case "Insertion":
      Insertion();
      break;
    case "Bubble":
      Bubble();
      break;
    case "Heap":
      Heap();
      break;
  }
}
