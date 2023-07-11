
// Function to handle login
const login = () => {
    // Get the values entered by the user
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Make an API request to verify the login credentials
    // Replace 'api/login' with the actual endpoint of your login API
    fetch(' https://my.api.mockaroo.com/mk_users.json?key=0339a140', {
      method: 'POST',
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.ok) {
          // Successful login
          alert('Login successful!');
          // You can perform further actions here, such as redirecting to a dashboard page
        } else {
          // Failed login
          alert('Login failed. Please check your credentials.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  










function fetchUserData() {
    fetch('https://my.api.mockaroo.com/mk_users.json?key=0339a140')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.querySelector('#userContainer').innerHTML = `
            <img src="${data.results[0].picture.large}">
            <h4 class="fullName">${data.results[0].fullName} </h4>
            <h4 class="jobTitle">${data.results[0].job.title}</h4>
            <h4 class="email">${data.results[0].email}</h4>
            `;})
        }
        window.addEventListener('DOMContentLoaded', fetchUserData);