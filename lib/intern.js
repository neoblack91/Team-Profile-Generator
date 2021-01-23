const Intern = require('./employee')

class Intern extends Employee {
constructor(school){
    this. school = school
}
    getSchool(){
        return school
    }
    getRole(){

        return 'intern'
    }
}
module.exports = Intern
