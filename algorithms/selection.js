function Selection() {
  delay = 0;

  for (let i = 0; i < numItems - 1; i++) {
    updateItem(items[i], itemSizes[i], "red");

    min = i;

    for (let j = i + 1; j < numItems; j++) {
      updateItem(items[j], itemSizes[j], "yellow");

      if (itemSizes[j] < itemSizes[min]) {
        if (min != i) {
          updateItem(items[min], itemSizes[min], "blue");
        }
        min = j;
        updateItem(items[min], itemSizes[min], "red");
      } else {
        updateItem(items[j], itemSizes[j], "blue");
      }
    }

    if (min != i) {
      let temp = itemSizes[min];
      itemSizes[min] = itemSizes[i];
      itemSizes[i] = temp;

      updateItem(items[min], itemSizes[min], "red");
      updateItem(items[i], itemSizes[i], "red");
      updateItem(items[min], itemSizes[min], "blue");
    }
    updateItem(items[i], itemSizes[i], "green");
  }
  updateItem(items[i - 1], itemSizes[i - 1], "green");
  showButtons();
}
