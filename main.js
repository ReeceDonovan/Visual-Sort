let numItems = 100;
let currentSet = [];
let board;
let divArray = [];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function initialiseTable() {
  board = document.getElementById("arrayBoard");
  let table = new Table(numItems);
  table.setup();
  updateBoard();
}

function updateBoard() {
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  board = document.getElementById("arrayBoard");

  for (let i = 0; i < currentSet.length; i++) {
    let itemDiv;
    let itemSize;
    if (currentSet[i].itemSize) {
      itemSize = currentSet[i].itemSize;
    } else {
      itemSize = currentSet[i];
    }

    itemDiv = document.createElement("div");
    itemDiv.setAttribute("class", "arrayElement");
    itemDiv.setAttribute("id", String(itemSize));
    itemDiv.style.cssText =
      "height:" +
      itemSize * 5 +
      "px; width: 7px; margin-left: 3px; background-color: " +
      currentSet[i].color +
      "; color: transparent;";
    itemDiv.innerHTML = itemSize;
    divArray.push(itemDiv);
  }
  for (let j = 0; j < divArray.length; j++) {
    board.appendChild(divArray[j]);
  }
}

async function updateDiv(set) {
  for (let j = 0; j < set.length; j++) {
    await sleep(200);

    // board.removeChild(document.getElementById(set[j].id));
    set[j].style.backgroundColor = "rgb(255, 0, 0)";
    // let oldDiv = document.getElementById(set[j].id);
    // board.replaceChild(set[j], oldDiv);
    board.appendChild(set[j]);
  }
}

class Table {
  constructor(numItems) {
    this.columns = numItems;
    this.itemSet = [];
  }
  setup() {
    let prevItemSizes = [];
    for (let c = 0; c < this.columns; c++) {
      let itemSize = Math.floor(Math.random() * this.columns - 1) + 1;
      if (itemSize == 0) {
        itemSize += 1;
      } else if (itemSize in prevItemSizes) {
        itemSize += 1;
      }
      let arrItem = new Item(itemSize);
      prevItemSizes.push(itemSize);
      this.itemSet.push(arrItem);
    }
    currentSet = this.itemSet;
  }
}

class Item {
  constructor(amplitude) {
    this.itemSize = amplitude;
    this.color = "rgba(50, 107, 200, 0.8)";
  }
}

window.addEventListener("load", initialiseTable());
