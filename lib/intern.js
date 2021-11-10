const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        if (typeof school !== "string" || !school.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
          }

        this.school = school
        this.role = "Intern"
    }
}

Intern.prototype.getSchool = function() {
    console.log(`Intern's school is ${this.school}.`);
    return this.school;
  };

module.exports = Intern;