let countdown;
const timerDisplay = document.getElementById('timer');
const minutesInput = document.getElementById('minutes');

function startCountdown() {
    if (!countdown && minutesInput.value > 0) {
        const minutes = parseInt(minutesInput.value);
        const endTime = new Date(Date.now() + minutes * 60000); // Convert minutes to milliseconds
        displayTimeLeft(minutes * 60);

        countdown = setInterval(() => {
            const secondsLeft = Math.round((endTime - Date.now()) / 1000);
            if (secondsLeft < 0) {
                clearInterval(countdown);
                timerDisplay.textContent = 'Time is up!';
                countdown = null;
                return;
            }
            displayTimeLeft(secondsLeft);
        }, 1000);
    }
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
}

function resetCountdown() {
    clearInterval(countdown);
    minutesInput.value = '';
    timerDisplay.textContent = '';
    countdown = null;
}

