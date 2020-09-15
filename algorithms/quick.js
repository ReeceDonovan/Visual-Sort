function Quick() {
  //Using helper function for future proofing of disabling UI elements while sort in progress
  delay = 0;

  quickBuffer(0, numItems - 1);
}

function quickSort(left, right) {
  let i = left + 1;
  let pinned = itemSizes[left];
  updateItem(items[left], itemSizes[left], "yellow");

  for (let j = left + 1; j <= right; j++) {
    if (itemSizes[j] < pinned) {
      updateItem(items[j], itemSizes[j], "yellow");

      updateItem(items[i], itemSizes[i], "red");
      updateItem(items[j], itemSizes[j], "red");

      let temp = itemSizes[i];
      itemSizes[i] = itemSizes[j];
      itemSizes[j] = temp;

      updateItem(items[i], itemSizes[i], "red");
      updateItem(items[j], itemSizes[j], "red");

      updateItem(items[i], itemSizes[i], "blue");
      updateItem(items[j], itemSizes[j], "blue");

      i++;
    }
  }
  updateItem(items[left], itemSizes[left], "red");
  updateItem(items[i - 1], itemSizes[i - 1], "red");

  let temp = itemSizes[left];
  itemSizes[left] = itemSizes[i - 1];
  itemSizes[i - 1] = temp;

  updateItem(items[left], itemSizes[left], "red");
  updateItem(items[i - 1], itemSizes[i - 1], "red");

  for (let t = left; t <= i; t++) {
    updateItem(items[t], itemSizes[t], "green");
  }

  return i - 1;
}

function quickBuffer(left, right) {
  if (left < right) {
    let pinned_pos = quickSort(left, right); //Set pinned pivot position
    quickBuffer(left, pinned_pos - 1);
    quickBuffer(pinned_pos + 1, right);
  }
}
