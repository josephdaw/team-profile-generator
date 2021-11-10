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

    async create() {
        await this.setManager()
    }

    async addMembers() {
      const choice = await inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'Choose a team member to add:',
                    name: 'role',
                    choices: ['Engineer', 'Intern', 'No More Members'],
                },
            ])

                console.log(choice)
                if (choice.role === 'Engineer') { await this.addEngineer()}
                if (choice.role === 'Intern') { await this.addIntern()}


    }

    // get Manager
    async setManager() {
        const choices = await inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the manager's name?",
                },
                // {
                //     type: "input",
                //     name: "id",
                //     message: "What is the manager's ID number?",
                // },
                // {
                //     type: "input",
                //     name: "email",
                //     message: "What is the manager's email address?",
                // },
                // {
                //     type: "input",
                //     name: "officeNumber",
                //     message: "What is the manager's office number?",
                // },
            ])

            this.members.push(new Manager(choices.name, choices.id, choices.email, choices.officeNumber))
            // console.log(this.members)
            // console.log(this.members[0].name)
            await this.addMembers()

    }

    // how many Engineers
    async addEngineer() {
        const choices = await inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the engineer's name?",
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is the engineer's ID number?",
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the engineer's email address?",
                },
                {
                    type: "input",
                    name: "github",
                    message: "What is the engineer's GitHub username?",
                },
            ])

                const engineer = new Engineer(choices.name, choices.id, choices.email, choices.github)
                this.members.push(engineer)
                console.log(this.members)
                await this.addMembers()

    }

    // how many Interns
    // output HTML

};

module.exports = Team;