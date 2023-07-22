// script.js
const apiUrl = 'https://my.api.mockaroo.com/employee_list.json?key=0339a140';

// Function to fetch data from the API
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const filteredData = data.filter((employee) => {
     for (const key in employee) {
        if (employee[key] === null) {
          return false;
        }
     }
     return true;
    });
    return filteredData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

// Function to display employee data in the table
async function displayData() {
  const employees = await fetchData();
  const employeeData = document.getElementById('employeeData');
  employeeData.innerHTML = '';

  employees.forEach((employee) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${employee.id}</td>
      <td>${employee.first_name}</td>
      <td>${employee.last_name}</td>
      <td>${employee.email}</td>
      <td>${employee.gender}</td>
      <td>${employee.job_title}</td>
      <td>${employee.department}</td>
      <td>${employee.phone}</td>
      <td>${employee.date_joined}</td>
      <td>
        <button onclick="editEmployee(${employee.id})">Edit</button>
        <button onclick="deleteEmployee(${employee.id})">Delete</button>
      </td>
    `;
    employeeData.appendChild(row);
  });
}

// Function to search for employees by name
async function search() {
  const searchInput = document.getElementById('searchInput').value;
  const employees = await fetchData();
  const filteredEmployees = employees.filter((employee) =>
    `${employee.first_name} ${employee.last_name}`.toLowerCase().includes(searchInput.toLowerCase())
  );

  const employeeData = document.getElementById('employeeData');
  employeeData.innerHTML = '';

  filteredEmployees.forEach((employee) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${employee.id}</td>
      <td>${employee.first_name}</td>
      <td>${employee.last_name}</td>
      <td>${employee.email}</td>
      <td>${employee.gender}</td>
      <td>${employee.job_title}</td>
      <td>${employee.department}</td>
      <td>${employee.phone}</td>
      <td>${employee.date_joined}</td>
      <td>
        <button onclick="editEmployee(${employee.id})">Edit</button>
        <button onclick="deleteEmployee(${employee.id})">Delete</button>
      </td>
    `;
    employeeData.appendChild(row);
  });
}

function editEmployee(id) {
}

function deleteEmployee(id) {
}
displayData();

function search() {
    const query = document.getElementById('searchInput').value;

    document.getElementById('modalContent').innerText = 'You searched for: ' + query;
    
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
  }

  function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }