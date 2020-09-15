function Bubble() {
  delay = 0;
  let j;
  for (let i = 0; i < numItems - 1; i++) {
    for (j = 0; j < numItems - i - 1; j++) {
      updateItem(items[j], itemSizes[j], "yellow");

      if (itemSizes[j] > itemSizes[j + 1]) {
        updateItem(items[j], itemSizes[j], "red");
        updateItem(items[j + 1], itemSizes[j + 1], "red");

        let temp = itemSizes[j];
        itemSizes[j] = itemSizes[j + 1];
        itemSizes[j + 1] = temp;

        updateItem(items[j], itemSizes[j], "red");
        updateItem(items[j + 1], itemSizes[j + 1], "red");
      }
      updateItem(items[j], itemSizes[j], "blue");
    }
    updateItem(items[j], itemSizes[j], "green");
  }
  updateItem(items[0], itemSizes[0], "green");
}
