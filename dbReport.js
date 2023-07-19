 // Gender Chart
 document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://randomuser.me/api/?results=100";

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
      const response = await fetch('https://randomuser.me/api/?results=100');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const tableBody = document.querySelector('.table tbody');

      data.results.forEach((employee) => {
        if (Object.values(employee).every((value) => value !== null)) {
          const { id, name, location, email, login, dob, registered, phone, cell } = employee;
          const { first, last } = name;
          const { title, city, state, country } = location;
          const { uuid, username, password, salt, md5, sha1, sha256 } = login;
          const { date, age } = dob;
          const { date: regDate, age: regAge } = registered;

          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${id}</td>
            <td>${first} ${last}</td>
            <td>${title}</td>
            <td>${city}, ${state}, ${country}</td>
            <td>${email}</td>
            <td>${username}</td>
            <td>${date}</td>
            <td>${phone}</td>
            <td>${cell}</td>
          `;
          tableBody.appendChild(row);
        }
      });
    } catch (error) {
      console.error('Error Fetching Data', error);
    }
  }

  fetchDataAndPopulateEmployeeTable(25);

  // Populate Salary Table
  async function fetchDataAndPopulateSalaryTable() {
    try {
      const response = await fetch('https://randomuser.me/api/?results=100');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const tableBody = document.querySelector('.table tbody');

      data.results.forEach((employee) => {
        if (Object.values(employee).every((value) => value !== null)) {
          const { id, name, location, email, login, dob, registered, phone, cell } = employee;
          const { first, last } = name;
          const { title, city, state, country } = location;
          const { uuid, username, password, salt, md5, sha1, sha256 } = login;
          const { date, age } = dob;
          const { date: regDate, age: regAge } = registered;

          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${id}</td>
            <td>${first} ${last}</td>
            <td>${title}</td>
            <td>${city}, ${state}, ${country}</td>
            <td>${email}</td>
            <td>${username}</td>
            <td>${date}</td>
            <td>${phone}</td>
            <td>${cell}</td>
          `;
          tableBody.appendChild(row);
        }
      });
    } catch (error) {
      console.error('Error Fetching Data', error);
    }
  }

  fetchDataAndPopulateSalaryTable(25);

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
        responsive: false,
        maintainAspectRatio: false,
      },
    });
  }

  // Call the functions when the page loads
  const apiUrl = "https://randomuser.me/api/?results=100";
  getSalaryData(apiUrl)
    .then((salaryData) => plotSalaryRange(salaryData))
    .catch((error) => console.error(error));
