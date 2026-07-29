const quotes = [
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "In the middle of every difficulty lies opportunity.",
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going.",
    "Believe you can and you're halfway there.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Dream big and dare to fail.",
    "Your time is limited, so don't waste it living someone else's life.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "The only person you are destined to become is the person you decide to be.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Don't let yesterday take up too much of today.",
    "You are never too old to set another goal or to dream a new dream."
];

const quoteBtn = document.getElementById("quote-btn");
const quoteText = document.getElementById("quote");

quoteBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
}); 