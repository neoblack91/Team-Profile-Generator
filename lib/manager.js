const manager = require('./employee')

class Manager extends Employee {
    constructor(officeNmuber){
        this. officeNmuber= officeNmuber
        
    }

    getRole(){

        return 'manager'
    }


}