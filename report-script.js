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

//Department Data-CHART//
document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://my.api.mockaroo.com/employee_list.json?key=0339a140";
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((person) => person.department !== null);
  
        const technologyCount = filteredData.filter((person) => person.department === "Technology").length;
        const adminCount = filteredData.filter((person) => person.department === "Admin").length;
        const salesCount = filteredData.filter((person) => person.department === "Sales").length;
        const financeCount = filteredData.filter((person) => person.department === "Finance").length;
        const humanResourceCount = filteredData.filter((person) => person.department === "Human Resources").length;
  
        const ctx = document.getElementById("departmentChart").getContext("2d");
        const genderChart = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: ["Techology", "Sales", "Human Resources", "Admin", "Finance"],
            datasets: [
              {
                data: [technologyCount, salesCount, humanResourceCount, adminCount, financeCount],
                backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0", "#9966FF"],
                borderColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0", "#9966FF"],
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
  
  //Sidebar Navigation//

  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//Populate DATA on the Table//

async function fetchDataAndPopulateTable() {
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
  fetchDataAndPopulateTable();

