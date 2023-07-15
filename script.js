//Login Function default username and password: admin/admin//
function validateCredentials(event) {
  event.preventDefault(); 

  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username !== 'admin' || password !== 'admin') {
    alert('Incorrect username or password');
  } else {
    alert('Login successful'); 
  }
}

const form = document.querySelector('form');
form.addEventListener('submit', validateCredentials);

function handleNext() {
  const activeTab = document.querySelector('.nav-link.active');

  const nextTabHref = activeTab.getAttribute('href');

  activeTab.classList.remove('active');

  const activeTabPane = document.querySelector('.tab-pane.active');
  activeTabPane.classList.remove('show', 'active');

  const nextTab = document.querySelector(`a[href="${nextTabHref}"]`);
  nextTab.classList.add('active');

  const nextTabPane = document.querySelector(nextTabHref);
  nextTabPane.classList.add('show', 'active');
  }

  const nextButton = document.querySelector('.btn-success');
  nextButton.addEventListener('click', handleNext);

function fetchUserData() {
    fetch('https://my.api.mockaroo.com/mk_users.json?key=0339a140')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.querySelector('#userContainer').innerHTML = `
            <h4 class="fullName">${data.results[0].fullName} </h4>
            <h4 class="jobTitle">${data.results[0].job.title}</h4>
            <h4 class="email">${data.results[0].email}</h4>
            `;})
        }
        window.addEventListener('DOMContentLoaded', fetchUserData);

//Close Page//

const closePage = () => {
  window.location.href = 'login.html'; 
};

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', closePage);

// script.js

// Function to fetch images from the API//
async function fetchImages() {
  try {
    const response = await fetch('https://dummyapi.io/data/v1/user?limit=10');
    const images = await response.json();

    const imagesContainer = document.getElementById('images-container');

    // Clear existing content
    imagesContainer.innerHTML = '';

    // Create image elements and append them to the container
    images.forEach((image) => {
      const imgElement = document.createElement('img');
      imgElement.src = image.url;
      imgElement.alt = image.description;
      imgElement.classList.add('image');
      imagesContainer.appendChild(imgElement);
    });
  } catch (error) {
    console.error('Error fetching images:', error);
  }
}

// Call the fetchImages function to load the images on page load
fetchImages();
