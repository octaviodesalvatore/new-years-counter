const daysEl = document.getElementById("days-left");
const hoursEl = document.getElementById("hours-left");
const minsEl = document.getElementById("mins-left");
const secondsEl = document.getElementById("seconds-left");

const newYears = "1 Jan 2022"

function countdown(){
   const newYearsDate = new Date(newYears);
    const currentDate = new Date(); 

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
     
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;


    // console.log(days,hours,mins,seconds);
}

countdown();
setInterval(countdown,1000);