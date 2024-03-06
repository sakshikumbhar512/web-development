let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

function start() {
    if (!isRunning) {
        timer = setInterval(updateDisplay, 1000);
        isRunning = true;
        startBtn.disabled = true;
    }
}

function stop() {
    clearInterval(timer);
    isRunning = false;
    startBtn.disabled = false;
}

function reset() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    isRunning = false;
    startBtn.disabled = false;
}

function updateDisplay() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    const displayString = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    document.getElementById("display").textContent = displayString;
}

function pad(number) {
    return (number < 10 ? '0' : '') + number;
}
