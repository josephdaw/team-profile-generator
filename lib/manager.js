const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)

        if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber < 0) {
            throw new Error("Expected parameter 'officeNumber' to be a non-negative number");
          }

        this.officeNumber = officeNumber
        this.role = "Manager"
    }
}

Manager.prototype.getOfficeNumber = function() {
    console.log(`Managers's office is ${this.officeNumber}.`);
    return this.officeNumber;
  };

module.exports = Manager;
