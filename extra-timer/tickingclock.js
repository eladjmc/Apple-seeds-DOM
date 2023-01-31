const sec = document.querySelector(".seconds");
const min = document.querySelector(".minutes");
const hr = document.querySelector(".hr");
let secDegrees = 180;
let minDegrees = 180;
let hrDegrees = 180;
const TIME_SPEED = 1;

const secInterval = setInterval(() => {
  secDegrees += 6;
  if (secDegrees === 360) {
    secDegrees = 0;
  }
  sec.style = `transform: rotate(${secDegrees}deg)`;
}, 1000 * (1/TIME_SPEED));

const minInterval = setInterval(() => {
  minDegrees += 6;
  if (minDegrees === 360) {
    minDegrees = 0;
  }
  min.style = `transform: rotate(${minDegrees}deg)`;
}, 60000 * (1/TIME_SPEED));

const hrInterval = setInterval(() => {
  hrDegrees += 6;
  if (hrDegrees === 360) {
    hrDegrees = 0;
  }
  hr.style = `transform: rotate(${hrDegrees}deg)`;
}, 3600000 * (1/TIME_SPEED));
