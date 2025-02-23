let visitCount = localStorage.getItem('visitCount');

// If not, initialize it to 0
if (visitCount === null) {
    visitCount = 0;
}

// Increment the visit count
visitCount++;

// Store the updated visit count back in localStorage
localStorage.setItem('visitCount', visitCount);

// Show the visit count in an alert
alert(`You have visited this site ${visitCount} times.`);