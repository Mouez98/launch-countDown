const domDays = document.getElementById("days");
const domHours = document.getElementById("hours");
const domMinutes = document.getElementById("minutes");
const domSeconds = document.getElementById("seconds");

//Count down
const setCountDown = new Date().getTime() + 2160000000;

function animation(time, domElement, timeType) {
  domElement.textContent = `${
    time < 10 && time >= 0 ? `0${time}` : time < 0 ? "00" : time
  }`;
}

const counter = setInterval(() => {
  //Current time
  const curTime = new Date().getTime();

  //Getting time differnce bteween current time and count down
  const timeDiff = setCountDown - curTime;

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  //Change the DOM
  animation(days, domDays);
  animation(hours, domHours);
  animation(minutes, domMinutes);
  animation(seconds, domSeconds, 'seconds');
  if (timeDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
