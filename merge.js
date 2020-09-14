// TODO: fix sort
function Merge() {
  delay = 0;

  mergeBuffer(0, numItems - 1);
}

function mergeSort(left, middle, right) {
  let x = left;
  let y = middle + 1;
  let set = [];
  let k = 0;

  for (let i = left; i <= right; i++) {
    if (x > middle) {
      set[k++] = itemSizes[y++];
      updateItem(items[y - 1], itemSizes[y - 1], "red");
    } else if (y > right) {
      set[k++] = itemSizes[x++];
      updateItem(items[x - 1], itemSizes[x - 1], "red");
    } else if (itemSizes[x] < itemSizes[y]) {
      set[k++] = itemSizes[x++];
      updateItem(items[x - 1], itemSizes[x - 1], "red");
    } else {
      set[k++] = itemSizes[y++];
      updateItem(items[y - 1], itemSizes[y - 1], "red");
    }
  }
  for (let n = 0; n < k; n++) {
    itemSizes[left++] = set[n];
    updateItem(items[left - 1], itemSizes[left - 1], "green"); //Color update
  }
}

function mergeBuffer(left, right) {
  if (left < right) {
    let middle = Math.floor((left + right) / 2);
    updateItem(items[middle], itemSizes[middle], "yellow");

    mergeBuffer(left, middle);
    mergeBuffer(middle + 1, right);
    mergeSort(left, middle, right);
  }
}
