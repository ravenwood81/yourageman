function calculateAges() {
    const targetYear = document.getElementById('targetYear').value;

    // Validate the target year
    if (!targetYear || targetYear < 1900 || targetYear > 2100) {
        alert('Please enter a valid target year.');
        return;
    }

    // Get the names and birth years for all 4 slots
    const names = [
        document.getElementById('name1').value,
        document.getElementById('name2').value,
        document.getElementById('name3').value,
        document.getElementById('name4').value
    ];
    
    const birthYears = [
        document.getElementById('year1').value,
        document.getElementById('year2').value,
        document.getElementById('year3').value,
        document.getElementById('year4').value
    ];

    let resultHtml = '';

    // Loop through the 4 slots
    for (let i = 0; i < 4; i++) {
        if (names[i] && birthYears[i]) {
            const age = targetYear - birthYears[i];

            // Check if the person will be born in the future
            if (age >= 0) {
                resultHtml += `<div class="age-display">${names[i]} will be ${age} years old in ${targetYear}.</div>`;
            } else {
                resultHtml += `<div class="age-display">${names[i]} hasn't been born yet in ${targetYear}.</div>`;
            }
        }
    }

    // Display the results
    document.getElementById('results').innerHTML = resultHtml;
}