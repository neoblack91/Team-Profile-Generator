const Employee = require('./employee')

class Manager extends Employee {
    constructor(name,email,id,officeNumber){
        super(name,email,id)
        this.type = "Manager"
        this. officeNumber= officeNumber
        
    }

    getRole(){
        return 'manager'
    }
}
module.exports = Manager