function Heap() {
  delay = 0;

  heapSort();
  showButtons();
}

function heapSwap(i, j) {
  updateItem(items[i], itemSizes[i], "red");
  updateItem(items[j], itemSizes[j], "red");

  let temp = itemSizes[i];
  itemSizes[i] = itemSizes[j];
  itemSizes[j] = temp;

  updateItem(items[i], itemSizes[i], "red");
  updateItem(items[j], itemSizes[j], "red");

  updateItem(items[i], itemSizes[i], "blue");
  updateItem(items[j], itemSizes[j], "blue");
}

function heapMax(n, i) {
  let limit = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < n && itemSizes[l] > itemSizes[limit]) {
    if (limit != i) {
      updateItem(items[limit], itemSizes[limit], "blue");
    }

    limit = l;

    updateItem(items[limit], itemSizes[limit], "red");
  }

  if (r < n && itemSizes[r] > itemSizes[limit]) {
    if (limit != i) {
      updateItem(items[limit], itemSizes[limit], "blue");
    }

    limit = r;

    updateItem(items[limit], itemSizes[limit], "red");
  }

  if (limit != i) {
    heapSwap(i, limit);

    heapMax(n, limit);
  }
}

function heapSort() {
  let i;
  for (i = Math.floor(numItems / 2) - 1; i >= 0; i--) {
    heapMax(numItems, i);
  }

  for (i = numItems - 1; i > 0; i--) {
    heapSwap(0, i);
    updateItem(items[i], itemSizes[i], "green");
    updateItem(items[i], itemSizes[i], "yellow");

    heapMax(i, 0);

    updateItem(items[i], itemSizes[i], "blue");
    updateItem(items[i], itemSizes[i], "green");
  }
  updateItem(items[i], itemSizes[i], "green");
}
