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

        if (choice.role === 'Engineer') { await this.addEngineer() }
        if (choice.role === 'Intern') { await this.addIntern() }
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

        this.members.push(new Manager(choices.name, choices.id, choices.email, choices.officeNumber))
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
                    type: "number",
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
        await this.addMembers()
    }

    // how many Interns
    async addIntern() {
        const choices = await inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the intern's name?",
                },
                {
                    type: "number",
                    name: "id",
                    message: "What is the intern's ID number?",
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the intern's email address?",
                },
                {
                    type: "input",
                    name: "school",
                    message: "What is the intern's school?",
                },
            ])

        const intern = new Intern(choices.name, choices.id, choices.email, choices.school)
        this.members.push(intern)
        await this.addMembers()
    }

    // output HTML

};

module.exports = Team;