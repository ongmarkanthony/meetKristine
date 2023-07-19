//Login Function default username and password: admin/admin//



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

//function to login admin and users//

function login() {
  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;

  if (usernameInput === 'admin' && passwordInput === 'admin') {
    window.location.href = 'index.html';
  } else if (usernameInput === 'user' && passwordInput === 'user') {
    window.location.href = 'userpage.html';
  } else {
    alert('Incorrect username or password');
  }
}