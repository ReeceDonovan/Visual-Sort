let numItems = 100;
let currentSet = [];
let board;

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
    itemDiv.style.cssText =
      "height:" +
      itemSize * 5 +
      "px; width: 7px; margin-left: 3px; background-color: rgba(50, 107, 200, 0.8); color: transparent;";
    board.appendChild(itemDiv);
  }
}

class Table {
  constructor(numItems) {
    this.columns = numItems;
    this.itemSet = [];
  }
  setup() {
    let prevItemSize = 999;
    for (let c = 0; c < this.columns; c++) {
      let itemSize = Math.floor(Math.random() * this.columns - 1) + 1;
      if (itemSize == 0) {
        itemSize += 1;
      } else if (itemSize == prevItemSize) {
        itemSize += 1;
      }
      let arrItem = new Item(itemSize);
      prevItemSize = itemSize;
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
