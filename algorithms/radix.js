function Radix() {
  delay = 0;
  let input = itemSizes;
  let n = input.length;
  radixSort(input, n);
  showButtons();
}

function radixGetMax(arr, n) {
  let mx = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] > mx) {
      mx = arr[i];
    }
  }
  return mx;
}

function radixCountSort(arr, n, exponenet) {
  let output = new Array(n);
  let count = Array(10).fill(0);
  console.log(count);

  for (let i = 0; i < n; i++) {
    updateItem(items[i], arr[i], "yellow");
    count[Math.floor(Math.abs(arr[i]) / exponenet) % 10]++;
    updateItem(items[i], arr[i], "blue");
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
    console.log(count);
  }

  for (let i = n - 1; i >= 0; i--) {
    updateItem(
      items[count[Math.floor(Math.abs(arr[i]) / exponenet) % 10] - 1],
      arr[i],
      "red"
    );

    output[count[Math.floor(Math.abs(arr[i]) / exponenet) % 10] - 1] = arr[i];
    updateItem(
      items[count[Math.floor(Math.abs(arr[i]) / exponenet) % 10] - 1],
      arr[count[Math.floor(Math.abs(arr[i]) / exponenet) % 10] - 1],
      "yellow"
    );
    count[Math.floor(Math.abs(arr[i]) / exponenet) % 10]--;
  }

  for (i = 0; i < n; i++) {
    updateItem(items[i], arr[i], "red");
    arr[i] = output[i];
    updateItem(items[i], arr[i], "blue");
  }
}

function radixSort(arr, n) {
  let m = radixGetMax(arr, n);
  for (let exp = 1; m / exp >= 1; exp *= 10) {
    radixCountSort(arr, n, exp);
  }
  for (i = 0; i < n; i++) {
    updateItem(items[i], arr[i], "green");
  }
}
