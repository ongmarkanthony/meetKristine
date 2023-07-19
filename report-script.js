// Gender Chart //
document.addEventListener("DOMContentLoaded", function () {
      const apiUrl = "https://my.api.mockaroo.com/employee_list.json?key=0339a140";
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((person) => person.gender !== null);
  
        const maleCount = filteredData.filter((person) => person.gender === "Male").length;
        const femaleCount = filteredData.filter((person) => person.gender === "Female").length;
  
        const ctx = document.getElementById("genderChart").getContext("2d");
        const genderChart = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: ["Male", "Female"],
            datasets: [
              {
                data: [maleCount, femaleCount],
                backgroundColor: ["#36A2EB", "#FF6384"],
                borderColor: ["#36A2EB", "#FF6384"],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: false,
            maintainAspectRatio: true,
            legend: {
              position: "bottom",
            },
          },
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  });


  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//Populate DATA on the Table//
async function fetchDataAndPopulateEmployeeTable() {
    try {
      const response = await fetch('https://my.api.mockaroo.com/employee_list.json?key=0339a140');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const tableBody = document.querySelector('.table tbody');

      data.forEach((employee) => {
        if (Object.values(employee).every((value) => value !== null)) {
        const { id, first_name, last_name, job_title, department, gender } = employee;
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${id}</td>
          <td>${first_name}</td>
          <td>${last_name}</td>
          <td>${job_title}</td>
          <td>${department}</td>
          <td>${gender}</td>
        `;
        tableBody.appendChild(row);
        }
      });
    } catch (error) {
      console.error('Error Fetching Data', error);
    }
  }
  fetchDataAndPopulateEmployeeTable();


  //Salary Report//

  async function fetchDataAndPopulateSalaryTable() {
    try {
      const response = await fetch('https://my.api.mockaroo.com/employee_list.json?key=0339a140');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const tableBody = document.querySelector('.table tbody');

      data.forEach((employee) => {
        if (Object.values(employee).every((value) => value !== null)) {
        const { id, first_name, last_name, job_title, department, salary } = employee;
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${id}</td>
          <td>${first_name}</td>
          <td>${last_name}</td>
          <td>${job_title}</td>
          <td>${department}</td>
          <td>${salary}</td>
        `;
        tableBody.appendChild(row);
        }
      });
    } catch (error) {
      console.error('Error Fetching Data', error);
    }
  }
  fetchDataAndPopulateSalaryTable();

// Salary Report//
async function getSalaryData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Failed to retrieve data from API");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Function to create and display the graph
function plotSalaryRange(salaryData) {
    if (!salaryData) return;

    // Filter out entries with missing or invalid salary data
    const validData = salaryData.filter((entry) => {
        const minSalary = parseFloat(entry.min_salary);
        const maxSalary = parseFloat(entry.max_salary);
        return !isNaN(minSalary) && !isNaN(maxSalary);
    });

    const positions = validData.map((entry, index) => `Position ${index + 1}`);
    const minSalaries = validData.map((entry) => parseFloat(entry.min_salary));
    const maxSalaries = validData.map((entry) => parseFloat(entry.max_salary));

    const ctx = document.getElementById("salaryChart").getContext("2d");
    const salaryChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: positions,
            datasets: [
                {
                    label: "Min Salary",
                    backgroundColor: "green",
                    data: minSalaries,
                },
                {
                    label: "Max Salary",
                    backgroundColor: "blue",
                    data: maxSalaries,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
            responsive: true,
            maintainAspectRatio: false,
        },
    });
}

// Call the functions when the page loads
const apiUrl = "https://my.api.mockaroo.com/employee_list.json?key=0339a140";
getSalaryData(apiUrl)
    .then((salaryData) => plotSalaryRange(salaryData))
    .catch((error) => console.error(error));  
  