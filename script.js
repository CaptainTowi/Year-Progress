document.addEventListener('DOMContentLoaded', () => {
    const dateTodayElement = document.getElementById('date-today');
    const daysPassedElement = document.getElementById('days-passed');
    const daysLeftElement = document.getElementById('days-left');
    const progressElement = document.getElementById('progress');

    // Create a new element for the percentage
    const percentageDisplay = document.createElement('p');
    percentageDisplay.classList.add('percentage-center');
    document.body.appendChild(percentageDisplay);

    const currentDate = new Date();
    const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
    const endOfYear = new Date(currentDate.getFullYear(), 11, 31);

    // Correctly format the date to "Wed, 9 October"
    const day = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
    const date = currentDate.getDate();
    const month = currentDate.toLocaleDateString('en-US', { month: 'long' });
    const formattedDate = `${day}, ${date} ${month}`;

    const daysPassed = Math.floor((currentDate - startOfYear) / (1000 * 60 * 60 * 24));
    const totalDays = Math.floor((endOfYear - startOfYear) / (1000 * 60 * 60 * 24)) + 1;
    const daysLeft = totalDays - daysPassed;
    const percentagePassed = (daysPassed / totalDays) * 100;

    // Display today's date without "Today is"
    dateTodayElement.textContent = formattedDate;
    daysPassedElement.textContent = `${daysPassed} Days Passed `;
    daysLeftElement.textContent = `${daysLeft} Days Left (including today) `;
    progressElement.style.width = `${percentagePassed}%`;

    // Update the new central percentage element
    percentageDisplay.textContent = `${percentagePassed.toFixed(2)}%`;

    // Remove percentage text from the progress bar
    progressElement.textContent = '';
});
