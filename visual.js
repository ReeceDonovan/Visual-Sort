let speed = 1000; //Default speed

speedInput.addEventListener("input", visualSpeed);

function visualSpeed() {
  //Controlling the sort speed based off user input
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
  //Updating item attributes such as colour while sort is active
  window.setTimeout(function () {
    container.style =
      " margin:0%; width:" +
      (100 / numItems - 2 * 0.1) +
      "%; height:" +
      (height / numItems) * 100 +
      "%; background-color:" +
      color +
      ";";
  }, (delay += delay_time));
}
