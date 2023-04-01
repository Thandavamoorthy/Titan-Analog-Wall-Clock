const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

setInterval(runClock,1000);

function runClock(){
    const date = new Date();
    // setTimeout(runClock,1000);
    const getHour = date.getHours();
    const getMinute = date.getMinutes();
    const getSecond = date.getSeconds();
    const hourDeg = (getHour/12) * 360;
    const minuteDeg = (getMinute/60) * 360;
    const secondDeg = (getSecond/60) * 360;
    hour.style.transform = `rotate(${hourDeg}deg)`;
    minute.style.transform = `rotate(${minuteDeg}deg)`;
    second.style.transform = `rotate(${secondDeg}deg)`;
}

runClock()