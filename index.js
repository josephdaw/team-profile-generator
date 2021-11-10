const Team = require('./lib/team');
const fs = require('fs')

const team = new Team();

const createTeam = async () => {
    await team.create();
    console.log(team.members);
};

createTeam();




// function to create the HTML file
fs.appendFile('index.html', data, (err) =>
    err ? console.error('Error: ',err) : console.log('File created')
);