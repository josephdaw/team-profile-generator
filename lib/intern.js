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
    getHTML() {
        return `<div class="card" style="width: 18rem;">
        <div class="card-body ${this.role}">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">${this.role}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${this.id}</li>
            <li class="list-group-item">Email: ${this.email}</li>
            <li class="list-group-item">School: ${this.school}</li>
        </ul>
    </div>`
    }
}

Intern.prototype.getSchool = function () {
    console.log(`Intern's school is ${this.school}.`);
    return this.school;
};

module.exports = Intern;