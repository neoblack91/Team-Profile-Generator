const Employee = require('./employee')

class Manager extends Employee {
    constructor(name,email,id,officeNmuber){
        super(name,email,id)
        this.type = "Manager"
        this. officeNmuber= officeNmuber
        
    }

    getRole(){
        return 'manager'
    }
}
module.exports = Manager