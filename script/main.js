function getDate() {
    const now = new Date;
    const seconds = now.getSeconds();
    const secondsDeg = (seconds * 6) + 90;
    secondsHand.style.transform = `rotate(${secondsDeg}deg)`;

    const minutes = now.getMinutes();
    const minutesDeg = (minutes * 6) + 90;
    minutesHand.style.transform = `rotate(${minutesDeg}deg)`;

    const hours = now.getHours();
    const hoursDeg = ((hours / 12) * 360 ) + 90;
    hoursHand.style.transform = `rotate(${hoursDeg}deg)`;
}

const secondsHand = document.querySelector('.secondsHand');
const minutesHand = document.querySelector('.minutesHand');
const hoursHand = document.querySelector('.hoursHand');

setInterval(getDate, 1000);