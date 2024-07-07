/*things to accomplish
1. when clicking "add employee", i am presented with a series of prompts asking for first name, last name, and salary
2. after adding an employee, asked to continue or cancel
3. if choosing to continue, add new employee
4. if choosing to cancel, display employee data on the page in alphabetical order of last name, console.log() will show aggregated data.

other notes: 
-need to use a while loop for collectEmployees
isNaN function needed for salary input
need to displayAverageSalary. template literal string
getRandomEmployee: us math.random object
*/

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data. this is a key element. think about, i need to ask the user a bunch of questions baout the employee, and i need to do it multiple times for x amount of employees. how can i do something multiple times. also have a mechanism in js where we can do something the same 
// ask the user: first name, last name, and salary. 

/*create and empty array to hold all the employee data
ask the user:
first name
last name
salary

create an object w/ info in it. add obj to array

rinse and repeat.
return final array
*/
let employeesArray = [];

// employeesArray = []
const collectEmployees = function() {
  let enterFirstName = prompt("Enter first name:");
  let enterLastName = prompt("Enter last name:");
  let enterSalary = prompt("Enter salary:");
  let employeeData = {
    firstName: enterFirstName,
    lastName: enterLastName,
    salary: enterSalary,
  }
  // TODO: Get user input to create and return an array of employee objects
  // // const firstName = "Fred"
  // // const lastName = "Flinstone"
  // const salary = "300"

  employeesArray.push(employeeData);

  const doAgain = confirm("Do you want to add another employee?")
  if(doAgain){
    return collectEmployees();
   } else {
      return employeesArray;
    }
  }

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
