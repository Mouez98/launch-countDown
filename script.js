//Count down 
const setCountDown = new Date("1 may, 2022, 23:59:59").getTime()


const counter = setInterval(() => {
  //Current time
  const curTime = new Date().getTime();

  //Getting time differnce btezeen current time and count down
  const timeDiff = setCountDown - curTime;
  

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  //Change the DOM
  document.getElementById("days").textContent = `${(days < 10 && days >= 0) ? `0 ${days}`: days < 0 ? '00' : days }`;
  document.getElementById("hours").textContent = `${hours < 10 && hours >= 0 ? `0 ${hours}`: hours < 0 ? '00' : hours }`;
  document.getElementById("minutes").textContent = `${minutes < 10 && minutes >= 0 ? `0 ${minutes}`: minutes < 0 ? '00' : minutes }`;
  document.getElementById("seconds").textContent =`${seconds < 10 && seconds >= 0 ? `0 ${seconds}`: seconds < 0 ? '00' : seconds }`;
  if(timeDiff < 0) {
      clearInterval(counter)
  }
}, 1000);
