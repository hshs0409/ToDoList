const clockContainer = document.querySelector(".js-clock");
const clockTimes = clockContainer.querySelectorAll(".time-number");
const clockPeriod = clockContainer.querySelector(".time-period");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  let hours = date.getHours();
  const seconds = date.getSeconds();
  clockPeriod.innerText = hours > 12 ? "PM" : "AM";
  if (hours > 12) {
    hours = hours - 12;
  }
  clockTimes.forEach(function (time, idx) {
    if (idx === 0) {
      time.innerText = `${hours < 10 ? `0${hours}` : hours}`;
    }
    if (idx === 1) {
      time.innerText = `:${minutes < 10 ? `0${minutes}` : minutes}`;
    }
    if (idx === 2) {
      time.innerText = `${seconds < 10 ? `0${seconds}` : seconds}`;
    }
  });
  //   clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
  //     minutes < 10 ? `0${minutes}` : minutes
  //   }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
