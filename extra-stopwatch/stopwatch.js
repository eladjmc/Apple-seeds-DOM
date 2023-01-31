const minTens = document.querySelector(".minutes-tens");
const minSingles = document.querySelector(".minutes-singles");
const secTens = document.querySelector(".seconds-tens");
const secSingles = document.querySelector(".seconds-singles");
const miliTens = document.querySelector(".mili-sec-tens");
const milisingles = document.querySelector(".mili-sec-singles");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let min = 0;
let sec = 0;
let mili = 0;
let isActive = false;
const TIMER_SPEED = 1;
let milisecInterval;
let secInterval;


startBtn.addEventListener("click", () => {
  if (isActive) return;
  isActive = !isActive;
  start();
});

stopBtn.addEventListener("click", () => {
    if(!isActive) return;
  stop();
});

resetBtn.addEventListener("click", () => {
    if(!isActive) return;
  reset();
});


const stop = () => {
  clearInterval(milisecInterval);
  clearInterval(secInterval);
  isActive = false;
};

const reset = () => {
  isActive = false;
  stop();
  min = 0;
  sec = 0;
  mili = 0;
  miliTens.textContent=0;
  milisingles.textContent=0;
  secTens.textContent=0;
  secSingles.textContent=0;
  minTens.textContent=0;
  minSingles.textContent=0;
};
const start = () => {
  milisecInterval = setInterval(() => {
    mili += 10;
    if (mili === 1000) {
      mili = 0;
    }

    miliTens.textContent = parseInt(mili / 100);
    milisingles.textContent = parseInt(((mili % 100) + 0.001) / 10);
  }, 10 * (1 / TIMER_SPEED));

  secInterval = setInterval(() => {
    sec++;
    if (sec === 60) {
      updateMin();
      sec = 0;
    }
    secTens.textContent = parseInt(sec / 10);
    secSingles.textContent = parseInt(sec % 10);
  }, 1000 * (1 / TIMER_SPEED));

  const updateMin = () => {
    min++;
    if (min === 99 && sec === 59 && mili > 900) {
      stop();
      return;
    }
  };

  minTens.textContent = parseInt(min / 10);
  minSingles.textContent = parseInt(min % 10);
};
