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



//Close Page//

const closePage = () => {
  window.location.href = 'login.html'; 
};

const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', closePage);



//Register Button Modal//
const registerButton = document.getElementById("registerButton");
const modal = document.getElementById("regModal");
const regCloseButton = document.getElementsByClassName("close")[0];

registerButton.addEventListener("click", function() {
  modal.style.display = "block";
});

closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

