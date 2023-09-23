



function addActivity() {
    const activity = document.getElementById('activity').value;
    const duration = document.getElementById('duration').value;
  
    if (activity && duration) {
      const logSummary = document.getElementById('activityLog');
      const activityItem = document.createElement('li');
      activityItem.innerText = `Activity: ${activity}, Duration: ${duration} mins`;
      logSummary.appendChild(activityItem);
  
      // Clear input fields after adding activity
      document.getElementById('activity').value = '';
      document.getElementById('duration').value = '';
    } else {
      alert('Please enter both activity and duration.');
  }
  }
  // Mock user data











// Function to show a push notification
function showNotification(message) {
    if ("Notification" in window) {
        if (Notification.permission === "granted") {
            new Notification(message);
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(function (permission) {
                if (permission === "granted") {
                    new Notification(message);
                }
            });
        }
    }
}

// Event listener for adding a user
// Function to show a push notification
function showNotification(message) {
    if ("Notification" in window) {
        if (Notification.permission === "granted") {
            new Notification(message);
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(function (permission) {
                if (permission === "granted") {
                    new Notification(message);
                }
            });
        }
    }
}

// Event listener for adding a user
document.getElementById("addUserForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Show a notification indicating the "Add User" feature is not developed yet
    showNotification("The 'Add User' feature is not developed yet.");
});

// Event listener for deleting a user
document.getElementById("deleteUser").addEventListener("click", function () {
    // Show a notification indicating the "Delete User" feature is not developed yet
    showNotification("The 'Delete User' feature is not developed yet.");
});

