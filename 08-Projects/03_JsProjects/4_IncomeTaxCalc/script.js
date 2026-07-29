const form = document.querySelector("#taxForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const income = document.querySelector("#income");
    const result = document.querySelector("#result");

    const amount = parseInt(income.value);

    let totalTax = 0;

    if (amount <= 1200000) {
        totalTax = 0;
    } else if (amount <= 2400000) {
        totalTax = (amount - 1200000) * 0.10;
    } else if (amount <= 3600000) {
        totalTax = ((amount - 2400000) * 0.15) + 120000;
    } else {
        result.textContent = "Tax calculation for this income is not available.";
        return;
    }

    result.textContent = `Total Tax: ₹${totalTax.toFixed(2)}`;

    form.reset();
});