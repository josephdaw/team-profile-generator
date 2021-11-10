const inquirer = require("inquirer");

// import custom modules
// const Employee = require("./lib/employee");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");

class Team {
    constructor() {
        this.members = [];
      }

    create() {
        this.setManager()
    }

    addMembers() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'Choose a team member to add:',
                    name: 'role',
                    choices: ['Engineer', 'Intern', 'No More Members'],
                },
            ])
            .then(choice => {
                console.log(choice)
                if (choice.role === 'Engineer') {this.addEngineer()}
                if (choice.role === 'Intern') {this.addIntern()}
                return
            });
    }

    // get Manager
    setManager() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the manager's name?",
                },
                {
                    type: "number",
                    name: "id",
                    message: "What is the manager's ID number?",
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the manager's email address?",
                },
                {
                    type: "number",
                    name: "officeNumber",
                    message: "What is the manager's office number?",
                },
            ])
          .then(choices => {
            this.members.push(new Manager(choices.name, choices.id, choices.email, choices.officeNumber))
            console.log(this.members)
            this.addMembers()
            })
    }

    // how many Engineers
    addEngineer() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the engineer's name?",
                },
                {
                    type: "number",
                    name: "id",
                    message: "What is the engineer's ID number?",
                },
                {
                    type: "email",
                    name: "email",
                    message: "What is the engineer's email address?",
                },
                {
                    type: "input",
                    name: "github",
                    message: "What is the engineer's GitHub username?",
                },
            ])
            .then(choices => {
                const engineer = new Engineer(choices.name, choices.id, choices.email, choices.github)
                this.members.push(engineer)
                console.log(this.members)
                this.addMembers()
                })
    }

    // how many Interns
    // output HTML

};
module.exports = Team;