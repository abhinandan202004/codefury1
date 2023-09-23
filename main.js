let startTime = 0;
let timerId;
let points = 0;

// Define the maximum screen time in seconds (2 hours and 30 minutes)
const maxScreenTimeSeconds = 0* 60 * 60 + 5 * 60;

document.getElementById('startTracking').addEventListener('click', function () {
    startTime = Date.now();
    timerId = setInterval(updateProgressBar, 1000);
});

document.getElementById('stopTracking').addEventListener('click', function () {
    clearInterval(timerId);
    checkPoints();
});

function updateProgressBar() {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime) / 1000; // Convert to seconds

    // Calculate the progress percentage
    const progressPercentage = (elapsedTime / maxScreenTimeSeconds) * 100;

    // Update the width of the progress bar
    document.getElementById('progressBar').style.width = `${progressPercentage}%`;

    // Check if the user has exceeded the maximum screen time
    if (elapsedTime >= maxScreenTimeSeconds) {
        // Deduct 2 points if they exceed the time
        points -= 2;
    }
}

function checkPoints() {
    if (points >= 70) {
        // If user has 70 or more points, display a link to something productive
        const productivityLink = document.createElement('a');
        productivityLink.href = 'https://example.com'; // Replace with your productive link
        productivityLink.textContent = 'Unlock Productivity Link';
        document.querySelector('.digital-wellbeing').appendChild(productivityLink);
    }
}
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
let users = [
    { id: 1, name: "User 1", email: "user1@example.com" },
    { id: 2, name: "User 2", email: "user2@example.com" },
    { id: 3, name: "User 3", email: "user3@example.com" },
];

// Function to display user list
function displayUserList() {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";

    users.forEach(user => {
        const listItem = document.createElement("li");
        listItem.textContent = user.name;
        listItem.dataset.userId = user.id;
        listItem.addEventListener("click", () => displayUserDetails(user.id));
        userList.appendChild(listItem);
    });
}

// Function to display user details
function displayUserDetails(userId) {
    const userDetails = document.getElementById("userDetails");
    userDetails.innerHTML = "";

    const user = users.find(u => u.id === userId);

    if (user) {
        const userDetailsHTML = `
            <h2>${user.name}</h2>
            <p>ID: ${user.id}</p>
            <p>Email: ${user.email}</p>
        `;

        userDetails.innerHTML = userDetailsHTML;
    }
}

// Function to add a new user
function addUser(name, email) {
    const newUser = {
        id: users.length + 1,
        name: name,
        email: email,
    };

    users.push(newUser);
    displayUserList();
}

// Function to delete a user
function deleteUser(userId) {
    users = users.filter(user => user.id !== userId);
    displayUserList();
    clearUserDetails();
}

// Function to clear user details
function clearUserDetails() {
    const userDetails = document.getElementById("userDetails");
    userDetails.innerHTML = "";
}

// Event listeners
document.getElementById("addUserForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    addUser(name, email);
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
});

document.getElementById("deleteUser").addEventListener("click", function () {
    const selectedUserId = document.querySelector(".user-list li.selected");
    if (selectedUserId) {
        const userId = parseInt(selectedUserId.dataset.userId);
        deleteUser(userId);
    }
});

// Initial display of user list
displayUserList();



