document.addEventListener('DOMContentLoaded', () => {
    const daysPassedElement = document.getElementById('days-passed');
    const daysLeftElement = document.getElementById('days-left');
    const progressElement = document.getElementById('progress');

    const currentDate = new Date();
    const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
    const endOfYear = new Date(currentDate.getFullYear(), 11, 31);

    const daysPassed = Math.floor((currentDate - startOfYear) / (1000 * 60 * 60 * 24));
    const totalDays = Math.floor((endOfYear - startOfYear) / (1000 * 60 * 60 * 24)) + 1;
    const daysLeft = totalDays - daysPassed;
    const percentagePassed = (daysPassed / totalDays) * 100;

    daysPassedElement.textContent = `Days Passed: ${daysPassed}`;
    daysLeftElement.textContent = `Days Left (including today) : ${daysLeft}`;
    progressElement.style.width = `${percentagePassed}%`;
    progressElement.textContent = `${percentagePassed.toFixed(2)}%`; // Display percentage inside the progress bar
});
