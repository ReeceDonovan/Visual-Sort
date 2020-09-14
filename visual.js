let speed = 200;
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
