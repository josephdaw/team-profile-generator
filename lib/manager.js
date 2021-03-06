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
    getHTML(){
        return `<div class="card" style="width: 18rem;">
        <div class="card-body ${this.role.toLowerCase()}">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">${this.role}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${this.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item">Office Number: ${this.officeNumber}</li>
        </ul>
    </div>`
    }

}

Manager.prototype.getOffice = function() {
    console.log(`Managers's office is ${this.officeNumber}.`);
    return this.officeNumber;
  };

module.exports = Manager;
