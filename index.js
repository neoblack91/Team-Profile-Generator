// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const Employee = require('./lib/employee')
const Engineer = require('./lib/engineer')
const Manager = require('./lib/manager')
const Intern = require('./lib/intern');

addMember();

// TODO: Create an array of questions for user input
// const employee=[]

function createPage() {
  addMember();
  makeHtml();
}

function addMember() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
        validate
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },

      {
        type: "input",
        name: "id",
        message: "What is your Id.",
      },
      {
        type: "list",
        message: "What is your role?",
        name: "Role",
        choices: ["Engineer", "Manager", "Intern"],
      },
    ])
    .then((answers) => {
      switch (answers.Role) {
        case "Engineer":
          {
            inquirer.prompt([
              {
                // engineer
                type: "input",
                name: "github",
                message: "What is your Github user name?",
              },
              {
                type: "list",
                name: "members",
                message: "Would you like to add more team members?",
                choices: ["yes", "no"],
              },
            ]);
            // choices.role
          }

          break;
        case "Manager":
          {
            inquirer.prompt([
              {
                type: "input",
                name: "office",
                message: "what is your office number?",
              },

              {
                type: "list",
                name: "members",
                message: "Would you like to add more team members?",
                choices: ["yes", "no"],
              },
            ]);
     
          }

          break;
        case "Intern": {
          inquirer.prompt([
            {
              // intern
              type: "input",
              name: "school",
              message: "What School you go to?",
            },

            {
              type: "list",
              name: "members",
              message: "Would you like to add more team members?",
              choices: ["yes", "no"],
            },
          ]);
          
        }
      }
    })
}
const confirmAnswerValidator = async (input) => {
  if (input !== 'y' || input !== 'n') {
     return 'Incorrect asnwer';
  }
  return true;
};

//  employee.push(addMember),
// addHtml (addMember)
// .then
// if (addMember=== "yes") {

//     addMember()
//   }    else {
//     makeHtml()
//   }

// { message: 'enter team members ${roleInfo}',
//     Name: roleInfo,}

//   }

//   function makeHtml (addMember){
//     `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
// </head>
// <body>
//     <div class="jumbotron jumbotron-fluid">
//         <div class="container">

//         </div>
//       </div>

//       <div class="card" style="width: 18rem;">

//         <div class="card-body">
//           <h5 class="card-title"></h5>
//           <p class="card-text"></p>
//         </div>
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item"></li>
//           <li class="list-group-item"></li>
//           <li class="list-group-item"></li>
//         </ul>

//       </div>
// </body>
// </html>`

//   }
//   function addHtml(member){
//     return new promise (function(resolve, reject){
//       const name = member.getName()
//       const id = member.getId()
//       const email = member.getEmail()
//       const role = member.getRole()
//       let data =""
//     })
//
