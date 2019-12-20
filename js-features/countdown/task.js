
const timer = function() {
	const status = document.getElementById("timer");
	status.textContent--;

	if (status.textContent <= 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(timerEnd);
    }
}

const timerEnd = setInterval(timer, 1000);

