document.addEventListener('DOMContentLoaded', () => {
    const dateTodayElement = document.getElementById('date-today');
    const daysPassedElement = document.getElementById('days-passed');
    const daysLeftElement = document.getElementById('days-left');
    const progressElement = document.getElementById('progress');
    const percentageNumberElement = document.getElementById('percentage-number');

    const currentDate = new Date();
    const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
    const endOfYear = new Date(currentDate.getFullYear(), 11, 31);

    // Format date (e.g., "Tue, 18 February")
    const day = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
    const date = currentDate.getDate();
    const month = currentDate.toLocaleDateString('en-US', { month: 'long' });

    // Calculate day number of the year (e.g., "Day 73")
    const dayOfYear = Math.floor((currentDate - startOfYear) / (1000 * 60 * 60 * 24)) + 1;

    // Calculate days passed and days left
    const totalDays = Math.floor((endOfYear - startOfYear) / (1000 * 60 * 60 * 24)) + 1;
    const daysPassed = dayOfYear;  // Days passed is the same as the day number
    const daysLeft = totalDays - daysPassed; // Excluding today

    const percentagePassed = (daysPassed / totalDays) * 100;

    // Update elements
    dateTodayElement.innerHTML = `${day}, ${date} ${month} <strong>Day ${dayOfYear}</strong>`;
    daysPassedElement.textContent = `${daysPassed} Days Passed`;
    daysLeftElement.textContent = `${daysLeft} Days Left`;

    progressElement.style.width = `${percentagePassed}%`;
    percentageNumberElement.textContent = `${percentagePassed.toFixed(2)}%`;
});
