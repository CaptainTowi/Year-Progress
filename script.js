document.addEventListener('DOMContentLoaded', () => {
    const dateTodayElement = document.getElementById('date-today');
    const daysPassedElement = document.getElementById('days-passed');
    const daysLeftElement = document.getElementById('days-left');
    const progressElement = document.getElementById('progress');
    const percentageNumberElement = document.getElementById('percentage-number');

    const currentDate = new Date();
    const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
    const endOfYear = new Date(currentDate.getFullYear(), 11, 31);

    // Format date (e.g., "Tue, 18 March")
    const day = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
    const date = currentDate.getDate();
    const month = currentDate.toLocaleDateString('en-US', { month: 'long' });

    // Calculate the current day of the year
    const dayOfYear = Math.floor((currentDate - startOfYear) / (1000 * 60 * 60 * 24)) + 1;

    // "Days Passed" should be one less than "Day X"
    const daysPassed = dayOfYear - 1;

    // Fix: Ensure "Days Left" correctly includes today
    const totalDays = Math.floor((endOfYear - startOfYear) / (1000 * 60 * 60 * 24)) + 1;
    const daysLeft = totalDays - dayOfYear; // Corrected from `totalDays - daysPassed`

    const percentagePassed = (daysPassed / totalDays) * 100;

    // Update elements
    dateTodayElement.innerHTML = `${day}, ${date} ${month} <strong>Day ${dayOfYear}</strong>`;
    daysPassedElement.textContent = `${daysPassed} Days Passed`;
    daysLeftElement.textContent = `${daysLeft} Days Left (Including Today)`;

    progressElement.style.width = `${percentagePassed}%`;
    percentageNumberElement.textContent = `${percentagePassed.toFixed(2)}%`;
});
