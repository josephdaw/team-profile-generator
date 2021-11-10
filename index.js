const Team = require('./lib/team');
const fs = require('fs')

const team = new Team();

const createTeam = async () => {
    await team.create();
    let html = ""
    team.members.forEach(member => {
        html += member.getHTML();
    });
    console.log(html);
    // function to create the HTML file
    // fs.appendFile('index.html', data, (err) =>
    //     err ? console.error('Error: ',err) : console.log('File created')
};

createTeam();
