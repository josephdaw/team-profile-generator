const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)

        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
          }

        this.github = github
        this.role = "Engineer"
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
            <li class="list-group-item">GitHub: <a href="http://www.github.com/${this.github}" target="_blank">${this.github}</a></li>
        </ul>
    </div>`
    }
}

Engineer.prototype.getGithub = function() {
    console.log(`Engineer's GitHub Username is ${this.github}.`);
    return this.github;
  };

module.exports = Engineer;