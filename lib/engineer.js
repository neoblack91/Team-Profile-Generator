const Engineer = require('./employee')

class Engineer extends Employee {
    constructor (Github){
        this.Github = Github
}
    getGithub(){
        return this.Github

    }
    getRole(){

        return 'Engineer'
    }
}
module.exports = Engineer