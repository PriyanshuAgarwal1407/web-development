const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to avoid page reload
    const boyName = document.getElementById("boy");
    const girlName = document.getElementById("girl");

    const l1 = boyName.value.length;
    const l2 = girlName.value.length;

    const result = Math.pow(l1 + l2, 2) % 101; // Calculating love percentage based on the combined length of names
    document.getElementById("result").textContent = `Love Percentage: ${result}%`;
    form.reset(); // Reset the form fields after submission
});


