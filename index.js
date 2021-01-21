// TODO: Include packages needed for this application
// const fs = require("fs");
const inquirer = require("inquirer");
// const util = require("util") //library
// const asyncWrite = util.promisify(fs.writeFile)
// TODO: Create an array of questions for user input

function init() {
  inquirer
.prompt([
  {
    type: 'input',
    message: 'What is your name?',
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

  },
  {
    type: 'input',
    name: 'school',
    message: 'What School you go to?',
  },
  {
    type: 'input',
    name: 'office',
    message: 'what is your office number?',
  },

  {
    type: "input",
    name: "github",
    message: "What is your Github user name?",
  },  

  ]).then((answers) => {
          const filename = `team.html`;
          return asyncWrite(filename, generateREADME(answers) )}

      ) .then (()=>{ console.log("Success!")}).catch ((err)=>{console.log(err)});
   }
   
    switch (role) {
    
    case "Engineer": {
       responses.github 
    } 
    case 'manager': {
     responses.office
    }
    case 'intern': {
      responses.school
    }
    
    }