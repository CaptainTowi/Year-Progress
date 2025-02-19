document.addEventListener('DOMContentLoaded', () => {
  const dateTodayElement = document.getElementById('date-today');
  const daysPassedElement = document.getElementById('days-passed');
  const daysLeftElement = document.getElementById('days-left');
  const progressElement = document.getElementById('progress');
  const percentageNumberElement = document.getElementById('percentage-number');

  const currentDate = new Date();
  const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
  const endOfYear = new Date(currentDate.getFullYear(), 11, 31);

  // Format the date
  const day = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
  const date = currentDate.getDate();
  const month = currentDate.toLocaleDateString('en-US', { month: 'long' });
  const formattedDate = `${day}, ${date} ${month}`;

  const daysPassed = Math.floor((currentDate - startOfYear) / (1000 * 60 * 60 * 24));
  const totalDays = Math.floor((endOfYear - startOfYear) / (1000 * 60 * 60 * 24)) + 1;
  const daysLeft = totalDays - daysPassed;
  const percentagePassed = (daysPassed / totalDays) * 100;

  // Display today's date
  dateTodayElement.textContent = formattedDate;
  daysPassedElement.textContent = `${daysPassed} Days Passed`;
  daysLeftElement.textContent = `${daysLeft} Days Left (including today)`;

  // Set the width of the progress bar
  progressElement.style.width = `${percentagePassed}%`;

  // Update the percentage number floating on the progress bar
  percentageNumberElement.textContent = `${percentagePassed.toFixed(2)}%`;
});
