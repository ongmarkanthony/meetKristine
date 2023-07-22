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


 // Gender Chart
 document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = "https://my.api.mockaroo.com/employee_list.json?key=0339a140";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const filteredData = data.results.filter((person) => person.gender !== null);

      const maleCount = filteredData.filter((person) => person.gender === "male").length;
      const femaleCount = filteredData.filter((person) => person.gender === "female").length;

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

// Function to open sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

// Function to close sidebar
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// Populate Employee Table
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
fetchDataAndPopulateEmployeeTable();


// Populate Salary Table

// Salary Report Chart
async function getSalaryData(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to retrieve data from API");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Function to create and display the salary graph
const departmentNames = ["Marketing", "Finance", "Technology", "Admin", "Sales"];
const departmentSalaries = [55000, 49000, 44000, 24000, 15000];
const barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("salaryChart", {
  type: "bar",
  data: {
    labels: departmentNames,
    datasets: [{
      backgroundColor: barColors,
      data: departmentSalaries,
    }],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Salary Details Report per Department",
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
        scaleLabel: {
          display: true,
          labelString: "Salary in PHP",
        },
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: "Department",
        },
      }],
    },
  },
});

//Salary Data per RANK//

const salaryData = {
  ranks: ['Executive', 'Manager', 'Supervisor', 'Senior', 'Junior'],
  salaries: [120000, 100000, 80000, 45000, 35000], // Replace with actual salary data for each rank
  backgroundColors: ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(75, 192, 192, 0.8)' , 'rgba(153, 102, 255, 0.8)', 'rgba(255, 159, 64, 0.8)'],
};

  // Get the canvas element
  const perRankSalaryChart = document.getElementById('perRankSalaryChart');
  // Create the chart
  const chart = new Chart(perRankSalaryChart, {
      type: 'bar',
      data: {
          labels: salaryData.ranks,
          datasets: [{
              data: salaryData.salaries,
              backgroundColor: salaryData.backgroundColors,
          }],
      },
      options: {
          responsive: true,
          legend: { display: false },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                  },
              }],
          },
      },
  });

  //Monthly Salary Data Report//

  function displayMonthlySalaryReport(data) {
    const ctx = document.getElementById("MonthlySalaryReport").getContext("2d");

    // Extracting data from the input array
    const months = data.map((item) => item.month);
    const expenses = data.map((item) => item.expenses);

    // Creating the chart
    new Chart(ctx, {
      type: "line",
      data: {
        labels: months,
        datasets: [
          {
            label: "Monthly Salary Expenses",
            data: expenses,
            backgroundColor: "rgba(75, 192, 192, 0.5)",
            borderColor: "white",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              precision: 0,
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
          title: {
            display: true,
            text: "Monthly Expenses for All Salary Report",
          },
        },
      },
    });
  }

  // Example data for testing
  const salaryExpensesData = [
    { month: "Jan", expenses: 11000},
    { month: "Feb", expenses: 15500 },
    { month: "Mar", expenses: 8100 },
    { month: "Apr", expenses: 7347 },
    { month: "May", expenses: 11000},
    { month: "June", expenses: 7500 },
    { month: "July", expenses: 8000 },
    { month: "Aug", expenses: 9565 },
    { month: "Sept", expenses: 9000 },
    { month: "Oct", expenses: 9500 },
    { month: "Nov", expenses: 10000 },
    { month: "Dec", expenses: 10500 },
    // Add more months and expenses data as needed
  ];

  // Call the function with your actual salary expenses data
  displayMonthlySalaryReport(salaryExpensesData);


  