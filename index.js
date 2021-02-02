// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const employees = [];
// TODO: Create an array of questions for user input

// function createPage() {
//
//   makeHtml();
// }

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managername",
        message: "What is your manager name?",
        // validate
      },

      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },

      {
        type: "input",
        name: "id",
        message: "What is your Id number?",
      },

      {
        //manager
        type: "input",
        name: "officeNumber",
        message: "what is your office number?",
      },
    ])
    .then((response) => {
      //
      const manager = new Manager(
        response.managername,
        response.id,
        response.email,
        response.officeNumber
      );
      employees.push(manager);
      addMembers();
    });

  function addMembers() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "moremembers",
          message: "Which team member you like to add ?",
          choices: ["Engineer", "Intern", "I dont want to add more members"],
        },
      ])
      .then((response) => {
        switch (response.moremembers) {
          case "Engineer":
            {
              inquirer
                .prompt([
                  // engineer
                  {
                    type: "input",
                    message: "What is your name?",
                    name: "name",
                    // validate
                  },

                  {
                    type: "input",
                    name: "email",
                    message: "What is your email address?",
                  },

                  {
                    type: "input",
                    name: "id",
                    message: "What is your Id?",
                  },

                  {
                    type: "input",
                    name: "Github",
                    message: "What is your Github user name?",
                  },
                ])
                .then((response) => {
                  //
                  const engineer = new Engineer(
                    response.name,
                    response.id,
                    response.email,
                    response.Github
                  );
                  employees.push(engineer);
                  addMembers();
                });
            }
            break;
          case "Intern":
            {
              inquirer
                .prompt([
                  // intern
                  {
                    type: "input",
                    name: "name",
                    message: "What is your name?",
                    // validate
                  },

                  {
                    type: "input",
                    name: "email",
                    message: "What is your email address?",
                  },

                  {
                    type: "input",
                    name: "id",
                    message: "What is your Id?",
                  },
                  {
                    type: "input",
                    name: "school",
                    message: "What School you go to?",
                  },
                ])
                .then((response) => {
                  //
                  const intern = new Intern(
                    response.name,
                    response.id,
                    response.email,
                    response.school
                  );
                  employees.push(intern);
                  addMembers();
                });
            }
            break;
          case "I dont want to add more members":
            writeHtml();
        }
      });
  }
}

const makeHtml = () => {
  let employeecard = "";
  employees.forEach((employee) => {
    if (employee.type === "Intern") {
      employeecard += `<div class="card" style="width: 18rem;">

   <div class="card-body">
  <h5 class="card-title">${employee.type}<i class="fas fa-pen"></i></li></h5>
  <p class="card-text"></p>
  </div>
   <ul class="list-group list-group-flush">
    <li class="list-group-item">${employee.name}</li>
    <li class="list-group-item">${employee.id}</li>
    <li class="list-group-item">${employee.email}</li>
    <li class="list-group-item">${employee.school}</li>
    </ul>

  </div>`;
    } else if (employee.type === "Engineer") {
      employeecard += `

  <div class="card-body">
  <h5 class="card-title">${employee.type}<i class="fas fa-laptop"></i></li></h5>
  <p class="card-text"></p>
  </div>
  <ul class="list-group list-group-flush">
   <li class="list-group-item">${employee.name}</li>
   <li class="list-group-item">${employee.id}</li>
   <li class="list-group-item">${employee.email}</li>
   <li class="list-group-item">${employee.Github}</li>
   </ul>

 </div>`;
    } else if (employee.type === "Manager") {
      employeecard += `
      
      <div class="card-body">
      <h5 class="card-title">${employee.type}<i class="fas fa-coffee"></i></li></h5>
      <p class="card-text"></p>
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">${employee.name}</li>
      <li class="list-group-item">${employee.id}</li>
      <li class="list-group-item">${employee.email}</li>
      <li class="list-group-item">${employee.officeNumber}</li>
      </ul>

      </div>`;
    }
  });

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />
  
      <style>
        h1 {
          color: maroon;
          margin-left: 40px;
        }
        card {
          background-color: rebeccapurple;
  
        }
      </style>
    </head>
    <body>
      <div class="jumbotron text-center">
        <div class="container">
          <h1 class="display-4">Team Profile</h1>
        </div>
      </div>
        
      <div class="container-fluid">
      <div class =row >
    <div class="card-columns">
     
      <div class="card">
        
        ${employeecard}
      </div>
    </div>

  </div>
  </div>
      
    </body>
  </html>
  `;
};

function writeHtml() {
  fs.writeFile("./dist/to.html", makeHtml(), (error) => {
    /* handle error */
    if (error) {
      console.log("err: ", error);
    }
    console.log("file write");
  });
}

createManager();
