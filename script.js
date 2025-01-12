document.addEventListener('DOMContentLoaded', () => {
    const dateTodayElement = document.getElementById('date-today');
    const daysPassedElement = document.getElementById('days-passed');
    const daysLeftElement = document.getElementById('days-left');
    const progressElement = document.getElementById('progress');

    const currentDate = new Date();
    const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
    const endOfYear = new Date(currentDate.getFullYear(), 11, 31);

    const day = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
    const date = currentDate.getDate();
    const month = currentDate.toLocaleDateString('en-US', { month: 'long' });
    const formattedDate = `${day}, ${date} ${month}`;

    const daysPassed = Math.floor((currentDate - startOfYear) / (1000 * 60 * 60 * 24));
    const totalDays = Math.floor((endOfYear - startOfYear) / (1000 * 60 * 60 * 24)) + 1;
    const daysLeft = totalDays - daysPassed;
    const percentagePassed = (daysPassed / totalDays) * 100;

    dateTodayElement.textContent = formattedDate;

    daysPassedElement.textContent = `${daysPassed} Days Passed `;
    daysLeftElement.textContent = `${daysLeft} Days Left (including today) `;
    progressElement.style.width = `${percentagePassed}%`;
    progressElement.textContent = `${percentagePassed.toFixed(2)}%`;
    progressElement.style.display = 'flex';
    progressElement.style.alignItems = 'center';
    progressElement.style.justifyContent = 'center';
});
