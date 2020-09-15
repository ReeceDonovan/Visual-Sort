//UI DOM Variables
let numItemsInput = document.getElementById("i_num");
let numItems = numItemsInput.value;
let genBtn = document.getElementById("i_gen");
let speedInput = document.getElementById("i_speed");
let algoBtns = document.querySelectorAll(".algorithms button");
//Board Variables
let items = [];
let itemSizes = [];
let board = document.getElementById("arrayBoard");

genBtn.addEventListener("click", generateBoard);
numItemsInput.addEventListener("input", updateBoard);

function generateBoard() {
  //Generate and Populate the board
  board.innerHTML = "";
  for (i = 0; i < numItems; i++) {
    itemSizes[i] =
      Math.floor(
        Math.random() * 0.5 * (numItemsInput.max - numItemsInput.min)
      ) + 10;
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
  //Update the board
  numItems = numItemsInput.value;
  generateBoard();
}

window.onload = updateBoard(); //Generate board on page load

for (let i = 0; i < algoBtns.length; i++) {
  algoBtns[i].addEventListener("click", runSort);
}
//Running the sorting algorithms, using a switch for future proofing of disabling UI elements while sort in progress
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
    case "Radix":
      Radix();
      break;
  }
}
