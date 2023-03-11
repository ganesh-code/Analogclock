setInterval(() => {
    t = new Date;
    hourtime = t.getHours();
    minutestime = t.getMinutes();
    secondstime = t.getSeconds();
    hourrotation = 30*hourtime + minutestime/2;
    minuterotation = 6*minutestime;
    secondrotation = 6*secondstime;

    hours.style.transform = `rotate(${hourrotation}deg)`;
    minutes.style.transform = `rotate(${minuterotation}deg)`;
    seconds.style.transform = `rotate(${secondrotation}deg)`;
}, 1000);