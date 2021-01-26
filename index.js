// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require('./lib/employee')
const Engineer = require('./lib/engineer')
const Manager = require('./lib/manager')
const Intern = require('./lib/intern');

addMember();
const employee = []
// TODO: Create an array of questions for user input
// const employee=[]

function createPage() {
  addMember();
  makeHtml();
}

function createManager() {
  inquirer
    .prompt([
      
      {
        type: "input",
        message: "What is your manager name?",
        name: "managername",
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
        name: "office",
        message: "what is your office number?",
      },

    
    ]).then((response) => {
              // 
            const manager = new Manager(
              response.managername,
              response.id,
              response.email,
              response.number
            );
            employees.push(manager);
            addMembers();
          });
  }

          function addMembers(){
            inquirer
            .prompt([
          {
          type: "list",
          name: "moremembers",
          message: "Which team member you like to add ?",
          choices: ["Engineer", "Intern" ,"I dont want to add more members"],
          },

        ]).then((response) => {
          switch (response.choices) {

          case "Engineer": 
          {
            inquirer.prompt([
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
                name: "github",
                message: "What is your Github user name?",
              },
                         
            ]).then((response) => {
              // 
            const engineer = new Engineer(
              response.name,
              response.id,
              response.email,
              response.github
            );
            employees.push(engineer);
            addMembers();
            });
            }
          break;
          case "Intern":
          {
            inquirer.prompt([
              // intern
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
                name: "school",
                message: "What School you go to?",
              },
  
            ]).then((response) => {
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
          default :
          function makeHtml()
        }
      })
    }
 

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

//
// const confirmAnswerValidator = async (input) => {
//   if (input !== 'y' || input !== 'n') {
//      return 'Incorrect asnwer';
//   }
//   return true;
// };
