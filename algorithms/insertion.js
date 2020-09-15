function Insertion() {
  delay = 0;

  for (let j = 0; j < numItems; j++) {
    updateItem(items[j], itemSizes[j], "yellow");

    let currentKey = itemSizes[j];
    let i = j - 1;
    while (i >= 0 && itemSizes[i] > currentKey) {
      updateItem(items[i], itemSizes[i], "red");
      updateItem(items[i + 1], itemSizes[i + 1], "red");

      itemSizes[i + 1] = itemSizes[i];

      updateItem(items[i], itemSizes[i], "red");
      updateItem(items[i + 1], itemSizes[i + 1], "red");

      updateItem(items[i], itemSizes[i], "blue");
      if (i == j - 1) {
        updateItem(items[i + 1], itemSizes[i + 1], "yellow");
      } else {
        updateItem(items[i + 1], itemSizes[i + 1], "blue");
      }
      i--;
    }
    itemSizes[i + 1] = currentKey;

    for (let n = 0; n < j; n++) {
      updateItem(items[n], itemSizes[n], "green");
    }
  }
  updateItem(items[numItems - 1], itemSizes[numItems - 1], "green");
}
