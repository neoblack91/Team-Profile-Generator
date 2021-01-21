// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const asyncWrite = (fs.writeFile)
const engineer = require('./lib/engineer')
const manager = require('./lib/manager')
const Intern = require('./lib/intern');
const { memberExpression } = require("@babel/types");
// TODO: Create an array of questions for user input
const employee=[]
const makeHtml=[]

function createPage(){
 addMember()
 makeHtml()
}

function addMember() {
  inquirer
.prompt([
  {
    type: 'input',
    message: 'What is your manager name?',
    name: 'name',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address name?',
  },
  
  {
    type: "input",
    name: "id",
    message: "What is your Id.",
    
  },
  {
    type: 'list',
    message: 'What is your role?',
    name: 'Role',
    choices: ["Engineer",'manager', 'intern']

  }]).then((answers) => {
    {let Role
    switch (Role) {
    
    case "Engineer": {
       responses.github 
    } 
    case 'manager': {
     responses.office
    }
    case 'intern': {
      responses.school
    }
    case 'intern': {
        responses.school
      }
   }
   }
  // intern
  {
    type: 'input',
    name: 'school',
    message: 'What School you go to?',
  },
  //manager
  {
    type: 'input',
    name: 'office',
    message: 'what is your office number?',
  },
// engineer
  {
    type: "input",
    name: "github",
    message: "What is your Github user name?",
  },]).then((answers) => {
    
  {
    type: "list",
    name: "members",
    message: "Would you like to add more team members?",
    choices: ["yes", "no"],
}

  
} ,then(members){
    switch (Role) {
    
        case "Engineer": {
           responses.github 
        } 
        case 'manager': {
         responses.office
        }
        case 'intern': {
          responses.school
        }
        case 'intern': {
            responses.school
          }
       }
   }
   
}   
// const filename = `team.html`;
    //       return asyncWrite(filename, generateHTML(answers) )}

    //   ) .then (()=>{ console.log("Success!")}).catch ((err)=>{console.log(err)});