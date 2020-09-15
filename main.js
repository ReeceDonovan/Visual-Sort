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
    itemSizes[i] = Math.floor(Math.random() * numItems) + 1;
    items[i] = document.createElement("div");
    board.appendChild(items[i]);
    items[i].style =
      " margin:0%; background-color:blue; width: " +
      (100 / numItems - 2 * 0.1) +
      "%; height: " +
      (itemSizes[i] / numItems) * 100 +
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

function hideButtons() {
  for (let i = 0; i < algoBtns.length; i++) {
    algoBtns[i].disabled = true;
    numItemsInput.disabled = true;
    genBtn.disabled = true;
    speedInput.disabled = true;
  }
}
//Running the sorting algorithms, using a switch for future proofing of disabling UI elements while sort in progress
function runSort() {
  hideButtons();

  switch (this.innerHTML) {
    case "Merge":
      updateBoard();
      Merge();
      break;
    case "Quick":
      updateBoard();
      Quick();
      break;
    case "Selection":
      updateBoard();
      Selection();
      break;
    case "Insertion":
      updateBoard();
      Insertion();
      break;
    case "Bubble":
      updateBoard();
      Bubble();
      break;
    case "Heap":
      updateBoard();
      Heap();
      break;
    case "Radix":
      updateBoard();
      Radix();
      break;
  }
}
