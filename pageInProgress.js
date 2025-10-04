let countdown = 5;
const redirectText = document.getElementById("redirect");

const interval = setInterval(() => {
    countdown--;
    if (countdown > 0) {
        redirectText.textContent = `Returning back to the homepage in ${countdown}`;
    } else {
        clearInterval(interval);
        window.location.href = "index.html";
    }
}, 1000);