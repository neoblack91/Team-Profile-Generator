const engineer = require('./employee')

class Engineer extends Employee {
    constructor (github){
        this.Github = Github
}
    getGithub(){

    }
    getRole(){

        return 'Engineer'
    }
}