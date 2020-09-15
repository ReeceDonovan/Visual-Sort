let speed = 1000;

speedInput.addEventListener("input", visualSpeed);

function visualSpeed() {
  let boardSpeed = speedInput.value;
  switch (parseInt(boardSpeed)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }

  delay_time = 10000 / (Math.floor(numItems / 10) * speed);
}
let delay_time = 10000 / (Math.floor(numItems / 10) * speed);
let delay = 0;

function updateItem(container, height, color) {
  window.setTimeout(function () {
    container.style =
      " margin:0% " +
      0.1 +
      "%; width:" +
      (100 / numItems - 2 * 0.1) +
      "%; height:" +
      height +
      "%; background-color:" +
      color +
      ";";
  }, (delay += delay_time));
}
