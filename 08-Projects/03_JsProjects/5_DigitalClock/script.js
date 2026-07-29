const div = document.querySelector("div");

// let time = new Date();
// div.textContent = time.toLocaleTimeString();
// This will stop at particular time and will not update the time after that. So we need to use setInterval() method to update the time every second.

setInterval(() => {
    const time = new Date();
    div.textContent = time.toLocaleTimeString();
}, 1000);
// setInterval() method will call the function every 1000 milliseconds (1 second) and update the time in the div.